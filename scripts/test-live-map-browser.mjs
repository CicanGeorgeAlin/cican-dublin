import assert from "node:assert/strict";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const records = JSON.parse(fs.readFileSync(path.join(root, "data/objects.json"), "utf8"));
const destination = records.find(record =>
  record.latitude !== null && record.latitude !== "" &&
  record.longitude !== null && record.longitude !== "" &&
  Number.isFinite(Number(record.latitude)) && Number.isFinite(Number(record.longitude)) &&
  Math.abs(Number(record.latitude)) <= 90 && Math.abs(Number(record.longitude)) <= 180
);
assert.ok(destination, "A mapped archive destination is required");

const mime = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml" };
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, "http://127.0.0.1").pathname);
  const file = path.resolve(root, "." + pathname);
  if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403).end(); return; }
  fs.readFile(file, (error, bytes) => {
    if (error) { res.writeHead(404).end("Not found"); return; }
    res.writeHead(200, { "content-type": mime[path.extname(file)] || "application/octet-stream", "cache-control": "no-store" });
    res.end(bytes);
  });
});
await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
const base = "http://127.0.0.1:" + server.address().port;
const browser = await chromium.launch({ headless: true, args: ["--use-gl=angle", "--use-angle=swiftshader"] });
const results = [];
const record = (name, ok, detail = "") => results.push({ name, result: ok ? "PASS" : "FAIL", detail });
const attachMapLibrary = async page => {
  await page.route("https://unpkg.com/maplibre-gl@5.12.0/dist/maplibre-gl.js", route =>
    route.fulfill({ path: path.join(root, "node_modules/maplibre-gl/dist/maplibre-gl.js"), contentType: "text/javascript" }));
  await page.route("https://unpkg.com/maplibre-gl@5.12.0/dist/maplibre-gl.css", route =>
    route.fulfill({ path: path.join(root, "node_modules/maplibre-gl/dist/maplibre-gl.css"), contentType: "text/css" }));
};
try {
  // Live-style browser pass: no interception of OpenFreeMap style or tile requests.
  const live = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const liveErrors = [];
  live.on("pageerror", error => liveErrors.push(error.message));
  await attachMapLibrary(live);
  const started = Date.now();
  await live.goto(base + "/preview/canonical-map-prototype.html?cican-test=1", { waitUntil: "domcontentloaded" });
  await live.waitForFunction(() => window.__CICAN_TEST_STATE__?.mapReady && window.__CICAN_TEST_STATE__?.records.length === 629, null, { timeout: 45000 });
  await live.waitForFunction(() => window.__CICAN_TEST_STATE__?.map?.isStyleLoaded?.() === true, null, { timeout: 60000 });
  await live.waitForFunction(() => window.__CICAN_TEST_STATE__?.map?.getSource("archive-points") && window.__CICAN_TEST_STATE__?.map?.getLayer("archive-clusters"), null, { timeout: 30000 });
  await live.waitForTimeout(1800);
  const liveState = await live.evaluate(() => ({
    styleLoaded: window.__CICAN_TEST_STATE__.map.isStyleLoaded(),
    source: !!window.__CICAN_TEST_STATE__.map.getSource("archive-points"),
    clusterLayer: !!window.__CICAN_TEST_STATE__.map.getLayer("archive-clusters"),
    pointCount: window.__CICAN_TEST_STATE__.geojson.features.length,
    canvas: (() => { const box = document.querySelector("#map canvas")?.getBoundingClientRect(); return box ? { width: Math.round(box.width), height: Math.round(box.height) } : null; })()
  }));
  assert.equal(liveState.styleLoaded, true);
  assert.ok(liveState.source && liveState.clusterLayer);
  assert.ok(liveState.canvas && liveState.canvas.width > 300 && liveState.canvas.height > 300);
  assert.equal(liveState.pointCount, 557);
  assert.deepEqual(liveErrors, []);
  record("Real OpenFreeMap style loads in Chromium and archive map layers initialise", true, JSON.stringify({ ...liveState, elapsedMs: Date.now() - started }));
  await live.close();

  // Style outage: verify archive catalogue and record detail still work.
  const styleFailure = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await attachMapLibrary(styleFailure);
  await styleFailure.route("https://tiles.openfreemap.org/styles/liberty", route =>
    route.fulfill({ status: 503, contentType: "text/plain", body: "simulated style outage" }));
  await styleFailure.goto(base + "/preview/canonical-map-prototype.html?cican-test=1", { waitUntil: "domcontentloaded" });
  await styleFailure.waitForFunction(() => window.__CICAN_TEST_STATE__?.records.length === 629, null, { timeout: 30000 });
  await styleFailure.waitForFunction(() => document.querySelector("#catalogue-status")?.textContent.includes("629 ARCHIVE RECORDS CONNECTED"), null, { timeout: 30000 });
  assert.equal(await styleFailure.locator("#results .result-card").count(), 629);
  await styleFailure.goto(base + "/preview/canonical-map-prototype.html?destination=" + encodeURIComponent(destination.id), { waitUntil: "domcontentloaded" });
  await styleFailure.waitForFunction(() => document.querySelector("#catalogue-status")?.textContent.includes("DESTINATION LOADED"), null, { timeout: 30000 });
  assert.equal(await styleFailure.locator("#detail-view:not([hidden])").count(), 1);
  record("Simulated OpenFreeMap style outage leaves archive list and destination detail accessible", true, destination.id);
  await styleFailure.close();

  // Routing outage: provide a deterministic GPS fix, then force the Valhalla request to fail.
  const routeFailure = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await attachMapLibrary(routeFailure);
  await routeFailure.addInitScript(() => {
    const position = {
      coords: { latitude: 53.3477, longitude: -6.2594, accuracy: 8, altitude: null, altitudeAccuracy: null, heading: 90, speed: 1.2 },
      timestamp: Date.now()
    };
    Object.defineProperty(navigator, "geolocation", { configurable: true, value: {
      watchPosition(success) { setTimeout(() => success(position), 50); return 7; },
      getCurrentPosition(success) { setTimeout(() => success(position), 50); },
      clearWatch() {}
    } });
  });
  await routeFailure.route("https://valhalla1.openstreetmap.de/route", route =>
    route.fulfill({ status: 503, contentType: "application/json", body: JSON.stringify({ error: "simulated routing outage" }) }));
  await routeFailure.goto(base + "/preview/canonical-map-prototype.html?destination=" + encodeURIComponent(destination.id), { waitUntil: "domcontentloaded" });
  await routeFailure.waitForFunction(() => document.querySelector("#catalogue-status")?.textContent.includes("DESTINATION LOADED"), null, { timeout: 30000 });
  await routeFailure.locator("#detail-view #cican-walk-button").click();
  await routeFailure.waitForFunction(() => document.querySelector("#navigation-status")?.textContent.includes("HTTP 503"), null, { timeout: 30000 });
  assert.equal(await routeFailure.locator("#results .result-card").count(), 629);
  assert.equal(await routeFailure.locator("#detail-view:not([hidden])").count(), 1);
  record("Simulated Valhalla outage shows route error without losing archive catalogue or detail", true, destination.id);
  await routeFailure.close();

  console.log(JSON.stringify({ suite: "CICAN live map browser and service failure checks", result: "PASS", productionChanged: false, checks: results }, null, 2));
} catch (error) {
  record("Live map browser and service failure suite", false, error.stack || error.message);
  console.error(JSON.stringify({ suite: "CICAN live map browser and service failure checks", result: "FAIL", productionChanged: false, checks: results }, null, 2));
  throw error;
} finally {
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}

import assert from "node:assert/strict";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const objects = JSON.parse(fs.readFileSync(path.join(root, "data/objects.json"), "utf8"));
const niah = JSON.parse(fs.readFileSync(path.join(root, "data/niah-registered-objects.json"), "utf8"));
const niahIds = new Set(niah.map((record) => record.id));
const extra = objects.filter((record) => !niahIds.has(record.id));
const isPoint = (record) => record.latitude !== null && record.latitude !== "" &&
  record.longitude !== null && record.longitude !== "" &&
  Number.isFinite(Number(record.latitude)) && Number.isFinite(Number(record.longitude)) &&
  Math.abs(Number(record.latitude)) <= 90 && Math.abs(Number(record.longitude)) <= 180;
const mapped = extra.find(isPoint);
const unmapped = extra.find((record) => !isPoint(record));
assert.ok(mapped && unmapped, "Expected additional mapped and unmapped canonical records");

const mime = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml", ".webmanifest": "application/manifest+json" };
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
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const address = server.address();
const base = `http://127.0.0.1:${address.port}`;
const browser = await chromium.launch({ headless: true });
const results = [];
const record = (name, ok, detail = "") => results.push({ name, result: ok ? "PASS" : "FAIL", detail });
let page;
try {
  page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  await page.route("https://unpkg.com/maplibre-gl@5.12.0/dist/maplibre-gl.js", (route) =>
    route.fulfill({ path: path.join(root, "node_modules/maplibre-gl/dist/maplibre-gl.js"), contentType: "text/javascript" }));
  await page.route("https://unpkg.com/maplibre-gl@5.12.0/dist/maplibre-gl.css", (route) =>
    route.fulfill({ path: path.join(root, "node_modules/maplibre-gl/dist/maplibre-gl.css"), contentType: "text/css" }));
  await page.route("**/app-canonical.js", async (route) => {
    const response = await route.fetch();
    const source = (await response.text()).replace(/start\\(\\);\\s*\\}\\)\\(\\);$/, "window.__CICAN_TEST_STATE__=state;\\nstart();\\n})();");
    await route.fulfill({ response, body: source });
  });
  await page.route("https://tiles.openfreemap.org/styles/liberty", (route) =>
    route.fulfill({ json: {
      version: 8,
      name: "CICAN isolated browser-test style",
      glyphs: "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
      sources: {},
      layers: [{ id: "background", type: "background", paint: { "background-color": "#151715" } }]
    } }));
  await page.goto(base + "/preview/canonical-map-prototype.html", { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => document.querySelector("#catalogue-status")?.textContent.includes("629 ARCHIVE RECORDS CONNECTED"), null, { timeout: 30000 });
  await page.waitForSelector("#map .maplibregl-canvas", { timeout: 30000 });
  await page.waitForFunction(() => window.__CICAN_TEST_STATE__?.mapReady && window.__CICAN_TEST_STATE__?.records.length === 629, null, { timeout: 30000 });
  await page.waitForTimeout(1200);
  const initialMapState = await page.evaluate(() => ({
    points: window.__CICAN_TEST_STATE__.geojson.features.length,
    source: !!window.__CICAN_TEST_STATE__.map.getSource("archive-points"),
    clusters: !!window.__CICAN_TEST_STATE__.map.getLayer("archive-clusters"),
    singles: !!window.__CICAN_TEST_STATE__.map.getLayer("archive-single-points")
  }));
  assert.equal(initialMapState.points, objects.filter(isPoint).length);
  assert.ok(initialMapState.source && initialMapState.clusters && initialMapState.singles);
  record("MapLibre receives all 557 eligible canonical points and both point layers", true, JSON.stringify(initialMapState));

  const totalCards = await page.locator("#results .result-card").count();
  assert.equal(totalCards, objects.length);
  record("All 629 records render in the discovery list", true, String(totalCards));

  const category = "ARCHITECTURE";
  const expectedCategoryCount = objects.filter((item) => item.category === category).length;
  await page.locator("#category-filter").selectOption(category);
  const actualCategoryCount = await page.locator("#results .result-card").count();
  assert.equal(actualCategoryCount, expectedCategoryCount);
  const expectedCategoryPoints = objects.filter((item) => item.category === category && isPoint(item)).length;
  const actualCategoryPoints = await page.evaluate(() => window.__CICAN_TEST_STATE__.geojson.features.length);
  assert.equal(actualCategoryPoints, expectedCategoryPoints);
  record("Category filter returns expected list and mapped-point counts", true, category + ": " + actualCategoryCount + " records / " + actualCategoryPoints + " points");

  await page.locator("#category-filter").selectOption("");
  await page.locator("#search").fill(mapped.id);
  assert.equal(await page.locator("#results .result-card").count(), 1);
  assert.equal(await page.evaluate(() => window.__CICAN_TEST_STATE__.geojson.features.length), 1);
  record("Search finds an additional canonical record and updates the map source", true, mapped.id);
  await page.goto(base + "/preview/canonical-map-prototype.html?destination=" + encodeURIComponent(mapped.id), { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => document.querySelector("#catalogue-status")?.textContent.includes("DESTINATION LOADED"), null, { timeout: 30000 });
  await page.waitForSelector("#detail-view:not([hidden])");
  assert.match(await page.locator("#detail-view").innerText(), new RegExp(mapped.id));
  assert.equal(await page.locator("#detail-view #cican-walk-button").count(), 1);
  record("Additional mapped canonical record opens with walking action", true, mapped.id);

  const sourceChips = await page.locator("#detail-view .source-link, #detail-view .source-chip").count();
  assert.ok(sourceChips > 0, "Mapped record detail should retain its source references");
  record("Record detail preserves source references", true, String(sourceChips) + " source links/chips");

  await page.goto(base + "/preview/canonical-map-prototype.html?destination=" + encodeURIComponent(unmapped.id), { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => document.querySelector("#catalogue-status")?.textContent.includes("DESTINATION LOADED"), null, { timeout: 30000 });
  await page.waitForSelector("#detail-view:not([hidden])");
  assert.match(await page.locator("#detail-view").innerText(), /LOCATION NOT MAPPED/);
  assert.equal(await page.locator("#detail-view #cican-walk-button").count(), 0);
  assert.equal(await page.locator("#detail-view .story-walk-disabled").count(), 1);
  record("Unmapped canonical record cannot start walking navigation", true, unmapped.id);

  const canvas = await page.locator("#map canvas").boundingBox();
  assert.ok(canvas && canvas.width > 300 && canvas.height > 300, "Map canvas must have a usable rendered size");
  record("MapLibre map canvas initializes at desktop size", true, Math.round(canvas.width) + "x" + Math.round(canvas.height));

  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(300);
  const mobile = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    body: document.body.scrollWidth,
    canvas: document.querySelector("#map canvas")?.getBoundingClientRect().width || 0,
    panel: document.querySelector("#discovery-panel")?.getBoundingClientRect().width || 0
  }));
  assert.equal(mobile.body, mobile.viewport, "Mobile layout must not overflow horizontally");
  assert.ok(mobile.canvas > 300 && mobile.panel > 250, "Mobile map and discovery panel should remain visible");
  record("Mobile 390px layout has no horizontal overflow", true, JSON.stringify(mobile));

  assert.deepEqual(pageErrors, [], "Browser runtime should not emit uncaught page errors");
  record("No uncaught browser JavaScript errors", true);
} catch (error) {
  record("Browser prototype test suite", false, error.stack || error.message);
  throw error;
} finally {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
  console.log(JSON.stringify({
    prototype: "canonical-map-browser",
    productionChanged: false,
    canonicalRecords: objects.length,
    niahRecords: niah.length,
    extraMappedRecord: mapped.id,
    extraUnmappedRecord: unmapped.id,
    checks: results,
    failures: results.filter((item) => item.result === "FAIL")
  }, null, 2));
}

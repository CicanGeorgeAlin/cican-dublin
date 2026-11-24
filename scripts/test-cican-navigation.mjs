import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const app = fs.readFileSync(new URL("../preview/app/app.js", import.meta.url), "utf8");
const html = fs.readFileSync(new URL("../preview/app.html", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("../preview/app/app.css", import.meta.url), "utf8");
const sw = fs.readFileSync(new URL("../preview/service-worker.js", import.meta.url), "utf8");

function encodePolyline6(points) {
  let lastLat = 0, lastLng = 0, output = "";
  const encode = value => {
    let n = value < 0 ? ~(value << 1) : value << 1;
    let chunk = "";
    while (n >= 0x20) { chunk += String.fromCharCode((0x20 | (n & 0x1f)) + 63); n >>= 5; }
    return chunk + String.fromCharCode(n + 63);
  };
  for (const [lng, lat] of points) {
    const nextLat = Math.round(lat * 1e6), nextLng = Math.round(lng * 1e6);
    output += encode(nextLat - lastLat) + encode(nextLng - lastLng);
    lastLat = nextLat; lastLng = nextLng;
  }
  return output;
}

test("archive place details use CICAN walking navigation, not Google Maps handoff", () => {
  assert.match(app, /WALK THERE WITH CICAN/);
  assert.match(app, /requestWalkingNavigation\(id\)/);
  assert.doesNotMatch(app, /google\.com\/maps\/dir\//);
  assert.match(app, /id="navigation-panel"/);
  assert.match(html, /id="locate-button"/);
});

test("walking route requests use live GPS origin and archived destination with pedestrian costing", () => {
  assert.match(app, /state\.locationLastFix/);
  assert.match(app, /costing:"pedestrian"/);
  assert.match(app, /VALHALLA_ROUTE_ENDPOINT="https:\/\/valhalla1\.openstreetmap\.de\/route"/);
  assert.match(app, /X-Client-Id/);
  assert.match(app, /shape_format:"polyline6"/);
  assert.match(app, /directions_type:"instructions"/);
});

test("route geometry is drawn on the native map and can be cleared", () => {
  assert.match(app, /addSource\("cican-navigation-route"/);
  assert.match(app, /cican-navigation-route-line/);
  assert.match(app, /setData\(\{type:"FeatureCollection",features:\[\]\}\)/);
  assert.match(app, /fitBounds\(bounds/);
  assert.match(css, /\.navigation-panel/);
  assert.match(css, /#cican-navigation-route-line/);
});

test("Valhalla polyline6 decoder accurately restores route coordinates", () => {
  const start = app.indexOf("function decodeValhallaPolyline6");
  const end = app.indexOf("\nfunction clearNavigationRoute", start);
  assert.ok(start >= 0 && end > start, "polyline decoder must be present");
  const context = {};
  vm.createContext(context);
  vm.runInContext(app.slice(start, end), context);
  const points = [[-6.272746, 53.362256], [-6.2725, 53.3625], [-6.2721, 53.3629]];
  const decoded = context.decodeValhallaPolyline6(encodePolyline6(points));
  assert.equal(decoded.length, points.length);
  for (let i = 0; i < points.length; i++) {
    assert.ok(Math.abs(decoded[i][0] - points[i][0]) < 0.000001);
    assert.ok(Math.abs(decoded[i][1] - points[i][1]) < 0.000001);
  }
});

test("app cache is refreshed for the navigation release", () => {
  assert.match(sw, /cican-dublin-app-v57/);
});

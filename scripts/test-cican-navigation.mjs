import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const app = fs.readFileSync(new URL("../preview/app/app.js", import.meta.url), "utf8");
const html = fs.readFileSync(new URL("../preview/app.html", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("../preview/app/app.css", import.meta.url), "utf8");
const sw = fs.readFileSync(new URL("../preview/service-worker.js", import.meta.url), "utf8");
const rootSw = fs.readFileSync(new URL("../service-worker.js", import.meta.url), "utf8");

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
  assert.match(html, /id="navigation-panel"/);
  assert.match(html, /id="locate-button"/);
  assert.match(app, /new URLSearchParams\(location\.search\)\.get\("destination"\)/);
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
  assert.match(sw, /cican-dublin-app-v60/);
  assert.match(rootSw, /cican-dublin-root-v19/);
});


test("live Valhalla pedestrian routing service returns usable Dublin route geometry", { timeout: 30000 }, async () => {
  const response = await fetch("https://valhalla1.openstreetmap.de/route", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json", "X-Client-Id": "cican-dublin.github.io" },
    signal: AbortSignal.timeout(25000),
    body: JSON.stringify({
      locations: [
        { lat: 53.3498, lon: -6.2603, type: "break" },
        { lat: 53.3438, lon: -6.2546, type: "break" }
      ],
      costing: "pedestrian",
      units: "kilometers",
      language: "en-IE",
      directions_type: "instructions",
      shape_format: "polyline6",
      id: "cican-dublin-live-smoke-test"
    })
  });
  assert.equal(response.ok, true, "Valhalla HTTP status: " + response.status);
  const data = await response.json();
  assert.ok(data.trip, "Valhalla response must contain a trip: " + JSON.stringify(data).slice(0, 500));
  assert.ok(Array.isArray(data.trip.legs) && data.trip.legs.length > 0, "Valhalla must return at least one route leg");
  assert.ok(typeof data.trip.legs[0].shape === "string" && data.trip.legs[0].shape.length > 10, "Valhalla must return encoded route geometry");
  assert.ok(Number(data.trip.summary?.length) > 0, "Valhalla must return a positive route distance");
  assert.ok(Number(data.trip.summary?.time) > 0, "Valhalla must return a positive route duration");
  assert.ok(Array.isArray(data.trip.legs[0].maneuvers), "Valhalla must return walking instructions");
});


test("walking navigation returns to the full map and uses a compact independent route sheet", () => {
  assert.ok(html.includes('id="navigation-panel" hidden aria-label="CICAN walking navigation"'));
  assert.ok(html.includes('id="hide-cican-navigation"'));
  assert.ok(html.includes('id="clear-cican-route"'));
  assert.ok(html.includes("VIEW ALL WALKING DIRECTIONS"));
  assert.ok(app.includes('closeDetail(false);const navPanel=$("navigation-panel");if(navPanel)navPanel.hidden=false;'));
  assert.ok(app.includes("initNavigationControls()"));
  assert.ok(css.includes("position:absolute;z-index:680"));
  assert.ok(css.includes("max-height:min(42dvh,390px)"));
});

test("live GPS does not pull the map away from the complete walking route", () => {
  assert.ok(app.includes("!state.navigationRoute)state.map.setCenter(point)"));
});

test("hidden route summary can be reopened from the map", () => {
  assert.ok(html.includes('id="show-cican-navigation"'));
  assert.ok(app.includes('if(show)show.addEventListener("click",()=>{$("navigation-panel").hidden=false;show.hidden=true;})'));
});

test("Stage 2 live navigation calculates route progress, next maneuver and off-route recovery", () => {
  assert.match(app, /function nearestRouteProgress/);
  assert.match(app, /function updateNavigationProgress/);
  assert.match(app, /progress\.distance>55/);
  assert.match(app, /requestWalkingNavigation\(route\.destinationId,\{silent:true\}\)/);
  assert.match(app, /function followNavigationCamera/);
  assert.match(app, /pitch:48/);
  assert.match(app, /followNavigationCamera\(point,heading,speed\)/);
  assert.ok(html.includes('id="navigation-next-turn"'));
  assert.ok(html.includes('id="navigation-next-distance"'));
  assert.ok(html.includes('id="navigation-follow-toggle"'));
  assert.ok(css.includes(".navigation-next-turn"));
});

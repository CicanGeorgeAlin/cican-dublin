import fs from "node:fs";
import assert from "node:assert/strict";

const read = file => fs.readFileSync(file, "utf8");
const html = read("app.html");
const app = read("app/app.js");
const css = read("app/app.css");
const manifest = JSON.parse(read("manifest.webmanifest"));
const sw = read("service-worker.js");
const objects = JSON.parse(read("data/objects.json"));
const sources = JSON.parse(read("data/sources.json"));
const notebook = read("my-dublin.html");

const htmlIds = new Set([...html.matchAll(new RegExp('id="([^"]+)"', "g"))].map(match => match[1]));
const appIds = new Set([...app.matchAll(new RegExp('\\$\\("([^"]+)"\\)', "g"))].map(match => match[1]));
const dynamicallyCreatedIds = new Set(["save-place"]);
for (const id of appIds) {
  if (!dynamicallyCreatedIds.has(id)) assert.ok(htmlIds.has(id), "Map app references missing HTML element #" + id);
}
for (const id of ["map", "search", "category-filter", "district-filter", "panel-toolbar", "results", "detail-view", "discovery-panel", "locate-button", "catalogue-status", "archive-stats"]) {
  assert.ok(htmlIds.has(id), "Required map app element is missing: #" + id);
}
assert.ok(css.includes("#map") && css.includes(".discovery-panel"), "Map and discovery panel styles must exist.");
assert.ok(css.includes("grayscale(1) brightness(.72)"), "Map tiles should use the archive dark-map treatment.");
assert.ok(app.includes("sourceMarkup") && app.includes("SOURCES_URL"), "Archive details must render linked source records.");
assert.ok(app.includes("updateArchiveStats") && html.includes("archive-stats"), "Archive overview statistics must be wired to the catalogue.");
new Function(app);

assert.ok(Array.isArray(objects) && objects.length > 0, "Object catalogue must be a non-empty array.");
assert.ok(Array.isArray(sources) && sources.length > 0, "Source catalogue must be a non-empty array.");
const ids = new Set();
const sourceIds = new Set(sources.map(source => source.id));
for (const record of objects) {
  assert.ok(record.id && !ids.has(record.id), "Archive IDs must be present and unique.");
  ids.add(record.id);
  assert.ok(typeof record.latitude === "number" && typeof record.longitude === "number", "Map record needs numeric coordinates: " + record.id);
  assert.ok(record.latitude >= -90 && record.latitude <= 90 && record.longitude >= -180 && record.longitude <= 180, "Invalid coordinates: " + record.id);
  assert.ok(record.coordinate_status, "Coordinate provenance is required: " + record.id);
  for (const sourceId of record.sources || []) assert.ok(sourceIds.has(sourceId), "Missing source " + sourceId + " for " + record.id);
  if (record.map_url) {
    const url = new URL(record.map_url);
    assert.equal(url.searchParams.get("travelmode"), "walking", "Walking directions must use walking mode: " + record.id);
    const destination = url.searchParams.get("destination");
    if (destination && /^-?\d/.test(destination)) {
      const [lat, lon] = destination.split(",").map(Number);
      assert.ok(Math.abs(lat - record.latitude) < 0.000001 && Math.abs(lon - record.longitude) < 0.000001, "Walking destination does not match record coordinates: " + record.id);
    }
  }
}

assert.equal(manifest.start_url, "./app.html", "PWA must launch the map app.");
assert.equal(manifest.scope, "./", "PWA scope must remain within the archive site.");
assert.equal(manifest.display, "standalone", "PWA should use standalone display.");
for (const icon of manifest.icons) {
  const path = icon.src.startsWith("./") ? icon.src.slice(2) : icon.src;
  assert.ok(fs.existsSync(path), "Missing PWA icon: " + icon.src);
}

for (const file of ["app.html", "app/app.css", "app/app.js", "manifest.webmanifest", "data/objects.json", "data/sources.json", "assets/favicon.svg"]) {
  assert.ok(fs.existsSync(file), "Missing application shell asset: " + file);
}
assert.ok(sw.includes("key.startsWith(CACHE_PREFIX)"), "Service worker must only clean its own cache namespace.");
assert.ok(sw.includes("SHELL_PATHS.has(url.pathname)"), "Service worker must only intercept declared shell assets.");
assert.ok(!sw.includes("tile.openstreetmap.org"), "Map tiles must not be cached by the app shell.");
assert.ok(html.indexOf("leaflet@1.9.4/dist/leaflet.js") < html.indexOf("leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"), "Leaflet must load before MarkerCluster.");
assert.ok(html.indexOf("leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js") < html.indexOf("./app/app.js"), "MarkerCluster must load before the app.");
assert.ok(app.includes('addEventListener("click",()=>{if(!navigator.geolocation)'), "Geolocation must only be requested from the explicit location button.");
assert.ok(app.includes('localStorage.setItem("cican-map-saved"'), "Saved places must use the app-local storage key.");
assert.ok(notebook.includes("cican-dublin-fieldbook"), "Existing My Dublin notebook database must remain unchanged.");
assert.ok(html.includes("./my-dublin.html"), "Map app must keep the My Dublin notebook link.");

console.log("Map app validation passed: " + objects.length + " records, " + sources.length + " sources; DOM bindings, JS syntax, coordinates, walking links, PWA assets, cache isolation and notebook separation.");

import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const read = path => fs.readFileSync(new URL("../" + path, import.meta.url), "utf8");
const archive = read("archive.html");
const notebook = read("my-dublin.html");
const generator = read("scripts/generate-seo-pages.mjs");
const objects = JSON.parse(read("data/niah-registered-objects.json"));
const recordById = new Map(objects.map(record => [record.id, record]));
const placeFiles = fs.readdirSync(new URL("../places/", import.meta.url)).filter(name => name.endsWith(".html"));
const app = read("preview/app/app.js");
const mapHtml = read("preview/app.html");

test("archive catalogue walking actions open the CICAN map with an archive ID", () => {
  assert.ok(archive.includes('return "./preview/app.html?destination="+encodeURIComponent(record.id);'));
  assert.ok(!archive.includes("google.com/maps/dir/"));
});

test("fieldwork discovery queue opens the CICAN map with an archive ID", () => {
  assert.ok(notebook.includes('return "./preview/app.html?destination="+encodeURIComponent(r.id)'));
  assert.ok(!notebook.includes("google.com/maps/dir/"));
});

test("permanent place-page generator emits CICAN navigation, never Google directions", () => {
  assert.ok(generator.includes("../preview/app.html?destination="));
  assert.ok(!generator.includes("google.com/maps/dir/"));
});

test("EVERY generated permanent place page has the correct navigation state", () => {
  assert.equal(placeFiles.length, objects.length, "one generated page is required per archive record");
  const failures = [];
  let mapped = 0;
  let unmapped = 0;
  for (const file of placeFiles) {
    const id = file.slice(0, -5);
    const record = recordById.get(id);
    const html = read("places/" + file);
    if (!record) failures.push(file + ": no matching archive record");
    if (html.includes("google.com/maps/dir/")) failures.push(file + ": Google Maps directions link remains");
    const hasCoordinates = record && Number.isFinite(record.latitude) && Number.isFinite(record.longitude);
    if (hasCoordinates) {
      mapped++;
      if (!html.includes("../preview/app.html?destination=" + encodeURIComponent(id))) failures.push(file + ": CICAN destination link missing");
    } else {
      unmapped++;
      if (!html.includes("Map coordinates are not yet established.")) failures.push(file + ": missing-coordinate explanation absent");
    }
  }
  assert.deepEqual(failures, [], failures.slice(0, 20).join("\n"));
  assert.ok(mapped > 0, "the archive should contain mapped records");
  assert.ok(unmapped >= 0);
});

test("CICAN map opens the requested archive record and starts native pedestrian routing", () => {
  assert.ok(mapHtml.includes('id="locate-button"'));
  assert.ok(app.includes('new URLSearchParams(location.search).get("destination")'));
  assert.ok(app.includes("openDetail(requestedRecord.id,false)"));
  assert.ok(app.includes('id="cican-walk-button"'));
  assert.ok(app.includes('walkButton.addEventListener("click",()=>requestWalkingNavigation(id))'));
  assert.ok(app.includes('costing:"pedestrian"'));
  assert.ok(app.includes('VALHALLA_ROUTE_ENDPOINT="https://valhalla1.openstreetmap.de/route"'));
  assert.ok(app.includes('addSource("cican-navigation-route"'));
  assert.ok(app.includes("navigation-steps"));
  assert.ok(!app.includes("google.com/maps/dir/"));
});

test("navigation release cache versions are present", () => {
  const sw = read("preview/service-worker.js");
  const rootSw = read("service-worker.js");
  assert.ok(sw.includes("cican-dublin-app-v67"));
  assert.ok(rootSw.includes("cican-dublin-root-v26"));
});

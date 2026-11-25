#!/usr/bin/env node
/**
 * Non-production compatibility audit for evaluating data/objects.json as the
 * full CICAN Dublin map dataset. This does not modify the production app.
 */
import fs from "node:fs";
import assert from "node:assert/strict";

const read = (path) => JSON.parse(fs.readFileSync(path, "utf8"));
const objects = read("data/objects.json");
const niah = read("data/niah-registered-objects.json");
const sources = read("data/sources.json");
const visualData = read("data/visual-assets.json");
const schema = read("schemas/archive-object.schema.json");
const app = fs.readFileSync("preview/app/app.js", "utf8");
const prototypeApp = fs.readFileSync("preview/app/app-canonical.js", "utf8");
const prototypeHtml = fs.readFileSync("preview/canonical-map-prototype.html", "utf8");
const visuals = visualData.records;
const failures = [];
const checks = [];
const check = (name, fn) => {
  try { fn(); checks.push({ name, result: "PASS" }); }
  catch (error) { failures.push({ name, error: error.message }); checks.push({ name, result: "FAIL" }); }
};
const validPoint = (r) =>
  r.latitude !== null && r.latitude !== "" &&
  r.longitude !== null && r.longitude !== "" &&
  Number.isFinite(Number(r.latitude)) &&
  Number.isFinite(Number(r.longitude)) &&
  Math.abs(Number(r.latitude)) <= 90 &&
  Math.abs(Number(r.longitude)) <= 180;
const unique = (values) => new Set(values).size === values.length;
const sourceIds = new Set(sources.map((s) => s.id));
const objectById = new Map(objects.map((r) => [r.id, r]));
const niahById = new Map(niah.map((r) => [r.id, r]));
const visualById = new Map(visuals.map((r) => [r.record_id, r]));
const canonicalIds = new Set(objects.map((r) => r.id));
const niahIds = new Set(niah.map((r) => r.id));
const canonicalPoints = objects.filter(validPoint);
const niahPoints = niah.filter(validPoint);
const excluded = objects.filter((r) => !niahIds.has(r.id));
const extraMapped = excluded.filter(validPoint);
const categories = [...new Set(objects.map((r) => r.category).filter(Boolean))].sort();
const districts = [...new Set(objects.map((r) => r.district).filter(Boolean))].sort();
const required = schema.required || [];
const allowed = new Set(Object.keys(schema.properties || {}));

check("canonical catalogue is a non-empty array", () => assert.ok(Array.isArray(objects) && objects.length > 0));
check("canonical IDs are unique and correctly formatted", () => {
  assert.ok(unique(objects.map((r) => r.id)));
  assert.ok(objects.every((r) => /^DUB-[A-Z]{3}-\d{4,}$/.test(r.id)));
});
check("all canonical records satisfy required app/schema fields", () => {
  for (const r of objects) {
    for (const key of required) assert.ok(Object.hasOwn(r, key), r.id + " missing " + key);
    for (const key of Object.keys(r)) assert.ok(allowed.has(key), r.id + " has unknown field " + key);
    assert.ok(schema.properties.category.enum.includes(r.category), r.id + " has unsupported category");
    assert.equal(typeof r.name, "string");
    assert.equal(typeof r.district, "string");
    assert.equal(typeof r.address, "string");
    assert.ok(Array.isArray(r.sources), r.id + " sources is not an array");
    assert.ok(Array.isArray(r.photography_brief), r.id + " photography_brief is not an array");
  }
});
check("canonical coordinate pairs are complete, finite and in range", () => {
  for (const r of objects) {
    const hasLat = typeof r.latitude === "number";
    const hasLon = typeof r.longitude === "number";
    assert.equal(hasLat, hasLon, r.id + " has a partial coordinate pair");
    if (hasLat) assert.ok(validPoint(r), r.id + " has invalid coordinates");
    if (!hasLat) assert.ok(r.coordinate_status === "NOT_SET", r.id + " missing coordinates but status is " + r.coordinate_status);
  }
});
check("every object source reference resolves", () => {
  for (const r of objects) for (const id of r.sources) assert.ok(sourceIds.has(id), r.id + " references missing source " + id);
});
check("parent references resolve to canonical objects", () => {
  for (const r of objects) if (r.parent_id) assert.ok(canonicalIds.has(r.parent_id), r.id + " has missing parent " + r.parent_id);
});
check("visual inventory covers every canonical object exactly once", () => {
  assert.equal(visuals.length, objects.length);
  assert.ok(unique(visuals.map((r) => r.record_id)));
  assert.deepEqual(new Set(visuals.map((r) => r.record_id)), canonicalIds);
});
check("all visual reference-image source IDs resolve", () => {
  for (const v of visuals) for (const image of (v.reference_images || [])) {
    if (image.source_id) assert.ok(sourceIds.has(image.source_id), v.record_id + " image source missing " + image.source_id);
  }
});
check("current app's point eligibility rule is represented exactly", () => {
  assert.ok(app.includes("const isValidPoint=r=>r.latitude!==null"));
  assert.equal(canonicalPoints.length, objects.filter(validPoint).length);
});
check("filter dimensions used by the app exist on every canonical record", () => {
  for (const r of objects) {
    assert.ok(typeof r.category === "string" && r.category.length > 0, r.id + " missing category");
    assert.ok(typeof r.district === "string" && r.district.length > 0, r.id + " missing district");
    assert.ok(["VERIFIED", "PARTIALLY_VERIFIED", "RESEARCH_LEAD"].includes(r.verification_status), r.id + " unsupported verification status");
    assert.ok(["TO_PHOTOGRAPH", "PHOTOGRAPHED"].includes(r.photography_status), r.id + " unsupported photography status");
  }
});
check("all 120 non-NIAH records have stable IDs and visual detail lookups", () => {
  assert.equal(excluded.length, 120);
  for (const r of excluded) {
    assert.ok(objectById.has(r.id));
    assert.ok(visualById.has(r.id), r.id + " has no visual inventory lookup");
    assert.ok(Array.isArray(r.sources));
  }
});
check("source-derived navigation points are visibly distinguishable from field verification", () => {
  for (const r of canonicalPoints) {
    assert.notEqual(r.coordinate_status, "NOT_SET");
    if (r.coordinate_status === "SOURCE_DERIVED") assert.notEqual(r.verification_status, undefined);
  }
  assert.equal(canonicalPoints.filter((r) => r.coordinate_status === "FIELD_VERIFIED").length, 0,
    "Unexpected field-verified coordinates require an explicit review of the test baseline");
});
check("prototype app loads the full canonical catalogue", () => {
  assert.ok(prototypeApp.includes('const DATA_URL="../data/objects.json";'));
  assert.ok(prototypeHtml.includes('src="./app/app-canonical.js"'));
});
check("prototype is isolated from production service-worker registration", () => {
  assert.ok(!prototypeApp.includes("navigator.serviceWorker.register"));
  assert.ok(!prototypeHtml.includes('rel="manifest"'));
});
check("production map data source remains unchanged during prototype", () => {
  assert.ok(app.includes('const DATA_URL="../data/niah-registered-objects.json";'));
});

const report = {
  prototype: "canonical-map-compatibility",
  productionChanged: false,
  prototypePage: "preview/canonical-map-prototype.html",
  counts: {
    canonicalRecords: objects.length,
    currentNiahRecords: niah.length,
    canonicalMappedPoints: canonicalPoints.length,
    currentNiahMappedPoints: niahPoints.length,
    recordsOutsideNiahSubset: excluded.length,
    additionalMappedPoints: extraMapped.length,
    additionalUnmappedRecords: excluded.length - extraMapped.length,
    sourceRecords: sources.length,
    visualRecords: visuals.length,
    categories: categories.length,
    districts: districts.length
  },
  categories,
  checks,
  failures
};
console.log(JSON.stringify(report, null, 2));
if (failures.length) process.exitCode = 1;

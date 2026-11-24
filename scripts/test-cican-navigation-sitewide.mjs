import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const read = path => fs.readFileSync(new URL("../" + path, import.meta.url), "utf8");
const archive = read("archive.html");
const notebook = read("my-dublin.html");
const generator = read("scripts/generate-seo-pages.mjs");
const generatedPlace = read("places/DUB-BLD-0079.html");
const app = read("preview/app/app.js");

test("archive catalogue card and detail directions route into CICAN", () => {
  assert.match(archive, /\.\/preview\/app\.html\?destination=/);
  assert.match(archive, /WALK THERE WITH CICAN/);
  assert.doesNotMatch(archive, /google\.com\/maps\/dir\//i);
});

test("fieldwork discovery queue routes into CICAN navigation", () => {
  assert.match(notebook, /\.\/preview\/app\.html\?destination=/);
  assert.doesNotMatch(notebook, /google\.com\/maps\/dir\//i);
});

test("SEO place-page generator emits CICAN navigation links", () => {
  assert.match(generator, /\.\.\/preview\/app\.html\?destination=/);
  assert.doesNotMatch(generator, /google\.com\/maps\/dir\//i);
});

test("generated permanent place pages no longer hand off to Google Maps", () => {
  assert.match(generatedPlace, /\.\.\/preview\/app\.html\?destination=/);
  assert.doesNotMatch(generatedPlace, /google\.com\/maps\/dir\//i);
});

test("CICAN map consumes destination IDs and opens the corresponding archive record", () => {
  assert.match(app, /new URLSearchParams\(location\.search\)\.get\("destination"\)/);
  assert.match(app, /openDetail\(requestedRecord\.id,false\)/);
});

import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const app = fs.readFileSync(new URL("../preview/app/app.js", import.meta.url), "utf8");
const html = fs.readFileSync(new URL("../preview/app.html", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("../preview/app/app.css", import.meta.url), "utf8");

function makeHarness() {
  const callbacks = {};
  const calls = { watchOptions: null, clearWatch: [], mapMoves: [], markerPositions: [], markerRemoved: false };
  let now = 1000;
  let nextFrameId = 0;
  const frames = new Map();
  const coords = { latitude: "", longitude: "", accuracy: "" };
  const panel = {
    hidden: true,
    dataset: {},
    setAttribute() {},
    querySelector(selector) {
      if (selector === ".live-location-coords") return { set textContent(value) { coords.coordinates = value; } };
      if (selector === ".live-location-accuracy") return { set textContent(value) { coords.accuracy = value; } };
      return null;
    }
  };
  const stage = { appendChild(node) { calls.readoutAttached = node === panel; elements["live-location-readout"] = node; } };
  const button = {
    attrs: {},
    classList: { add() {}, remove() {} },
    setAttribute(name, value) { this.attrs[name] = value; },
    title: "",
    set ariaLabel(value) { this.attrs["aria-label"] = value; }
  };
  const status = { textContent: "" };
  const elements = { "locate-button": button, "catalogue-status": status };
  const document = {
    createElement(tag) {
      if (tag === "section") return panel;
      return { className: "", setAttribute() {} };
    },
    querySelector(selector) { return selector === ".map-stage" ? stage : null; }
  };
  const map = { setCenter(point) { calls.mapMoves.push([...point]); } };
  const state = {
    map, locationWatchId: null, locationTracking: false, userMarker: null,
    locationAnimationFrame: null, locationLastFix: null, locationFixHistory: [], locationMotion: null, locationLastFrame: 0, nearbyOrigin: null
  };
  class Marker {
    setLngLat(point) { calls.markerPositions.push(point); return this; }
    addTo() { return this; }
    remove() { calls.markerRemoved = true; }
  }
  const navigator = {
    geolocation: {
      watchPosition(success, error, options) {
        callbacks.success = success;
        callbacks.error = error;
        calls.watchOptions = options;
        return 17;
      },
      clearWatch(id) { calls.clearWatch.push(id); }
    }
  };
  const context = {
    state, document, navigator, location: { protocol: "https:", hostname: "example.test" },
    window: { maplibregl: {} },
    maplibregl: { Marker },
    $: id => elements[id],
    console, Date, performance: { now: () => now },
    requestAnimationFrame(callback) { const id = ++nextFrameId; frames.set(id, callback); return id; },
    cancelAnimationFrame(id) { frames.delete(id); }
  };
  const start = app.indexOf("function updateLiveLocationReadout");
  const end = app.indexOf("function loadMapLibraryFallback", start);
  assert.ok(start >= 0 && end > start, "live GPS functions must exist in the map application");
  vm.createContext(context);
  vm.runInContext(app.slice(start, end), context);
  return {
    context, callbacks, calls, coords, panel, button, status, state,
    advanceFrame(time) { now = time; const entry = frames.entries().next().value; assert.ok(entry, "a live animation frame should be queued"); frames.delete(entry[0]); entry[1](time); },
    pendingFrames: () => frames.size
  };
}

test("map HTML exposes the live GPS control and loads the feature script", () => {
  assert.match(html, /id="locate-button"/);
  assert.match(html, /src="\.\/app\/app\.js(?:\?[^"]*)?"/);
  assert.match(css, /\.live-location-readout/);
  assert.match(css, /\.user-location-marker\.live/);
});

test("live GPS starts high-accuracy watch, updates marker/readout, and stops cleanly", () => {
  const h = makeHarness();
  h.context.toggleLiveLocationTracking();
  assert.equal(h.state.locationTracking, true);
  assert.equal(h.state.locationWatchId, 17);
  assert.equal(h.calls.watchOptions.enableHighAccuracy, true);
  assert.equal(h.calls.watchOptions.maximumAge, 5000);
  assert.equal(h.button.attrs["aria-pressed"], "true");
  assert.match(h.status.textContent, /WAITING FOR LIVE GPS FIX/);

  const fix = {
    coords: { latitude: 53.123456, longitude: -6.123456, accuracy: 8.4, speed: 20, heading: 90 },
    timestamp: Date.now()
  };
  h.callbacks.success(fix);
  assert.equal([...h.calls.markerPositions[0]].join(","), "-6.123456,53.123456");
  h.advanceFrame(1034);
  assert.ok(h.calls.mapMoves.length > 0, "the map should follow the animation frame");
  assert.ok(h.calls.mapMoves[0][0] > -6.123456, "the marker should move east between GPS fixes");
  assert.equal(h.coords.coordinates, "53.123456, -6.123456");
  assert.match(h.coords.accuracy, /±8 m/);
  assert.equal(h.panel.hidden, false);
  assert.match(h.status.textContent, /LIVE GPS/);

  h.callbacks.success({ ...fix, timestamp: fix.timestamp + 1000, coords: { ...fix.coords, latitude: 53.123636, longitude: -6.123456, speed: 2, heading: 0 } });
  assert.equal(h.calls.markerPositions.length, 3, "a new GPS fix and the animation frame should both reposition the marker");
  assert.ok(h.pendingFrames() > 0, "the marker animation should keep running between fixes");

  h.context.toggleLiveLocationTracking();
  assert.equal(h.state.locationTracking, false);
  assert.deepEqual(h.calls.clearWatch, [17]);
  assert.equal(h.calls.markerRemoved, true);
  assert.equal(h.pendingFrames(), 0, "stopping tracking must cancel animation frames");
  assert.equal(h.panel.hidden, true);
  assert.equal(h.button.attrs["aria-pressed"], "false");
});

test("GPS permission errors stop tracking and report the reason", () => {
  const h = makeHarness();
  h.context.toggleLiveLocationTracking();
  h.callbacks.error({ code: 1 });
  assert.equal(h.state.locationTracking, false);
  assert.deepEqual(h.calls.clearWatch, [17]);
  assert.match(h.status.textContent, /PERMISSION DENIED/);
});

test("secure context and geolocation support are required", () => {
  const h = makeHarness();
  h.context.location.protocol = "http:";
  h.context.toggleLiveLocationTracking();
  assert.equal(h.state.locationTracking, false);
  assert.match(h.status.textContent, /HTTPS/);
});

test("poor, stale and physically implausible GPS fixes are rejected",()=>{
  const h=makeHarness();
  h.context.toggleLiveLocationTracking();
  const base={timestamp:Date.now(),coords:{latitude:53.123456,longitude:-6.123456,accuracy:8,speed:1,heading:90}};
  h.callbacks.success({...base,coords:{...base.coords,accuracy:150}});
  assert.equal(h.state.locationLastFix,null,"very poor accuracy must not seed navigation");
  h.callbacks.success({...base,timestamp:base.timestamp-60000});
  assert.equal(h.state.locationLastFix,null,"stale fixes must be ignored");
  h.callbacks.success(base);
  assert.equal(h.state.locationLastFix.latitude,53.123456);
  h.callbacks.success({...base,timestamp:base.timestamp+1000,coords:{...base.coords,latitude:53.130000}});
  assert.equal(h.state.locationLastFix.latitude,53.123456,"an implausible GPS jump must not move the accepted position");
});

test("GPS confidence label distinguishes high, usable and weak estimates",()=>{
  const h=makeHarness();
  h.context.toggleLiveLocationTracking();
  const base={timestamp:Date.now(),coords:{latitude:53.123456,longitude:-6.123456,accuracy:7,speed:0,heading:0}};
  h.callbacks.success(base);
  assert.match(h.coords.accuracy,/HIGH CONFIDENCE/);
  h.callbacks.success({...base,timestamp:base.timestamp+1000,coords:{...base.coords,accuracy:20}});
  assert.match(h.coords.accuracy,/USABLE/);
  h.callbacks.success({...base,timestamp:base.timestamp+2000,coords:{...base.coords,accuracy:40}});
  assert.match(h.coords.accuracy,/WEAK SIGNAL/);
});

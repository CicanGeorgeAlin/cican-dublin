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
  const coords = { latitude: "", longitude: "", accuracy: "", session: "" };
  const exportButton = { onclick: null };
  const panel = {
    hidden: true,
    dataset: {},
    setAttribute() {},
    querySelector(selector) {
      if (selector === ".live-location-coords") return { set textContent(value) { coords.coordinates = value; } };
      if (selector === ".live-location-accuracy") return { set textContent(value) { coords.accuracy = value; } };
      if (selector === ".live-location-session") return { set textContent(value) { coords.session = value; } };
      if (selector === ".live-location-export") return exportButton;
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
    locationAnimationFrame: null, locationLastFix: null, locationSessionSamples: [], locationMotion: null, locationLastFrame: 0, nearbyOrigin: null
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
  const distanceStart = app.indexOf("function liveDistanceAndBearing");
  const distanceEnd = app.indexOf("function renderLiveLocationFrame", distanceStart);
  const stabilityStart = app.indexOf("function gpsNoiseFloor");
  const stabilityEnd = app.indexOf("function acceptLiveLocationFix", stabilityStart);
  assert.ok(distanceStart >= 0 && distanceEnd > distanceStart && stabilityStart >= 0 && stabilityEnd > stabilityStart,
    "GPS distance and stability helpers must be present");
  vm.runInContext(app.slice(distanceStart, distanceEnd) + "\n" + app.slice(stabilityStart, stabilityEnd) + "\n" + app.slice(start, end), context);
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
  assert.ok(h.calls.mapMoves.length > 0, "the map should centre on the accepted GPS position");
  assert.equal(h.calls.mapMoves[0][0], -6.123456, "the map must not extrapolate a noisy GPS position between fixes");
  assert.equal(h.coords.coordinates, "53.123456, -6.123456");
  assert.match(h.coords.accuracy, /±8 m/);
  assert.equal(h.panel.hidden, false);
  assert.match(h.status.textContent, /LIVE GPS/);

  h.callbacks.success({ ...fix, timestamp: fix.timestamp + 1000, coords: { ...fix.coords, latitude: 53.123636, longitude: -6.123456, speed: 2, heading: 0 } });
  assert.equal(h.calls.markerPositions.length, 2, "the marker should update only from the filtered GPS fix, not dead-reckoning animation");
  assert.equal(h.pendingFrames(), 0, "no speculative marker animation should run between GPS fixes");

  h.context.toggleLiveLocationTracking();
  assert.equal(h.state.locationTracking, false);
  assert.deepEqual(h.calls.clearWatch, [17]);
  assert.equal(h.calls.markerRemoved, true);
  assert.equal(h.pendingFrames(), 0, "stopping tracking must cancel animation frames");
  assert.equal(h.panel.hidden, false, "completed GPS samples remain available for export after tracking stops");
  assert.match(h.panel.innerHTML,/EXPORT GPS TEST CSV/);
  assert.equal(h.state.locationSessionSamples.length,2);
  assert.equal(h.button.attrs["aria-pressed"], "false");
});

test("small consecutive fixes accumulate until movement clears the noise gate", () => {
  const h = makeHarness();
  h.context.toggleLiveLocationTracking();
  const base={timestamp:Date.now(),coords:{latitude:53.123456,longitude:-6.123456,accuracy:5,speed:null,heading:null}};
  h.callbacks.success(base);
  const initial=h.state.locationDisplayFix.latitude;
  for(let step=1;step<=4;step++){
    h.callbacks.success({...base,timestamp:base.timestamp+step*5000,coords:{...base.coords,latitude:base.coords.latitude+step*0.0000225}});
  }
  assert.ok(h.state.locationDisplayFix.latitude>initial,"cumulative pedestrian movement must eventually advance the marker even when each individual step is below the movement threshold");
  assert.equal(h.state.locationSessionSamples.at(-1).meaningful_movement,true);
  assert.equal(h.state.locationSessionSamples.at(-1).speed_source,"coordinate-delta");
});

test("successive fixes move the live marker when speed is omitted", () => {
  const h = makeHarness();
  h.context.toggleLiveLocationTracking();
  const firstTimestamp = Date.now();
  const first = {
    timestamp: firstTimestamp,
    coords: { latitude: 53.123456, longitude: -6.123456, accuracy: 20, speed: null, heading: null }
  };
  h.callbacks.success(first);
  const firstDisplayedLatitude = h.calls.markerPositions[0][1];
  const second = {
    timestamp: firstTimestamp + 1000,
    coords: { latitude: 53.123600, longitude: -6.123456, accuracy: 20, speed: null, heading: null }
  };
  h.callbacks.success(second);
  assert.equal(h.calls.markerPositions.length, 2, "both accepted GPS fixes should update the live marker");
  assert.ok(h.calls.markerPositions[1][1] > firstDisplayedLatitude,
    "independently measured displacement must move the filtered marker without a speed reading");
  assert.ok(h.state.locationDisplayFix.latitude > firstDisplayedLatitude,
    "the display position must advance instead of remaining held at the first fix");
  const sample=h.state.locationSessionSamples[1];
  assert.equal(sample.reported_speed_mps,"","the export must preserve that the device omitted speed");
  assert.equal(sample.speed_source,"coordinate-delta","the processed speed must disclose its source");
  assert.equal(sample.meaningful_movement,true);
  assert.equal(sample.latitude,second.coords.latitude,"raw device latitude must be retained");
  assert.notEqual(sample.display_latitude,sample.latitude,"filtered display latitude must be separately recorded");
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
  assert.match(h.coords.accuracy,/REPORTED ESTIMATE ≤10 M/);
  h.callbacks.success({...base,timestamp:base.timestamp+1000,coords:{...base.coords,accuracy:20}});
  assert.match(h.coords.accuracy,/REPORTED ESTIMATE 10–25 M/);
  h.callbacks.success({...base,timestamp:base.timestamp+2000,coords:{...base.coords,accuracy:40}});
  assert.match(h.coords.accuracy,/REPORTED ESTIMATE 25–50 M/);
  assert.match(h.status.textContent,/LIVE GPS · REPORTED ACCURACY ±40 M · 25–50 M ESTIMATE/,"status must describe reported accuracy without claiming confidence");
});

test("GPS test session CSV includes position, reported accuracy and route diagnostics",()=>{
  const start=app.indexOf("function buildGpsSessionCsv");
  const end=app.indexOf("function exportLiveGpsSession",start);
  assert.ok(start>=0&&end>start,"GPS test CSV builder must exist");
  const context={};
  vm.createContext(context);
  vm.runInContext(app.slice(start,end),context);
  const csv=context.buildGpsSessionCsv([{timestamp_utc:"2026-11-24T10:00:00.000Z",latitude:53.35,longitude:-6.26,reported_horizontal_accuracy_m:8,reported_speed_mps:"",reported_heading_degrees:"",speed_mps:1.2,heading_degrees:90,speed_source:"coordinate-delta",heading_source:"coordinate-bearing",display_latitude:53.35001,display_longitude:-6.26001,movement_distance_m:12,meaningful_movement:true,display_update_mode:"smoothed",display_alpha:0.375,route_offset_m:4,route_progress_m:125,next_maneuver_index:2}]);
  assert.match(csv,/timestamp_utc,latitude,longitude,reported_horizontal_accuracy_m,reported_speed_mps,reported_heading_degrees/);
  assert.match(csv,/53.35,-6.26,8,,,1.2,90/);
  assert.match(csv,/coordinate-delta,coordinate-bearing,53.35001,-6.26001,12,true,smoothed,0.375,4,125,2/);
  assert.doesNotMatch(csv,/"coordinate-delta"/,"plain source labels should not be quoted");
  const escaped=context.buildGpsSessionCsv([{speed_source:"source,with comma"}]);
  assert.match(escaped,/"source,with comma"/,"fields containing commas must be quoted");
});

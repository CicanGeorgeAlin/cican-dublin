import assert from "node:assert/strict";

const checks = [];
const timedFetch = async (name, url, options = {}) => {
  const started = performance.now();
  const response = await fetch(url, { ...options, signal: AbortSignal.timeout(20000) });
  const elapsedMs = Math.round(performance.now() - started);
  checks.push({ name, status: response.status, elapsedMs });
  return response;
};

try {
  const styleResponse = await timedFetch(
    "OpenFreeMap Liberty style",
    "https://tiles.openfreemap.org/styles/liberty",
    { headers: { accept: "application/json" } }
  );
  assert.equal(styleResponse.status, 200, "OpenFreeMap style must return HTTP 200");
  const style = await styleResponse.json();
  assert.equal(style.version, 8, "Expected a MapLibre style v8 document");
  assert.ok(style.sources && Object.keys(style.sources).length > 0, "Style must declare at least one source");
  const tileTemplates = Object.values(style.sources).flatMap(source => source.tiles || []);
  assert.ok(tileTemplates.length > 0, "Style sources must expose tile templates");
  checks.at(-1).sourceCount = Object.keys(style.sources).length;
  checks.at(-1).tileTemplateCount = tileTemplates.length;

  const template = tileTemplates[0];
  const zoom = 12;
  const scale = 2 ** zoom;
  const latitude = 53.3477;
  const longitude = -6.2594;
  const x = Math.floor((longitude + 180) / 360 * scale);
  const latitudeRadians = latitude * Math.PI / 180;
  const y = Math.floor((1 - Math.asinh(Math.tan(latitudeRadians)) / Math.PI) / 2 * scale);
  const tileUrl = template
    .replaceAll("{z}", String(zoom))
    .replaceAll("{x}", String(x))
    .replaceAll("{y}", String(y))
    .replaceAll("{ratio}", "");
  const tileResponse = await timedFetch(
    "OpenFreeMap Dublin vector tile",
    tileUrl,
    { headers: { accept: "application/vnd.mapbox-vector-tile, application/x-protobuf, application/octet-stream" } }
  );
  assert.equal(tileResponse.status, 200, "OpenFreeMap tile request must return HTTP 200");
  const tileBytes = await tileResponse.arrayBuffer();
  assert.ok(tileBytes.byteLength > 0, "OpenFreeMap tile response must not be empty");
  checks.at(-1).zoom = zoom;
  checks.at(-1).tileBytes = tileBytes.byteLength;

  const routeResponse = await timedFetch(
    "Valhalla pedestrian route",
    "https://valhalla1.openstreetmap.de/route",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-client-id": "cican-dublin.github.io",
        accept: "application/json"
      },
      body: JSON.stringify({
        locations: [
          { lat: 53.3477, lon: -6.2594, type: "break" },
          { lat: 53.3438, lon: -6.2546, type: "break" }
        ],
        costing: "pedestrian",
        units: "kilometers",
        language: "en-IE",
        directions_type: "instructions",
        shape_format: "polyline6",
        id: "cican-dublin-live-service-check"
      })
    }
  );
  assert.equal(routeResponse.status, 200, "Valhalla route request must return HTTP 200");
  const routeData = await routeResponse.json();
  assert.ok(Array.isArray(routeData.trip?.legs) && routeData.trip.legs.length > 0, "Valhalla must return at least one route leg");
  assert.ok(routeData.trip.legs.some(leg => typeof leg.shape === "string" && leg.shape.length > 0), "Route must include encoded geometry");
  assert.ok(Number(routeData.trip.summary?.length) > 0, "Route must include a positive distance");
  checks.at(-1).routeLegs = routeData.trip.legs.length;
  checks.at(-1).routeDistanceKm = Number(routeData.trip.summary.length.toFixed(3));
  checks.at(-1).routeDurationSeconds = Math.round(routeData.trip.summary.time);

  console.log(JSON.stringify({
    suite: "CICAN live external map and routing services",
    result: "PASS",
    note: "The Valhalla request uses two fixed central-Dublin test coordinates; it does not use a person's GPS or represent a user's actual journey.",
    checks
  }, null, 2));
} catch (error) {
  console.error(JSON.stringify({
    suite: "CICAN live external map and routing services",
    result: "FAIL",
    checks,
    error: error.message
  }, null, 2));
  process.exitCode = 1;
}

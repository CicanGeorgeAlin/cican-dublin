import test from "node:test";
import assert from "node:assert/strict";
import { parseCsv, analyzeGpsSession, percentile } from "./analyze-gps-session.mjs";

const header = "timestamp_utc,latitude,longitude,reported_horizontal_accuracy_m,speed_mps,heading_degrees,route_offset_m,route_progress_m,next_maneuver_index";
const rows = [
  "2026-11-24T12:00:00.000Z,53.3,-6.2,5,1.2,90,4,0,0",
  "2026-11-24T12:00:05.000Z,53.30001,-6.20001,10,1.4,92,6,5,0",
  "2026-11-24T12:00:20.000Z,53.30002,-6.20002,20,1.1,95,8,10,1"
];

test("CSV parser handles quoted commas and escaped quotes", () => {
  const parsed = parseCsv('name,note\n"George, Alin","said ""hello"""\n');
  assert.equal(parsed[0].name, "George, Alin");
  assert.equal(parsed[0].note, 'said "hello"');
});

test("percentile interpolates between ordered values", () => {
  assert.equal(percentile([1, 2, 3, 4], 0.5), 2.5);
});

test("GPS report summarizes accuracy, route offsets, gaps and progress", () => {
  const report = analyzeGpsSession(parseCsv(header + "\n" + rows.join("\n")));
  assert.equal(report.sample_count, 3);
  assert.equal(report.valid_sample_count, 3);
  assert.equal(report.reported_accuracy_m.median, 10);
  assert.equal(report.reported_accuracy_m.share_at_or_below_10m_percent, 66.7);
  assert.equal(report.route_offset_m.median, 6);
  assert.equal(report.movement_diagnostics.gaps_over_10_seconds, 1);
  assert.match(report.interpretation[0], /not measured position error/);
});

test("invalid coordinates and missing required fields are not silently accepted", () => {
  const bad = parseCsv(header + "\n2026-11-24T12:00:00.000Z,999,-6.2,5,1,90,,,");
  assert.throws(() => analyzeGpsSession(bad), /No valid GPS samples found/);
  assert.throws(() => analyzeGpsSession([{ latitude: "53" }]), /Missing required CSV columns/);
});

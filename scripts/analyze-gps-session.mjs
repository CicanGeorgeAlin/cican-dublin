#!/usr/bin/env node
"use strict";

// Analyse a CICAN GPS session export. Reported accuracy is an Android/browser
// estimate, not measured error against surveyed ground truth.
const fs = require("node:fs");

function parseCsv(input) {
  const rows = [];
  let row = [], cell = "", quoted = false;
  for (let i = 0; i < input.length; i++) {
    const ch = input[i];
    if (quoted) {
      if (ch === '"' && input[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') quoted = false;
      else cell += ch;
    } else if (ch === '"') quoted = true;
    else if (ch === ",") { row.push(cell); cell = ""; }
    else if (ch === "\n") { row.push(cell); rows.push(row); row = []; cell = ""; }
    else if (ch !== "\r") cell += ch;
  }
  if (quoted) throw new Error("CSV contains an unterminated quoted field");
  if (cell.length || row.length) { row.push(cell); rows.push(row); }
  if (rows.length < 2) throw new Error("CSV must contain a header and at least one sample");
  const headers = rows.shift().map(x => x.trim());
  if (new Set(headers).size !== headers.length) throw new Error("CSV contains duplicate column names");
  return rows.filter(r => r.some(v => v !== "")).map(values =>
    Object.fromEntries(headers.map((key, i) => [key, values[i] ?? ""]))
  );
}

function percentile(values, p) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const index = (sorted.length - 1) * p;
  const low = Math.floor(index), high = Math.ceil(index);
  return sorted[low] + (sorted[high] - sorted[low]) * (index - low);
}
function median(values) { return percentile(values, 0.5); }
function haversine(a, b) {
  const rad = n => n * Math.PI / 180;
  const dLat = rad(b.latitude - a.latitude), dLon = rad(b.longitude - a.longitude);
  const lat1 = rad(a.latitude), lat2 = rad(b.latitude);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 6371000 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}
function num(value) { return value === "" || value == null ? null : Number.isFinite(Number(value)) ? Number(value) : null; }

function analyzeGpsSession(samples) {
  if (!Array.isArray(samples) || !samples.length) throw new Error("No GPS samples supplied");
  const required = ["timestamp_utc", "latitude", "longitude", "reported_horizontal_accuracy_m"];
  const missingColumns = required.filter(key => !(key in samples[0]));
  if (missingColumns.length) throw new Error("Missing required CSV columns: " + missingColumns.join(", "));
  const valid = [], invalidRows = [], accuracies = [], speeds = [], offsets = [], gaps = [];
  let highSpeedSamples = 0, progressRegressions = 0, previous = null, previousProgress = null;
  samples.forEach((s, index) => {
    const latitude = num(s.latitude), longitude = num(s.longitude);
    const accuracy = num(s.reported_horizontal_accuracy_m);
    const time = Date.parse(s.timestamp_utc);
    if (!Number.isFinite(time) || latitude === null || longitude === null ||
        Math.abs(latitude) > 90 || Math.abs(longitude) > 180 || accuracy === null || accuracy <= 0) {
      invalidRows.push(index + 2); return;
    }
    const item = { latitude, longitude, accuracy, time };
    valid.push(item); accuracies.push(accuracy);
    const speed = num(s.speed_mps);
    if (speed !== null && speed >= 0) { speeds.push(speed); if (speed > 3) highSpeedSamples++; }
    const offset = num(s.route_offset_m);
    if (offset !== null && offset >= 0) offsets.push(offset);
    const progress = num(s.route_progress_m);
    if (progress !== null) {
      if (previousProgress !== null && progress + 3 < previousProgress) progressRegressions++;
      previousProgress = progress;
    }
    if (previous) {
      const seconds = (time - previous.time) / 1000;
      if (seconds > 10) gaps.push(seconds);
    }
    previous = item;
  });
  if (!valid.length) throw new Error("No valid GPS samples found");
  const shareWithin = limit => accuracies.filter(x => x <= limit).length / accuracies.length * 100;
  const sortedTimes = valid.map(x => x.time);
  const durationSeconds = Math.max(0, (Math.max(...sortedTimes) - Math.min(...sortedTimes)) / 1000);
  const travelledMetres = valid.slice(1).reduce((sum, item, i) => sum + haversine(valid[i], item), 0);
  return {
    sample_count: samples.length,
    valid_sample_count: valid.length,
    invalid_row_numbers: invalidRows,
    duration_seconds: Math.round(durationSeconds),
    reported_accuracy_m: {
      median: Number(median(accuracies).toFixed(1)),
      p95: Number(percentile(accuracies, 0.95).toFixed(1)),
      share_at_or_below_5m_percent: Number(shareWithin(5).toFixed(1)),
      share_at_or_below_10m_percent: Number(shareWithin(10).toFixed(1)),
      share_at_or_below_20m_percent: Number(shareWithin(20).toFixed(1))
    },
    route_offset_m: offsets.length ? {
      sample_count: offsets.length,
      median: Number(median(offsets).toFixed(1)),
      p95: Number(percentile(offsets, 0.95).toFixed(1))
    } : null,
    movement_diagnostics: {
      summed_point_to_point_distance_m: Math.round(travelledMetres),
      median_reported_speed_mps: speeds.length ? Number(median(speeds).toFixed(2)) : null,
      samples_above_3mps: highSpeedSamples,
      gaps_over_10_seconds: gaps.length,
      longest_gap_seconds: gaps.length ? Number(Math.max(...gaps).toFixed(1)) : 0,
      route_progress_regressions_over_3m: progressRegressions
    },
    interpretation: [
      "Reported horizontal accuracy is an estimated radius, not measured position error.",
      "Point-to-point distance can be inflated by GPS noise and is not the true walked distance.",
      "Route offset is meaningful only when CICAN had an active route and populated that field.",
      "This report cannot establish a 98% accuracy score or prove superiority to Google Maps without independent ground truth and a defined benchmark."
    ]
  };
}

if (require.main === module) {
  const file = process.argv[2];
  if (!file || file === "--help") {
    process.stdout.write("Usage: node scripts/analyze-gps-session.mjs <gps-session.csv> [--json]\n");
    process.exit(file ? 0 : 2);
  }
  try {
    const report = analyzeGpsSession(parseCsv(fs.readFileSync(file, "utf8")));
    if (process.argv.includes("--json")) process.stdout.write(JSON.stringify(report, null, 2) + "\n");
    else {
      process.stdout.write("CICAN GPS SESSION REPORT\n");
      process.stdout.write("Samples: " + report.valid_sample_count + "/" + report.sample_count + " valid · Duration: " + report.duration_seconds + "s\n");
      process.stdout.write("Reported accuracy: median ±" + report.reported_accuracy_m.median + "m · p95 ±" + report.reported_accuracy_m.p95 + "m\n");
      process.stdout.write("Estimated radius ≤5m: " + report.reported_accuracy_m.share_at_or_below_5m_percent + "% · ≤10m: " + report.reported_accuracy_m.share_at_or_below_10m_percent + "% · ≤20m: " + report.reported_accuracy_m.share_at_or_below_20m_percent + "%\n");
      if (report.route_offset_m) process.stdout.write("Route offset: median " + report.route_offset_m.median + "m · p95 " + report.route_offset_m.p95 + "m\n");
      process.stdout.write("Progress regressions: " + report.movement_diagnostics.route_progress_regressions_over_3m + " · Gaps >10s: " + report.movement_diagnostics.gaps_over_10_seconds + "\n");
      process.stdout.write("\nIMPORTANT: estimated accuracy is not measured ground-truth error. See JSON interpretation for limitations.\n");
    }
  } catch (error) { process.stderr.write("GPS analysis failed: " + error.message + "\n"); process.exit(1); }
}

module.exports = { parseCsv, analyzeGpsSession, percentile, haversine };

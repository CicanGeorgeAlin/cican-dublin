import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BASE = "https://cicangeorgealin.github.io/cican-vasile-dublin";
const objects = JSON.parse(fs.readFileSync(path.join(ROOT, "data/objects.json"), "utf8"));
const visualData = JSON.parse(fs.readFileSync(path.join(ROOT, "data/visual-assets.json"), "utf8"));
const sources = JSON.parse(fs.readFileSync(path.join(ROOT, "data/sources.json"), "utf8"));
const sourceById = new Map(sources.map(source => [source.id, source]));
const visualById = new Map((visualData.records || []).map(record => [record.record_id, record]));
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[char]));
const compact = value => String(value ?? "").replace(/\s+/g, " ").trim();
const descriptionFor = record => {
  const source = compact(record.historical_description || record.historical_significance || "Historical research is in progress.");
  const address = compact(record.address || record.district || "Dublin, Ireland");
  const text = source + " Located at " + address + ".";
  return text.length > 158 ? text.slice(0, 155).replace(/\s+\S*$/, "") + "…" : text;
};
const placesDir = path.join(ROOT, "places");
fs.mkdirSync(placesDir, { recursive: true });

for (const record of objects) {
  const id = compact(record.id);
  if (!/^[A-Z0-9-]+$/.test(id)) throw new Error("Unsafe archive ID: " + id);
  const url = BASE + "/places/" + encodeURIComponent(id) + ".html";
  const title = compact(record.name) + " | Dublin Heritage Record | CICAN VASILE DUBLIN";
  const description = descriptionFor(record);
  const visual = visualById.get(id) || {};
  const images = Array.isArray(visual.reference_images) ? visual.reference_images : [];
  const image = images.find(item => item.image_url && item.source_url) || null;
  const linkedSources = (record.sources || []).map(sourceId => sourceById.get(sourceId)).filter(Boolean);
  const lat = Number.isFinite(record.latitude) ? record.latitude : null;
  const lon = Number.isFinite(record.longitude) ? record.longitude : null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": record.name,
    "description": compact(record.historical_description || record.historical_significance || ""),
    "url": url,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": record.address || "",
      "addressLocality": "Dublin",
      "addressRegion": record.district || "Dublin",
      "addressCountry": "IE"
    },
    "containedInPlace": { "@type": "City", "name": "Dublin", "containedInPlace": { "@type": "Country", "name": "Ireland" } },
    "identifier": id
  };
  if (lat !== null && lon !== null) schema.geo = { "@type": "GeoCoordinates", "latitude": lat, "longitude": lon };
  if (image) schema.image = image.image_url;
  const photoMarkup = image
    ? '<figure class="reference"><a href="' + escapeHtml(image.source_url) + '" rel="noopener noreferrer"><img src="' + escapeHtml(image.image_url) + '" alt="' + escapeHtml(image.title || record.name) + '" loading="lazy"></a><figcaption>' + escapeHtml(image.attribution || image.photographer || "Attribution pending") + ' · ' + escapeHtml(image.licence || "Licence information pending") + '<br><span>Third-party reference photograph; not an original founder photograph.</span></figcaption></figure>'
    : '<p class="muted">No reference photograph has been registered for this archive record yet. Founder field photography remains outstanding.</p>';
  const sourceMarkup = linkedSources.length
    ? '<ul>' + linkedSources.map(source => '<li><a href="' + escapeHtml(source.url) + '" rel="noopener noreferrer">' + escapeHtml(source.name) + '</a><span>' + escapeHtml(source.publisher || source.source_type || "") + (source.specific_reference ? ' · ' + escapeHtml(source.specific_reference) : '') + '</span></li>').join("") + '</ul>'
    : '<p class="muted">Sources are still being added to this record.</p>';
  const photoBrief = Array.isArray(record.photography_brief) && record.photography_brief.length
    ? '<ul>' + record.photography_brief.map(item => '<li>' + escapeHtml(item) + '</li>').join("") + '</ul>'
    : '<p class="muted">A founder photography brief has not yet been prepared.</p>';
  const mapLink = lat !== null && lon !== null
    ? '<a class="action" href="https://www.google.com/maps/dir/?api=1&amp;destination=' + encodeURIComponent(lat.toFixed(7) + "," + lon.toFixed(7)) + '&amp;travelmode=walking" rel="noopener noreferrer">Walk to this location ↗</a>'
    : '<span class="muted">Map coordinates are not yet established.</span>';
  const html = [
    '<!doctype html>',
    '<html lang="en-IE"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">',
    '<title>' + escapeHtml(title) + '</title>',
    '<meta name="description" content="' + escapeHtml(description) + '">',
    '<meta name="author" content="CICAN GEORGE ALIN"><meta name="robots" content="index,follow,max-image-preview:large">',
    '<link rel="canonical" href="' + escapeHtml(url) + '"><meta name="theme-color" content="#070707">',
    '<meta property="og:type" content="article"><meta property="og:site_name" content="CICAN VASILE DUBLIN"><meta property="og:title" content="' + escapeHtml(title) + '"><meta property="og:description" content="' + escapeHtml(description) + '"><meta property="og:url" content="' + escapeHtml(url) + '">',
    image ? '<meta property="og:image" content="' + escapeHtml(image.image_url) + '">' : '',
    '<link rel="icon" href="../assets/favicon.svg" type="image/svg+xml">',
    '<script type="application/ld+json">' + JSON.stringify(schema).replace(/</g, "\\u003c") + '</script>',
    '<style>:root{color-scheme:dark}*{box-sizing:border-box}body{margin:0;background:#070707;color:#f4f2ed;font:16px/1.7 system-ui,-apple-system,"Segoe UI",sans-serif}.wrap{width:min(900px,calc(100% - 36px));margin:auto}header,footer{border-bottom:1px solid #292929;padding:18px 0}footer{border-top:1px solid #292929;border-bottom:0;color:#999;font-size:12px}a{color:#fff;text-underline-offset:4px}.brand{font-weight:800;letter-spacing:.12em;text-decoration:none}.eyebrow{color:#aaa;font-size:11px;letter-spacing:.16em;text-transform:uppercase}main{padding:42px 0 70px}h1{font-size:clamp(34px,7vw,60px);line-height:1.04;letter-spacing:-.055em;margin:12px 0}h2{font-size:19px;margin:30px 0 8px}.lead{font-size:18px;color:#d0d0d0}.muted{color:#999}.facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin:24px 0}.fact{border:1px solid #333;padding:12px}.fact small{display:block;color:#999;font-size:10px;letter-spacing:.1em;text-transform:uppercase}.fact b{font-size:14px;font-weight:600}.reference{margin:24px 0;border:1px solid #333;padding:12px}.reference img{display:block;width:100%;max-height:520px;object-fit:contain;background:#111}.reference figcaption{font-size:12px;color:#aaa;margin-top:10px}.reference figcaption span{color:#888}.actions{display:flex;gap:12px;flex-wrap:wrap;margin:24px 0}.action{display:inline-block;border:1px solid #777;padding:10px 14px;text-decoration:none}.sources li{margin:12px 0}.sources li span{display:block;color:#999;font-size:12px}.breadcrumbs{font-size:12px;color:#999;margin-bottom:24px}.breadcrumbs a{color:#bbb}@media(max-width:600px){main{padding-top:28px}.lead{font-size:16px}}</style>',
    '</head><body><header><div class="wrap"><a class="brand" href="../">CICAN VASILE DUBLIN</a></div></header>',
    '<main class="wrap"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="../">Home</a> / <a href="../archive.html">Dublin heritage archive</a> / ' + escapeHtml(record.name) + '</nav>',
    '<p class="eyebrow">' + escapeHtml(record.category || "HERITAGE RECORD") + ' · ' + escapeHtml(record.district || "Dublin") + '</p>',
    '<h1>' + escapeHtml(record.name) + '</h1><p class="lead">' + escapeHtml(record.address || record.district || "Dublin, Ireland") + '</p>',
    '<p>' + escapeHtml(record.historical_description || "Historical research is in progress for this place.") + '</p>',
    record.historical_significance ? '<p>' + escapeHtml(record.historical_significance) + '</p>' : '',
    '<div class="facts"><div class="fact"><small>Archive ID</small><b>' + escapeHtml(id) + '</b></div><div class="fact"><small>Historical period</small><b>' + escapeHtml(record.historical_period || "Not established") + '</b></div><div class="fact"><small>Evidence status</small><b>' + escapeHtml(record.verification_status || "Not set") + '</b></div><div class="fact"><small>Coordinate status</small><b>' + escapeHtml(record.coordinate_status || "Not established") + '</b></div></div>',
    '<div class="actions">' + mapLink + '<a class="action" href="../archive.html">Browse the full Dublin archive</a></div>',
    '<h2>Photographic reference</h2>' + photoMarkup,
    '<h2>Founder field photography brief</h2><p class="muted">This checklist guides future original photography. It does not mean the location has already been photographed.</p>' + photoBrief,
    '<h2>Research sources</h2><ul class="sources">' + (sourceMarkup.startsWith("<ul>") ? sourceMarkup.slice(4, -5) : '<li>' + sourceMarkup + '</li>') + '</ul>',
    '<p class="muted">This is an expanding, source-led archive. Source-derived map coordinates are not described as field-verified unless the record explicitly says so. Created by CICAN GEORGE ALIN.</p>',
    '</main><footer><div class="wrap">CICAN VASILE DUBLIN · Evidence-led heritage research · Dublin, Ireland</div></footer></body></html>'
  ].join("\n");
  fs.writeFileSync(path.join(placesDir, id + ".html"), html, "utf8");
}

const today = new Date().toISOString().slice(0, 10);
const urls = [
  { loc: BASE + "/", priority: "1.0" },
  { loc: BASE + "/archive.html", priority: "0.9" },
  ...objects.map(record => ({ loc: BASE + "/places/" + encodeURIComponent(record.id) + ".html", priority: "0.7" }))
];
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(item => '  <url><loc>' + item.loc + '</loc><lastmod>' + today + '</lastmod><changefreq>monthly</changefreq><priority>' + item.priority + '</priority></url>').join("\n") +
  '\n</urlset>\n';
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap, "utf8");
console.log("Generated " + objects.length + " crawlable place pages and a sitemap with " + urls.length + " URLs.");

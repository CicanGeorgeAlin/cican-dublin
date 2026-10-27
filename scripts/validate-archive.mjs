import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
const root=process.cwd();
const read=file=>fs.readFileSync(path.join(root,file),"utf8");
const json=file=>JSON.parse(read(file));
const objects=json("data/objects.json"),sources=json("data/sources.json"),visual=json("data/visual-assets.json"),research=json("data/research.json"),investigation=json("data/investigation.json"),sourceSchema=json("schemas/source.schema.json");
assert.ok(Array.isArray(objects)&&objects.length>0,"Object catalogue must be a non-empty array.");
assert.ok(Array.isArray(sources)&&sources.length>0,"Source catalogue must be a non-empty array.");
assert.ok(Array.isArray(visual.records),"Visual inventory must contain a records array.");
function unique(values,label){const seen=new Set();for(const value of values){assert.ok(value,label+" contains an empty identifier.");assert.ok(!seen.has(value),label+" contains duplicate: "+value);seen.add(value);}return seen;}
const objectIds=unique(objects.map(x=>x.id),"Object IDs"),sourceIds=unique(sources.map(x=>x.id),"Source IDs"),visualIds=unique(visual.records.map(x=>x.record_id),"Visual record IDs"),researchIds=unique(research.map(x=>x.id),"Research IDs");
assert.equal(investigation.methodology,"LOCKED","Investigation methodology must be explicitly locked.");
assert.ok(Array.isArray(investigation.claims)&&investigation.claims.length>0,"Investigation register needs claims.");
assert.ok(Array.isArray(investigation.tasks)&&investigation.tasks.length>0,"Investigation register needs tasks.");
const claimIds=unique(investigation.claims.map(x=>x.id),"Investigation claim IDs"),taskIds=unique(investigation.tasks.map(x=>x.id),"Investigation task IDs");
for(const claim of investigation.claims){assert.ok(["A","B","C","D","E"].includes(claim.grade),"Invalid evidence grade on "+claim.id);for(const id of claim.source_ids)assert.ok(sourceIds.has(id),"Claim "+claim.id+" references missing source "+id);assert.ok(Array.isArray(claim.unknowns),"Claim "+claim.id+" must list unresolved questions.");}
for(const task of investigation.tasks){assert.ok(task.priority>=1&&task.priority<=4,"Invalid priority on "+task.id);assert.ok(task.next_action&&task.completion,"Task "+task.id+" needs a next action and completion criteria.");for(const id of task.source_ids)assert.ok(sourceIds.has(id),"Task "+task.id+" references missing source "+id);}
for(const item of research){
 for(const key of ["title","area","status","status_label","summary","supported","limits","source_ids"])assert.ok(item[key]!==undefined&&item[key]!==null,"Research item "+item.id+" is missing "+key+".");
 assert.ok(Array.isArray(item.source_ids)&&item.source_ids.length>0,"Research item "+item.id+" needs source IDs.");
 for(const id of item.source_ids)assert.ok(sourceIds.has(id),"Research item "+item.id+" references missing source "+id+".");
}
assert.equal(objects.length,visual.records.length,"Every catalogue record must have exactly one visual inventory entry.");
assert.equal(visual.record_count,objects.length,"Visual inventory record_count must match the master catalogue.");
for(const r of visual.records){assert.ok(r.name&&r.category&&r.district&&r.address,"Visual entry "+r.record_id+" must carry catalogue identity fields.");assert.ok(Array.isArray(r.planned_shots),"Visual entry "+r.record_id+" must carry a photography plan.");}
for(const r of objects){
 for(const key of ["id","name","category","district","verification_status","sources"])assert.ok(r[key]!==undefined&&r[key]!==null,"Record "+r.id+" is missing "+key+".");
 assert.ok(Array.isArray(r.sources),"Record "+r.id+" sources must be an array.");
 for(const id of r.sources)assert.ok(sourceIds.has(id),"Record "+r.id+" references missing source "+id+".");
 if(r.parent_id)assert.ok(objectIds.has(r.parent_id),"Record "+r.id+" references missing parent "+r.parent_id+".");
 const lat=typeof r.latitude==="number",lon=typeof r.longitude==="number";
 assert.equal(lat,lon,"Record "+r.id+" must have both coordinates or neither.");
 if(lat){assert.ok(Number.isFinite(r.latitude)&&r.latitude>=-90&&r.latitude<=90,"Invalid latitude: "+r.id);assert.ok(Number.isFinite(r.longitude)&&r.longitude>=-180&&r.longitude<=180,"Invalid longitude: "+r.id);assert.notEqual(r.coordinate_status,"NOT_SET","Coordinates need provenance: "+r.id);}
 if(r.map_url){const u=new URL(r.map_url);assert.ok(["https:","http:"].includes(u.protocol),"Invalid map URL: "+r.id);assert.equal(u.searchParams.get("travelmode"),"walking","Walking link must explicitly use walking mode: "+r.id);}
}
for(const s of sources){assert.ok(s.name,"Source "+s.id+" needs a name.");if(s.source_type)assert.ok(sourceSchema.properties.source_type.enum.includes(s.source_type),"Source "+s.id+" has an unregistered source_type: "+s.source_type);if(s.url){const u=new URL(s.url);assert.ok(["https:","http:"].includes(u.protocol),"Invalid source URL: "+s.id);}}
const mapApp=read("preview/app/app.js"),serviceWorker=read("preview/service-worker.js"),rootServiceWorker=read("service-worker.js");
for(const stale of ["preview/data/objects.json","preview/data/sources.json","preview/data/visual-assets.json"])assert.ok(!fs.existsSync(path.join(root,stale)),"Remove stale duplicate data so the map cannot diverge from the canonical catalogue: "+stale);
for(const [label,url] of [["object catalogue",'const DATA_URL="../data/objects.json";'],["source registry",'const SOURCES_URL="../data/sources.json";'],["visual inventory",'const VISUALS_URL="../data/visual-assets.json";']])assert.ok(mapApp.includes(url),"Map application must use the canonical root "+label+".");
assert.ok(serviceWorker.includes('"../data/objects.json"')&&serviceWorker.includes('"../data/sources.json"')&&serviceWorker.includes('"../data/visual-assets.json"'),"App service worker must cache the canonical root data files.");
assert.ok(mapApp.includes('navigator.serviceWorker.register("../service-worker.js",{scope:"../"})'),"Map app must register the root-scoped service worker so the public homepage is controlled.");
assert.ok(rootServiceWorker.includes('"/index.html"')&&rootServiceWorker.includes('"/data/objects.json"')&&rootServiceWorker.includes('"/data/sources.json"')&&rootServiceWorker.includes('"/data/visual-assets.json"'),"Root service worker must cache the public homepage and canonical archive data.");
assert.ok(/isArchiveData=\/\\.json\$\/i/.test(rootServiceWorker),"Root service worker must correctly detect JSON archive requests.");
assert.equal(objects.length,json("data/objects.json").length,"Map and catalogue must share the same object count.");
assert.equal(sources.length,json("data/sources.json").length,"Map and catalogue must share the same source count.");
assert.equal(visual.records.length,json("data/visual-assets.json").records.length,"Map and catalogue must share the same visual inventory.");
for(const v of visual.records){
 assert.ok(objectIds.has(v.record_id),"Visual entry has no matching catalogue record: "+v.record_id);
 assert.ok(Array.isArray(v.reference_images||[]),"Reference images must be an array: "+v.record_id);
 for(const image of v.reference_images||[]){
  for(const field of ["source_id","image_url","source_url","photographer","licence","licence_url","attribution","image_role"])assert.ok(typeof image[field]==="string"&&image[field].trim(),"Image "+v.record_id+" is missing "+field+".");
  assert.ok(sourceIds.has(image.source_id),"Image "+v.record_id+" references missing image source "+image.source_id+".");
  assert.ok(["OBJECT_PHOTOGRAPH","STREET_CONTEXT"].includes(image.image_role),"Image "+v.record_id+" has an invalid image_role.");
  for(const field of ["image_url","source_url","licence_url"])assert.equal(new URL(image[field]).protocol,"https:","Image links must use HTTPS: "+v.record_id);
 }
}
for(const file of ["index.html","archive.html","my-dublin.html"]){
 const html=read(file);assert.ok(/<html[^>]+lang=/.test(html),file+" must declare a language.");assert.ok(/<meta[^>]+name="viewport"/.test(html),file+" must declare a mobile viewport.");
 const scripts=[...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)];
 for(let i=0;i<scripts.length;i++){if(/type=["']application\/ld\+json["']/i.test(scripts[i][1]))JSON.parse(scripts[i][2]);else new vm.Script(scripts[i][2],{filename:file+" inline script "+(i+1)});}
}
for(const file of ["index.html","archive.html","preview/app.html","preview/manifest.webmanifest"]){const content=read(file);assert.ok(!/CICAN\s+DUBLIN\s+ARCHIVE/i.test(content),file+" must use the CICAN DUBLIN public brand.");}
const sitemap=read("sitemap.xml"),robots=read("robots.txt");
assert.ok(sitemap.includes("https://cicangeorgealin.github.io/cican-dublin/")&&sitemap.includes("https://cicangeorgealin.github.io/cican-dublin/archive.html"),"Sitemap must include the public homepage and discovery catalogue.");
assert.ok(robots.includes("Sitemap: https://cicangeorgealin.github.io/cican-dublin/sitemap.xml"),"Robots file must advertise the sitemap.");
assert.ok(read("my-dublin.html").includes('<meta name="robots" content="noindex,follow">'),"Personal field notebook must not be indexed as a public landing page.");
const home=read("index.html");
const mapFirstHome=home.includes('id="map"')&&home.includes('<base href="./preview/">')&&home.includes('src="./app/app.js"');
if(mapFirstHome){
 assert.ok(home.includes('rel="canonical" href="https://cicangeorgealin.github.io/cican-dublin/"'),"Map-first homepage must declare the canonical root URL.");
 assert.ok(home.includes('id="search"')&&home.includes('id="discovery-panel"')&&!home.includes('.top-left,.map-legend{display:none!important}'),"Map-first homepage must expose search and discovery controls.");
}else{
 for(const id of ["homeSearch","homeDistrict","homeCount","homeGrid","homeMore","heroDiscoveryCount","heroIndexTotal"])assert.ok(home.includes('id="'+id+'"'),"Homepage missing #"+id);
 assert.ok(home.includes('Promise.all(["objects","visual-assets"]'),"Homepage must load catalogue and visual inventory.");
}
const archive=read("archive.html");
for(const id of ["gallery","detail","detailBody","search","districtFilter","categoryFilter","pageSize","pagination"])assert.ok(archive.includes('id="'+id+'"'),"Archive page missing #"+id);
assert.ok(archive.includes('Promise.all(["objects","sources","visual-assets","research"]'),"Archive must load objects, sources, visuals and research.");
assert.ok(archive.includes("function renderResearch()"),"Archive must render the evidence-graded research feed.");
assert.ok(archive.includes('id="research-feed"'),"Archive must expose the research feed.");
assert.ok(archive.includes("visualAssets=visualData"),"Archive must assign visual inventory.");
const notebook=read("my-dublin.html");
for(const id of ["photo","makeArt","save","entries"])assert.ok(notebook.includes('id="'+id+'"'),"Notebook page missing #"+id);
for(const id of ["exportBackup","importBackup","backupFile"])assert.ok(notebook.includes('id="'+id+'"'),"Notebook backup control missing #"+id);
assert.ok(notebook.includes("CICAN-MY-DUBLIN-BACKUP"),"Notebook backup format marker missing.");
console.log("ARCHIVE PREFLIGHT PASSED");
console.log(JSON.stringify({objects:objects.length,sources:sources.length,researchItems:research.length,investigationClaims:investigation.claims.length,investigationTasks:investigation.tasks.length,visualRecords:visual.records.length,referenceImages:visual.records.reduce((n,r)=>n+(r.reference_images||[]).length,0),verified:objects.filter(r=>r.verification_status==="VERIFIED").length,partiallyVerified:objects.filter(r=>r.verification_status==="PARTIALLY_VERIFIED").length},null,2));

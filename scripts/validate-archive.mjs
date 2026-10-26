import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
const root=process.cwd();
const read=file=>fs.readFileSync(path.join(root,file),"utf8");
const json=file=>JSON.parse(read(file));
const objects=json("data/objects.json"),sources=json("data/sources.json"),visual=json("data/visual-assets.json"),research=json("data/research.json");
assert.ok(Array.isArray(objects)&&objects.length>0,"Object catalogue must be a non-empty array.");
assert.ok(Array.isArray(sources)&&sources.length>0,"Source catalogue must be a non-empty array.");
assert.ok(Array.isArray(visual.records),"Visual inventory must contain a records array.");
function unique(values,label){const seen=new Set();for(const value of values){assert.ok(value,label+" contains an empty identifier.");assert.ok(!seen.has(value),label+" contains duplicate: "+value);seen.add(value);}return seen;}
const objectIds=unique(objects.map(x=>x.id),"Object IDs"),sourceIds=unique(sources.map(x=>x.id),"Source IDs"),visualIds=unique(visual.records.map(x=>x.record_id),"Visual record IDs"),researchIds=unique(research.map(x=>x.id),"Research IDs");
for(const item of research){
 for(const key of ["title","area","status","status_label","summary","supported","limits","source_ids"])assert.ok(item[key]!==undefined&&item[key]!==null,"Research item "+item.id+" is missing "+key+".");
 assert.ok(Array.isArray(item.source_ids)&&item.source_ids.length>0,"Research item "+item.id+" needs source IDs.");
 for(const id of item.source_ids)assert.ok(sourceIds.has(id),"Research item "+item.id+" references missing source "+id+".");
}
assert.equal(objects.length,visual.records.length,"Every catalogue record must have exactly one visual inventory entry.");
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
for(const s of sources){assert.ok(s.name,"Source "+s.id+" needs a name.");if(s.url){const u=new URL(s.url);assert.ok(["https:","http:"].includes(u.protocol),"Invalid source URL: "+s.id);}}
for(const v of visual.records){
 assert.ok(objectIds.has(v.record_id),"Visual entry has no matching catalogue record: "+v.record_id);
 assert.ok(Array.isArray(v.reference_images||[]),"Reference images must be an array: "+v.record_id);
 for(const image of v.reference_images||[]){
  for(const field of ["image_url","source_url","licence","attribution"])assert.ok(typeof image[field]==="string"&&image[field].trim(),"Image "+v.record_id+" is missing "+field+".");
  for(const field of ["image_url","source_url","licence_url"])if(image[field])assert.equal(new URL(image[field]).protocol,"https:","Image links must use HTTPS: "+v.record_id);
 }
}
for(const file of ["index.html","archive.html","my-dublin.html"]){
 const html=read(file);assert.ok(/<html[^>]+lang=/.test(html),file+" must declare a language.");assert.ok(/<meta[^>]+name="viewport"/.test(html),file+" must declare a mobile viewport.");
 const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];
 for(let i=0;i<scripts.length;i++)new vm.Script(scripts[i][1],{filename:file+" inline script "+(i+1)});
}
const home=read("index.html");
const mapFirstHome=home.includes('id="map"')&&home.includes('<base href="./preview/">')&&home.includes('src="./app/app.js"');
if(mapFirstHome){
 assert.ok(home.includes('rel="canonical" href="https://cicangeorgealin.github.io/cican-dublin-archive/"'),"Map-first homepage must declare the canonical root URL.");
 assert.ok(home.includes('.discovery-panel:not(.detail-open){display:none!important}'),"Map-first homepage must keep the discovery sheet hidden until a place is selected.");
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
console.log(JSON.stringify({objects:objects.length,sources:sources.length,researchItems:research.length,visualRecords:visual.records.length,referenceImages:visual.records.reduce((n,r)=>n+(r.reference_images||[]).length,0),verified:objects.filter(r=>r.verification_status==="VERIFIED").length,partiallyVerified:objects.filter(r=>r.verification_status==="PARTIALLY_VERIFIED").length},null,2));

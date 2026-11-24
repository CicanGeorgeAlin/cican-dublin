import fs from "node:fs/promises";
import assert from "node:assert/strict";
const packet=JSON.parse(await fs.readFile("audit/batch-092-five-candidate-evidence.json","utf8"));
const queue=JSON.parse(await fs.readFile("audit/niah-dublin-missing-registrations.json","utf8"));
const objects=JSON.parse(await fs.readFile("data/objects.json","utf8"));
const publicNiah=JSON.parse(await fs.readFile("data/niah-registered-objects.json","utf8"));
const sources=JSON.parse(await fs.readFile("data/sources.json","utf8"));
const visual=JSON.parse(await fs.readFile("data/visual-assets.json","utf8"));
const officialAudit=JSON.parse(await fs.readFile("audit/niah-340-official-register-audit.json","utf8"));
const normalize=v=>String(v??"").normalize("NFKD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]/g,"");
const addressKey=v=>normalize(v).replace(/ireland/g,"").replace(/countydublin/g,"");
const queueByReg=new Map();
for(const row of queue){const reg=String(row.REG_NO??"").trim();if(!queueByReg.has(reg))queueByReg.set(reg,[]);queueByReg.get(reg).push(row);}
const exactRegistrationMatches=[],exactAddressMatches=[],exactNameMatches=[],sourceIdMatches=[],proximity=[],sameBatchAddressMatches=[];
const radians=x=>x*Math.PI/180;
function distance(a,b,c,d){const R=6371000,dl=radians(c-a),dn=radians(d-b),x=Math.sin(dl/2)**2+Math.cos(radians(a))*Math.cos(radians(c))*Math.sin(dn/2)**2;return 2*R*Math.atan2(Math.sqrt(x),Math.sqrt(1-x));}
assert.equal(packet.batch,"092");
assert.equal(packet.candidates.length,5,"Batch 092 must contain exactly five candidates.");
assert.equal(new Set(packet.candidates.map(x=>x.registration)).size,5,"Candidate registrations must be unique.");
assert.ok(Array.isArray(objects)&&Array.isArray(publicNiah)&&Array.isArray(sources)&&Array.isArray(visual.records));
assert.equal(officialAudit.all_records_matched,true,"Current public NIAH register must match the official national CSV.");
for(const c of packet.candidates){
 const reg=c.registration,hits=queueByReg.get(reg)||[];
 assert.equal(hits.length,1,reg+" must occur exactly once in the refreshed official missing-registration queue.");
 const row=hits[0];
 assert.equal(String(row["LOCAL_AUTHORITY�"]??"").trim(),"Dublin City Council",reg+" is not a Dublin City Council record.");
 assert.equal(String(row.COUNTY??"").trim().toUpperCase(),"DUBLIN",reg+" is not in County Dublin.");
 assert.equal(String(row.NAME??""),c.csv_name,reg+" CSV NAME must be preserved verbatim.");
 assert.equal(String(row.NUMBER??""),c.csv_number,reg+" CSV NUMBER must be preserved verbatim.");
 assert.equal(String(row.STREET1??""),c.street1,reg+" CSV STREET1 must match.");
 assert.equal(String(row.STREET2??""),c.street2,reg+" CSV STREET2 must match.");
 assert.equal(String(row.TOWN??""),c.town,reg+" CSV TOWN must match.");
 assert.equal(Number(row.ITM_E),c.itm_e,reg+" CSV ITM_E must match.");
 assert.equal(Number(row.ITM_N),c.itm_n,reg+" CSV ITM_N must match.");
 assert.equal(Number(row.LATITUDE),c.latitude,reg+" CSV latitude must match.");
 assert.equal(Number(row.LONGITUDE),c.longitude,reg+" CSV longitude must match.");
 assert.equal(c.page_verified,true,reg+" individual NIAH page has not been verified.");
 const url=new URL(c.official_page);assert.equal(url.protocol,"https:");assert.equal(url.hostname,"www.buildingsofireland.ie");
 assert.ok(c.description&&!c.description.includes("\uFFFD"),reg+" description has missing/corrupt text.");
 assert.ok(c.appraisal&&!c.appraisal.includes("\uFFFD"),reg+" appraisal has missing/corrupt text.");
 assert.ok(Number.isFinite(c.latitude)&&Number.isFinite(c.longitude)&&Number.isFinite(c.itm_e)&&Number.isFinite(c.itm_n));
 assert.ok(c.latitude>=51&&c.latitude<=56&&c.longitude>=-11&&c.longitude<=-5);
 assert.ok(c.display_address&&c.display_name);
 if(objects.some(x=>String(x.national_inventory_reference??"").trim()===reg)||publicNiah.some(x=>String(x.national_inventory_reference??"").trim()===reg))exactRegistrationMatches.push({registration:reg});
 const akey=addressKey(c.display_address),nkey=normalize(c.display_name);
 for(const x of objects){
  if(x.address&&addressKey(x.address)===akey)exactAddressMatches.push({registration:reg,archive_id:x.id,name:x.name,address:x.address});
  if(x.name&&normalize(x.name)===nkey)exactNameMatches.push({registration:reg,archive_id:x.id,name:x.name,address:x.address??null});
  if(typeof x.latitude==="number"&&typeof x.longitude==="number"){
   const metres=distance(c.latitude,c.longitude,x.latitude,x.longitude);
   if(metres<=30)proximity.push({registration:reg,archive_id:x.id,name:x.name,address:x.address??null,distance_m:Math.round(metres*10)/10});
  }
 }
 const sourceId="NIAH-"+reg;
 if(sources.some(x=>x.id===sourceId))sourceIdMatches.push({registration:reg,source_id:sourceId});
 for(const other of packet.candidates){
  if(other.registration>reg&&addressKey(other.display_address)===akey)sameBatchAddressMatches.push({registration:reg,related_registration:other.registration,address:c.display_address});
 }
}
const blocking=exactRegistrationMatches.length||exactAddressMatches.length||sourceIdMatches.length||sameBatchAddressMatches.length;
const knownDistinctNeighbours={
 "50010254":[
  {archive_id:"DUB-BLD-0006",niah_registration:"50010218",decision:"KNOWN_DISTINCT_NEIGHBOUR",evidence:"Official NIAH 50010218 is 23 Marlborough Street, a terraced two-bay four-storey late eighteenth-century house. Candidate 50010254 is the separately registered corner-sited three-bay former townhouse at 14 North Earl Street / Marlborough Street."},
  {archive_id:"DUB-BLD-0333",niah_registration:"50010242",decision:"KNOWN_DISTINCT_NEIGHBOUR",evidence:"Official NIAH 50010242 is 89 Marlborough Street, a terraced four-bay four-storey stucco-fronted house built c.1820. Candidate 50010254 is the separately registered corner-sited three-bay former townhouse at 14 North Earl Street / Marlborough Street."}
 ]
};
const unresolvedProximity=proximity.filter(p=>!(knownDistinctNeighbours[p.registration]||[]).some(n=>n.archive_id===p.archive_id&&n.decision==="KNOWN_DISTINCT_NEIGHBOUR"));
const report={
 batch:"092",generated_at:new Date().toISOString(),
 decision:blocking?"HOLD":unresolvedProximity.length?"READY_FOR_MANUAL_PROXIMITY_REVIEW":"READY_FOR_INDEPENDENT_REVIEW",
 queue:{entries:queue.length,selected_registrations:packet.candidates.map(x=>x.registration),all_five_present_exactly_once:true},
 held_candidates:packet.held_candidates,
 catalogues:{master_object_count:objects.length,public_niah_count:publicNiah.length,source_count:sources.length,visual_record_count:visual.records.length,official_register_audit_matches:officialAudit.all_records_matched},
 duplicate_screen:{exact_registration_matches:exactRegistrationMatches,exact_address_matches:exactAddressMatches,exact_name_matches:exactNameMatches,source_id_matches:sourceIdMatches,same_batch_address_matches:sameBatchAddressMatches},
 coordinate_proximity_review:proximity.sort((a,b)=>a.registration.localeCompare(b.registration)||a.distance_m-b.distance_m).map(p=>({...p,known_distinct_neighbours:knownDistinctNeighbours[p.registration]||[]})),
 manual_review:{unresolved_proximity_count:unresolvedProximity.length,requires_individual_identity_comparison:unresolvedProximity.length>0,reviewed_neighbours:packet.manual_proximity_review},
 source_anomalies:packet.source_controls,
 safeguards:["Queue membership is required; numeric sequence alone is not evidence.","National CSV ITM (EPSG:2157) and WGS84 coordinates remain separate.","Raw page coordinate pairs are retained separately and no CRS is inferred.","CSV NAME and NUMBER values are preserved verbatim even when blank or malformed.","No candidate is imported, assigned a permanent archive ID, or published by this research batch.","Nearby records are reported for manual identity review; proximity alone is not a duplicate."]
};
await fs.writeFile("audit/batch-092-candidate-reconciliation.json",JSON.stringify(report,null,2)+"\n");
console.log(JSON.stringify({decision:report.decision,queue:report.queue,catalogues:report.catalogues,duplicate_screen:report.duplicate_screen,nearby_count:proximity.length,unresolved_proximity_count:unresolvedProximity.length},null,2));
if(blocking)throw new Error("Batch 092 has a blocking exact duplicate/provenance conflict; see reconciliation report.");

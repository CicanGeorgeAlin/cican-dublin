import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const app = fs.readFileSync(new URL("../preview/app/app.js", import.meta.url), "utf8");

function distanceAndBearing(a,b) {
  const rad = n => n * Math.PI / 180;
  const dLat = rad(b.latitude-a.latitude), dLon = rad(b.longitude-a.longitude);
  const lat1 = rad(a.latitude), lat2 = rad(b.latitude);
  const h = Math.sin(dLat/2)**2 + Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLon/2)**2;
  const distance = 6371000*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h));
  const y = Math.sin(dLon)*Math.cos(lat2);
  const x = Math.cos(lat1)*Math.sin(lat2)-Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
  return {distance,bearing:(Math.atan2(y,x)*180/Math.PI+360)%360};
}
function projectedPoint(latitude,longitude,distance,bearing) {
  const rad=n=>n*Math.PI/180,deg=n=>n*180/Math.PI,angular=distance/6371000,angle=rad(bearing),lat1=rad(latitude),lon1=rad(longitude);
  const lat2=Math.asin(Math.sin(lat1)*Math.cos(angular)+Math.cos(lat1)*Math.sin(angular)*Math.cos(angle));
  const lon2=lon1+Math.atan2(Math.sin(angle)*Math.sin(angular)*Math.cos(lat1),Math.cos(angular)-Math.sin(lat1)*Math.sin(lat2));
  return {latitude:deg(lat2),longitude:((deg(lon2)+540)%360)-180};
}
const start=app.indexOf("function routeCumulativeDistances");
const end=app.indexOf("\nfunction followNavigationCamera",start);
assert.ok(start>=0&&end>start,"route progress functions must exist");
const context={liveDistanceAndBearing:distanceAndBearing,liveProjectedPoint:projectedPoint};
vm.createContext(context);
vm.runInContext(app.slice(start,end),context);

test("route cumulative distances include each segment and produce a total geometry length",()=>{
  const coordinates=[[0,0],[0.001,0],[0.002,0]];
  const cumulative=context.routeCumulativeDistances(coordinates);
  assert.equal(cumulative.length,3);
  assert.ok(cumulative[1]>100&&cumulative[1]<115);
  assert.ok(cumulative[2]>200&&cumulative[2]<230);
});

test("GPS projection returns fractional progress between route vertices",()=>{
  const coordinates=[[0,0],[0.002,0],[0.004,0]];
  const cumulative=context.routeCumulativeDistances(coordinates);
  const point={latitude:0.0001,longitude:0.001};
  const progress=context.nearestRouteProgress(point,coordinates,cumulative,0);
  assert.equal(progress.index,0);
  assert.ok(progress.along>100&&progress.along<120);
  assert.ok(progress.progressMetres>100&&progress.progressMetres<120);
  assert.ok(progress.distance<12);
});

test("route matching can be constrained to the current progress window",()=>{
  const coordinates=[[0,0],[0.001,0],[0.002,0],[0.003,0]];
  const cumulative=context.routeCumulativeDistances(coordinates);
  const point={latitude:0,longitude:0.0005};
  const progress=context.nearestRouteProgress(point,coordinates,cumulative,1);
  assert.ok(progress.index>=1,"GPS matching must not jump behind the allowed progress window");
});

test("Stage 2 uses monotonic metre-based progress for turn distance and ETA",()=>{
  assert.match(app,/route\.progressMetres=Math\.max\(route\.progressMetres\|\|0,progress\.progressMetres\)/);
  assert.match(app,/cumulativeDistances,geometryMetres/);
  assert.match(app,/const nextTurnMetres=Math\.max\(0,\(cumulative\[maneuverPoint\]\|\|0\)-route\.progressMetres\)/);
  assert.match(app,/route\.seconds\*remainingRatio/);
  assert.doesNotMatch(app,/routeDistanceBetween\(route\.coordinates/);
});

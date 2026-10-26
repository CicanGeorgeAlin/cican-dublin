const CACHE="cican-dublin-app-v40";
const CACHE_PREFIX="cican-dublin-app-";
const SHELL=["./app.html","./app/app.css","./app/app.js","./manifest.webmanifest","../data/objects.json","../data/sources.json","../data/visual-assets.json","./assets/favicon.svg","./assets/cican-emblem.svg"];
const SHELL_PATHS=new Set(SHELL.map(path=>new URL(path,self.registration.scope).pathname));

self.addEventListener("install",event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(cache=>cache.addAll(SHELL))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate",event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(
        keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE)
          .map(key=>caches.delete(key))
      ))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",event=>{
  const request=event.request;
  const url=new URL(request.url);
  if(request.method!=="GET"||url.origin!==self.location.origin||!SHELL_PATHS.has(url.pathname))return;
  event.respondWith(
    caches.open(CACHE).then(async cache=>{
      const isData=url.pathname.endsWith(".json");
      if(isData){
        try{
          const fresh=await fetch(request,{cache:"no-store"});
          if(fresh.ok)await cache.put(request,fresh.clone());
          return fresh;
        }catch(error){
          const cached=await cache.match(request);
          return cached||Response.error();
        }
      }
      const cached=await cache.match(request);
      if(cached)return cached;
      try{
        const fresh=await fetch(request);
        if(fresh.ok)await cache.put(request,fresh.clone());
        return fresh;
      }catch(error){return Response.error();}
    })
  );
});

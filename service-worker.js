const CACHE="cican-dublin-root-v1";
const CACHE_PREFIX="cican-dublin-root-";
const SHELL=[
  "./",
  "./index.html",
  "./preview/app.html",
  "./preview/app/app.css",
  "./preview/app/app.js",
  "./preview/manifest.webmanifest",
  "./preview/assets/favicon.svg",
  "./preview/assets/cican-emblem.svg",
  "./data/objects.json",
  "./data/sources.json",
  "./data/visual-assets.json"
];
const SHELL_PATHS=new Set(SHELL.map(path=>new URL(path,self.registration.scope).pathname));
const HOME_URL=new URL("./",self.registration.scope).toString();
const INDEX_URL=new URL("./index.html",self.registration.scope).toString();

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
      const isArchiveData=/\.json$/i.test(url.pathname);
      const isNavigation=request.mode==="navigate";
      if(isArchiveData||isNavigation){
        try{
          const fresh=await fetch(request,{cache:"no-cache"});
          if(fresh.ok)await cache.put(request,fresh.clone());
          if(fresh.ok)return fresh;
          const cached=await cache.match(request);
          if(cached)return cached;
          if(isNavigation)return (await cache.match(HOME_URL))||(await cache.match(INDEX_URL))||fresh;
          return fresh;
        }catch(error){
          const cached=await cache.match(request);
          if(cached)return cached;
          if(isNavigation)return (await cache.match(HOME_URL))||(await cache.match(INDEX_URL))||Response.error();
          return Response.error();
        }
      }
      const cached=await cache.match(request);
      if(cached)return cached;
      try{
        const fresh=await fetch(request);
        if(fresh.ok)await cache.put(request,fresh.clone());
        return fresh;
      }catch(error){
        return Response.error();
      }
    })
  );
});

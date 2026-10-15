/* Nocturne : fonctionne hors ligne. Change le numéro de version pour forcer une mise à jour. */
const CACHE='nocturne-v2';
const SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET')return;
  const u=new URL(r.url);
  const ok=u.origin===location.origin||u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com';
  if(!ok)return;
  e.respondWith((async()=>{
    const c=await caches.open(CACHE);
    const hit=await c.match(r,{ignoreSearch:true});
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone());return res}).catch(()=>null);
    if(hit){e.waitUntil(net);return hit}
    const res=await net;
    if(res)return res;
    return r.mode==='navigate'?((await c.match('index.html'))||Response.error()):Response.error();
  })());
});

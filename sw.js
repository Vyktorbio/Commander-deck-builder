/* Commander: funciona sem internet depois da primeira visita.
   O app vem da rede quando possível (para receber atualizações) e do cache quando não.
   Imagens de cartas, fontes e o leitor de texto do scanner ficam guardados depois do primeiro uso. */
const SHELL='commander-shell-v1',RUNTIME='commander-runtime-v1';
const FILES=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(SHELL).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==SHELL&&k!==RUNTIME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
const CACHE_FIRST=/^https:\/\/(cards\.scryfall\.io|fonts\.gstatic\.com|fonts\.googleapis\.com|cdn\.jsdelivr\.net)\//;
async function trim(){const c=await caches.open(RUNTIME);const keys=await c.keys();if(keys.length>900)for(const k of keys.slice(0,keys.length-800))await c.delete(k);}
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin===self.location.origin){
    e.respondWith(fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(SHELL).then(c=>c.put(req,copy));}return res;}).catch(()=>caches.match(req).then(r=>r||caches.match('index.html'))));
    return;
  }
  if(CACHE_FIRST.test(req.url)){
    e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{if(res.ok||res.type==='opaque'){const copy=res.clone();caches.open(RUNTIME).then(c=>c.put(req,copy)).then(trim);}return res;})));
  }
});

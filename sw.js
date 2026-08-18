const CACHE_NAME='laokhoa-v8-3-clean-ui-20260819';
const CORE=[
  './','./index.html','./quiz.html','./drugs.html','./geriatric.html',
  './app.css','./ui-v83.css','./update.js','./nav-v82.js','./progress.js',
  './content-v82.js','./quiz-v82.js','./drugs-v82.js','./geriatric-v82.js',
  './manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'
];
self.addEventListener('install',e=>e.waitUntil(
  caches.open(CACHE_NAME)
    .then(c=>Promise.all(CORE.map(u=>c.add(u).catch(()=>null))))
    .then(()=>self.skipWaiting())
));
self.addEventListener('activate',e=>e.waitUntil(
  caches.keys()
    .then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim())
));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const u=new URL(e.request.url);
  if(u.origin!==self.location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(r=>{
        if(r && r.status===200){
          const cp=r.clone();
          caches.open(CACHE_NAME).then(c=>c.put(e.request,cp));
        }
        return r;
      })
      .catch(()=>caches.match(e.request).then(x=>x||caches.match('./index.html')))
  );
});
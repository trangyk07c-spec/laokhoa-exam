const CACHE_NAME='laokhoa-v8-20260818-1';
const CORE=['./','./index.html','./quiz.html','./geriatric.html','./lesson.html','./app.css','./progress.js','./update.js','./quiz-v8.js','./extra-lessons.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./data/content-version.json','./data/questions.json','./data/guidelines.json','./data/scales.json','./data/extra-lessons.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const u=new URL(e.request.url); if(u.origin!==self.location.origin)return;
 const dynamic=/\.(html|json|js|css)$/.test(u.pathname)||u.pathname.endsWith('/');
 if(dynamic){
   e.respondWith(fetch(e.request).then(r=>{if(r&&r.status===200){const cp=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,cp));}return r;}).catch(()=>caches.match(e.request).then(x=>x||caches.match('./index.html'))));
 }else{
   e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{if(r&&r.status===200){const cp=r.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,cp));}return r;})));
 }
});

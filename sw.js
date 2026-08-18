const CACHE='laokhoa-v7-stable-20260818';
const ASSETS=["./index.html",
"./than.html",
"./dai-thao-duong.html",
"./gout.html",
"./suy-giap.html",
"./tang-huyet-ap.html",
"./benh-mach-vanh.html",
"./stent.html",
"./roi-loan-lipid.html",
"./chinh-lieu-than.html",
"./tuong-tac-thuoc.html",
"./cap-cuu.html",
"./suy-thuong-than.html",
"./loang-xuong.html",
"./tao-bon.html",
"./tieu-chay.html",
"./nguon.html",
"./quiz.html",
"./app.css",
"./progress.js",
"./quiz.js",
"./manifest.webmanifest",
"./icon-192.png",
"./icon-512.png",
"./apple-touch-icon.png"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.origin!==location.origin)return;const isPage=e.request.mode==='navigate'||u.pathname.endsWith('.html')||u.pathname.endsWith('/');if(isPage){e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r;}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));}else{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{const c=n.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return n;})));}});
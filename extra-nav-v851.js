
(async()=>{try{
 const r=await fetch('extra-lessons.json?t='+Date.now(),{cache:'no-store'});if(!r.ok)return;
 const d=await r.json(),a=(d.lessons||[]).filter(x=>x&&x.slug&&x.title);if(!a.length)return;
 const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
 const html='<div class="v851-extra-group"><div class="v851-extra-title">Bài bổ sung</div>'+a.map(x=>'<a class="v83-nav-item" href="lesson.html?topic='+encodeURIComponent(x.slug)+'"><span class="v83-nav-dot"></span><span class="v83-nav-text">'+esc(x.title)+'</span></a>').join('')+'</div>';
 document.querySelectorAll('.v83-tree').forEach(tree=>{const host=tree.querySelector('.v83-section:first-of-type .v83-section-body');if(host&&!host.querySelector('.v851-extra-group'))host.insertAdjacentHTML('beforeend',html)});
}catch(e){}})();
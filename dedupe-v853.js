(()=>{function run(){
 const p=(document.body.dataset.page||location.pathname.split('/').pop()||'').split('?')[0];
 const full=document.querySelector('.v85-complete');
 const core=document.querySelector('[data-v84-core]');
 if(full&&core){
   const cards=[...core.querySelectorAll('.v84-card')];
   const mech=cards.find(c=>/cơ chế/i.test(c.querySelector('h3')?.textContent||''))||cards[0];
   const diag=cards.find(c=>/tiêu chuẩn chẩn đoán|xác lập chẩn đoán/i.test(c.querySelector('h3')?.textContent||''));
   if(diag)diag.remove();
   if(mech&&full.parentElement!==core){
     const grid=core.querySelector('.v84-grid');
     if(grid)grid.insertBefore(full,mech.nextSibling);
   }
 }
 const canonical=full||core;
 if(!canonical)return;
 // On pages where V8.5 has the complete criteria, remove only later legacy "diagnosis/criteria" blocks.
 if(full){
   const start=canonical.closest('section')||canonical;
   document.querySelectorAll('.card,.v84-section').forEach(el=>{
     if(el===canonical||el.contains(canonical)||canonical.contains(el))return;
     const h=el.querySelector(':scope > h2,:scope > h3');
     if(!h)return;
     const t=(h.textContent||'').toLowerCase();
     if(/chẩn đoán phân biệt/.test(t))return;
     if(/tiêu chuẩn chẩn đoán|chẩn đoán đái tháo đường|chẩn đoán gout|chẩn đoán tăng huyết áp|chẩn đoán suy giáp|chẩn đoán loãng xương|rome iv/.test(t)){
       el.style.display='none';
       el.dataset.deduped='1';
     }
   });
 }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,120),{once:true});else setTimeout(run,120);
})();
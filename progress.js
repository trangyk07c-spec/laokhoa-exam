(()=> {
  const PAGE=document.body.dataset.page||'',KEY='laokhoa.v7.done';
  let done={};try{done=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){}
  const b=document.getElementById('doneBtn');
  if(b){
    const paint=()=>{b.classList.toggle('done',!!done[PAGE]);b.textContent=done[PAGE]?'✓ Đã học — bấm để bỏ đánh dấu':'Đánh dấu đã học'};
    paint(); b.onclick=()=>{done[PAGE]=!done[PAGE];localStorage.setItem(KEY,JSON.stringify(done));paint()}
  }
  const style=(href,key)=>{if(document.querySelector('link[data-v854="'+key+'"]'))return;const l=document.createElement('link');l.rel='stylesheet';l.href=href;l.dataset.v854=key;document.head.appendChild(l)};
  const load=(src,id)=>{if(document.querySelector('script[data-v854="'+id+'"]'))return;const s=document.createElement('script');s.src=src;s.dataset.v854=id;document.body.appendChild(s)};
  style('ui-v83.css?v=854','ui83');
  style('ui-v84.css?v=854','ui84');
  style('standards-v85.css?v=854','v85');
  style('hotfix-v851.css?v=854','hotfix');
  style('emergency-v852.css?v=854','emergency');
  style('optimizer-v854.css?v=854','optimizer');

  load('nav-v82.js?v=854','nav');
  load('lesson-augment-v84.js?v=854','augment');
  load('standards-v85.js?v=854','standards');
  setTimeout(()=>load('optimizer-v854.js?v=854','optimizer'),180);
})();
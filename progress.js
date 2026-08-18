(()=> {
  const PAGE=document.body.dataset.page||'';
  const KEY='laokhoa.v7.done';
  let done={};try{done=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){}
  const b=document.getElementById('doneBtn');
  if(b){
    const paint=()=>{b.classList.toggle('done',!!done[PAGE]);b.textContent=done[PAGE]?'✓ Đã học — bấm để bỏ đánh dấu':'Đánh dấu đã học';};
    paint();
    b.onclick=()=>{done[PAGE]=!done[PAGE];localStorage.setItem(KEY,JSON.stringify(done));paint();document.querySelectorAll('[data-page="'+PAGE+'"]').forEach(a=>a.classList.toggle('done',!!done[PAGE]));};
  }
  function load(src,id){
    if(document.querySelector('script[data-v85="'+id+'"]'))return;
    const s=document.createElement('script');s.src=src;s.dataset.v85=id;document.body.appendChild(s);
  }
  load('nav-v82.js?v=84','nav');
  load('lesson-augment-v84.js?v=84','augment');
  if(!document.querySelector('link[data-v85-style]')){
    const l=document.createElement('link');l.rel='stylesheet';l.href='standards-v85.css?v=85';l.dataset.v85Style='1';document.head.appendChild(l);
  }
  load('standards-v85.js?v=85','standards');
})();
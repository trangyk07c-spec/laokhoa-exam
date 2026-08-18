
(()=> {
 const PAGE=document.body.dataset.page||'',KEY='laokhoa.v7.done';let done={};try{done=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){}
 const b=document.getElementById('doneBtn');if(b){const paint=()=>{b.classList.toggle('done',!!done[PAGE]);b.textContent=done[PAGE]?'✓ Đã học — bấm để bỏ đánh dấu':'Đánh dấu đã học'};paint();b.onclick=()=>{done[PAGE]=!done[PAGE];localStorage.setItem(KEY,JSON.stringify(done));paint()}}
 const load=(src,id)=>{if(document.querySelector('script[data-v851="'+id+'"]'))return;const s=document.createElement('script');s.src=src;s.dataset.v851=id;document.body.appendChild(s)};
 load('shell-fix-v851.js?v=851','shell');
 load('nav-v82.js?v=84','nav');
 load('lesson-augment-v84.js?v=84','augment');
 load('standards-v85.js?v=85','standards');
 setTimeout(()=>load('extra-nav-v851.js?v=851','extras'),80);
})();
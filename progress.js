
(()=>{const PAGE=document.body.dataset.page||'';const KEY='laokhoa.v7.done';let done={};try{done=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){}
document.querySelectorAll('.nav-link[data-page]').forEach(a=>{if(done[a.dataset.page])a.classList.add('done');if(a.dataset.page===PAGE)a.classList.add('active')});
const b=document.getElementById('doneBtn');if(b){const paint=()=>{b.classList.toggle('done',!!done[PAGE]);b.textContent=done[PAGE]?'✓ Đã học — bấm để bỏ đánh dấu':'Đánh dấu đã học'};paint();b.onclick=()=>{done[PAGE]=!done[PAGE];localStorage.setItem(KEY,JSON.stringify(done));paint();document.querySelectorAll('.nav-link[data-page="'+PAGE+'"]').forEach(a=>a.classList.toggle('done',!!done[PAGE]));};}
})();

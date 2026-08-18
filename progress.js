(()=> {
  const PAGE = document.body.dataset.page || '';
  const KEY = 'laokhoa.v7.done';
  let done = {};
  try{ done = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; }catch(e){}

  const b = document.getElementById('doneBtn');
  if(b){
    const paint = () => {
      b.classList.toggle('done', !!done[PAGE]);
      b.textContent = done[PAGE] ? '✓ Đã học — bấm để bỏ đánh dấu' : 'Đánh dấu đã học';
    };
    paint();
    b.onclick = () => {
      done[PAGE] = !done[PAGE];
      localStorage.setItem(KEY, JSON.stringify(done));
      paint();
      document.querySelectorAll('[data-page="'+PAGE+'"]').forEach(a => a.classList.toggle('done', !!done[PAGE]));
    };
  }

  // Lesson pages in the older shell did not load the hierarchical navigation.
  // Load the shared V8.3 shell here so every lesson gets the same clean menu.
  if(!window.__laokhoaNavLoaded && !document.querySelector('script[data-laokhoa-v83-nav]')){
    const s = document.createElement('script');
    s.src = 'nav-v82.js?v=83';
    s.dataset.laokhoaV83Nav = '1';
    document.body.appendChild(s);
  }
})();
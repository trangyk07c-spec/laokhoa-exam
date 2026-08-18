
(()=> {
  if(window.__v854Optimized) return;
  window.__v854Optimized = true;

  const page=(document.body.dataset.page||location.pathname.split('/').pop()||'').split('?')[0];
  const isLesson = !['quiz.html','drugs.html','geriatric.html','nguon.html','lesson.html'].includes(page);
  if(!isLesson) return;

  const norm = s => String(s||'')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[–—:;,.!?()[\]0-9]/g,' ')
    .replace(/\s+/g,' ').trim();

  const getHeading = el => el.querySelector(':scope > h1,:scope > h2,:scope > h3,:scope > h4')?.textContent || '';

  const semantic = txt => {
    const t=norm(txt);
    if(/co che|sinh ly benh|benh sinh/.test(t)) return 'mechanism';
    if(/tieu chuan chan doan|chan doan xac dinh|xac lap chan doan|phan loai|phan do|phan tang|giai doan/.test(t) && !/chan doan phan biet/.test(t)) return 'diagnosis';
    if(/tiep can|quy trinh|flow|so do|algorithm/.test(t)) return 'approach';
    if(/dieu tri|xu tri|quan ly|management/.test(t)) return 'treatment';
    if(/lao khoa|nguoi cao tuoi|nguoi ≥60|nguoi >=60/.test(t)) return 'geriatrics';
    if(/thuoc|ke toa|lieu dung/.test(t)) return 'drugs';
    if(/bay thi|mcq|diem chot|neu ngay mai thi|can nho/.test(t)) return 'exam';
    return null;
  };

  // Prefer canonical new blocks over legacy content.
  const priority = el => {
    if(el.classList.contains('v85-complete')) return 100;
    if(el.closest('[data-v84-core]')) return 90;
    if(el.classList.contains('v84-section')) return 80;
    if(el.classList.contains('card')) return 50;
    return 10;
  };

  const sections=[...document.querySelectorAll(
    '.v85-complete, [data-v84-core] .v84-card, .v84-section, .lesson-page > .card, article > .card'
  )];

  const groups={};
  for(const el of sections){
    const key=semantic(getHeading(el));
    if(!key) continue;
    (groups[key]??=[]).push(el);
  }

  // Hide duplicates, keep the highest-priority/most-complete block.
  for(const [key,arr] of Object.entries(groups)){
    const ranked=arr.slice().sort((a,b)=>{
      const p=priority(b)-priority(a);
      if(p) return p;
      return (b.textContent||'').length-(a.textContent||'').length;
    });
    const keep=ranked[0];
    keep.dataset.v854Canonical=key;
    ranked.slice(1).forEach(el=>{
      // Never hide differential diagnosis or a clearly distinct complication section.
      const h=norm(getHeading(el));
      if(/chan doan phan biet/.test(h)) return;
      el.hidden=true;
      el.dataset.v854Hidden=key;
    });
  }

  // In Clinical Core, if full V8.5 criteria exists, hide its smaller diagnosis card.
  const complete=document.querySelector('.v85-complete');
  if(complete){
    const core=document.querySelector('[data-v84-core]');
    if(core){
      [...core.querySelectorAll('.v84-card')].forEach(c=>{
        if(semantic(getHeading(c))==='diagnosis' && !c.contains(complete)){
          c.hidden=true;
          c.dataset.v854Hidden='diagnosis';
        }
      });
      const grid=core.querySelector('.v84-grid');
      const mech=[...core.querySelectorAll('.v84-card')].find(c=>semantic(getHeading(c))==='mechanism');
      if(grid && complete.parentElement!==grid){
        if(mech) mech.insertAdjacentElement('afterend',complete);
        else grid.prepend(complete);
      }
    }
  }

  // Add a compact lesson outline based on what survived.
  const order=[
    ['mechanism','Cơ chế'],
    ['diagnosis','Chẩn đoán & phân độ'],
    ['approach','Tiếp cận bệnh nhân'],
    ['treatment','Điều trị / xử trí'],
    ['geriatrics','Điểm lão khoa'],
    ['drugs','Thuốc'],
    ['exam','Bẫy thi']
  ];
  const present=order.filter(([k])=>document.querySelector(`[data-v854-canonical="${k}"]`));
  if(present.length>=3 && !document.querySelector('.v854-outline')){
    const hero=document.querySelector('.v84-page-hero,.hero,[data-v84-core] .v84-core-header');
    const nav=document.createElement('div');
    nav.className='v854-outline';
    nav.innerHTML='<b>Cấu trúc bài:</b>'+present.map(([k,l])=>`<span>${l}</span>`).join('');
    if(hero) hero.insertAdjacentElement('afterend',nav);
  }

  // Clean duplicate version/update banners inside lesson content.
  const banners=[...document.querySelectorAll('.update-banner.show')];
  banners.slice(1).forEach(x=>x.remove());

  // Fix legacy flow text glued to title.
  document.querySelectorAll('.flow .node').forEach(node=>{
    const strong=node.querySelector(':scope > strong');
    if(!strong) return;
    strong.style.display='block';
    strong.style.marginBottom='8px';
  });

  document.documentElement.classList.add('v854-optimized');
})();
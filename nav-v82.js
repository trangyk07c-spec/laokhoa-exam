(()=> {
  if(window.__laokhoaNavLoaded) return;
  window.__laokhoaNavLoaded=true;
  if(!document.querySelector('link[data-v84-style]')){
    const l=document.createElement('link');l.rel='stylesheet';l.href='ui-v84.css?v=84';l.dataset.v84Style='1';document.head.appendChild(l);
  }
  const page=(document.body.dataset.page||location.pathname.split('/').pop()||'index.html').split('?')[0]||'index.html';
  const qs=new URLSearchParams(location.search);
  const ico=(label)=>`<span class="nav-ico">${label}</span>`;
  const groups=[
    {id:'learn',label:'Học lý thuyết',icon:'▣',items:[
      {label:'Tư duy ca đa bệnh',href:'index.html'},
      {label:'Thận',children:[
        ['Tổn thương thận cấp','aki.html'],
        ['Bệnh thận mạn','than.html'],
        ['Chỉnh liều theo thận','chinh-lieu-than.html']
      ]},
      {label:'Tim mạch',children:[
        ['Tăng huyết áp','tang-huyet-ap.html'],['Bệnh mạch vành mạn','benh-mach-vanh.html'],
        ['Sau đặt stent','stent.html'],['Rối loạn lipid','roi-loan-lipid.html']
      ]},
      {label:'Nội tiết',children:[
        ['Đái tháo đường típ 2','dai-thao-duong.html'],['Suy giáp','suy-giap.html'],['Suy thượng thận','suy-thuong-than.html']
      ]},
      {label:'Cơ xương khớp',children:[['Gout','gout.html'],['Loãng xương','loang-xuong.html']]},
      {label:'Tiêu hóa',children:[['Táo bón','tao-bon.html'],['Tiêu chảy','tieu-chay.html']]},
      {label:'Cấp cứu & đa thuốc',children:[['Tình huống cấp cứu','cap-cuu.html'],['Tương tác thuốc','tuong-tac-thuoc.html']]},
      {label:'Bản đồ nguồn',href:'nguon.html'}
    ]},
    {id:'drugs',label:'Thuốc lão khoa',icon:'Rx',href:'drugs.html',items:[
      {label:'Đái tháo đường',href:'drugs.html?group=diabetes'},{label:'Tăng HA & tim mạch',href:'drugs.html?group=cardio'},
      {label:'Kháng huyết khối & lipid',href:'drugs.html?group=vascular'},{label:'Gout & loãng xương',href:'drugs.html?group=bone'},
      {label:'Nội tiết',href:'drugs.html?group=endocrine'},{label:'Tiêu hóa',href:'drugs.html?group=gi'}
    ]},
    {id:'geri',label:'Mục tiêu & thang điểm',icon:'◎',href:'geriatric.html',items:[
      {label:'Mục tiêu HbA1c',href:'geriatric.html#diabetes-target'},{label:'Mục tiêu huyết áp',href:'geriatric.html#bp-target'},
      {label:'4AT & nhận thức',href:'geriatric.html#delirium'},{label:'ADL · IADL · suy yếu',href:'geriatric.html#scales'}
    ]},
    {id:'quiz',label:'MCQ',icon:'?',href:'quiz.html',items:[
      {label:'Chẩn đoán',href:'quiz.html?task=dx'},{label:'Cận lâm sàng tiếp theo',href:'quiz.html?task=next'},
      {label:'Điều trị / xử trí',href:'quiz.html?task=tx'},{label:'Ca đa bệnh lý theo chuỗi',href:'quiz.html?mode=series'},
      {label:'Ôn câu sai',href:'quiz.html?mode=wrong'},{label:'Chưa làm',href:'quiz.html?mode=unanswered'}
    ]}
  ];
  const clean=h=>(h||'').split('?')[0].split('#')[0],esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const groupActive=g=>g.id==='learn'?!['drugs.html','geriatric.html','quiz.html','lesson.html'].includes(page):clean(g.href)===page;
  function active(href){
    if(clean(href)!==page)return false;
    const u=new URL(href,location.href);
    if(page==='drugs.html'&&u.searchParams.has('group'))return qs.get('group')===u.searchParams.get('group');
    if(page==='quiz.html'&&[...u.searchParams].length)return [...u.searchParams].every(([k,v])=>qs.get(k)===v);
    if(u.hash)return location.hash===u.hash;
    return !u.search&&!u.hash;
  }
  const link=it=>`<a class="v83-nav-item${active(it.href)?' active':''}" href="${it.href}" data-page="${clean(it.href)}"><span class="v83-nav-dot"></span><span class="v83-nav-text">${esc(it.label)}</span></a>`;
  const item=it=>{
    if(!it.children)return link(it);
    const open=it.children.some(x=>clean(x[1])===page);
    return `<details class="v83-subgroup"${open?' open':''}><summary>${ico('•')}<span>${esc(it.label)}</span><span class="v83-chevron">⌄</span></summary><div class="v83-subchildren">${it.children.map(x=>link({label:x[0],href:x[1]})).join('')}</div></details>`;
  };
  const group=g=>`<details class="v83-section${groupActive(g)?' active':''}"${groupActive(g)?' open':''}><summary class="v83-section-head">${ico(g.icon)}<span class="v83-section-label">${esc(g.label)}</span><span class="v83-chevron">⌄</span></summary><div class="v83-section-body">${g.href?link({label:'Tổng quan',href:g.href}):''}${g.items.map(item).join('')}</div></details>`;
  const menu=groups.map(group).join('');
  const sb=document.querySelector('.sidebar');
  if(sb)sb.innerHTML=`<div class="v83-brand"><div class="v83-logo">◉</div><div><h1>Lão khoa<br>Deep Learning</h1><p>Chẩn đoán · xử trí · kê toa</p></div></div><div class="v83-version">V8.4 · CLINICAL CORE</div><nav class="v83-tree">${menu}</nav>`;
  const mob=document.querySelector('.mobile-nav');
  if(mob)mob.innerHTML=`<details class="v83-mobile-shell"><summary><span>☰</span><b>Mục lục học tập</b><span>⌄</span></summary><div class="v83-mobile-menu v83-tree">${menu}</div></details>`;
  try{const done=JSON.parse(localStorage.getItem('laokhoa.v7.done')||'{}')||{};document.querySelectorAll('[data-page]').forEach(a=>{if(done[a.dataset.page])a.classList.add('done')})}catch(e){}
})();
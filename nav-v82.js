(()=> {
  if (window.__laokhoaNavLoaded) return;
  window.__laokhoaNavLoaded = true;

  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = 'ui-v83.css?v=83';
  style.id = 'ui-v83-style';
  if (!document.getElementById(style.id)) document.head.appendChild(style);

  const page = (document.body.dataset.page || location.pathname.split('/').pop() || 'index.html').split('?')[0] || 'index.html';
  const qs = new URLSearchParams(location.search);

  const svg = (name) => {
    const common = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
    const icons = {
      logo: `<svg ${common}><path d="M9 3.5a6 6 0 1 0 6 6"/><path d="M9 6.5a3 3 0 1 0 3 3"/><path d="M15 3v5"/><path d="M12.5 5.5h5"/><path d="M14.5 14.5c1.5 0 2.5 1 2.5 2.5v.5a3 3 0 0 0 6 0V16"/><circle cx="20" cy="13.5" r="1.5"/></svg>`,
      book: `<svg ${common}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H6.5A2.5 2.5 0 0 0 4 18.5z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H14v16a3 3 0 0 1 3-3h.5a2.5 2.5 0 0 1 2.5 2.5z"/></svg>`,
      kidney: `<svg ${common}><path d="M9.5 4.5C6.2 3.4 3.5 6 3.5 9.8c0 4.2 2.3 7.2 5.6 7.2 2.6 0 3.4-2.1 3.4-4.3V8.8c0-2.1-1.1-3.6-3-4.3z"/><path d="M14.5 4.5c3.3-1.1 6 1.5 6 5.3 0 4.2-2.3 7.2-5.6 7.2-2.6 0-3.4-2.1-3.4-4.3"/></svg>`,
      heart: `<svg ${common}><path d="M20.8 4.6c-2.1-2.1-5.5-2.1-7.6 0L12 5.8l-1.2-1.2a5.37 5.37 0 0 0-7.6 7.6L12 21l8.8-8.8a5.37 5.37 0 0 0 0-7.6z"/><path d="M3.5 12h4l1.5-3 3 6 2-4 1 2h5.5"/></svg>`,
      endocrine: `<svg ${common}><path d="M9 3h6"/><path d="M12 3v5"/><path d="M8 8h8l2 4-6 9-6-9z"/><path d="M9.5 12h5"/></svg>`,
      bone: `<svg ${common}><path d="M6.8 8.2a2.5 2.5 0 1 1-3.5-3.5 2.5 2.5 0 0 1 3.5 0l10.4 10.4a2.5 2.5 0 1 1 3.5 3.5 2.5 2.5 0 0 1-3.5 0L6.8 8.2z"/><path d="M4.6 6.9 3.2 8.3"/><path d="m20.8 15.7-1.4 1.4"/></svg>`,
      gi: `<svg ${common}><path d="M8 3v5c0 2 1 3 3 3h2c2 0 3 1 3 3v1c0 3-2 5-5 5H9c-3 0-5-2-5-5v-2"/><path d="M12 3v4"/><path d="M16 4v5"/></svg>`,
      emergency: `<svg ${common}><path d="M12 3v18"/><path d="M3 12h18"/><circle cx="12" cy="12" r="9"/></svg>`,
      pill: `<svg ${common}><path d="M8.5 4.5a4.24 4.24 0 0 1 6 0l5 5a4.24 4.24 0 0 1-6 6l-5-5a4.24 4.24 0 0 1 0-6z"/><path d="m9.5 11.5 6-6"/></svg>`,
      target: `<svg ${common}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4"/><path d="M22 12h-4"/><path d="M12 22v-4"/><path d="M2 12h4"/></svg>`,
      brain: `<svg ${common}><path d="M9.5 4.5A3.5 3.5 0 0 0 6 8v.4A3.5 3.5 0 0 0 4.5 15 3.5 3.5 0 0 0 8 18.5H9"/><path d="M14.5 4.5A3.5 3.5 0 0 1 18 8v.4A3.5 3.5 0 0 1 19.5 15a3.5 3.5 0 0 1-3.5 3.5H15"/><path d="M9 4.5v15"/><path d="M15 4.5v15"/><path d="M9 9H6"/><path d="M15 9h3"/><path d="M9 15H6"/><path d="M15 15h3"/></svg>`,
      compass: `<svg ${common}><circle cx="12" cy="12" r="9"/><path d="m15 9-2 4-4 2 2-4z"/></svg>`,
      source: `<svg ${common}><path d="M4 4h16v16H4z"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h5"/></svg>`,
      chevron: `<svg ${common}><path d="m8 10 4 4 4-4"/></svg>`,
      menu: `<svg ${common}><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>`,
      search: `<svg ${common}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>`,
      shuffle: `<svg ${common}><path d="M16 3h5v5"/><path d="M4 20 21 3"/><path d="M21 16v5h-5"/><path d="m15 15 6 6"/><path d="M4 4l5 5"/></svg>`,
      refresh: `<svg ${common}><path d="M20 6v5h-5"/><path d="M4 18v-5h5"/><path d="M6.1 9A7 7 0 0 1 18 6l2 5"/><path d="M17.9 15A7 7 0 0 1 6 18l-2-5"/></svg>`
    };
    return icons[name] || icons.compass;
  };

  const groups = [
    {
      id:'learn', icon:'book', label:'Học lý thuyết',
      items:[
        {icon:'compass', label:'Tư duy ca đa bệnh', href:'index.html'},
        {icon:'kidney', label:'Thận', children:[
          ['Tổn thương thận cấp','than.html#aki'],
          ['Bệnh thận mạn','than.html#ckd'],
          ['Chỉnh liều theo thận','chinh-lieu-than.html']
        ]},
        {icon:'heart', label:'Tim mạch', children:[
          ['Tăng huyết áp','tang-huyet-ap.html'],
          ['Bệnh mạch vành mạn','benh-mach-vanh.html'],
          ['Sau đặt stent','stent.html'],
          ['Rối loạn lipid máu','roi-loan-lipid.html']
        ]},
        {icon:'endocrine', label:'Nội tiết', children:[
          ['Đái tháo đường típ 2','dai-thao-duong.html'],
          ['Suy giáp','suy-giap.html'],
          ['Suy thượng thận','suy-thuong-than.html']
        ]},
        {icon:'bone', label:'Cơ xương khớp', children:[
          ['Gout','gout.html'],
          ['Loãng xương','loang-xuong.html']
        ]},
        {icon:'gi', label:'Tiêu hóa', children:[
          ['Táo bón','tao-bon.html'],
          ['Tiêu chảy','tieu-chay.html']
        ]},
        {icon:'emergency', label:'Cấp cứu & đa thuốc', children:[
          ['Tình huống cấp cứu','cap-cuu.html'],
          ['Tương tác thuốc','tuong-tac-thuoc.html']
        ]},
        {icon:'source', label:'Bản đồ nguồn', href:'nguon.html'}
      ]
    },
    {
      id:'drugs', icon:'pill', label:'Thuốc lão khoa', href:'drugs.html',
      items:[
        {label:'Đái tháo đường', href:'drugs.html?group=diabetes'},
        {label:'Tăng HA & tim mạch', href:'drugs.html?group=cardio'},
        {label:'Kháng huyết khối & lipid', href:'drugs.html?group=vascular'},
        {label:'Gout & loãng xương', href:'drugs.html?group=bone'},
        {label:'Nội tiết', href:'drugs.html?group=endocrine'},
        {label:'Tiêu hóa', href:'drugs.html?group=gi'}
      ]
    },
    {
      id:'geri', icon:'target', label:'Mục tiêu & thang điểm', href:'geriatric.html',
      items:[
        {label:'Mục tiêu HbA1c', href:'geriatric.html#diabetes-target'},
        {label:'Mục tiêu huyết áp', href:'geriatric.html#bp-target'},
        {label:'4AT & nhận thức', href:'geriatric.html#delirium'},
        {label:'ADL · IADL · suy yếu', href:'geriatric.html#scales'}
      ]
    },
    {
      id:'quiz', icon:'brain', label:'MCQ', href:'quiz.html',
      items:[
        {label:'Chẩn đoán', href:'quiz.html?task=dx'},
        {label:'Cận lâm sàng tiếp theo', href:'quiz.html?task=next'},
        {label:'Điều trị / xử trí', href:'quiz.html?task=tx'},
        {label:'Ca đa bệnh lý theo chuỗi', href:'quiz.html?mode=series'},
        {label:'Ôn câu sai', href:'quiz.html?mode=wrong'},
        {label:'Chưa làm', href:'quiz.html?mode=unanswered'}
      ]
    }
  ];

  const cleanHref = h => (h || '').split('?')[0].split('#')[0];
  const escapeHtml = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  function ensureRenalAnchors(){
    if(page !== 'than.html') return;
    const article = document.querySelector('.lesson-page');
    if(article && !document.getElementById('aki')) article.id = 'aki';
    [...document.querySelectorAll('.card h3')].forEach(h => {
      const t = h.textContent.toLowerCase();
      if(t.includes('bệnh thận mạn')){
        const card = h.closest('.card');
        if(card) card.id = 'ckd';
      }
    });
  }

  const groupIsActive = g => {
    if(g.id === 'learn') return !['drugs.html','geriatric.html','quiz.html','lesson.html'].includes(page);
    return cleanHref(g.href) === page;
  };

  const linkIsActive = href => {
    if(cleanHref(href) !== page) return false;
    const u = new URL(href, location.href);
    if(page === 'drugs.html' && u.searchParams.has('group')) return qs.get('group') === u.searchParams.get('group');
    if(page === 'quiz.html' && [...u.searchParams].length){
      return [...u.searchParams].every(([k,v]) => qs.get(k) === v);
    }
    if(u.hash) return location.hash === u.hash;
    return !u.search && !u.hash;
  };

  const navLink = (item, nested=false) => `
    <a class="v83-nav-item${nested?' is-nested':''}${linkIsActive(item.href)?' active':''}"
       href="${item.href}" data-page="${cleanHref(item.href)}">
      <span class="v83-nav-dot"></span>
      <span class="v83-nav-text">${escapeHtml(item.label)}</span>
    </a>`;

  const subGroup = item => {
    if(!item.children) return navLink(item, true);
    const open = item.children.some(x => cleanHref(x[1]) === page);
    return `
      <details class="v83-subgroup"${open?' open':''}>
        <summary>
          <span class="v83-subicon">${svg(item.icon || 'compass')}</span>
          <span>${escapeHtml(item.label)}</span>
          <span class="v83-chevron">${svg('chevron')}</span>
        </summary>
        <div class="v83-subchildren">
          ${item.children.map(x => navLink({label:x[0],href:x[1]}, true)).join('')}
        </div>
      </details>`;
  };

  const topGroup = g => {
    const active = groupIsActive(g);
    return `
      <details class="v83-section${active?' active':''}"${active?' open':''}>
        <summary class="v83-section-head">
          <span class="v83-section-icon">${svg(g.icon)}</span>
          <span class="v83-section-label">${escapeHtml(g.label)}</span>
          <span class="v83-chevron">${svg('chevron')}</span>
        </summary>
        <div class="v83-section-body">
          ${g.href ? navLink({label:'Tổng quan',href:g.href}, true) : ''}
          ${g.items.map(subGroup).join('')}
        </div>
      </details>`;
  };

  const menu = groups.map(topGroup).join('');

  function paintShell(){
    ensureRenalAnchors();

    const sidebar = document.querySelector('.sidebar');
    if(sidebar){
      sidebar.innerHTML = `
        <div class="v83-brand">
          <div class="v83-logo">${svg('logo')}</div>
          <div>
            <h1>Lão khoa<br>Deep Learning</h1>
            <p>Chẩn đoán · xử trí · kê toa</p>
          </div>
        </div>
        <div class="v83-version">V8.3 · CLEAN UI</div>
        <nav class="v83-tree">${menu}</nav>`;
    }

    const mobile = document.querySelector('.mobile-nav');
    if(mobile){
      mobile.innerHTML = `
        <details class="v83-mobile-shell">
          <summary>
            <span class="v83-mobile-icon">${svg('menu')}</span>
            <b>Mục lục học tập</b>
            <span class="v83-chevron">${svg('chevron')}</span>
          </summary>
          <div class="v83-mobile-menu v83-tree">${menu}</div>
        </details>`;
    }

    // Remove emoji-only decorative glyphs that render inconsistently across devices.
    document.querySelectorAll('.hero-orb').forEach(el => {
      const name = page === 'quiz.html' ? 'brain' : page === 'drugs.html' ? 'pill' : page === 'geriatric.html' ? 'target' : 'book';
      el.innerHTML = svg(name);
      el.classList.add('v83-orb');
    });
    document.querySelectorAll('.kicker').forEach(el => {
      el.textContent = el.textContent.replace(/^[\u2600-\u27BF\u{1F300}-\u{1FAFF}]\uFE0F?\s*/u,'').trim();
    });

    const random = document.getElementById('randomBtn');
    if(random) random.innerHTML = `${svg('shuffle')}<span>Trộn câu</span>`;
    const refresh = document.getElementById('checkUpdate');
    if(refresh) refresh.innerHTML = `${svg('refresh')}<span>Kiểm tra cập nhật</span>`;

    // Better search icon without font/emoji dependency.
    const searchWrap = document.querySelector('.search-wrap');
    if(searchWrap){
      const lead = searchWrap.querySelector('span');
      if(lead) lead.innerHTML = svg('search');
    }

    // Preserve learned-state markers.
    try{
      const done = JSON.parse(localStorage.getItem('laokhoa.v7.done') || '{}') || {};
      document.querySelectorAll('.v83-nav-item[data-page]').forEach(a => {
        if(done[a.dataset.page]) a.classList.add('done');
      });
    }catch(e){}
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', paintShell, {once:true});
  else paintShell();

  // If #aki/#ckd is opened from navigation before anchors existed, scroll after anchors are assigned.
  setTimeout(() => {
    if(location.hash){
      const target = document.querySelector(location.hash);
      if(target) target.scrollIntoView({block:'start'});
    }
  }, 60);
})();
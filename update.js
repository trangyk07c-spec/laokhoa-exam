(()=> {
  const addStyle=(href,key)=>{
    if(document.querySelector(`link[data-${key}]`)) return;
    const l=document.createElement('link');
    l.rel='stylesheet';
    l.href=href;
    l.setAttribute(`data-${key}`,'1');
    document.head.appendChild(l);
  };
  const loadScript=(src,key)=>new Promise((ok,fail)=>{
    if(document.querySelector(`script[data-${key}]`)) return ok();
    const s=document.createElement('script');
    s.src=src;
    s.setAttribute(`data-${key}`,'1');
    s.onload=ok;
    s.onerror=fail;
    document.head.appendChild(s);
  });

  // CRITICAL: the nav uses .v83-* classes. Load all shell styles BEFORE nav.
  addStyle('ui-v83.css?v=852','v852-ui83');
  addStyle('ui-v84.css?v=852','v852-ui84');
  addStyle('standards-v85.css?v=852','v852-v85');
  addStyle('hotfix-v851.css?v=852','v852-hotfix');

  async function boot(){
    try{
      await loadScript('nav-v82.js?v=852','v852-nav');
    }catch(e){}
    try{
      await loadScript('extra-nav-v851.js?v=852','v852-extra-nav');
    }catch(e){}

    // Remove legacy inline/sidebar styles after the shared nav is mounted.
    document.documentElement.classList.add('v852-ready');

    let v=null;
    try{
      const r=await fetch('content-version.json?v='+Date.now(),{cache:'no-store'});
      if(r.ok) v=await r.json();
    }catch(e){}
    const el=document.querySelector('.update-banner');
    if(el){
      el.classList.add('show');
      el.innerHTML='<b>V8.5.2</b> · Giao diện ổn định để ôn thi';
    }
  }
  boot();
})();
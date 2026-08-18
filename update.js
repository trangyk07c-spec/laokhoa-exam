(()=>{
  const KEY='laokhoa.v8.contentVersion';
  async function check(){
    try{
      const r=await fetch('data/content-version.json?t='+Date.now(),{cache:'no-store'});
      if(!r.ok) return;
      const v=await r.json();
      const old=localStorage.getItem(KEY);
      const el=document.querySelector('.update-banner');
      if(el){
        el.classList.add('show');
        el.innerHTML='<b>V'+v.app_version+'</b> · '+v.message+(old&&old!==v.content_version?' · <strong>Nội dung mới đã được tải.</strong>':'');
      }
      localStorage.setItem(KEY,v.content_version);
    }catch(e){}
  }
  check();
})();

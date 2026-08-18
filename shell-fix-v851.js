
(()=>{const add=(href,key)=>{if(document.querySelector('link[data-v851="'+key+'"]'))return;const l=document.createElement('link');l.rel='stylesheet';l.href=href;l.dataset.v851=key;document.head.appendChild(l)};
add('ui-v83.css?v=83','ui83');
add('ui-v84.css?v=84','ui84');
add('standards-v85.css?v=85','standards');
add('hotfix-v851.css?v=851','hotfix');
})();
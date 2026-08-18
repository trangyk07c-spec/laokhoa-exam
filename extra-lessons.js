(()=>{
 const box=document.getElementById('extraLessons'); if(!box) return;
 fetch('data/extra-lessons.json?t='+Date.now(),{cache:'no-store'}).then(r=>r.json()).then(d=>{
   const a=d.lessons||[];
   if(!a.length){box.innerHTML='<p style="color:var(--muted)">Chưa có mặt bệnh bổ sung. Khi thêm một bệnh mới vào kho dữ liệu, nó sẽ tự xuất hiện ở đây mà không cần tạo lại app.</p>';return;}
   box.innerHTML=a.map(x=>`<a class="extra-lesson-card" href="lesson.html?topic=${encodeURIComponent(x.slug)}"><b>${x.title}</b><div style="color:var(--muted);font-size:13px;margin-top:4px">${x.summary||''}</div></a>`).join('');
 }).catch(()=>{box.innerHTML='<p>Không tải được danh mục mặt bệnh bổ sung.</p>'});
})();

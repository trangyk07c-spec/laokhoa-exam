V8.5.1
Lỗi sidebar: nav dùng class V8.3 nhưng bài TTTC/BTM không nạp ui-v83.css. Patch này nạp đủ CSS và khóa sidebar 300px.

Upload ROOT:
- hotfix-v851.css
- shell-fix-v851.js
- extra-nav-v851.js
- progress.js (ghi đè)
- lesson.html (ghi đè)
- sw.js (ghi đè)

Sau patch: bài mới chỉ cần thêm vào extra-lessons.json; nav tự hiện dưới “Bài bổ sung”.
Nếu thêm MCQ cho bài mới: sửa thêm questions.json.
Nếu thêm thuốc: sửa thêm drugs.json.

Hiện ChatGPT GitHub connector đọc được repo nhưng ghi file vẫn bị GitHub trả 403, nên chưa thể tự push trực tiếp.

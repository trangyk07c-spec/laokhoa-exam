V8.5.2 EMERGENCY FIX — dùng để ôn thi sáng

Nguyên nhân lỗi:
- update.js cũ gọi nav trước khi nạp ui-v83.css.
- nav dùng class .v83-* nên sidebar nhìn như HTML thô và phình cực lớn.

UPLOAD ROOT 3 FILE:
1. update.js — ghi đè
2. emergency-v852.css — mới
3. sw.js — ghi đè

Sau commit, mở:
https://trangyk07c-spec.github.io/laokhoa-exam/?v=852

Nếu đang mở app cài ở màn hình chính:
- đóng hẳn app
- mở link trên bằng Safari/Chrome một lần
- refresh 1 lần
- sau đó mở lại icon app

Patch này KHÔNG đụng nội dung bài, MCQ, thuốc hay tiến độ.

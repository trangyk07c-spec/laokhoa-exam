LÃO KHOA V8 — DATA UPDATE ARCHITECTURE

1) Bài học cũ vẫn là các trang HTML ổn định.
2) MCQ được chuyển sang data/questions.json; quiz.html + quiz-v8.js chỉ là giao diện/engine.
3) Mục tiêu lão khoa và nguồn hướng dẫn nằm ở data/guidelines.json.
4) Thang đánh giá nằm ở data/scales.json.
5) Mặt bệnh thêm sau này có thể đưa vào data/extra-lessons.json; lesson.html sẽ tự hiển thị theo slug.
6) data/content-version.json dùng để báo phiên bản mới.
7) Service worker dùng network-first cho HTML/JSON/JS/CSS để tránh giữ bản cũ.

Khi chỉ thêm câu hỏi: thay data/questions.json + bump data/content-version.json.
Khi chỉ sửa guideline/mục tiêu: thay data/guidelines.json + bump version.
Khi thêm mặt bệnh mới dạng động: thêm object vào data/extra-lessons.json; không cần tạo lại app shell.

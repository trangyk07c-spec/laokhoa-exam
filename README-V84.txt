LÃO KHOA DEEP LEARNING — V8.4 CLINICAL CORE

LÝ DO BẢN NÀY:
1) Fix lỗi chữ flowchart dính bằng cách sửa cả DOM, không chỉ CSS.
2) Tách Tổn thương thận cấp thành aki.html riêng.
3) than.html nay là Bệnh thận mạn riêng.
4) Mỗi bài bệnh chính được thêm "Clinical Core" bắt buộc:
   - Cơ chế sinh lý bệnh bằng đoạn văn
   - Tiêu chuẩn chẩn đoán/cách xác lập chẩn đoán
   - Flow tiếp cận bệnh nhân theo thứ tự
   - Điểm lão khoa làm thay đổi quyết định
5) Giữ nguyên nội dung cũ phía dưới, MCQ và Drug Center không bị xóa.

UPLOAD TẤT CẢ 7 FILE VÀO ROOT REPO:
- aki.html (mới)
- than.html (ghi đè)
- ui-v84.css (mới)
- lesson-augment-v84.js (mới)
- nav-v82.js (ghi đè)
- progress.js (ghi đè)
- sw.js (ghi đè)

Sau commit, mở:
https://trangyk07c-spec.github.io/laokhoa-exam/aki.html?v=84

Kiểm tra:
- Học lý thuyết > Thận > Tổn thương thận cấp
- Học lý thuyết > Thận > Bệnh thận mạn
- Mở Đái tháo đường / Gout / Tăng huyết áp: ngay dưới hero phải có "LỚP KIẾN THỨC BẮT BUỘC".

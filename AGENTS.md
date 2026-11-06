# Cafe Smart — Quy tắc làm việc

1. GitHub repo là nguồn sự thật duy nhất (Source of Truth); kiểm tra source/branch trước khi sửa.
2. Backend **PHP thuần theo MVC**. Không dùng Laravel, Symfony, CodeIgniter hoặc backend framework khác.
3. Model dùng PDO prepared statements; Controller điều phối; View không truy vấn SQL trực tiếp.
4. React/3D chỉ gọi API PHP, không kết nối DB trực tiếp.
5. AI chỉ nhận dữ liệu đã được PHP kiểm tra quyền. Không cho LLM chạy SQL tùy ý.
6. Dữ liệu mẫu phải ghi rõ là dữ liệu demo, không nhận là dữ liệu quán thật.
7. Không commit `.env`, khóa API, mật khẩu hoặc dữ liệu nhạy cảm.
8. Làm việc trên `feature/*`; chỉ merge vào `dev`/`main` sau review, không force push.
9. Chạy lint / syntax / build / test phù hợp trước khi báo hoàn thành; báo kết quả thực tế.
10. Ưu tiên nghiệp vụ quản trị cốt lõi trước 3D và AI; tránh overengineering.

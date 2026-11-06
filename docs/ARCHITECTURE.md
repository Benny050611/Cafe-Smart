# Cafe Smart — Architecture v0.1

## PHP thuần MVC
`GET /` → `backend/public/index.php` (front controller) → Router → HomeController → PHP View.

`GET /api/health` → Router → HealthController → JSON.

Định hướng nghiệp vụ: Controller → Service → Model → PDO → MySQL. Không truy vấn SQL trong View. Không dùng Laravel.

## React client + Three.js
Frontend React/Vite là client riêng; gọi API PHP. React Three Fiber dựng quán, các trạng thái bàn/quầy lấy từ DTO backend. PHP Views vẫn có trong skeleton; cần đối chiếu yêu cầu giảng viên trước khi quyết định giao diện chính.

## AI (dự kiến)
PHP xác thực và lấy dữ liệu nghiệp vụ cho phép → gọi Ollama/Qwen → trả kết quả có cấu trúc. Không cho model quyền trực tiếp chạy SQL hoặc ghi DB.

## Cần thực hiện trước khi dùng dữ liệu thật
Auth và role-based access; CSRF cho form; validate input; session cookie bảo mật; password_hash/password_verify; audit logs và xử lý lỗi API. **Skeleton hiện chưa có những chức năng này.**

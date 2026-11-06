# Cafe Smart ☕

Đồ án nền tảng quản trị vận hành quán cà phê — **PHP thuần MVC**, MySQL, React/TypeScript và định hướng không gian quán 3D + trợ lý AI.

> **Trạng thái:** Bộ khung khởi tạo. Chưa có các chức năng quản lý quán, AI hoặc 3D hoàn chỉnh.

## Công nghệ
- Backend: PHP thuần (không Laravel), tự xây dựng MVC, PDO + MySQL.
- Frontend: React + TypeScript + Vite.
- 3D: Three.js / React Three Fiber; asset GLB từ Blender hoặc AI.
- AI (dự kiến): Ollama + Qwen, qua PHP API đã phân quyền.

## Chạy backend
Yêu cầu PHP >= 8.2 (khuyến nghị PHP 8.4). Tại thư mục gốc:

```bash
php -S 127.0.0.1:8000 -t backend/public backend/public/router.php
```

Truy cập http://127.0.0.1:8000/ (PHP View) hoặc http://127.0.0.1:8000/api/health (JSON).

## Chạy frontend
Yêu cầu Node.js >= 20.19:

```bash
cd frontend
npm install
npm run dev
```

Mở http://127.0.0.1:5173. Vite proxy `/api` sang PHP server cổng 8000.

## Cấu trúc dự án
```text
backend/
  app/Controllers/    # Xử lý request
  app/Models/         # Tương tác DB bằng PDO
  app/Views/          # PHP Views (đáp ứng MVC thuần)
  app/Services/       # Nghiệp vụ và tích hợp AI
  app/Core/           # Router, Controller, Database, View, Env
  routes/             # Web và API routes
  public/             # Front controller: index.php
  database/           # migrations, seeds
frontend/src/
  features/           # dashboard, three-d, ai, orders, inventory, staff
  components/         # UI dùng chung
assets/models/         # GLB từ Blender/AI 3D
docs/                  # Kiến trúc, tài liệu
AGENTS.md              # Quy tắc cộng tác
```

## Nguyên tắc nhóm
- `main`: phiên bản đã review; `dev`: nhánh tích hợp; `feature/*`: nhánh nhiệm vụ.
- Không commit file `.env`, mật khẩu hoặc dữ liệu cá nhân.
- Ưu tiên luồng bàn → đơn hàng → pha chế → thanh toán, sau đó nối dữ liệu 3D và AI.
- Xác minh yêu cầu chấm điểm về PHP Views trước khi chuyển toàn bộ màn hình sang React.

**Lưu ý:** Repository đang ở chế độ public theo cấu hình chủ repo; kiểm tra quyền trước khi đăng dữ liệu hoặc asset có bản quyền.

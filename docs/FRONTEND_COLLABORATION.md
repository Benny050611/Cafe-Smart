# Cafe Smart — Frontend Team Contract (v0.1)

## 1. Stack & scope
Một frontend React 19 + TypeScript + Vite; Tailwind CSS v4, React Router.
Backend PHP thuần MVC, thông qua /api. Không truy cập DB trực tiếp từ React.
Three.js/R3F/Drei đã có trong skeleton. Các thư viện khác (shadcn/ui,
Recharts, React Hook Form/Zod, GSAP/ScrollTrigger, Zustand, TanStack Query)
được thêm khi feature thực sự cần, tránh cài sẵn rồi không dùng.

## 2. Quyền sở hữu
- Landing: frontend/src/features/landing/** — bạn Landing Page
- Traditional: frontend/src/features/traditional/** — Huy
- 3D: frontend/src/features/office-3d/** — người phụ trách AI/3D
- AI: frontend/src/features/ai-workspace/** — người phụ trách AI/3D
- Chung: frontend/src/app/**, frontend/src/components/**, frontend/src/shared/**,
  frontend/src/styles.css, frontend/package.json — thay đổi phải trao đổi trước.

## 3. Hợp đồng routes
- /                        => Landing Page
- /dashboard               => 3D Office + AI chat (đang placeholder)
- /branches/:branchId      => Traditional Overview
- /branches/:branchId/hr   => Human Resources
- /branches/:branchId/accounting => Accounting
- /branches/:branchId/business   => Business

Traditional App của một chi nhánh có header/sidebar riêng. Trong giai đoạn
sau, AI Workspace là đường truy cập song song từ Dashboard, không nhất thiết
đồng nhất layout với Traditional App.
Không sửa router chung hoặc tên route nếu chưa thống nhất với cả nhóm.

## 4. Contract component & data
- Component thuần nhận props có TypeScript types; không hardcode branchId.
- Các widget UI tái sử dụng được (KPI, Chart, Table, Form) để ở components/.
- Tất cả mock data phải ghi rõ là giả lập.
- PHP xác thực và kiểm tra quyền trên từng API, không tin branchId do client gửi.
- UI hoạt động độc lập với AI; hành động ghi dữ liệu qua API có validation.
- Không thêm package nếu feature chưa cần; nếu thay package.json phải thông báo.

## 5. Git workflow
- main: nhánh ổn định; dev: tích hợp sau review.
- Tạo nhánh từ dev: feature/landing-page, feature/traditional-ui,
  feature/office3d-aiworkspace, hoặc feature/<task-ngan>.
- Chỉ commit lên feature branch; KHÔNG push thẳng main/dev, không force push.
- Mở PR về dev, mô tả thay đổi, ảnh/video preview khi có UI.
- Người khác review + build/test trước khi merge. Mỗi PR chỉ nên có một phạm vi rõ ràng.
- Trước khi mở PR: đồng bộ dev, giải quyết conflict trên feature branch.
- Không commit .env, secret, file lớn hoặc asset không có quyền sử dụng.

## 6. Cách chạy & kiểm tra
Tại frontend/: npm install; npm run dev; npm run build.
Backend: chạy PHP MVC ở cổng 8000; Vite proxy /api.
Test smoke: mở /, /dashboard, /branches/a, /branches/a/hr,
 /branches/a/accounting, /branches/a/business và một URL không tồn tại (404).
Route placeholders không phải chức năng đã hoàn thành.

## 7. Bàn giao đầu tiên
- Landing: thay LandingPage placeholder, không đụng router chung.
- Huy: thay Overview placeholder bằng bản Figma, sau đó ba module còn lại.
- AI/3D: thay OfficeDashboardPage placeholder bằng scene và chat shell.
- Sau khi review, tích hợp ở dev rồi mới tạo dữ liệu backend thật.

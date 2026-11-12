# Traditional App
Owner: Huy.
Shared route: `/branches/:branchId` với các module con `hr`, `accounting`, `business`.
Huy có thể thay thế các trang placeholder trong `pages/` và bố cục `TraditionalLayout.tsx`.
Sử dụng `branchId` trong route để chọn dữ liệu theo chi nhánh, nhưng backend PHP bắt buộc kiểm tra quyền truy cập.
Tách KPI, bảng, biểu đồ và form có thể tái sử dụng vào `src/components/` theo hợp đồng props thống nhất với người phụ trách AI.

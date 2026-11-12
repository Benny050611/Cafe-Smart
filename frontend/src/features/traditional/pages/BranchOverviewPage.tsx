import { useParams } from 'react-router';

export function BranchOverviewPage() {
  const { branchId } = useParams();
  return (
    <>
      <h2 className="text-xl font-semibold">Tổng quan chi nhánh {branchId?.toUpperCase()}</h2>
      <p className="mt-3 text-slate-600">
        Màn hình placeholder. Huy sẽ triển khai KPI, biểu đồ và bộ lọc từ Figma bằng mock data.
      </p>
    </>
  );
}

import { Link } from 'react-router';
import { BackendHealth } from '../../../shared/components/BackendHealth';

// Placeholder only: no actual GLB scene or AI calls in this scaffold.
const demoBranches = [
  { id: 'a', label: 'Chi nhánh A' },
  { id: 'b', label: 'Chi nhánh B' },
  { id: 'c', label: 'Chi nhánh C' },
];

export function OfficeDashboardPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 p-6">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Cafe Smart — Dashboard</h1>
        <Link className="text-sm underline" to="/">Landing Page</Link>
      </header>
      <section className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold">Văn phòng 3D — Chưa triển khai</h2>
        <p className="mt-2 text-sm text-slate-600">
          Các nút dưới đây chỉ mô phỏng việc chọn robot chi nhánh.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {demoBranches.map((branch) => (
            <Link
              key={branch.id}
              className="rounded-lg border border-slate-300 bg-white px-4 py-3 hover:bg-orange-50"
              to={'/branches/' + branch.id}
            >
              {branch.label}
            </Link>
          ))}
        </div>
      </section>
      <section className="rounded-xl border border-dashed border-slate-300 p-6">
        <h2 className="font-semibold">AI Chat & Dynamic Workspace — Chưa triển khai</h2>
        <p className="mt-2 text-sm text-slate-600">Phần này thuộc người phụ trách AI-Native UI.</p>
      </section>
      <BackendHealth />
    </main>
  );
}

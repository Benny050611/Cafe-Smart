import { NavLink, Outlet, useParams, Link } from 'react-router';

const modules = [
  { path: '', label: 'Tổng quan', end: true },
  { path: 'hr', label: 'Nhân sự', end: false },
  { path: 'accounting', label: 'Kế toán', end: false },
  { path: 'business', label: 'Kinh doanh', end: false },
];

export function TraditionalLayout() {
  const { branchId } = useParams<{ branchId: string }>();

  if (!branchId) return <p>Chưa chọn chi nhánh.</p>;

  const root = '/branches/' + encodeURIComponent(branchId);

  return (
    <main className="min-h-screen bg-slate-50 p-5">
      <div className="mx-auto max-w-7xl">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-slate-500">Cafe Smart / Chi nhánh {branchId.toUpperCase()}</p>
            <h1 className="text-2xl font-semibold">Traditional App</h1>
          </div>
          <Link className="rounded-lg border border-slate-300 px-4 py-2 text-sm" to="/dashboard">
            Trở về Dashboard
          </Link>
        </header>
        <div className="grid gap-5 md:grid-cols-[200px_minmax(0,1fr)]">
          <nav className="flex flex-wrap gap-2 self-start rounded-xl border bg-white p-3 md:flex-col" aria-label="Module chi nhánh">
            {modules.map(({ path, label, end }) => (
              <NavLink
                key={label}
                end={end}
                to={path ? root + '/' + path : root}
                className={({ isActive }) =>
                  'rounded-lg px-3 py-2 text-sm ' +
                  (isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100')
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <section className="min-w-0 rounded-xl border bg-white p-5">
            <Outlet context={{ branchId }} />
          </section>
        </div>
      </div>
    </main>
  );
}

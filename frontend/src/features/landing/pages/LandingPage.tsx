import { Link } from 'react-router';

// Placeholder only. Landing Page owner replaces this screen, not the router.
export function LandingPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-5 px-6">
      <p className="text-sm font-medium uppercase tracking-widest text-orange-600">Cafe Smart</p>
      <h1 className="text-4xl font-semibold text-slate-900">Landing Page</h1>
      <p className="max-w-lg text-slate-600">
        Giao diện tạm để kiểm tra routing. Landing Page chính sẽ do thành viên phụ trách triển khai.
      </p>
      <Link className="w-fit rounded-lg bg-slate-900 px-5 py-3 text-white" to="/dashboard">
        Vào Dashboard 3D
      </Link>
    </main>
  );
}

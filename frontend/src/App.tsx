import { useEffect, useState } from 'react';

type Health = { status: string; app: string; backend: string };

export default function App() {
  const [health, setHealth] = useState('Đang kiểm tra kết nối PHP...');

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/health', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.json() as Promise<Health>;
      })
      .then((data) => setHealth(data.status === 'ok' ? 'PHP MVC API đã kết nối' : 'API phản hồi bất thường'))
      .catch(() => {
        if (!controller.signal.aborted) setHealth('Chưa kết nối được API PHP');
      });
    return () => controller.abort();
  }, []);

  return (
    <main style={{ fontFamily: 'system-ui', background: '#191817', color: '#f6eee7', minHeight: '100vh', padding: '3rem' }}>
      <h1 style={{ color: '#ffad68' }}>☕ Cafe Smart</h1>
      <p>Nền tảng quản trị quán cà phê — React Workspace (skeleton)</p>
      <p>{health}</p>
      <p>Module 3D và AI sẽ được triển khai sau khi thống nhất nghiệp vụ.</p>
    </main>
  );
}

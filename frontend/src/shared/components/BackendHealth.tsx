import { useEffect, useState } from 'react';

type Health = { status: string; app: string; backend: string };

export function BackendHealth() {
  const [status, setStatus] = useState('Đang kiểm tra kết nối PHP...');

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/health', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.json() as Promise<Health>;
      })
      .then((data) => {
        setStatus(data.status === 'ok' ? 'PHP MVC API đã kết nối' : 'API phản hồi bất thường');
      })
      .catch(() => {
        if (!controller.signal.aborted) setStatus('Chưa kết nối được API PHP');
      });

    return () => controller.abort();
  }, []);

  return <p role="status" className="text-sm text-slate-600">Backend: {status}</p>;
}

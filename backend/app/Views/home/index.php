<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title><?= htmlspecialchars((string) $title, ENT_QUOTES, 'UTF-8') ?></title>
  <style>body{font-family:system-ui;margin:0;background:#151515;color:#f5f5f5;display:grid;place-items:center;min-height:100vh}main{max-width:560px;padding:32px}h1{color:#e9a85c}a{color:#ffbb71}code{background:#282828;padding:5px 8px;border-radius:6px}</style>
</head>
<body><main>
  <h1>☕ Cafe Smart</h1>
  <p>PHP thuần MVC đã chạy. Đây là trang View được render bởi HomeController.</p>
  <p>Kiểm tra API tại <a href="/api/health"><code>/api/health</code></a>.</p>
  <p>Giao diện React/3D sẽ được phát triển ở thư mục <code>frontend/</code>.</p>
</main></body>
</html>

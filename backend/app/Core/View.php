<?php
declare(strict_types=1);

namespace App\Core;

final class View
{
    /** @param array<string,mixed> $data */
    public function render(string $view, array $data = []): void
    {
        if (!preg_match('#^[a-zA-Z0-9_/-]+$#', $view) || str_contains($view, '..')) {
            throw new \InvalidArgumentException('Invalid view name');
        }
        $file = dirname(__DIR__) . '/Views/' . $view . '.php';
        if (!is_file($file)) {
            throw new \RuntimeException('View not found: ' . $view);
        }
        extract($data, EXTR_SKIP);
        require $file;
    }
}

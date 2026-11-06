<?php
declare(strict_types=1);

namespace App\Core;

final class Router
{
    /** @var array<string,array<string,callable|array{class-string,string}>> */
    private array $routes = [];

    public function get(string $path, callable|array $handler): void
    {
        $this->routes['GET'][$this->normalize($path)] = $handler;
    }

    public function dispatch(string $method, string $uri): void
    {
        $path = $this->normalize(parse_url($uri, PHP_URL_PATH) ?: '/');
        $method = strtoupper($method);
        if ($method !== 'GET' || !isset($this->routes['GET'][$path])) {
            http_response_code(404);
            (new View())->render('errors/404', ['path' => $path]);
            return;
        }

        $handler = $this->routes['GET'][$path];
        if (is_array($handler)) {
            $controller = new $handler[0]();
            $controller->{$handler[1]}();
            return;
        }
        $handler();
    }

    private function normalize(string $path): string
    {
        return '/' . trim($path, '/');
    }
}

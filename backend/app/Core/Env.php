<?php
declare(strict_types=1);

namespace App\Core;

final class Env
{
    public static function load(string $path): void
    {
        if (!is_file($path)) {
            return;
        }

        $values = parse_ini_file($path, false, INI_SCANNER_RAW);
        if ($values === false) {
            throw new \RuntimeException('Cannot parse local environment file.');
        }

        foreach ($values as $name => $value) {
            if (getenv((string) $name) === false) {
                putenv($name . '=' . (string) $value);
            }
        }
    }
}

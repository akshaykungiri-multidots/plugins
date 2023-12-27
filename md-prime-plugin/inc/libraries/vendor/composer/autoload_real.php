<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitfa7726c8c0ecf360300261d3d9554287
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            include __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        include __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInitfa7726c8c0ecf360300261d3d9554287', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitfa7726c8c0ecf360300261d3d9554287', 'loadClassLoader'));

        include __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitfa7726c8c0ecf360300261d3d9554287::getInitializer($loader));

        $loader->register(true);

        $filesToLoad = \Composer\Autoload\ComposerStaticInitfa7726c8c0ecf360300261d3d9554287::$files;
        $requireFile = \Closure::bind(
            static function ($fileIdentifier, $file) {
                if (empty($GLOBALS['__composer_autoload_files'][$fileIdentifier])) {
                    $GLOBALS['__composer_autoload_files'][$fileIdentifier] = true;

                    include $file;
                }
            }, null, null
        );
        foreach ($filesToLoad as $fileIdentifier => $file) {
            $requireFile($fileIdentifier, $file);
        }

        return $loader;
    }
}
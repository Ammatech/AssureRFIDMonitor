System.config({
    //use typescript for compilation
    transpiler: 'typescript',
    //typescript compiler options
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    //map tells the System loader where to look for things
    map: {
        app: "./app",
        '@angular': 'https://unpkg.com/@angular',
        'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.6'
    },
    //packages defines our app package
    packages: {
        app: {
            main: './main.ts',
            defaultExtension: 'ts'
        },
        '@angular/core': {
            main: 'core.umd.js',
            defaultExtension: 'js'
        },
        '@angular/compiler': {
            main: 'compiler.umd.js',
            defaultExtension: 'js'
        },
        '@angular/common': {
            main: 'common.umd.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser-dynamic': {
            main: 'platform-browser-dynamic.umd.js',
            defaultExtension: 'js'
        },
        '@angular/platform-browser': {
            main: 'platform-browser.umd.js',
            defaultExtension: 'js'
        },
        '@angular/http': {
            main: 'http.umd.js',
            defaultExtension: 'js'
        },
        '@angular/router-deprecated': {
            main: 'router-deprecated.umd.js',
            defaultExtension: 'js'
        },
        rxjs: {
            defaultExtension: 'js'
        }
    }
});
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass compilation
function sassCompile() {
    return src("app/scss/master.scss", { sourcemaps: true})
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('dist/css', { sourcemaps: 'map'}));
}

// Javascript compilation
function jsCompile() {
    return src('app/js/script.js', { sourcemaps: true })
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(terser())
    .pipe(dest('dist/js', { sourcemaps: '.'}))
}

// Browser sync setup
function browserSyncservice(callback) {
    browsersync.init({
        server: {
            baseDir: '.',
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0',
            },
        },
    });
    callback();
}

// Browser sync reload
function browserSyncReload(callback) {
    browsersync.reload();
    callback();
}

// Watch for HTML change to sync the browser
function watchHtml() {
    watch('*.html', browserSyncReload);
    watch(
        ['app/scss/**/*.scss', 'app/js/*.js'],
        series(sassCompile, browserSyncReload)
    );
}

// Default
exports.default = series(sassCompile, jsCompile, browserSyncservice, watchHtml);
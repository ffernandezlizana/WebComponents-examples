const gulp = require('gulp');
const browserSync = require('browser-sync');

const reload = browserSync.reload;

const pjson = require('./../../../../package.json');

const replace = require('gulp-replace');
 
gulp.task("build:html", function() {
    return gulp.src(['./src/**/*.html'], { base: './src' })
    .pipe(replace('./assets', `./assets-${pjson.version}`))
    .pipe(replace('./common', `./assets-${pjson.version}/common`))
    .pipe(replace('.css', `.css?v=${pjson.version}`))
    .pipe(replace('.html', `.html?v=${pjson.version}`))
    .pipe(replace('.js', `.js?v=${pjson.version}`))
    .pipe(gulp.dest('./dist/'))
    .pipe(reload({stream:true}));
});

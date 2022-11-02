const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');

const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');
const uglify = composer(uglifyes, console);

const reload = browserSync.reload;

const pjson = require('./../../../../package.json');
require('custom-env').env();

gulp.task('build:js', function () {
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
        return gulp.src('./src/assets/js/**/*')
            .pipe(replace('"./common', `"./assets-${pjson.version}/common`))
            .pipe(replace('\'./common', `'./assets-${pjson.version}/common`))
            .pipe(replace('./../../../../../common', '/common'))
            .pipe(replace('./../../../../common', '/common'))
            .pipe(replace('./../../../common', '/common'))
            .pipe(replace('./../../common', '/common'))
            .pipe(replace('./../common', '/common'))
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(`./dist/assets-${pjson.version}/js`))
            .pipe(reload({ stream: true }));
    } else {
        return gulp.src('./src/assets/js/**/*')
            .pipe(replace('"./common', `"./assets-${pjson.version}/common`))
            .pipe(replace('\'./common', `'./assets-${pjson.version}/common`))
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(`./dist/assets-${pjson.version}/js`))
            .pipe(reload({ stream: true }));
    }
});

const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('gulp-cssnano');
const stylelint = require('gulp-stylelint');

const reload = browserSync.reload;

const pjson = require('./../../../../package.json');

gulp.task('build:css', function() {
    return gulp.src('./src/assets/css/**/*')
        .pipe(sourcemaps.init())
        .pipe(postcss([
            autoprefixer({browsers: ['last 2 version']})
        ]))
        .pipe(cssnano({zindex: false, reduceIdents: false}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(`./dist/assets-${pjson.version}/css/`))
        .pipe(reload({stream:true}));
});

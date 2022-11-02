const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');

const reload = browserSync.reload;
const pjson = require('./../../../../package.json');


// copia de componentes assets (no stencil)
gulp.task('build:components', function () {
    return gulp.src('./src/components/**/*')
        .pipe(sourcemaps.init())
        // .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(`./dist/assets-${pjson.version}/components/`))
        .pipe(reload({stream: true}));
});

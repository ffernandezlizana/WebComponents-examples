const gulp = require('gulp');
const browserSync = require('browser-sync');

const reload = browserSync.reload;

gulp.task('copy:fonts', function () {
    return gulp.src('./src/assets/fonts/**/*')
        .pipe(gulp.dest(`./dist/assets/fonts`))
        .pipe(reload({ stream: true }));
});
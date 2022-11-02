const gulp = require('gulp');
const browserSync = require('browser-sync');

const reload = browserSync.reload;

gulp.task("build:html", function() {
    return gulp.src(['./src/*.html'], { base: './src' })
    .pipe(gulp.dest('./dist/'))
    .pipe(reload({stream:true}));
});

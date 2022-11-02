const gulp = require('gulp');

gulp.task('build:images', function() {
    return gulp.src('./src/assets/img/**/*')
        .pipe(gulp.dest('./dist/assets/img'))
});

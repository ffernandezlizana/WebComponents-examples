const gulp = require('gulp');
const pjson = require('./../../../../package.json');

gulp.task('build:images', function() {
    return gulp.src('./src/assets/img/**/*')
        .pipe(gulp.dest(`./dist/assets-${pjson.version}/img`))
});

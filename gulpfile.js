const gulp = require('gulp');
const del = require('del');

const path = require('path');
const projectName = path.basename(__dirname);

const browserSync  = require('browser-sync');
const reload       = browserSync.reload;

require('./gulp/css.task.js');          // build:css task
// require('./gulp/images.task.js');       // build:images task
require('./gulp/index-js.task.js');           // build:index-js task
require('./gulp/index-css.task.js');           // build:index-css task
require('./gulp/js.task.js');           // build:js task
require('./gulp/fonts.task.js');           // copy:fonts task
require('./gulp/components.task.js');   // build:components task

gulp.task('build:html', function () {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'));
});
gulp.task('clean', () => del(['dist/**/*']));
gulp.task('build', gulp.series('clean', 'build:css', 'build:html', 'build:index-js', 'build:index-css', 'build:js', 'copy:fonts', 'build:components'));

gulp.task('copyToServer', function () {
    return gulp.src('./dist/**/*')
        .pipe(gulp.dest('./../../dist/' + projectName + '/'));
});
gulp.task('copyToServer:css', function () {
    return gulp.src('./dist/assets/css/**/*')
        .pipe(gulp.dest('./../../dist/' + projectName + '/assets/css/'));
});
gulp.task('copyToServer:index-js', function () {
    return gulp.src('./dist/assets/index.js')
        .pipe(gulp.dest('./../../dist/' + projectName + '/assets/'));
});
gulp.task('copyToServer:index-css', function () {
    return gulp.src('./dist/assets/index.css')
        .pipe(gulp.dest('./../../dist/' + projectName + '/assets/'));
});
gulp.task('copyToServer:js', function () {
    return gulp.src('./dist/assets/js/**/*')
        .pipe(gulp.dest('./../../dist/' + projectName + '/assets/js/'));
});
// gulp.task('copyToServer:images', function () {
//     return gulp.src('./dist/assets/img/**/*')
//         .pipe(gulp.dest('./../../dist/' + projectName + '/assets/img/'));
// });
gulp.task('copyToServer:components', function () {
    return gulp.src('./dist/components/**/*')
        .pipe(gulp.dest('./../../dist/' + projectName + '/components/'));
});

gulp.task('buildserver', gulp.series('build', 'copyToServer', function () {
    gulp.watch('./src/assets/css/**/*.css', gulp.series('build:css', 'copyToServer:css'));
    gulp.watch('./src/assets/index-js.js', gulp.series('build:index-js', 'copyToServer:index-js'));
    gulp.watch('./src/assets/index-css.js', gulp.series('build:index-css', 'copyToServer:index-css'));
    gulp.watch('./src/assets/js/**/*.js', gulp.series('build:js', 'copyToServer:js'));
    // gulp.watch('./src/assets/img/**/*', gulp.series('build:images', 'copyToServer:images'));
    gulp.watch('./src/components/**/*', gulp.series('build:components', 'copyToServer:components'));
}));

// Serve application
gulp.task('serve', gulp.series('build', function() {
    browserSync.init({
        port: 5111,
        server: {
            port: 8111,
            baseDir: './src/',
        },
        socket: {
            namespace: '/browser-sync-devcenter',
            clientPath: '/browser-sync-devcenter',
            path: '/browser-sync-devcenter/socket.io'
        }
    });

    gulp.watch('./src/assets/css/**/*.css', gulp.series('build:css'));
    gulp.watch('./src/*.html', gulp.series('build:html'));
    // gulp.watch('./src/assets/img/**/*', gulp.series('build:images'));
    gulp.watch('./src/assets/index-js.js', gulp.series('build:index-js'));
    gulp.watch('./src/assets/index-css.js', gulp.series('build:index-css'));
    gulp.watch('./src/assets/js/**/*.js', gulp.series('build:js'));


}));
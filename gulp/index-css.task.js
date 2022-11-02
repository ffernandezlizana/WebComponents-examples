const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('gulp-cssnano');
const stylelint = require('gulp-stylelint');

const reload = browserSync.reload;

gulp.task('build:index-css', function() {
    return gulp.src('./src/index.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([
            autoprefixer({browsers: ['last 2 version']})
        ]))
        .pipe(cssnano({zindex: false, reduceIdents: false}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/'))
        .pipe(reload({stream:true}));
});

// // linter (add stylefmt? )
// gulp.task('css:lint', function() {
//     return gulp.src('./src/assets/css/**/*.css')
//         .pipe(
//             stylelint({
//                 failAfterError: false,
//                 reportOutputDir: 'reports/stylelint',
//                 reporters: [
//                     { formatter: 'verbose', console: true },
//                     { formatter: 'json', save: 'report.json' }
//                 ],
//                 debug: false
//             })
//         );
// });

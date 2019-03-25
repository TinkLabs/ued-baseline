const gulp = require('gulp');
const sass = require('gulp-sass');
// const sort = require('gulp-sort');
// const minify = require('gulp-minify');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const watch = require('gulp-watch');

/*
 *
 *  Compile and minify css from sass for prod
 *  autoprefixer css
 * 
 */
sass.compiler = require('node-sass');
gulp.task('scss', () => {
  return gulp.src('./stylesheets/style.scss', { sourcemaps: true, allowEmpty: true })
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('./dist/stylesheets'));
});

gulp.task("watch", () => {
  gulp.watch("./stylesheets/**/*.scss", gulp.series("scss"));
});

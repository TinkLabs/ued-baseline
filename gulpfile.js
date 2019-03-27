const gulp = require('gulp');
const sass = require('gulp-sass');
const sort = require('gulp-sort');
// const minify = require('gulp-minify');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var runTimestamp = Math.round(Date.now() / 1000);

/*
 *
 *  Compile and minify css from sass for prod
 *  autoprefixer css
 * 
 */
sass.compiler = require('node-sass');
gulp.task('scss', () => {
  return gulp.src('./public/stylesheets/style.scss', { sourcemaps: true, allowEmpty: true })
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task("watch", () => {
  gulp.watch("./public/stylesheets/**/*.scss", gulp.series("scss"));
});

/*
 *
 *  Convert svg files into font file
 *  Generate class mapping for each svg
 * 
 */
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var runTimestamp = Math.round(Date.now() / 1000);

var iconStream = gulp.src(['iconFactory/svg/*.svg'])
  .pipe(sort())
  .pipe(iconfont({
    fontName: 'hiStyle',
    normalize: true,
    fontHeight: 2000,
    centerHorizontally: true,
    prependUnicode: true, // recommended option
    formats: [ 'ttf', 'eot', 'svg', 'woff', 'woff2' ],
  }))
  .on('error', err => {
    console.log(err)
  });

// generate scss / css file
gulp.task("handleGlyphs", done => {
  iconStream.on('glyphs', (glyphs, options) => {
    gulp
      .src(['iconFactory/templates/*.*'])
      .pipe(sort())
      .pipe(consolidate('lodash', {
        glyphs: glyphs,
        fontName: 'hiStyle',
        fontPath: 'fonts/hiStyle/',
        className: 'icon',
        timestamp: runTimestamp, // recommended to get consistent builds when watching files
      }))
      .pipe(gulp.dest('iconFactory/result'))
      .on('finish', () => {
        gulp.src(['iconFactory/result/*.scss'])
        .pipe(gulp.dest('public/stylesheets/scss'))
        .on('finish', done);
      });
  });
});

// generate font files
gulp.task("handleFonts", done => {
  iconStream
    .pipe(gulp.dest('iconFactory/result/fonts/hiStyle'))
    .on('finish', () => {
      gulp.src(['iconFactory/result/fonts/hiStyle/*.*'])
      .pipe(gulp.dest('public/stylesheets/fonts/hiStyle'))
      .on('finish', done);
    });
});

gulp.task('svg', gulp.parallel("handleGlyphs", "handleFonts"));


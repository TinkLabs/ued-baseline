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

const fs = require('fs');

// convert md to html
const showdown  = require('showdown');
const showdownOptions = {
  omitExtraWLInCodeBlocks: true,
  noHeaderId: true,
}
const converter = new showdown.Converter(showdownOptions);

gulp.task("md", (done) => {
  let dir = fs.readdirSync("./readme", {withFileTypes: true});
  dir.forEach(obj => {
    let fileName = obj.name;
    if (fileName.match(/.md$/)) {
      let text = fs.readFileSync(`./readme/${obj.name}`, {encoding: "UTF-8"});
      let html = converter.makeHtml(text);
      let htmlFileName = `./readme/${obj.name.replace(".md", "")}.html`
      fs.writeFileSync(htmlFileName, html);
    }
  })

  // console.log(html);
  done();
});

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

gulp.task('demo-scss', () => {
  return gulp.src('./public/stylesheets/demo/demo.scss', { allowEmpty: true })
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch-scss', () => {
  gulp.watch([
    "./public/stylesheets/**/*.scss",
    "./public/stylesheets/style.scss"
  ], gulp.series("scss"));
});

gulp.task('watch-demo', () => {
  gulp.watch("./public/stylesheets/demo/demo.scss", gulp.series("demo-scss"));
});

gulp.task("watch", gulp.parallel(['watch-demo', 'watch-scss']));

/*
 *
 *  Convert svg files into font file
 *  Generate class mapping for each svg
 * 
 */
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var runTimestamp = Math.round(Date.now() / 1000);
var nextUnicode = 0;
var iconStream;

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

// find next unicode for new svg
gulp.task("findNextUnicode", done => {
  let max = 0;
  let files = fs.readdirSync("iconFactory/svg");
  files.forEach(f => {
    let regex = f.match(/^u([A-F]|[0-9]){4}-/);
    if (regex) {
      let unicode = "0x" + regex[0].slice(1, 5);
      let intCode = parseInt(unicode);
      if (intCode > max) {
        max = intCode;
      }
    }
  })
  nextUnicode = (max > 0) ? max + 1 : undefined;
  done();
});

gulp.task('createIconStreamInstance', done => {

  let options = {
    fontName: 'hiStyle',
    normalize: true,
    fontHeight: 2000,
    centerHorizontally: true,
    prependUnicode: true, // recommended option
    startUnicode: nextUnicode, // set next unicode for adding new icon
    formats: ['ttf', 'eot', 'svg', 'woff', 'woff2'],
  };

  iconStream = gulp.src(['iconFactory/svg/*.svg'])
    .pipe(sort())
    .pipe(iconfont(options))
    .on('error', err => {
      console.log(err)
    });

  done();
});

gulp.task('svg', gulp.series(
  "findNextUnicode",
  "createIconStreamInstance",
  gulp.parallel("handleGlyphs", "handleFonts")
));

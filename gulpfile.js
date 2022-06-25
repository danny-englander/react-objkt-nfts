const { src, dest, parallel, watch, series } = require("gulp");
const sharpResponsive = require("gulp-sharp-responsive");
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass Task
function scssTask() {
  return src('src/styles/sass/**/*.scss', { sourcemaps: true })
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('src/styles/css', { sourcemaps: '.' }));
}

// Watch Task
function watchTask() {
  watch(
    ['src/styles/sass/**/*.scss'],
    series(scssTask, browserSyncReload)
  );
}

// Browsersync
function browserSyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: '.',
    },
    notify: {
      styles: {
        top: 'auto',
        bottom: '0',
      },
    },
  });
  cb();
}
function browserSyncReload(cb) {
  browsersync.reload();
  cb();
}

const img = () => src("./src/assets/nft-src/**/*.{jpg,png}")
  .pipe(sharpResponsive({
    formats: [
      { width: 800, format: "jpeg" },
      { width: 800, format: "webp" },
    ]
  })).pipe(dest("./public/assets/nft-dist"));

const render_img = series(parallel(img))

exports.img = exports.build = render_img;
exports.default = series(scssTask, img, browserSyncServe, watchTask);

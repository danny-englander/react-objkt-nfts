const { src, dest, parallel, series } = require("gulp");
const sharpResponsive = require("gulp-sharp-responsive");

const img = () => src("./assets/img-src/**/*.{jpg,png}")
  .pipe(sharpResponsive({
    formats: [
      { width: 1000, format: "jpeg" },
      // { width: 800, format: "webp" },
      // { width: 800, format: "avif" },
    ]
  })).pipe(dest("./assets/img-dist"));

const render_img = series(parallel(img))

exports.img = exports.build = render_img;

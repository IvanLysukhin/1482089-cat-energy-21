const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const sync = require("browser-sync").create();

// Styles

const styles = () => {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("source/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// Images
const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.mozjpeg({progressive: true}),
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
}

exports.images = images;


// WebP

const createWebp = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
    .pipe(webp({quality: 80}))
    .pipe(gulp.dest("build/img/webp"))
}

exports.createWebp = createWebp;

// SVG Sprite

const sprite = () => {
 return gulp.src("source/img/icons/*.svg")
   .pipe(svgstore())
   .pipe(rename("svg-sprite.svg"))
   .pipe(gulp.dest("build/img"))
}

exports.sprite = sprite;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series("styles"));
  gulp.watch("source/*.html").on("change", sync.reload);
}

exports.default = gulp.series(
  styles, server, watcher
);

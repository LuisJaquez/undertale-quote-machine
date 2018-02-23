//Task Variables.
var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var cssnano = require("gulp-cssnano");
var imagemin = require("gulp-imagemin");
var autoprefixer = require("gulp-autoprefixer");
var htmlmin = require("gulp-htmlmin");

//Watch SCSS,Javascript and HTML to make a live server preview.
gulp.task("default", ["css", "javascript", "html"], function() {
  browserSync.init({
    server: "./app"
  });

  gulp.watch("js/*.js", ["javascript"]).on("change", browserSync.reload);
  gulp.watch("scss/**/*.scss", ["css"]);
  gulp.watch("app/*.html").on("change", browserSync.reload);
  gulp.watch("./*.html", ["html"]);
});

//Minify HTML.
gulp.task("html", function() {
  return gulp
    .src("./*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("app"));
});

//Optimize images.
gulp.task("img", function() {
  gulp
    .src("img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("app/img"));
});

//Minify Javascript.
gulp.task("javascript", function() {
  gulp
    .src("js/script.js")
    .pipe(uglify())
    .pipe(gulp.dest("app/js"));
});

//Compiled SASS to CSS.
gulp.task("css", function() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(
      autoprefixer({
        browsers: ["last 10 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});

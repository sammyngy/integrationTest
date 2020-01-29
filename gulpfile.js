const gulp = require("gulp");
const compass = require("gulp-compass");
const plumber = require("gulp-plumber");

gulp.task("compass", function() {
    gulp.src("./assets/sass/**/*.scss")
    .pipe(plumber())
    .pipe(compass({
        sass: "./assets/sass",
        css: "./assets/css"
    }))
    .pipe(gulp.dest("./assets/css"));
});
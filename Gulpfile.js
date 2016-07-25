var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

gulp.task("lint", function() {
    gulp.src("./js/main.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task('default', function() {
    gulp.watch("js/main.js", ["lint"]);
});

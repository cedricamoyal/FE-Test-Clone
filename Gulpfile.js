var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

// Sass to Css:
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});

////////////////

// Lint Js:
// npm install --save-dev jshint gulp-jshint

gulp.task("lint", function() {
    gulp.src("./js/main.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});

gulp.task('default', function() {
    gulp.watch("js/main.js", ["lint"]);
});

///////////////////

// Mocha:
// // npm install gulp gulp-mocha gulp-util

var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

gulp.task('default', function() {
      gulp.watch(['test/**'], ['mocha']);
});

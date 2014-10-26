var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var ngHtml2Js = require("gulp-ng-html2js");
var minifyHtml = require("gulp-minify-html");

gulp.task('buildJs', function(){
   return gulp.src([
       'bower_components/angular/angular.js',
       'bower_components/angular-route/angular-route.js',
       'src/**/*.js'
   ])
       .pipe(sourcemaps.init())
       .pipe(ngAnnotate())
       .pipe(concat('main.min.js'))
       .pipe(uglify())
       .pipe(sourcemaps.write('dist/'))
       .pipe(gulp.dest('dist'));
});

gulp.task('buildHtml', function(){
    return gulp.src(['src/**/*.html'])
      .pipe(minifyHtml())
      .pipe(ngHtml2Js({
        moduleName: "myApp"
    }))
      .pipe(concat("html.min.js"))
      .pipe(uglify())
      .pipe(gulp.dest('dist'));
});

gulp.task('default',['buildJs','buildHtml']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['build']);
});
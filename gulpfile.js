var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function(){
   return gulp.src([
       'bower_components/angular/angular.js',
       'bower_components/angular-route/angular-route.js',
       'src/**/*.js'
   ])
       .pipe(sourcemaps.init())
       .pipe(ngAnnotate())
       .pipe(concat('main.js'))
       .pipe(uglify())
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('dist'));
});

gulp.task('default',['build']);

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['build']);
});
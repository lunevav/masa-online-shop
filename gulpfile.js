const gulp = require('gulp');
//var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function(){
    connect.server({
      root: 'project', // served place // type FOLDER
      livereload: true
    });
  });
/*
gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./project'));
  });
*/ 
  gulp.task('livereload', function (){
    gulp.src('./project/**/*')
    .pipe(connect.reload());
  });

  gulp.task('watch', function () {
    //gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch('./project/**/*', ['livereload']);
  });

  gulp.task('default', ['connect', 'watch'/*, 'sass'*/]);

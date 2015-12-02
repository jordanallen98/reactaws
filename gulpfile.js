var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function(){
  browserify('./client/scripts/app.js')
    .transform('reactify')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function(){
  gulp.src('client/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('client/assets/**/*.*')
    .pipe(gulp.dest('dist/assets'));
  gulp.src('client/styles/styles.css')
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('default', ['browserify', 'copy'], function() {
  return gulp.watch('client/**/*.*', ['browserify', 'copy'])
});

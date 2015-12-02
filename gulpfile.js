var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

// Creates task called browserify
gulp.task('browserify', function(){
  browserify('./client/scripts/app.js')
    // Transforms JSX code to Vanilla JS
    .transform('reactify')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('dist/js'));
});

// Copies client files to dist directory
gulp.task('copy', function(){
  gulp.src('client/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('client/assets/**/*.*')
    .pipe(gulp.dest('dist/assets'));
  gulp.src('client/styles/styles.css')
    .pipe(gulp.dest('dist/styles'));
});

// Run 'gulp' in terminal to trigger default task
gulp.task('default', ['browserify', 'copy'], function() {
  // Will watch files and re-render on change
  return gulp.watch('client/**/*.*', ['browserify', 'copy'])
});

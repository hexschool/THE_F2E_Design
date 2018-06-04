
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('deploy', function () {
  return gulp.src('./public/**/*')
    .pipe($.ghPages());
});

'use strict';

var sass = require('gulp-sass');

module.exports = function(gulp) {
  gulp.task('sass', function () {
    gulp.src('./src/component/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./lib/css/'));
  });
};

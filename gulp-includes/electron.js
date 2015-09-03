'use strict';

var run = require('gulp-run');

module.exports = function(gulp) {
  gulp.task('electron', ['scripts:dev'], function() {
    return run('./node_modules/.bin/electron .').exec(function(error) {
      if (error) {
        console.log(error);
      }
    });
  });
};

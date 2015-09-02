'use strict';

var run = require('gulp-run');
var gutil = require('gulp-util');

module.exports = function(gulp) {
  gulp.task('electron', ['scripts:dev'], function() {
    return run('./node_modules/.bin/electron .').exec()
      .on('error', gutil.log.bind(gutil, 'Electron Error'));
  });
};

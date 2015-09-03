'use strict';

var browserify = require('browserify');
var reactify = require('reactify');
var gutil = require('gulp-util');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

module.exports = function(gulp) {
  gulp.task('scripts:dev', function() {
    var props = {
      debug : true,
      transform:  [babelify, reactify]
    };

    var bundler = watchify(browserify('./component/index.jsx', props));

    function rebundle() {
      return bundler.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./lib/js'));
    }

    bundler.on('update', rebundle);
    return rebundle();
  });
};
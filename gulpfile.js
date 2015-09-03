'use strict';
var gulp = require('gulp');

//require('./gulp-includes/styles')(gulp);
require('./gulp-includes/scripts')(gulp);
require('./gulp-includes/electron')(gulp);

var src = {
  public: './component/',
  dist: './dist'
};

gulp.task('default', ['scripts:dev', 'electron'], function() {
  //gulp.watch(src.public + 'styles/**/*.scss', ['sass:dev', 'electron:dev']);
  gulp.watch(src.public + '**/*.jsx', ['scripts:dev', 'electron']);
});

gulp.task('build', [
  'clean', 'sass:production', 'scripts:production', 'copy', 'electron:production'
]);

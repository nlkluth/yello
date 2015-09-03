'use strict';
var gulp = require('gulp');

require('./gulp-includes/styles')(gulp);
require('./gulp-includes/scripts')(gulp);
require('./gulp-includes/electron')(gulp);

var src = {
  public: './component/',
  dist: './dist'
};

gulp.task('default', ['scripts:dev', 'sass', 'electron'], function() {
  gulp.watch([src.public + 'main.scss', src.public + '**/*.scss'], ['sass', 'electron']);
  gulp.watch(src.public + '**/*.jsx', ['scripts:dev', 'electron']);
});

gulp.task('build', [
  'clean', 'sass:production', 'scripts:production', 'copy', 'electron:production'
]);

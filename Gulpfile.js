var gulp = require('gulp');
var sassCompiler = require('./Build/Gulp-Tasks/Compilers/Css');
//var jsCompiler = require('./Build/Gulp-Tasks/Compilers/Js');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('compile:css', sassCompiler);
//gulp.task('compile:js', jsCompiler);
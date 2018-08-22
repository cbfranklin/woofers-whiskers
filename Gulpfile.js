var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

// process.chdir('../');

gulp.task('styles', function() {
  var plugins = [
    autoprefixer({
      browsers: ['> 5% in US', 'ie 8']
    })
  ];

  gulp
    .src('./public/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./public/css'))
});

gulp.task('watch', function() {
  gulp.watch('./public/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);

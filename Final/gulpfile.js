'use strict';

const gulp = require('gulp');
const del = require('del');
const debug = require('gulp-debug');
const gulpIf = require('gulp-if');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const sourceMaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
// NODE_ENV=production gulp sass

gulp.task('assets', function () {
  return gulp.src('dev/*.html')
      .pipe(debug({title: 'assets_start'}))
      .pipe(gulp.dest('prod'))
      .pipe(debug({title: 'assets_end'}));
});

gulp.task('sass', function() {

  return gulp.src('dev/css/main.scss', {base: 'dev'})
      .pipe(debug({title: 'src'}))
      .pipe(gulpIf(isDevelopment, sourceMaps.init()))
      .pipe(sass().on('error', sass.logError))
      .pipe(debug())
      .pipe(cleanCss())
      .pipe(debug())
      .pipe(gulpIf(isDevelopment, sourceMaps.write('.')))
      .pipe(gulp.dest('prod'));
});

gulp.task('clean', function () {
  return del('prod');
});

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('assets', 'sass'))
);

gulp.task('watch', function () {
  gulp.watch('dev/**/*.*', gulp.series('assets', 'sass'));
});

gulp.task('webserver', function() {
  browserSync.init({
    server: 'prod'
  });

  browserSync.watch('prod/**/*.*').on('change', browserSync.reload);
});

gulp.task('default',
  gulp.series('assets', 'sass', gulp.parallel('watch', 'webserver'))
);

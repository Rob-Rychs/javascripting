'use strict';
const gulp = require('gulp');
// const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
// const pump = require('pump');
// const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
// const sass = require('gulp-sass');
// const concat = require('gulp-concat');
// const optimizejs = require('gulp-optimize-js');
// const gutil = require('gulp-util');
const watch = require('gulp-watch');

gulp.task('minjs', function() {
   gulp.src('./js/*.js')
    .pipe(uglify()) 
    .pipe(rename({ extname: '.min.js' })) 
    .pipe(gulp.dest('./dist/js')) 
});

// Reload Broswer
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    }); //end of broswer sync init

    gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
});

// Gulp watch function
gulp.task('watch', function() {
   gulp.watch('js/*.js', ['minjs']);
});

gulp.task('default', ['watch', 'browser-sync']);
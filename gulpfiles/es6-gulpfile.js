'use strict';
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
// const pump = require('pump');
// const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
const sass = require('gulp-sass');
// const concat = require('gulp-concat');
// const optimizejs = require('gulp-optimize-js');
// const gutil = require('gulp-util');
const watch = require('gulp-watch');
const eslint = require('gulp-eslint');
const cssnano = require('gulp-cssnano');
const prettyError = require('gulp-prettyerror');
const babel = require('gulp-babel');

// gulp.task('babel', () => {
//     return gulp.src(input)
//         .pipe(babel())
//         .pipe(gulp.dest(output));
// });

// minjs task with lint task completion as dependency for running vs not
gulp.task('minjs', ['lint'], function() {
   gulp.src('./js/*.js')
    .pipe(babel({
            presets: ['es2015']
        }))
    .pipe(uglify()) 
    .pipe(rename({ extname: '.min.js' })) 
    .pipe(gulp.dest('./dist/js')) 
});

// gulp.task('minjs', function() {
//    gulp.src('./js/*.js')
//     .pipe(uglify()) 
//     .pipe(rename({ extname: '.min.js' })) 
//     .pipe(gulp.dest('./dist/js')) 
// });

// Reload Broswer
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    }); //end of broswer sync init

    gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
    gulp.watch('./dist/css/*.css').on('change', browserSync.reload);
});

gulp.task('lint', function() {
   return gulp.src(['js/**/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('sass', function() {
   gulp.src('./sass/style.scss')
      .pipe(prettyError())  
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./dist/css'))
      .pipe(cssnano())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./dist/css'));
});

// Gulp watch function
gulp.task('watch', function() {
   gulp.watch('js/*.js', ['minjs']);
   gulp.watch('sass/*.scss', ['sass']);
});

// defaults with lint as dependent on minjs vs. not
gulp.task('default', ['watch', 'browser-sync']);
// gulp.task('default', ['lint', 'watch', 'browser-sync']);

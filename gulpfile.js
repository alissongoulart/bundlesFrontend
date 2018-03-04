'use strict';

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var rename = require('gulp-rename')
gulp.task('minify-css', function() {
    return gulp.src('src/assets/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/css/'));
});

gulp.task('compress', function() {
    gulp.src('src/assets/js/*.js')
        .pipe(minify({
            ext:{
                min:'.min.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('build/js'))
});
var gulp = require('gulp');
var util = require('gulp-util');
var install = require('gulp-install');
var src = require('../sources.json');

module.exports = gulp.task('vendor-install', function() {
    return gulp.src(['../angular/package.json'])
        .pipe(install());
});

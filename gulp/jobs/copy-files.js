var q = require('q');
var gulp = require('gulp');
var util = require('gulp-util');
var rename = require('gulp-rename');

module.exports = function(oldPath, newPath) {
    var defer = q.defer();

    gulp.src(oldPath)
        .pipe(rename(function(path) {
            path.dirname = "";
        }))
        .pipe(gulp.dest(newPath))
        .on('end', defer.resolve);

    return defer.promise;
};

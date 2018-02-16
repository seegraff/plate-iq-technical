var q = require('q');
var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function(files, dest) {
    var defer = q.defer();

    gulp.src(files)
        .pipe(sass())
        .pipe(gulp.dest(dest))
        .on('end', defer.resolve);

    return defer.promise;
};

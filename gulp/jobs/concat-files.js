var q = require('q');
var gulp = require('gulp');
var concat = require('gulp-concat');
var size = require('gulp-filesize');

module.exports = function(files, name, dest, order) {
    var defer = q.defer();

    if(order) {
        var sort = require("gulp-order");

        gulp.src(files)
            .pipe(sort(order))
            .pipe(concat(name))
            .pipe(gulp.dest(dest))
            .pipe(size())
            .on('end', defer.resolve);
    } else {
        gulp.src(files)
            .pipe(concat(name))
            .pipe(gulp.dest(dest))
            .pipe(size())
            .on('end', defer.resolve);
    }

    return defer.promise;
};

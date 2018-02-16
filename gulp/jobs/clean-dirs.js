var q = require('q');
var gulp = require('gulp');
var clean = require('gulp-clean');

module.exports = function(files) {
    var defer = q.defer();

    gulp.src(files, {read: false})
        .pipe(clean({force: true}))
        .pipe(gulp.dest(''))
        .on('end', defer.resolve);

    return defer.promise;
};

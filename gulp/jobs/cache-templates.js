var q = require('q');
var gulp = require('gulp');
var cache = require('gulp-angular-templatecache');

module.exports = function(src, opts, dest) {
    var defer = q.defer();

    gulp.src(src)
        .pipe(cache(opts))
        .pipe(gulp.dest(dest))
        .on('end', defer.resolve);

    return defer.promise;
};

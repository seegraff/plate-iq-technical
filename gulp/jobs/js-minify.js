var q = require('q');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

module.exports = function(files, name, dest) {
    var defer = q.defer();

    gulp.src(files)
        .pipe(uglify({preserveComments:'none'}))
        .pipe(gulp.dest(dest))
        .on('end', defer.resolve);

    return defer.promise;
}

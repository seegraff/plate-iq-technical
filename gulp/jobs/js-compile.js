var q = require('q');
var gulp = require('gulp');
var webpack = require('webpack-stream');

module.exports = function(files, dest) {
    var defer = q.defer();

    gulp.src(files)
        .pipe(webpack(require('../webpack.config.js')(files)))
        .pipe(gulp.dest(dest))
        .on('end', defer.resolve);

    return defer.promise;
}

var gulp = require('gulp');
var sequence = require('run-sequence');

module.exports = gulp.task('build-dev', function(resolve) {
    require('./clean-bin');
    require('./clean-dev');
    require('./cache-build');
    require('./vendor-install');
    require('./vendor-concat');
    require('./copy-fonts');
    require('./js-concat');
    require('./js-compile');
    require('./css-concat');
    require('./css-compile');

    return sequence.apply(null, [
        'clean-bin',
        'clean-dev',
        'cache-build',
        'vendor-install',
        'vendor-concat',
        'copy-fonts',
        'css-concat',
        'css-compile',
        'js-concat',
        'js-compile'
    ]);
});

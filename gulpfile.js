var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var typedoc = require('gulp-typedoc');

gulp.task('typedoc', function() {
    return gulp
        .src(['src/**/*.ts'])
        .pipe(typedoc({
            module: 'commonjs',
            target: 'es5',
            out: 'docs/',
            name: 'AWQLinator'
        }))
    ;
});

gulp.task('deploy', ['typedoc'], function() {
  return gulp
    .src('./docs/**/*')
    .pipe(ghPages());
});

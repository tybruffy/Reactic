/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var gulp         = require('gulp');
var buffer       = require('vinyl-buffer');
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');
var watchify     = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var config       = require('../config').js;
var handleErrors = require('../util/handleErrors');

gulp.task('browserify', function() {

  var bundleMethod = global.isWatching ? watchify : browserify;

  var bundler = bundleMethod({
    entries: [config.src],
  });

  var bundle = function() {
    // Log when bundling starts
    bundleLogger.start();

    return bundler
      // Enable source maps!
      .bundle({
        debug: true,
        standalone: "Jake",
      })
      // Report compile errors
      .on('error', handleErrors)
      // make the stream gulp compatible.
      .pipe(source('build.js'))
      // buffer the stream
      .pipe(buffer())
      // init source mapping
      .pipe(sourcemaps.init())
        // uglify
        .pipe(uglify())
      // save source map  
      .pipe(sourcemaps.write('./'))
      // Specify the output destination
      .pipe(gulp.dest(config.dest))
      // Log when bundling completes!
      .on('end', bundleLogger.end);
  };

  if (global.isWatching) {
    // Rebundle with watchify on changes.
    bundler.on('update', bundle);
  }

  return bundle();
});

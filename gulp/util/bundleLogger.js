/* bundleLogger
   ------------
   Provides gulp style logs to the bundle method in browserify.js
*/

var gutil        = require('gulp-util');
var prettyHrtime = require('pretty-hrtime');
var startTime;

module.exports = {
  start: function(filepath) {
    filepath = filepath || "main.js";
    startTime = process.hrtime();
    gutil.log('Bundling', gutil.colors.green(filepath) + '...');
  },

  watch: function(bundleName) {
    gutil.log('Watching files required by', gutil.colors.yellow(bundleName));
  },

  end: function(filepath) {
    var taskTime = process.hrtime(startTime);
    var prettyTime = prettyHrtime(taskTime);
    filepath = filepath || "main.js";
    gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(prettyTime));
  }
};
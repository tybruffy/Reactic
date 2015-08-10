var gulp   = require('gulp');
var config = require('../config').html;
var rename = require('gulp-rename');
var filter = require('gulp-filter');
 

gulp.task('html', function() {
	var filtered = filter(['*', '!index.html'], {restore: true});

	return gulp.src(config.glob)
		// Remove index.html
	    .pipe(filtered)
	    // Create new folder for each page name
		.pipe(rename(function (path) {
			path.dirname = "/" + path.basename;
			path.basename = "index";
		}))
		// Bring back index.html
	    .pipe(filtered.restore)
	    // Pipe to build folder
	    .pipe(gulp.dest(config.dest))
});

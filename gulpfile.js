let gulp = require ('gulp'),
bs = require('browser-sync'),
watch = require('gulp-watch');

gulp.task('browser-sync', function() {
	bs.init({
		server: {
			baseDir: './app'
		}
	});
});

gulp.task('watch', ['browser-sync'], function(){
	gulp.watch('**/*.*', bs.reload);
	gulp.watch('**/*..html').on('change', bs.reload);
});
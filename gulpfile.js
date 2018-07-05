const gulp = require('gulp');
const mocha = require('gulp-mocha');
const gutil = require('gulp-util');
const eslint = require('gulp-eslint');

const FILES_TO_CHECK = ['model/**/*.js', 'app/**/*.js', 'spec/**/*.js']
gulp.task('default', () => {
	console.log('Yay, gulps works');	
});

gulp.task('mocha', () => {
	return gulp.src(['spec/**/**/*.test.js'], {read: false})
			.pipe(mocha({reporter: 'list'}))
			.on('error', gutil.log);
});

gulp.task('eslint', () => {
	return gulp.src(FILES_TO_CHECK)
				.pipe(eslint())
				.pipe(eslint.format())
				.pipe(eslint.failAfterError());
});

gulp.task('watch', () => {
	gulp.watch(FILES_TO_CHECK, ['eslint','mocha']);	
});

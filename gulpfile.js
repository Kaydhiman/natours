// variable  declairatioin
const { src, dest, task, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// create task for copy files
task('copyfiles', function (){
    src('src/*.html')
    .pipe(dest('dist/'));
	src('src/img/*')
    .pipe(dest('dist/img'));
    src('src/font/**')
    .pipe(dest('dist/font'));
    src('src/css/*')
    .pipe(dest('dist/css'));
});

// create task for sass
task('style', function (){
	src('src/sass/*.scss')
	.pipe(sass())
	.pipe(dest('dist/css/'));
});

task('watch', series('style', 'copyfiles'));

// Static Server
task('server', function() {

    browserSync.init({
        server: "./dist"
    });

});

// create default task
task('default', parallel('copyfiles','watch','server') );
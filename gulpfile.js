var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('css', function() {
    return gulp.src('_css/style.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./build/'))
});

gulp.task('default', ['css']);

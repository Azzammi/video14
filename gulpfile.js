var gulp = require('gulp')
//required sass file
var sass = require('gulp-sass')
//required browser sync file
var browserSync = require('browser-sync').create();

gulp.task('hello', function(){
    console.log('Hello luth');
});
gulp.task('sass',function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) //using gulp-sass
    .pipe(gulp.dest('app/css'))    
    .pipe(browserSync.reload({
        stream: true
    }))
})
gulp.task('browserSync',function(){
    browserSync.init({
        server: {
            baseDir : 'app'
        },
    })
})
//gulp waych syntax
gulp.task('default',
    gulp.series('browserSync',
        gulp.series('sass')),function(){
    gulp.watch('app/scss/**/*.scss',gulp.series('sass'));
})



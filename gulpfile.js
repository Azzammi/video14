var gulp = require('gulp')
//required sass file
var sass = require('gulp-sass')
//required browser sync file
var browserSync = require('browser-sync').create();

gulp.task('hello', function(){
    console.log('Hello luth');
});
const showHello = () => {
    console.log("Hello Luth")
}

const compileSass = () => {
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) //using gulp-sass
    .pipe(gulp.dest('app/css'))    
    .pipe(browserSync.reload({
        stream: true
    }))
}

const activateBrowserSync = () => {
    browserSync.init({
        server: {
            baseDir : 'app'
        },
    })
}

const watch = () => { 
    gulp.watch('app/scss/**/*.scss',compileSass) 
    // Reloads the browser whenever HTML or JS Files change
    gulp.watch('app/*.html', browserSync.reload)
    gulp.watch('app/js/**/*.js',browserSync.reload)
}

const compile = gulp.series(gulp.parallel(compileSass, activateBrowserSync, watch),activateBrowserSync)
compile.description = 'compile all source'
gulp.task('run', compile )




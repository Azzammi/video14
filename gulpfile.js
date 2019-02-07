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

const watch = () => { gulp.watch('app/scss/**/*.scss',gulp.series('sass')) }

const compile = gulp.series(gulp.parallel(activateBrowserSync, compileSass),watch)
compile.description = 'compile all source'
gulp.task('run', compile )




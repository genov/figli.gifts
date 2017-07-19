var gulp = require('gulp'),
    del = require('del'),
    es = require('event-stream'),
    fs = require('fs'),
    config = require('./gulp.config')(),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer');

gulp.task('clean', clean);
gulp.task('build', ['clean'], build);

gulp.task('watch', function () {
    gulp.watch(config.src.stylesheets, ['build']);
    gulp.watch(config.src.javascript, ['build']);
});

// Clean previous build files
function clean() {
    return del('./build/');
}

// Build all extension file from source
function build() {
    return es.merge(
        buildHTML(),
        buildStylesheets(),
        buildFonts(),
        buildScripts(),
        buildImages()
    )
}

// Build JS directory from source files
function buildScripts() {
    return gulp.src(config.src.javascript)
        .pipe(gulp.dest(config.build.javascript));
}

// Build FONTS directory from source files
function buildFonts() {
    return gulp.src(config.src.fonts)
        .pipe(gulp.dest(config.build.fonts));
}

// Build IMAGES directory from source files
function buildImages() {
    return gulp.src(config.src.images)
        .pipe(gulp.dest(config.build.images));
}

// Build HTML directory from source files
function buildHTML() {
    return gulp.src(config.src.html)
        .pipe(gulp.dest(config.build.html));
}

// Build STYLESHEETS
function buildStylesheets() {
    return gulp.src(config.src.stylesheets)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(prefix({
            browsers: ['last 2 versions', 'ie >= 9'],
            cascade: true
        }))
        .pipe(gulp.dest(config.build.stylesheets));
}
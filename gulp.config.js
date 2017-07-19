module.exports = function() {
    return {
        src: {
            html: 'src/*.html',
            javascript: 'src/js/**/*.js',
            stylesheets: 'src/scss/**/*.scss',
            images: 'src/images/*',
            fonts: 'src/fonts/*'
        },
        build: {
            html: 'build/',
            javascript: 'build/js',
            stylesheets: 'build/css',
            images: 'build/images',
            fonts: 'build/fonts'
        }
    };
};
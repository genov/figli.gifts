module.exports = function() {
    return {
        src: {
            html: 'src/*.{html,json,svg,ico,png,xml}',
            javascript: 'src/js/**/*.js',
            stylesheets: 'src/scss/**/*.scss',
            images: 'src/images/*',
            fonts: 'src/fonts/*'
        },
        build: {
            html: 'docs/',
            javascript: 'docs/js',
            stylesheets: 'docs/css',
            images: 'docs/images',
            fonts: 'docs/fonts'
        }
    };
};
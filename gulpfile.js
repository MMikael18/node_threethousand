'use strict';

const 
dir = { // source and build folders
  src         : '/var/www/node_threethousand/app/',
  build       : '/var/www/node_threethousand/public/'
}, // Gulp and plugins
gulp          = require('gulp'),
gutil         = require('gulp-util'),
newer         = require('gulp-newer'),
sass          = require('gulp-sass'),
postcss       = require('gulp-postcss'),
imagemin      = require('gulp-imagemin'),

source     = require('vinyl-source-stream'),
browserify = require('browserify'),
babelify   = require('babelify')

// IMG
const images = {
  src         : dir.src + 'img/**/*',
  build       : dir.build + 'img/'
};
gulp.task('images', () => {
  return gulp.src(images.src)
    .pipe(newer(images.build))
    .pipe(imagemin())
    .pipe(gulp.dest(images.build));
});

// SCSS
var css = {
    src         : dir.src + 'scss/**/*.scss',
    watch       : dir.src + 'scss/**/*',
    build       : dir.build,
    sassOpts: {
      outputStyle     : 'nested',
      imagePath       : images.build,
      precision       : 3,
      errLogToConsole : true
    },
    processors: [
      require('postcss-assets')({
        loadPaths: ['images/'],
        basePath: dir.build
      }),
      require('autoprefixer')({
        browsers: ['last 2 versions', '> 2%']
      }),
      require('css-mqpacker'),
      require('cssnano')
    ]
};

gulp.task('css', ['images'], () => {
  return gulp.src(css.src)
    .pipe(sass(css.sassOpts))    
    .pipe(postcss(css.processors))    
    .pipe(gulp.dest(css.build));
})

// REACT
var dependencies = [
	'react',
  'react-dom'
]
gulp.task('react', function () {
  return browserify({
      require: dependencies,
      entries: dir.src + "app.jsx",
      debug: true
    })
    .transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(dir.build))
 });

// watch for file changes
gulp.task('watch', () => {    
    gulp.watch(images.src, ['images'])   // image changes 
    gulp.watch(css.watch, ['css'])       // CSS changes
    gulp.watch(dir.src, ['react'])       // React
})
  
// default task
gulp.task('default', ['build', 'watch'])
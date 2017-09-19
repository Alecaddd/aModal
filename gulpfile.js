// Load Gulp...of course
var gulp         = require( 'gulp' );

// JS related plugins
var concat       = require( 'gulp-concat' );
var uglify       = require( 'gulp-uglify' );
var babelify     = require( 'babelify' );
var browserify   = require( 'browserify' );
var source       = require( 'vinyl-source-stream' );
var buffer       = require( 'vinyl-buffer' );
var stripDebug   = require( 'gulp-strip-debug' );

// Utility plugins
var rename       = require( 'gulp-rename' );
var sourcemaps   = require( 'gulp-sourcemaps' );
var notify       = require( 'gulp-notify' );
var plumber      = require( 'gulp-plumber' );
var options      = require( 'gulp-options' );
var gulpif       = require( 'gulp-if' );

var jsSRC        = './src/';
var jsFront      = 'index.js';
var jsFiles      = [ jsFront ];
var jsURL        = './dist/';
var jsWatch      = './src/*.js';

// Tasks
gulp.task( 'js', function() {
    jsFiles.map( function( entry ) {
        return browserify({
            entries: [jsSRC + entry]
        })
        .transform( babelify, { presets: [ 'es2015' ] } )
        .bundle()
        .pipe( source( entry ) )
        .pipe( buffer() )
        .pipe( gulpif( options.has( 'production' ), stripDebug() ) )
        .pipe( sourcemaps.init({ loadMaps: true }) )
        .pipe( uglify() )
        .pipe( sourcemaps.write( '.' ) )
        .pipe( gulp.dest( jsURL ) );
    });
 });

 gulp.task( 'default', ['js'], function() {
    gulp.src( jsURL + 'index.js' )
        .pipe( notify({ message: 'Assets Compiled!' }) );
 });

 gulp.task( 'watch', ['default'], function() {
    gulp.watch( jsWatch, [ 'js' ] );
    gulp.src( jsURL + 'index.js' )
        .pipe( notify({ message: 'Gulp is Watching, Happy Coding!' }) );
 });

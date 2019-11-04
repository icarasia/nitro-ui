var fs = require( 'fs' );
var path = require( 'path' );
var browserify = require( 'browserify' );

var base = path.resolve( __dirname, '..' );
var src = path.resolve( base, 'src' );
var dist = path.resolve( base, 'dist' );
var fileName = 'form-float';

// console.log( 'base = ' + base );
// console.log( 'src = ' + src );
// console.log( 'dist = ' + dist );

var outputPathTmp = 'build-temp';
var outputPath = dist + '/js';

// console.log( 'outputPath = ' + outputPath );
// console.log( 'outputPathTmp = ' + outputPathTmp );
// console.log( 'dirExist = ' + fs.existsSync( outputPathTmp ) );

if ( !fs.existsSync( outputPathTmp ) ) {
    fs.mkdirSync( outputPathTmp );
}

browserify( src + '/js/' + fileName + '.js' )
  .transform( 'babelify', {
      presets: [
          '@babel/preset-env'
      ],
      sourceType: 'module',
      global: true
      // ignore: [ /\/node_modules\/(?!bootstrap\/)/ ]
  } )
  .bundle()
  .pipe( fs.createWriteStream( outputPathTmp + '/' + fileName + '-bundle.js' ) );

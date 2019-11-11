const sass = require( 'node-sass' );

module.exports = function( grunt ) {

    // Project configuration.
    grunt.initConfig( {

        clean: {
            'dist': 'dist'
        },

        sass: {
            options: {
                includePaths: [ 'node_modules', '.' ],
                implementation: sass,
                sourceMap: true
            },
            build: {
                files: {
                    'dist/css/toast.css': [
                        'src/sass/toast.scss'
                    ]
                }
            },
            compressed: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/css/toast.min.css': [
                        'src/sass/toast.scss'
                    ]
                }
            }
        },

        browserify: {
            dist: {
                files: {
                    'dist/js/toast.js': [
                        'src/js/toast.js'
                    ]
                },
                options: {
                    transform: [
                        [
                            'babelify', {
                                presets: ['@babel/preset-env'],
                                global: true,
                                ignore: [ /\/node_modules\/(?!bootstrap\/)/ ]
                            }
                        ]
                    ],
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            main: {
                files: {
                    'dist/js/toast.min.js': [
                        'dist/js/toast.js',
                    ]
                }
            },
        },

        watch: {
            css: {
                files: [ '**/*.{sass,scss}' ],
                tasks: [ 'sass', 'notify:css' ],
                options: {
                    spawn: false,
                    livereload: true,
                    interrupt: true
                },
            },
            js: {
                files: [ 'src/js/**/*.js' ],
                tasks: [ 'browserify', 'uglify', 'notify:js' ],
                options: {
                    spawn: false,
                    livereload: true,
                    interrupt: true
                },
            }
        },

        notify: {
            ping: {
                options:{
                    title: 'Nitro UI',
                    message: 'PONG!'
                }
            },
            watch: {
                options:{
                    title: 'Nitro UI',
                    message: 'Watching...'
                }
            },
            css: {
                options:{
                    title: 'Nitro UI',
                    message: 'CSS Ready!'
                }
            },
            js: {
                options:{
                    title: 'Nitro UI',
                    message: 'JS Ready!'
                }
            }
        }
    } );

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks( 'grunt-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-notify' );
    // grunt.loadNpmTasks( 'grunt-babel' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-browserify' );

    // Default task(s).
    // grunt.registerTask( 'default', [ 'clean', 'sass', 'babel', 'uglify', 'notify:css' ] );
    grunt.registerTask( 'js', [ 'browserify', 'uglify', 'notify:js' ] );
    grunt.registerTask( 'default', [ 'clean', 'sass', 'browserify', 'uglify', 'notify:css' ] );
};

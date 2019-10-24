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
                    'dist/css/background.css': [
                        'src/scss/background.scss'
                    ]
                }
            },
            compressed: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'dist/css/background.min.css': [
                        'src/scss/background.scss'
                    ]
                }
            }
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

    // Default task(s).
    grunt.registerTask( 'default', [ 'clean', 'sass', 'notify:css' ] );
};

module.exports = function( grunt ) {

    // Project configuration.
    grunt.initConfig( {

        clean: {
            'dist': 'dist'
        },

        sass: {
            build: {
                files: {
                    'dist/container.css': [
                        'src/container.scss'
                    ]
                }
            },
            compressed: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dist/container.min.css': [
                        'src/container.scss'
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
    grunt.loadNpmTasks( 'grunt-contrib-sass' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-notify' );

    // Default task(s).
    grunt.registerTask( 'default', [ 'clean', 'sass', 'notify:css' ] );
};
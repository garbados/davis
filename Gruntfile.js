module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: grunt.file.readJSON('config.json'),
    jshint: {
      assets: [
        'Gruntfile.js',
        'assets/js/**/*.js'
      ]
    },
    less: {
      dist: {
        files: {
          'dist/css/bundle.css': 'assets/css/bootstrap.less'
        }
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/',
        ext: '.min.css'
      }
    },
    concat: {
      vendor: {
        files: {
          'dist/js/vendor.js': [
            'assets/vendor/angular.js',
            'assets/vendor/angular-*.js',
            'assets/vendor/showdown.min.js'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/vendor.min.js': ['dist/js/vendor.js'],
          'dist/js/bundle.min.js': ['dist/js/bundle.js']
        }
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'assets/html/',
            src: ['**'],
            dest: 'dist/',
          }
        ]
      },
      deploy: {
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: ['*', '**/*'],
            dest: 'couchapp/_attachments/' 
          }
        ]
      }
    },
    browserify: {
      dist: {
        files: {
          'dist/js/bundle.js': ['assets/js/app.js']
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 5000,
          base: 'dist'
        }
      }
    },
    watch: {
      options: {
        livereload: 5000
      },
      scripts: {
        files: ['assets/js/**/*.js'],
        tasks: ['jshint', 'browserify'],
      },
      vendor: {
        files: ['assets/vendor/*.js'],
        tasks: ['concat']
      },
      css: {
        files: ['assets/css/*.less'],
        tasks: ['less', 'cssmin']
      },
      html: {
        files: ['assets/html/*.html'],
        tasks: ['copy']
      }
    },
    'couch-compile': {
      dist: {
        files: {
          'app.json': 'couchapp'
        }
      }
    },
    'couch-push': {
      options: '<%= config.auth %>',
      dist: {
        files: {
          '<%= config.database_url %>': 'app.json'
        } 
      }
    },
  });

  grunt.registerTask('build', [
    // douglas crawford thanks you
    'jshint',
    // concat vendor files
    'concat', // TODO bower, yo
    // build custom js
    'browserify', // TODO angular modules, dawg
    // compile less files
    'less',
    // minify css bundle
    'cssmin',
    // copy everything to the couchapp dir
    'copy'
  ]);

  grunt.registerTask('deploy', [
    'build',
    'uglify',
    'couch'
  ]);

  grunt.registerTask('server', [
    'build',
    'connect',
    'watch'
  ]);

  grunt.registerTask('travis', [
    'build'
  ]);
};
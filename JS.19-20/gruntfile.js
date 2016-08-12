module.exports = function (grunt) {

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/css/dev',
          src: ['*.sass'],
          dest: 'src/css/dev',
          ext: '.css'
        }]
      }
    },
    concat: {
      css: {
        src: ['src/css/dev/*.css'],
        dest: 'src/css/main.css',
        exclude: 'src/css/dev/*.map'
      },
      js: {
        options: {
          separator: ';',
        },
        src: ['src/js/dev/*.js'],
        dest: 'src/js/main.js'
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'prod/css',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      js: {
        src: ['src/js/main.js'],
        dest: 'prod/js/main.min.js'
      },
    },
    // watch: {
    //   scripts: {
    //     files: ['**/*.js'],
    //     tasks: ['jshint'],
    //     options: {
    //       spawn: false,
    //     },
    //   },
    // },
    // copy: {
    //   main: {
    //     files: [
    //       // includes files within path
    //       {
    //         expand: true,
    //         src: ['path/*'],
    //         dest: 'dest/',
    //         filter: 'isFile'
    //       },
    //
    //       // includes files within path and its sub-directories
    //       {
    //         expand: true,
    //         src: ['path/**'],
    //         dest: 'dest/'
    //       },
    //
    //       // makes all src relative to cwd
    //       {
    //         expand: true,
    //         cwd: 'path/',
    //         src: ['**'],
    //         dest: 'dest/'
    //       },
    //
    //       // flattens results to a single level
    //       {
    //         expand: true,
    //         flatten: true,
    //         src: ['path/**'],
    //         dest: 'dest/',
    //         filter: 'isFile'
    //       },
    //     ],
    //   },
    // },
    // browserSync: {
    //   bsFiles: {
    //     src: 'assets/css/*.css'
    //   },
    //   options: {
    //     server: {
    //       baseDir: "./"
    //     }
    //   }
    // }
  });


  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'concat', 'cssmin', 'uglify']);

};

module.exports = function(grunt) {

  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  concat: {
    js: {
      options: {
       separator: ';'
      },
      src: ['js/src/*.js'],
      dest: 'js/dist/script.main.js'
      
      },
    css: {
      options: {
       separator: ''
      },
        src: ['css/search/*.css'],
        dest: 'css/district/style.css'
    }
    },

  uglify: {
    js: {
      src: ['js/dist/script.main.js'],
      dest: 'js/dist/script.main.min.js'
      }
    },

  cssmin: {
    css: {
      src: ['css/district/style.css'],
      dest: 'css/district/style.min.css'
      }
    }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

  
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};


module.exports = function(grunt) {

  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  concat: {
    js: {
      options: {
       separator: ';'
      },
      src: ['js/*.js'],
      dest: 'dist/script.main.js'
      
      },
    css: {
      options: {
       separator: ''
      },
        src: ['css/*.css'],
        dest: 'dist/style.css'
    }
    },

  uglify: {
    js: {
      src: ['dist/script.main.js'],
      dest: 'dist/script.main.min.js'
      }
    },

  cssmin: {
    css: {
      src: ['dist/style.css'],
      dest: 'dist/style.min.css'
      }
    }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

  
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};


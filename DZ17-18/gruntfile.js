module.exports = function(grunt) {

  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  concat: {
    js: {
      options: {
       separator: ';'
      },
      src: ['js/*.js'],
      dest: 'node_modules/dist/script.main.js'
      
      },
    css: {
      options: {
       separator: ''
      },
        src: ['css/*.css'],
        dest: 'node_modules/dist/style.css'
    }
    },

  uglify: {
    js: {
      src: ['node_modules/dist/script.main.js'],
      dest: 'node_modules/dist/script.main.min.js'
      }
    },

  cssmin: {
    css: {
      src: ['node_modules/dist/style.css'],
      dest: 'node_modules/dist/style.min.css'
      }
    }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

  
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};


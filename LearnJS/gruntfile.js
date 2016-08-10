module.exports = function (grunt) {

  grunt.initConfig({
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: ['js/*.js'],
        dest: 'output/script.main.js'
      },
      css: {
        src: ['css/*.css'],
        dest: 'output/main.css'
      }
    },
    uglify: {
      js: {
        src: ['output/script.main.js'],
        dest: 'output/script.main.min.js'
      },
    },
    cssmin: {
      css: {
        src: ['output/main.css'],
        dest: 'output/main.min.css'
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sass']);

};

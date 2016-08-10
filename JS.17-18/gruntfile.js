module.exports = function (grunt) {

  grunt.initConfig({
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: ['dev/js/*.js'],
        dest: 'prod/js/script.main.js'
      },
      css: {
        src: ['dev/css/*.css'],
        dest: 'prod/css/main.css'
      }
    },
    uglify: {
      js: {
        src: ['prod/js/script.main.js'],
        dest: 'prod/js/script.main.min.js'
      },
    },
    cssmin: {
      css: {
        src: ['prod/css/main.css'],
        dest: 'prod/css/main.min.css'
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};

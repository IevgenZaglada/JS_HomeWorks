module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      dist: {
        src: ['styles/reset.scss', 'styles/style.scss'],
        dest: 'styles/main.scss'
      }
    },
    uglify: {
      dist: {
        src: ['js/script.js'],
        dest: 'dist/script.min.js'
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['main.scss'],
          dest: 'dist',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      css: {
        src: ['dist/main.css'],
        dest: 'dist/main.min.css'
          }
    },
    watch: {
      sass: {
        files: ['styles/*.scss'],
        tasks: ['concat', 'sass'],
        }}
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin']);

};

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: false,
        presets: ['es2015']
      },
      dist: {
        files: [{
          expand: true,   // enable dynamic expansion
          cwd: 'js/src',    // src matches are relative to this path
          src: ['*.js'],
          dest: 'js/dist',  // destination path prefix
          ext: '.js',   // dest filepaths will have this extension
          extDot: 'first'   // extensions in filenames begin after the first
        }]
      }
    },
    watch: {
      babel: {
        files: 'js/src/*.js',
        tasks: ['babel']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['babel']);

};

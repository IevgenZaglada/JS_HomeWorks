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
    copy: {
      main: {
        fonts: [{
          expand: true,
          cwd: 'src/',
          src: ['fonts/*.woff2'],
          dest: 'prod/',
        }],
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['index.html'],
          dest: 'prod/',
          filter: 'isFile'
        },],
      },
      img: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['img/*.jpg', 'img/*.png', 'fonts/**'],
          dest: 'prod/',
        },],
      },
      json: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['js/dev/*.json'],
          dest: 'prod/',
        },],
      },
      lodash: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['js/dev/lodash.js'],
          dest: 'prod/',
        },],
      },
    },
    watch: {
      options: {
        spawn: false,
      },
      files: {
        files: ['src/**/*'],
        tasks: ['sass', 'concat', 'cssmin', 'uglify', 'copy'],
      },
    },

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'concat', 'cssmin', 'uglify', 'copy']);
};

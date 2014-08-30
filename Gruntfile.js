
'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      tests: ['tmp'],
    },

    html2js: {
      default_options: {
        options: {
          compress: true
        },
        files: {
          'tmp/': 'test/fixtures/**/*.html',
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('green.html2js');

  grunt.registerTask('default', ['clean', 'html2js']);

};
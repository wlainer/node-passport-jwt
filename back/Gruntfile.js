module.exports = function(grunt) {

  require('jit-grunt')(grunt);

  grunt.initConfig({
      // Configure a mochaTest task
      mochaTest: {
        options: {
          reporter: 'spec'
        },
        src: ['api/**/*.spec.js']
      },

      env: {
        test: {
          NODE_ENV: 'test'
        },
        prod: {
          NODE_ENV: 'production'
        }
      }
    }),


    grunt.registerTask('default', ['env:test', 'mochaTest']);

};
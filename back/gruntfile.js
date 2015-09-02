/*global module, require*/

module.exports = function(grunt) {
    // URI paths for our tasks to use.
    grunt.uri = './';
    grunt.uriTask = grunt.uri + 'scripts/grunt/';

    // Our task object where we'll store our configuration.
    var tasks = {};
    tasks.concat = {};

    // Lint Tasks
    // tasks = require(grunt.uriTask + 'js-lint.js')(grunt, tasks);

    // Concatenation Tasks
    tasks = require(grunt.uriTask + 'js-concat.js')(grunt, tasks);

    // Minify Tasks
    tasks = require(grunt.uriTask + 'js-minify.js')(grunt, tasks);

    //  Jade templates
    tasks = require(grunt.uriTask + 'jade.js')(grunt, tasks);

    // Clean
    tasks = require(grunt.uriTask + 'clean.js')(grunt, tasks);

    // Watch
    tasks = require(grunt.uriTask + 'watch.js')(grunt, tasks);

    // Register The Tasks
    grunt.registerTask('all', ['clean', 'concat', 'uglify', 'jade']);
    grunt.registerTask('default', ['all', 'watch']);

    // Initialize The Grunt Configuration
    grunt.initConfig(tasks);
};
/*global module*/

module.exports = function(grunt, tasks) {
  grunt.loadNpmTasks('grunt-wiredep');

  tasks.wiredep = {
    target: {
      src: [
        'app/index.html'
      ]
      //   bowerJson: './../',
      //   cwd: './app/',
      //   directory: './js/lib/',
      // options: {
      //   dependencies: true
      // }
    }
  };

  return tasks;
};
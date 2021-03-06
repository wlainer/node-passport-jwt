/*global module*/

module.exports = function(grunt, tasks) {
   grunt.loadNpmTasks('grunt-contrib-clean');

   // The configuration for a specific task.
   tasks.clean = {
      clean: ["./app/js/dist/*"],
      options: {
         force: true
      }
   };

   return tasks;
};
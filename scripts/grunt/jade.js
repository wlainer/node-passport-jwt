/*global module*/

module.exports = function(grunt, tasks) {
   grunt.loadNpmTasks('grunt-contrib-jade');

   // The configuration for a specific task.
   tasks.jade = {
      compile: {
         options: {
            client: false,
            pretty: true
         },
         files: [{
            cwd: "./views/",
            dest: "./public/js/",
            expand: true,
            ext: ".html",
            src: ["**/*.jade", // all jade files in subfolders
               "!*.jade" // exclude jade files on top folder
            ]
         }]
      }
   };

   return tasks;
};
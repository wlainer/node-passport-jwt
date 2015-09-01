/*global module*/

module.exports = function(grunt, tasks) {
   grunt.loadNpmTasks('grunt-contrib-watch');

   // The configuration for a specific task.
   tasks.watch = {
      jade: {
         files: 'views/**/*.jade',
         tasks: ['jade']
      }, 
      js: {
         files: ['public/js/**/*.js',
            '!public/js/lib/**/*.js',
            '!public/js/dist/**/*.js'
         ],
         tasks: ['clean', 'concat', 'uglify']
      }
   };

   return tasks;
};
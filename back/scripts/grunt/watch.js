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
         files: ['./../front/js/**/*.js',
            '!./../front/js/lib/**/*.js',
            '!./../front/js/dist/**/*.js'
         ],
         tasks: ['clean', 'concat', 'uglify']
      }
   };

   return tasks;
};
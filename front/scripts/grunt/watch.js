/*global module*/

module.exports = function(grunt, tasks) {
   grunt.loadNpmTasks('grunt-contrib-watch');

   // The configuration for a specific task.
   tasks.watch = {
      jade: {
         files: './src/view/**/*.jade',
         tasks: ['jade', 'wiredep']
      },
      js: {
         files: ['./src/js/**/*.js',
            '!./src/js/lib/**/*.js',
            '!./src/js/dist/**/*.js'
         ],
         tasks: ['clean', 'concat', 'uglify']
      },
      bower: {
         files: 'bower.json',
         tasks: ['wiredep']
      }
   };

   return tasks;
};
/*global module*/

module.exports = function(grunt, tasks) {
    // Load our node module required for this task.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // The configuration for a specific task.
    // In this case we have more than a single concat task. We need to append our task to our `tasks.concat` object that
    // way we're not overriding any of other previous tasks.
    tasks.concat.js = {
        // Where to output our concatenated file to.
        dest: './app/js/dist/concat.js',

        // The files that we want to concatenate.
        src: [
            './src/js/*.js', // Include all JS files in this directory.
            './src/js/**/*.js', // Include all JS files in this directory.
            '!' + './src/js/*.min.js', // Exclude any files ending with `.min.js`
            '!' + './src/js/lib/**/*'
        ]
    };

    return tasks;
};
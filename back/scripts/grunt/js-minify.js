/*global module*/

module.exports = function(grunt, tasks) {
    // Load our node module required for this task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // The configuration for a specific task.
    tasks.uglify = {
        dist: {
            cwd: './../front/js/', // The current working directory.
            dest: './../front/js/dist/', // The destination directory to store our minified files.
            expand: true,
            ext: '.min.js', // The extension to use for our minified file.
            flatten: true,
            src: [
                './dist/concat.js' // Specific rule to minify our `concat.js` file in our dist directory.
                // '*.js', // Include all JS files in this directory.
                // '!*.min.js', // Exclude any files ending with `.min.js`
                // '!./public/js/lib/'
            ]
        }
    };

    return tasks;
};
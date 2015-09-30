gulp = require 'gulp'
plgn = require('gulp-load-plugins')()
paths = require './paths'

###
# Web server
# For local development
###

# Watch changes on .jade, .stylus and .coffee files
gulp.task 'watch', ['compile'], ->
  gulp.watch paths.jade, ['jade']
  gulp.watch paths.stylus, ['stylus']

# Starts a local web server
gulp.task 'webserver', ['compile'], ->
  gulp.src ['client', '.tmp']
    .pipe plgn.webserver
      livereload: true
      open: true

# Default task
gulp.task 'default', ['compile', 'webserver', 'watch']

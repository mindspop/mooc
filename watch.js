const path = require('path')

const gulp = require('gulp')
const aglio = require('gulp-aglio')
const gutil = require('gulp-util')

const options = require('./config').get('base')
const render = require('./render')

const cwd = process.cwd()

module.exports = function watch(done) {
  gulp.watch(options.apiFiles)
  .on('change', function(p, stats) {
    gutil.log(`${p} changed`)
    render(path.resolve(cwd, p))()
  })
  .on('add', function(p, stats) {
    gutil.log(`${p} added`)
    render(path.resolve(cwd, p))()
  })

  done()
}

const path = require('path')

const gulp = require('gulp')
const aglio = require('gulp-aglio')

const options = require('./config').get('renderOptions')
const cwd = process.cwd()

function render(pattern) {
  return function renderAPI(done) {
    return gulp.src(pattern, { base: path.resolve(cwd, 'api') })
      .pipe(aglio(options))
      .pipe(gulp.dest(options.dest))
  }
}

module.exports = render

var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var browserify = require('browserify')
var watchify = require('watchify')
var babelify = require('babelify')
var es2015 = require('babel-preset-es2015')
var react = require('babel-preset-react')
// var mocha = require('gulp-mocha')
var eslint = require('gulp-eslint')
var sass = require('gulp-sass')

var eslintOpt = {
  "parser": "babel-eslint",
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShortandProperties": true,
    "restParams": true,
    "spread": true,
    "templateStrings": true
  },
  "globals": {
    "console": true, "__dirname": true, "process": true, "require": true,
    "before": true, "after": true, "describe": true, "it": true
  },
  "rules": {
    "array-bracket-spacing": 1,
    "comma-style": [1, "last"],
    "curly": [1, "multi"],
    "default-case": 1,
    "max-len": [1, 100, 4],
    "no-extra-parens": 1,
    "no-floating-decimal": 1,
    "no-multiple-empty-lines": [1, {"max": 2}],
    "no-plusplus": 1,
    "no-spaced-func": 1,
    "no-throw-literal": 1,
    "no-undef": 1,
    "no-unused-vars": 1,
    "no-var": 1,
    "no-void": 1,
    "no-trailing-spaces": 1,
    "object-curly-spacing": 1,
    "padded-blocks": [1, "never"],
    "quote-props": [1, "as-needed"],
    "quotes": [1, "single"],
    "space-before-blocks": [1, "always"],
    "space-before-function-paren": [1, "never"],
    "spaced-comment": 1,
    "space-in-parens": [1, "never"]
  }
}

function compile(watch) {
  var bundler = watchify(browserify({
    entries:'./src/javascript/index.js',
    debug: true
  }).transform('babelify', {presets: ["es2015", "react"]}))

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end') })
      .pipe(source('./build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(eslint({eslintOpt}))
      .pipe(gulp.dest('build/javascript'))
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...')
      rebundle()
    })
  }

  rebundle()
  bundleCss()
}

function bundleCss(){
  gulp.src('./src/stylesheets/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'))
}

function watch() {
  return compile(true)
}

// function test(){
//   return gulp.src('./tests/*.js', {read: false})
//   .pipe(mocha({reporter: 'nyan'}))
// }

gulp.task('build', compile)
gulp.task('watch', watch)
// gulp.task('test', test)

gulp.task('default', ['watch'])

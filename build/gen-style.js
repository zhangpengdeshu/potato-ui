const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

const components = require('../components.json');

function buildCss(cb) {
    gulp.src('../src/style/index.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(rename('potato-ui.css'))
        .pipe(gulp.dest('../lib/styles'))
    cb()    
}

function buildSeperateCss(cb) {
    Object.keys(components).forEach(compName => {
      gulp.src(`../src/styles/${compName}.scss`)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename(`${compName}.css`))
        .pipe(gulp.dest('../lib/styles'));
    })
  
    cb()
  }

  exports.default = gulp.series(buildCss, buildSeperateCss)


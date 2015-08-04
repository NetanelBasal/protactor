var protractor = require("gulp-protractor").protractor;
var gulp = require("gulp");



gulp.task('pro', function() {
  gulp.src([".specs/*.js"])
    .pipe(protractor({
        configFile: "./protractor.conf.js"
    }))
    .on('error', function(e) { console.log(e); })
});
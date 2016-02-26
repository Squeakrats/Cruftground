var gulp = require("gulp");
var gls = require('gulp-live-server');
var cache = require('gulp-cached');
var server = gls.new("server.js");


var onerror = function (e) {
  console.log("\033[31m WARNING: YOUR STUFF ISNT TRANSPILING")
  console.log(e.message)
  this.emit("end");
}

gulp.task("server", function () {
    server = gls.static("cruft/../", 8888);
    server.start();
})

gulp.task("watch", function () {
	gulp.watch("**/**/*.js", function (file) {
		console.log("CHANGE");
		server.notify.apply(server, [file]);
	})
})

//echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
gulp.task("default", ["server", "watch"], function () {
	
})
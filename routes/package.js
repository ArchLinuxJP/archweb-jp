var express = require("express");
var router = express.Router();
var sqlite3 = require("sqlite3").verbose();
var fs = require('fs');
var db = new sqlite3.Database("admin/package.sqlite3");

/* GET home page. */
router.get("/", function(req, res, next) {
	db.serialize(function() {
		var repo = req.originalUrl.split("/")[2];
		var arch = req.originalUrl.split("/")[3];
		var pkgname = req.originalUrl.split("/")[4];
		db.each("SELECT * FROM package WHERE repo = '" + repo + "' AND arch = '" + arch + "' AND pkgname = '" + pkgname + "'", function(err, row){
			if (!err) {
				res.render("package", {
					title: pkgname + " " + row.pkgver + "-" + row.pkgrel + " (" + arch + ")",
					package: row,
					selected: "anb-packages"
				});
			}
		}, function(err, count){
			if (count == 0){
				next(err);
			}
		});
	});
});

module.exports = router;

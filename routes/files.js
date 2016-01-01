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
				if(arch == "any"){
					var archf = "x86_64";
				}else{
					var archf = arch;
				}
				var file = fs.readFileSync("admin/past/" + repo + "/" + archf + "/" + pkgname + "-" + row["pkgver"] + "-" + row["pkgrel"] + "/files", "utf-8").split("\n");
				var files = new Array(), numd = 0, numf = 0;
				for(var i = 1; i < file.length - 1; i++){
					if(file[i].substr(-1) == "/"){
						files.push({ type: "d", file: file[i] });
						numd++;
					}else{
						files.push({ type: "f", file: file[i] });
						numf++;
					}
				}
				res.render("files", {
					title: pkgname + " " + row.pkgver + "-" + row.pkgrel + " (" + arch + ") - ファイルリスト",
					files: files,
					numf: numf,
					numd: numd,
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

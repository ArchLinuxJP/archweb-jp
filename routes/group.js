var express = require("express");
var router = express.Router();
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("admin/package.sqlite3");

/* GET home page. */
router.get("/", function(req, res, next) {
	db.serialize(function() {
		var arch = req.originalUrl.split("/")[2];
		var grpname = req.originalUrl.split("/")[3];
		
		// パッケージ翻訳
		if(req.getLocale() != "en"){
			var pkgdesc = "ifnull(translate_" + req.getLocale().replace("-", "_") + ".desc, package.pkgdesc) as pkgdesc";
			var translate = " LEFT OUTER JOIN translate_" + req.getLocale().replace("-", "_") + " ON package.pkgname = translate_" + req.getLocale().replace("-", "_") + ".name";
		}else{
			var pkgdesc = "pkgdesc";
			var translate = "";
		}
		
		// ソート
		switch(req.query.sort){
			case "repo":
			case "pkgname":
			case "last_update":
				order = " ORDER BY " + req.query.sort + " ASC";
				break;
			case "-repo":
			case "-pkgname":
			case "-last_update":
				order = " ORDER BY " + req.query.sort.substr(1) + " DESC";
				break;
			default:
				order = " ORDER BY pkgname ASC";
				break;
		}
		
		var where = " WHERE (pkggrp = \"" + grpname + "\" OR pkggrp LIKE \"% " + grpname + "\" OR pkggrp LIKE \"" + grpname + " %\") AND (arch = \"" + arch + "\" OR arch =\"any\")";
		
		db.all("SELECT arch, repo, pkgname, pkgver, pkgrel, " + pkgdesc + ", last_update, (SELECT COUNT(pkgname) FROM package" + where + ") AS count FROM package" + translate + where + order, function(err, rows){
			if (!err) {
				if(rows.length == 0){
					next(err);
				}else{
					res.render("group", {
						title: grpname + " (" + arch + ")",
						package: rows,
						sort: req.query.sort,
						grpname: grpname,
						arch: arch,
						selected: "anb-packages"
					});
				}
			}else{
				next(err);
			}
		});
	});
});

module.exports = router;

var express = require("express");
var router = express.Router();
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("admin/mirror.sqlite3");

/* GET home page. */
router.get("/", function(req, res, next) {
	db.serialize(function() {
		db.all("SELECT * FROM status", function(err, rows){
			if (!err) {
				if(rows.length == 0){
					next(err);
				}else{
					res.render("mirrorstatus", {
						title: "ミラーの状態",
						mirror: rows,
						selected: "anb-home"
					});
				}
			}else{
				next(err);
			}
		});
	});
});

module.exports = router;

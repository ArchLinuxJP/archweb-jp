var express = require("express");
var router = express.Router();
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("admin/group.sqlite3");

/* GET home page. */
router.get("/", function(req, res, next) {
	db.serialize(function() {
		// ソート
		switch(req.query.sort){
			case "arch":
			case "number":
			case "grpname":
			case "last_update":
				order = " ORDER BY " + req.query.sort + " ASC";
				break;
			case "-arch":
			case "-number":
			case "-grpname":
			case "-last_update":
				order = " ORDER BY " + req.query.sort.substr(1) + " DESC";
				break;
			default:
				order = " ORDER BY grpname ASC";
				break;
		}
		
		db.all("SELECT * FROM groups" + order, function(err, rows){
			if (!err) {
				if(rows.length == 0){
					next(err);
				}else{
					res.render("groups", {
						title: "パッケージグループ",
						group: rows,
						sort: req.query.sort,
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

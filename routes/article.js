var express = require("express");
var router = express.Router();
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("views/news/index.sqlite3");

/* GET home page. */
router.get("/", function(req, res, next) {
	db.serialize(function() {
		db.each("SELECT * FROM news WHERE url = '"+"dropping-plasma-4"+"'", function(err, row){
			if (!err) {
				res.render("news/" + row.url, {
					title: "ニュース: " + row.headline,
					created: row.created,
					modified: row.modified,
					author: row.author,
					url: row.url,
					selected: "anb-home"
				});
			}
		});
	});
	db.close();
});

module.exports = router;

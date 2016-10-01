var express = require("express");
var router = express.Router();
var sqlite3 = require("sqlite3").verbose();
var fs = require('fs');
var db = new sqlite3.Database("admin/index.sqlite3");

/* GET home page. */
router.get("/", function(req, res, next) {
	db.serialize(function() {
		var request = req.originalUrl.split("/")[2];
		var amp = (req.originalUrl.split("/").length > 4) ? "amp" : "";
		db.each("SELECT * FROM news WHERE url = '" + request + "'", function(err, row){
			if (!err) {
				var html = fs.readFileSync("views/news/" + row.url + ".html", "utf-8");
				res.render(amp + "article", {
					title: "ニュース: " + row.headline,
					created: row.created,
					modified: row.modified,
					author: row.author,
					url: row.url,
					body: html,
					selected: "anb-home",
					amp: "amp"
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

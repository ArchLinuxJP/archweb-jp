var express = require("express");
var router = express.Router();
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("admin/index.sqlite3");

/* GET home page. */
router.get("/", function(req, res, next) {
	db.serialize(function() {
		// オフセット
		var limit = " LIMIT 50";
		var page = (req.query.page != undefined) ? parseInt(req.query.page) : 1;
		if(page > 1){
			limit = " LIMIT " + ((page - 1) * 50) + ", 50";
		}
		
		db.all("SELECT *, (SELECT COUNT(url) FROM news) AS count FROM news" + limit, function(err, rows){
			if (!err) {
				if(rows.length == 0){
					res.render("news", {
						title: "ニュース",
						news: new Array({count:0}),
						selected: "anb-home",
						page: 1,
						total: 1,
						nextp: 0,
						prevp: 0
					});
				}else{
					var total = Math.ceil(rows[0].count * 0.02);
					var nextp = (page < total) ? page + 1 : 0;
					var prevp = (page > 1) ? page - 1 : 0;
					
					res.render("news", {
						title: "ニュース",
						news: rows,
						selected: "anb-home",
						page: page,
						total: total,
						nextp: nextp,
						prevp: prevp
					});
				}
			}else{
				next(err);
			}
		});
	});
});

module.exports = router;

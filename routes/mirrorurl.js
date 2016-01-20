var express = require("express");
var router = express.Router();
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("admin/mirror.sqlite3");

/* GET home page. */
router.get("/", function(req, res, next) {
	db.serialize(function() {
		var request = req.originalUrl.split("/")[2];
		db.all("SELECT * FROM mirror WHERE mirror = '" + request + "'", function(err, rows){
			if (!err) {
				if(rows.length == 0){
					next(err);
				}else{
					for(var i = 0; i < rows.length; i++){
						var d = new Date(rows[i].checktime * 1000);
						rows[i].checktime = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
						if(rows[i].success == "Yes"){
							var d = new Date(rows[i].lastsync * 1000);
							rows[i].lastsync = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
							var h = Math.floor(rows[i].delay / 60 / 60);
							var m = ("0" + Math.floor((rows[i].delay - (h * 60 * 60)) / 60)).slice(-2);
							rows[i].delay = h + ":" + m;
							rows[i].duration = rows[i].duration * 0.01;
						}
					}
					
					res.render("mirrorurl", {
						title: rows[0].url,
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

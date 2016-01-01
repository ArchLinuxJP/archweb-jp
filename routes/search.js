var express = require("express");
var router = express.Router();
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("admin/package.sqlite3");

/* GET home page. */
router.get("/", function(req, res, next) {
	db.serialize(function() {
		// ソート
		switch(req.query.sort){
			case "arch":
			case "repo":
			case "pkgname":
			case "last_update":
				order = "ORDER BY " + req.query.sort + " ASC";
				break;
			case "-arch":
			case "-repo":
			case "-pkgname":
			case "-last_update":
				order = "ORDER BY " + req.query.sort.substr(1) + " DESC";
				break;
			default:
				order = "ORDER BY pkgname ASC";
		}
		
		// 検索条件
		var where = "";
		if(req.query.q != undefined && /^[0-9a-zA-Z\@\.\_\+\-]+$/.test(req.query.q)){
			var q = req.query.q;
			if(q.length > 30){
				q = q.substr(0, 30);
			}
			where += " pkgname LIKE \"%" + q + "%\"";
		}else if(req.query.name != undefined && /^[0-9a-zA-Z\@\.\_\+\-]+$/.test(req.query.name)){
			var q = req.query.name;
			if(q.length > 30){
				q = q.substr(0, 30);
			}
			where += " pkgname = \"" + q + "\"";
		}else{
			var q = "";
		}
		if(where != ""){
			where = " WHERE" + where;
		}
		
		// オフセット
		var limit = "LIMIT 100";
		var page = (req.query.page != undefined) ? parseInt(req.query.page) : 1;
		if(page > 1){
			limit = "LIMIT " + ((page - 1) * 100) + ", 100";
		}
		
		db.all("SELECT *, (SELECT COUNT(pkgname) FROM package" + where + ") AS count FROM package " + where + order + " " + limit, function(err, rows){			
			if (!err) {
				if(rows.length == 0){
					res.render("search", {
						title: "パッケージ検索",
						package: new Array({count:0}),
						sort: req.query.sort,
						page: 1,
						total: 1,
						nextp: 0,
						prevp: 0,
						criteria: "",
						q: q,
						selected: "anb-packages"
					});
				}else{
					var total = Math.ceil(rows[0].count * 0.01);
					var nextp = (page < total) ? page + 1 : 0;
					var prevp = (page > 1) ? page - 1 : 0;
					var criteria = "";
					if(Object.keys(req.query).length > 1){
						criteria = req.originalUrl.split("?").pop().replace("page=" + page, "");
						if(criteria[0] != "&"){
							criteria = "&" + criteria;
						}
					}else if(Object.keys(req.query).length == 1 && req.query.page == undefined){
						criteria = "&" + req.originalUrl.split("?").pop();
					}
					
					res.render("search", {
						title: "パッケージ検索",
						package: rows,
						sort: req.query.sort,
						page: page,
						total: total,
						nextp: nextp,
						prevp: prevp,
						criteria, criteria,
						q: q,
						selected: "anb-packages"
					});
				}
			}
		});
	});
});

module.exports = router;

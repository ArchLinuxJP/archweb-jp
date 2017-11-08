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
				order = " ORDER BY " + req.query.sort + " ASC";
				break;
			case "-arch":
			case "-repo":
			case "-pkgname":
			case "-last_update":
				order = " ORDER BY " + req.query.sort.substr(1) + " DESC";
				break;
			default:
				order = " ORDER BY pkgname ASC";
				break;
		}
		
		// 検索条件
		var where = "";
		if(req.query.q != undefined && /^[0-9a-zA-Z\@\.\_\+\-]+$/.test(req.query.q)){
			var q = req.query.q;
			if(q.length > 50){
				q = q.substr(0, 50);
			}
			where += " pkgname LIKE \"%" + q + "%\"";
		}else if(req.query.name != undefined && /^[0-9a-zA-Z\@\.\_\+\-]+$/.test(req.query.name)){
			var q = req.query.name;
			if(q.length > 50){
				q = q.substr(0, 50);
			}
			where += " pkgname = \"" + q + "\"";
		}else{
			var q = "";
		}
		if(Array.isArray(req.query.arch)){
			var arch = "";
			for(var i = 0; i < req.query.arch.length; i++){
				switch(req.query.arch[i]){
					case "any":
					case "x86_64":
						if(arch != ""){
							arch += " OR ";
						}
						arch += "arch = \"" + req.query.arch[i] + "\"";
						break;
				}
			}
			if(arch != ""){
				if(where != ""){
					where += " AND ( " + arch +" )";
				}else{
					where += " ( " + arch +" )";
				}
			}
		}else if(req.query.arch != undefined){
			switch(req.query.arch){
				case "any":
				case "x86_64":
					if(where != ""){
						where += " AND arch = \"" + req.query.arch + "\"";
					}else{
						where += " arch = \"" + req.query.arch + "\"";
					}
					break;
			}
		}
		if(Array.isArray(req.query.repo)){
			var repo = "";
			for(var i = 0; i < req.query.repo.length; i++){
				switch(req.query.repo[i]){
					case "community":
					case "community-testing":
					case "core":
					case "extra":
					case "multilib":
					case "multilib-testing":
					case "testing":
						if(repo != ""){
							repo += " OR ";
						}
						repo += "repo = \"" + req.query.repo[i] + "\"";
						break;
				}
			}
			if(repo != ""){
				if(where != ""){
					where += " AND ( " + repo +" )";
				}else{
					where += " ( " + repo +" )";
				}
			}
		}else if(req.query.repo != undefined){
			switch(req.query.repo){
				case "community":
				case "community-testing":
				case "core":
				case "extra":
				case "multilib":
				case "multilib-testing":
				case "testing":
					if(where != ""){
						where += " AND repo = \"" + req.query.repo + "\"";
					}else{
						where += " repo = \"" + req.query.repo + "\"";
					}
					break;
			}
		}
		if(where != ""){
			where = " WHERE" + where;
		}
		
		// オフセット
		var limit = " LIMIT 100";
		var page = (req.query.page != undefined) ? parseInt(req.query.page) : 1;
		if(page > 1){
			limit = " LIMIT " + ((page - 1) * 100) + ", 100";
		}
		
		db.all("SELECT arch, repo, pkgname, pkgver, pkgrel, pkgdesc, last_update, (SELECT COUNT(pkgname) FROM package" + where + ") AS count FROM package" + where + order + limit, function(err, rows){
			if (!err) {
				var criteria = "";
				if(Object.keys(req.query).length > 0){
					criteria = req.originalUrl.split("?").pop().replace(/page=[0-9]+/, "").replace(/\"/g,"").replace(/\'/g,"").replace(/\>/g,"").replace(/\</g,"");
					if(criteria != "" && criteria[0] != "&"){
						criteria = "&" + criteria;
					}
				}
				
				if(rows.length == 0){
					res.render("search", {
						title: "パッケージ検索",
						package: new Array({count:0}),
						sort: req.query.sort,
						page: 1,
						total: 1,
						nextp: 0,
						prevp: 0,
						criteria: criteria,
						q: q,
						selected: "anb-packages"
					});
				}else{
					var total = Math.ceil(rows[0].count * 0.01);
					var nextp = (page < total) ? page + 1 : 0;
					var prevp = (page > 1) ? page - 1 : 0;
					
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
			}else{
				next(err);
			}
		});
	});
});

module.exports = router;

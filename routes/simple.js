var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	var url = req.originalUrl.split("/").join("");
	switch(url) {
		case "about":
			var stitle = "Arch Linux について";
			var id = "intro";
			break;
		case "svn":
			var stitle = "SVN リポジトリ";
			var id = "svn";
			break;
		case "donate":
			var stitle = "寄付";
			var id = "donations";
			break;
		case "people":
			var stitle = "日本 Arch Linux ユーザー会";
			var id = "dev-tu-profiles";
			break;
		case "art":
			var stitle = "ロゴとアートワーク";
			var id = "artwork";
			break;
	}
	res.render(url, {
		title: stitle,
		style: id,
		selected: "anb-home"
	});
});

module.exports = router;

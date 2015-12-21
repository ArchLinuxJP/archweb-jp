var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	var url = req.originalUrl.split("/").join("");
	switch(url) {
		case "about":
			var stitle = "Arch Linux について";
			break;
		case "svn":
			var stitle = "SVN リポジトリ";
			break;
		case "donate":
			var stitle = "Arch Linux への寄付";
			break;
	}
	res.render(url, {
		title: stitle,
		selected: "anb-home"
	});
});

module.exports = router;

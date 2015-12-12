var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("svn", {
		title: "SVN リポジトリ",
		selected: "anb-home"
	});
});

module.exports = router;

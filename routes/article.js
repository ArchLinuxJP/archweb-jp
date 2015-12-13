var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("article", {
		title: "ニュース: Plasma 4 のサポート終了",
		selected: "anb-home"
	});
});

module.exports = router;

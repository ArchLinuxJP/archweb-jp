var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("download", {
		title: "ダウンロード",
		selected: "anb-download"
	});
});

module.exports = router;

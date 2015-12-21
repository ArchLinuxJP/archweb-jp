var express = require("express");
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("download", {
		title: "ダウンロード",
		selected: "anb-download",
		isoinfo: JSON.parse(fs.readFileSync("admin/lastiso.json", "utf8"))
	});
});

module.exports = router;

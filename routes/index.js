var express = require("express");
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get("/", function(req, res, next) {
	var body = {
		newpkg: fs.readFileSync("admin/newpkg.html", "utf-8"),
		newnews: fs.readFileSync("admin/newnews.html", "utf-8"),
		oldnews: fs.readFileSync("admin/oldnews.html", "utf-8")
	};
	res.render("index", {
		title: "Arch Linux JP Project",
		body: body,
		selected: "anb-home"
	});
});

module.exports = router;

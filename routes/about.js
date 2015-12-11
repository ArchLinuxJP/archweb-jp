var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("about", {
		title: "Arch Linux について",
		selected: "anb-home"
	});
});

module.exports = router;

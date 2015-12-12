function $(id) {
	return document.getElementById(id);
}

$("archnavbaricon").onclick = function(){
	$("archnavbarlogo").style.display = "none";
	$("archnavbaricon").style.cssText = "display:none !important;";
	$("archnavbar").style.cssText = "margin-left:0 !important;overflow:auto !important;white-space:nowrap !important;";
	$("archnavbarmenu").style.display = "";
};

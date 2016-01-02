// mobile navbar
document.getElementById("archnavbaricon").onclick = function() {
	document.getElementById("archnavbarlogo").style.display = "none";
	document.getElementById("archnavbaricon").style.cssText = "display:none !important;";
	document.getElementById("archnavbar").style.cssText = "margin-left:0 !important;overflow:auto !important;white-space:nowrap !important;";
	document.getElementById("archnavbarmenu").style.display="block";
}

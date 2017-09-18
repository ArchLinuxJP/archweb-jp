// mobile navbar
document.getElementById("archnavbaricon").onclick = function() {
	document.getElementById("archnavbarlogo").style.display = "none";
	document.getElementById("archnavbaricon").style.cssText = "display:none !important;";
	document.getElementById("archnavbar").style.cssText = "margin-left:0 !important;overflow:auto !important;white-space:nowrap !important;";
	document.getElementById("archnavbarmenu").style.display="block";
}

// wiki table
window.onload = function() {
	if(location.href.indexOf("wiki.archlinux.jp") != -1 && (window.innerWidth || document.documentElement.clientWidth) < 800) {
		var tables = document.getElementsByTagName("table");
		for(var i = 0; i < tables.length; i++) {
			if(tables[i].className.indexOf("wikitable") != -1) {
				tables[i].outerHTML = '<div style="overflow-x:auto;white-space:nowrap;">' + tables[i].outerHTML + "</div>";
				if(tables[i].getElementsByTagName("caption").length > 0) {
					tables[i].getElementsByTagName("caption")[0].style.textAlign = "left";
				}
			}
		}
	}
}

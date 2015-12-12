var isopen = true;

// getelement
function $(id) {
	return document.getElementById(id);
}

// wiki
function menuopen() {
	isopen = false;
	$("globalWrapper").style.cssText = "margin-left:0 !important;overflow:hidden !important;";
	$("p-cactions").style.cssText = "margin-left:0 !important;overflow:hidden !important;";
	$("content").ontouchstart = function() {
		menuclose();
	};
}

function menuclose() {
	isopen = true;
	$("globalWrapper").style.cssText = "margin-left:-12.2em !important;overflow:visible !important;";
	$("p-cactions").style.cssText = "margin-left:-12.2em !important;overflow:visible !important;";
	$("content").ontouchstart = function(){};
}

function tablewikim() {
	var ei = document.getElementsByTagName("table");
	for (i=0;i<ei.length;i++) {
		if (ei[i].className == "wikitable" ){
			ei[i].outerHTML = "<div style='overflow:auto;'><table class='wikitable' style='"+ei[i].style.cssText+"'>" + ei[i].innerHTML + "</table></div>";
		}
	}
}

window.onload = function() {
	if (
		navigator.userAgent.indexOf('iPhone') > 0 ||
		navigator.userAgent.indexOf('iPod') > 0 ||
		(navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)
	) {
		var obj = document.createElement('div');
		obj.id = "archnavbaricon";
		obj.onclick = function() {
			$("archnavbarlogo").style.display = "none";
			$("archnavbaricon").style.cssText = "display:none !important;";
			$("archnavbar").style.cssText = "margin-left:0 !important;overflow:auto !important;white-space:nowrap !important;";
			$("archnavbarmenu").style.display="";
		};
		obj.innerHTML = '<img src="https://www.archlinuxjp.org/img/menu.png">';
		$("archnavbar").insertBefore(obj, $("archnavbarmenu"));
		
		$("archnavbarmenu").style.display = "none";
		if ($("column-one")){
			var obj = document.createElement('div');
			obj.id = "wikimenuicon";
			obj.innerHTML = '<img src="https://www.archlinuxjp.org/img/wikimenu.png">';
			$("content").insertBefore(obj, $("content").firstChild);
			$("wikimenuicon").children[0].onclick = function() {
				if (isopen) {
					menuopen();
				} else {
					menuclose();
				}
			}
		}
	}
};

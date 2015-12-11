var isopen=true;
function $(id){ return document.getElementById(id) }
function menuopen(){ isopen=false;$("globalWrapper").style.cssText="margin-left:0 !important;overflow:hidden !important;";$("p-cactions").style.cssText="margin-left:0 !important;overflow:hidden !important;";$("content").ontouchstart=function(){menuclose()}; }
function menuclose(){ isopen=true;$("globalWrapper").style.cssText="margin-left:-12.2em !important;overflow:visible !important;";$("p-cactions").style.cssText="margin-left:-12.2em !important;overflow:visible !important;";$("content").ontouchstart=function(){}; }
$("archnavbaricon").onclick=function(){ $("archnavbarlogo").style.display="none";$("archnavbaricon").style.cssText="display:none !important;";$("archnavbar").style.cssText="margin-left:0 !important;overflow:auto !important;white-space:nowrap !important;";$("archnavbarmenu").style.display=""; };
$("wikimenuicon").children[0].onclick=function(){ if(isopen){menuopen()}else{menuclose()} };
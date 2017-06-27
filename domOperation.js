/***************************************************
*
* Author : stevekeol
* Email: stevekeol.x@gmail.com
*
***************************************************/
// dynamic script
function loadScript(url) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	document.body.appendChild(script);
}

//dynamic style
function loadStyle(url) {
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = url;
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(link);
}


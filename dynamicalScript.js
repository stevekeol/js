
/****************************************
*
* For example: loadScript("client.js");
*
*****************************************/
function loadScript(url) {
	let script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	document.bodyappendChild(script);
}
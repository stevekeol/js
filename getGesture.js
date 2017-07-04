/******************************************************
*
* Function: Judge the gesture 
* Author : stevekeol 
* BuildDate :2017/6/20
* ModifiedDate: 2017/6/30
*
******************************************************/
var getGesture = function() {

	let startX, startY, endX, endY;
	let direction;

	//get the startPoint  
	document.addEventListener('touchstart',function (ev) {  
	    startX = ev.touches[0].pageX;  
	    startY = ev.touches[0].pageY;    
	}, false);  

	//get the endPoint
	document.addEventListener('touchend',function (ev) {  
	    endX = ev.changedTouches[0].pageX;  
	    endY = ev.changedTouches[0].pageY; 
	    return getSlideDirection();
	}, false); 

	//judge the direction
	function getSlideDirection(startX, startY, endX, endY) {  
	    var dy = startY - endY;  
	    var dx = endX - startX;  
	    let result = "NODIRECTION";  
	    let angle = GetSlideAngle(dx, dy);  

	    //如果滑动距离太短  
	    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
	    	return result;
	    }  
	    
	    if (angle >= -45 && angle < 45) {  
	        result = "RIGHT";  
	    }else if (angle >= 45 && angle < 135) {  
	        result = "UP";  
	    }else if (angle >= -135 && angle < -45) {  
	        result = "DOWN";  
	    }  
	    else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {  
	        result = "LEFT";  
	    }  
	    return result;  
	}  

	//return angle 
	function GetSlideAngle(dx, dy) {  
	    return Math.atan2(dy, dx) * 180 / Math.PI;  
	} 

};

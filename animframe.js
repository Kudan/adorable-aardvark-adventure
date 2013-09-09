
// This script finds the correct function to Request animation frame
window.requestAnimFrame = (function(){
    return window.requestAnimationFrame       ||
           window.webKitRequestAnimationFrame ||
           window.mozRequestAnimationFrame    ||
           window.oRequestAnimationFrame      ||
           window.msRequestAnimationFrame     ||
           function( callback ){
                window.setTimout(callback, 1000 / 60);
	   };
	}

)();
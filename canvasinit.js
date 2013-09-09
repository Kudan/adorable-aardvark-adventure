/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
// Initializating canvas for screen 
var screenCanvas = document.getElementById('screenCanvas');
var screenCtx = screenCanvas.getContext('2d');
screenCanvas.width = 480;
screenCanvas.height = 360;

// Initializing canvas for buffer
var bufferCanvas = document.createElement('canvas');
var bufferCtx = bufferCanvas.getContext('2d');
bufferCanvas.width = 480;
bufferCanvas.height = 360;
bufferCtx.fillStyle = '#6666ff';
bufferCtx.fillRect(0,0,bufferCanvas.width, bufferCanvas.height);

function flip(){
    screenCtx.drawImage(bufferCanvas,
                        0, 0, screenCanvas.width, screenCanvas.height,
                        0, 0, screenCanvas.width, screenCanvas.height );
}

function animLoop(){
    //Bind animation frame loop to render function
    render(window.requestAnimFrame(animLoop));
}

function render(frame){
    bufferCtx.fillStyle = '#6666ff';
    bufferCtx.fillRect(0,0,bufferCanvas.width, bufferCanvas.height);
    drawScene(frame);
    flip(); 
}

function resizeWindow(){
    var scale;
	
    //Calculate aspect ratios
    var aspectWindow = window.innerWidth / window.innerHeight;
    var aspectCanvas = screenCanvas.width / screenCanvas.height;
	
    //Check aspect ratios to determine where black bars are
    if ( aspectCanvas > aspectWindow ) {
        scale = window.innerWidth / screenCanvas.width;
        var offsetX = 0;
        var offsetY = Math.floor( (window.innerHeight - screenCanvas.height * scale)/2	);
    } else {
        scale = window.innerHeight / screenCanvas.height; 
        var offsetX = Math.floor( (window.innerWidth - screenCanvas.width * scale)/2	);
        var offsetY = 0;
    }
	
    //Move canvas to correct position and scale it with CSS
    screenCanvas.style.left = offsetX + 'px';
    screenCanvas.style.top = offsetY + 'px';	
    screenCanvas.style.width = Math.floor(screenCanvas.width*scale) + 'px';
    screenCanvas.style.height = Math.floor(screenCanvas.height*scale) + 'px';
	 	
}


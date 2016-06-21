var cursor_ = {"x":0,"y":0}, 
    delta_ = {"x":0,"y":0},
    initialized = false; 
    
var changeCursor = function (cursor){
        switch (cursor) {
          case 'paint': cursor = 'url(../../images/paint-brush-01.ico), auto';break;
          case 'erase': cursor = 'url(../../images/eraser-01.ico), auto'; break;
          case 'fill':  cursor = 'move'; break;
        }
        var canvasId = require("./canvas").domId;
        $(canvasId).css('cursor', cursor);
};

var init = function () {
    window.cursor = cursor_;
    window.delta = delta_; 
    initialized = true;
};

var setCursorPoint = function (e) {
    
    e.preventDefault();
    if(initialized){
        
        var canvasId = require("./canvas").domId;
        
        if(canvasId){
            
            var xPos = null, yPos = null;    
            canvasId = canvasId.replace("#", "");
            var rect = document.getElementById(canvasId).getBoundingClientRect();
               
            var browservalid = require("../util/browser"); 
            // Validating touch event for devices 
            if(browservalid.isMobile.any()){
                xPos = e.originalEvent.touches[0].pageX ? Math.round(e.originalEvent.touches[0].pageX) : 0;
                yPos = e.originalEvent.touches[0].pageY ? Math.round(e.originalEvent.touches[0].pageY) : 0;
            } else {
                xPos = e.pageX;
                yPos = e.pageY;
            }
            
            delta.x = (xPos - rect.left) - cursor.x;
            delta.y = (yPos - rect.top) - cursor.y;
            cursor.x += delta.x;

            // If the browser is IE select the first option
            // If not select the other.
            if(browservalid.isIE){
                cursor.y += delta.y;
            } else {
                cursor.y += delta.y + 30;
            }
        } else {
            throw "Error executing setCursorPoint(), canvasId is not defined";
        }
          
    } else {
      throw "Error executing setCursorPoint(), cursor object is not initialized";  
    }    
};

module.exports.changeCursor = changeCursor;
module.exports.init = init;
module.exports.setCursorPoint = setCursorPoint;
var domId = "#canvas",
gviewPort = "#viewport";

var setCanvasEvents = function (){
    
    var eventSetter = require("../util/handler");
    
    $('body').on('click',function(){
        $(require("./colorpicker").domId).fadeOut();
        $(require("./colorpicker").mobilePicker.domId).fadeOut();
    });
    
    //initializing drawing point 
    var brushManager = require("./brush");
    var viewPort = gviewPort ? gviewPort.replace("#", "") : "";
    eventSetter.setEvent(domId)('mousedown')(brushManager.startDrawing)(viewPort);
    $(domId).on("touchstart", function(e) {
        brushManager.startDrawinge(viewPort, e);
    });
                
    //Setting stop drawing event
    eventSetter.setFunctionElement(domId)('mouseup touchend')(brushManager.stopDrawing);
    
    //initializing drawing line listener 
    var setDrawPoint = require("./cursor").setCursorPoint;
    eventSetter.setEventElement(domId)('mousemove touchmove')(setDrawPoint);  
};

var clearCanvas = function () {
    $(domId).find("path").remove();
}
      
var init = (function(){
    require("./cursor").init();
    setCanvasEvents();
}());

module.exports.domId = domId;
module.exports.clearCanvas = clearCanvas;
module.exports.init = init;

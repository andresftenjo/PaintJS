var domId = "#brushValue",
    diameter = "#diameter",
    opacityId = "#opacity",
    opacityValue = "#opacityValue",
    path = "",
    loop = "",
    stopdraw = true;
    
var mobileBrush = {
    domId : "#brushValueMobile",
    mobileDiameter : "#diameter-mobile"
};   

var draw = function() {
    clearTimeout(loop);
    if(cursor){
        var d = path.getAttribute("d");
        d += " L" + (cursor.x) + " " + cursor.y;
        path.setAttribute("d", d);   
    }
    if (!stopdraw) {
        loop = setTimeout(draw, 1);
    }
};

var doFillEListener = function (e){
    
    var btnObj = require("./button");
    
    if(btnObj.fillBtn && btnObj.checkStatus('fill',0)) {
        var selectedElement = e.target;
        var color = $(require("./colorpicker").selectedColorId).val();
        selectedElement.setAttribute('fill', color);
        
        return selectedElement;
        
    } else { 
        return null;
    }
};

var doFillMobile = function (e){
    
    var checkStatusMobile_ = require("./button").checkStatusMobile;
    
    if(checkStatusMobile_('fill',0)) {
        var selectedElement = e.target;
        var color = $(require("./colorpicker").mobilePicker.selectedColorId).val();
        
        selectedElement.setAttribute('fill', color);
    }
};

var stopDrawing = function () {
    stopdraw = true;
};

//Drawing setting the starting point for mobile devices
var startDrawinge = function (viewPort, e) {
    
    var setDrawPoint = require("./cursor").setCursorPoint;
    setDrawPoint(e);
    
    var checkStatus_ = require("./button").checkStatusMobile;
    
    if(!checkStatus_('fill',false)){
        var color = $(require("./colorpicker").mobilePicker.selectedColorId).val(),
            opacity = $(opacityId).val() / 90,
            diameter_ = $(diameter).val();
                    
                stopdraw = false;
                path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute("stroke",color);
                path.setAttribute("stroke-width",diameter_);
                path.setAttribute("fill","transparent");
                path.setAttribute("stroke-opacity",opacity);
                path.setAttribute("transform","matrix(1,0,0,1,1,1)");
                path.setAttribute("d","M"+ cursor.x+" "+ cursor.y);
                var g = document.getElementById(viewPort);
                g.appendChild(path);
                loop = setTimeout(draw(),1);                  
    }
};

var startDrawing = function (viewPort) {
    
    var checkStatus_ = require("./button").checkStatus;
    
    if(!checkStatus_('fill',false)){
        var color = $(require("./colorpicker").selectedColorId).val(),
            opacity = $(opacityId).val() / 90,
            diameter_ = $(diameter).val();
                stopdraw = false;
                path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute("stroke",color);
                path.setAttribute("stroke-width",diameter_);
                path.setAttribute("fill","transparent");
                path.setAttribute("stroke-opacity",opacity);
                path.setAttribute("transform","matrix(1,0,0,1,1,1)");
                path.setAttribute("onmousedown","doFillListener(evt)");
                path.setAttribute("d","M"+ cursor.x+" "+ cursor.y);
                var g = document.getElementById(viewPort);
                g.appendChild(path);
                loop = setTimeout(draw(),1);
        return path;                  
    } else { return null; }
};

var setBrushValue = function () {
        var value = ($(diameter).val() / 1 ).toFixed(0)+'px';
        $(domId).text(value);
        
    var isMobile_ = require("../util/browser").isMobile;
    if(isMobile_.any()){
        $(mobileBrush.domId).text(value); 
    }
};

var setOpacityValue = function () {
        var value = (((($(opacityId).val() / 90)) * 100).toFixed(0) )+'%' ;
        $(opacityValue).text(value);
};

var startBrush = (function () {
    setBrushValue();
    setOpacityValue();
    window.doFillListener = doFillEListener;
    
    //Set Opacity/Brush size onchange listener
    var handlerFunction = require("../util/handler").setFunctionElement;
    
    var isMobile_ = require("../util/browser").isMobile;
    if(isMobile_.any()){
        diameter = mobileBrush.mobileDiameter;
    }
    handlerFunction(diameter)('change')(setBrushValue);
    handlerFunction(opacityId)('change')(setOpacityValue);
    
}());

module.exports.startBrush = startBrush;
module.exports.startDrawing = startDrawing;
module.exports.startDrawinge = startDrawinge;

module.exports.draw = draw;
module.exports.stopDrawing = stopDrawing;

//Mobile
module.exports.doFillMobile = doFillMobile;

//Unit test functions
module.exports.doFillEListener = doFillEListener;
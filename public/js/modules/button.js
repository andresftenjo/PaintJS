var domId = "",
    dangerClass = "btn-danger",
    primaryClass = "btn-primary",
    fillBtn = "#fill",
    unDoBtn = "#unDo",
    eraseBtn = "#erase",
    clearAllBtn = "#clearAll",
    togglebuttons = ".togglebtn";

var mobileButtons = {
    menuTool : ".mobile-tool",
    domMenu: ".mobile-menu",
    containerMenu : "#mobilenav-container",
    initMenu : function(scope) {
        $(scope.domMenu).toggle();
        $(scope.containerMenu).toggleClass('active');
    },       
    unDoBtn : ".mobile-menu-undo",
    fillBtn : ".mobile-menu-fill",
    eraseBtn : ".mobile-menu-erase",
    activeClass : "active",
    unActiveClass : "",
    isMobile : require("../util/browser").isMobile.any() //true-false
};   

// Evaluate the state of the buttons (fill or eraser).
var checkStatus = function (element, toActivate) {
    
        var isActive = false;
        
        if(element === "fill"){
            element = fillBtn;
        } else if(element === "erase"){
            element = eraseBtn;
        } else {
            throw "Error executing checkStatus(), Button " + element + " element is not defined";
        }
        
        if($(element).hasClass(dangerClass)){
            isActive = true;
        } else if(toActivate){
            $(togglebuttons).removeClass(dangerClass).addClass(primaryClass);
            $(element).addClass(dangerClass);
            isActive = true;   
        }
    return isActive;
};

// Evaluate the state of the buttons (fill or eraser) for Mobile Devices.
var checkStatusMobile = function (element, toActivate) {
    
        var isActive = false;
        
        if(element === "fill"){
            element = mobileButtons.fillBtn;
        } else if(element === "erase"){
            element = mobileButtons.eraseBtn;
        } else {
            throw "Error executing checkStatus(), Button " + element + " element is not defined";
        }
        
        if($(element).hasClass(mobileButtons.activeClass)){
            isActive = true;
        } else if(toActivate){
            $(mobileButtons.domMenu + " " + togglebuttons).removeClass(mobileButtons.activeClass).addClass(mobileButtons.unActiveClass);
            $(element).addClass(mobileButtons.activeClass);
            isActive = true;   
        }
    return isActive;
};


var unDoAction = function() {
    var paths = document.getElementsByTagName("path");
    
    if(paths) {
        var lastPath = paths[paths.length - 1];
        if (lastPath) {
            
            if (lastPath.getAttribute("fill") != "transparent") {
                lastPath.setAttribute('fill',"transparent");
            } else {
                lastPath.parentNode.removeChild(lastPath);
            }
        }
    }
};

//reset the color picker for eraser selection
var resetErase = function (action, selectedColorId) {
    (action === 'erase') ? $(selectedColorId).val('#FFFFFF') : '' ;
};
     
var activeBtn = function () {

     var thatId = "";
     
     if(mobileButtons.isMobile){ 
         $(mobileButtons.domMenu + " " + togglebuttons).each(function(){ 
            if($(this).hasClass(mobileButtons.activeClass)){
                
                thatId = $(this).attr("id");
                
                if(thatId.indexOf("fill") > -1) {
                    thatId = "fill";
                } else if(thatId.indexOf("erase") > -1) {
                    thatId = "erase";
                } else {
                    thatId = "";
                }
            } 
        });
     } else {
         $(togglebuttons).each(function(){ 
            if($(this).hasClass(dangerClass)){
                thatId = $(this).attr("id");
            } 
        });    
     }
     return thatId;
};

var clearActiveBtn = function () {
    $(togglebuttons).removeClass(dangerClass).addClass(primaryClass);
};

var setActivebutton = function (active) {
    
    var activeBtn_ = activeBtn();
    if (activeBtn_ === "" || activeBtn_ !== active) {
        
        if(mobileButtons.isMobile){
            
            $(mobileButtons.domMenu + " " + togglebuttons).removeClass(mobileButtons.activeClass).addClass(mobileButtons.unActiveClass);
                
            if(active === "fill"){
                $(mobileButtons.fillBtn).addClass(mobileButtons.activeClass).removeClass(mobileButtons.unActiveClass);    
            } else if (active === "erase") {
                $(mobileButtons.eraseBtn).addClass(mobileButtons.activeClass).removeClass(mobileButtons.unActiveClass);
            }
        } else {
            $('#' + active).addClass(dangerClass).removeClass(primaryClass);
            $('#' + activeBtn_).addClass(primaryClass).removeClass(dangerClass);    
        }
    }
    else if (activeBtn_ === active) {
           
            if(mobileButtons.isMobile){ 
                
                if(active === "fill"){
                    $(mobileButtons.fillBtn).addClass(mobileButtons.unActiveClass).removeClass(mobileButtons.activeClass);    
                } else if (active === "erase") {
                    $(mobileButtons.eraseBtn).addClass(mobileButtons.unActiveClass).removeClass(mobileButtons.activeClass);
                }
                $(mobileButtons.domMenu + " " + togglebuttons).removeClass(mobileButtons.activeClass).addClass(mobileButtons.unActiveClass);
            } else {
                 $('#' + active).addClass(primaryClass).removeClass(dangerClass);
                clearActiveBtn();
            }
    }
    return activeBtn();
};


var actionManagerMobile = function (action) {
    
    var btnObjAction = { action : "", active: "" };
    var mobilePicker_ = require("./colorpicker").mobilePicker;
    
    if (action === 'fill'){
            btnObjAction.action = action;
            btnObjAction.active = "fill";

            var doFillMobile_ = require("./brush").doFillMobile;
            var setEvent_ = require("../util/handler").setEventElement;
            setEvent_('g path')('touchstart')(doFillMobile_);
            
    } else if (action === "erase"){
            btnObjAction.action = action;
            btnObjAction.active = "erase";
            
            resetErase(action, mobilePicker_.selectedColorId);
    } else {
            btnObjAction = null;
    }
    
    if(btnObjAction) {
        
        var activeBtn_ = setActivebutton(btnObjAction.active);
        //Setting default brush for no fill - erase actions 
        if (activeBtn_ !== btnObjAction.active) {
             var colorSelected = $(mobilePicker_.holder).css('background-color');
            $(mobilePicker_.selectedColorId).val(colorSelected);
        }    
    }
};

var actionManager = function (action) {
    
    var btnObjAction = { action : "", active: "" };
    var cpicker = require("./colorpicker");
    
    if (action === 'fill'){
            btnObjAction.action = action;
            btnObjAction.active = fillBtn.replace("#","");
    } else if (action === "erase"){
            btnObjAction.action = action;
            btnObjAction.active = eraseBtn.replace("#","");
            
            resetErase(action, cpicker.selectedColorId);
    } else {
            btnObjAction = null;
    }
    
    if(btnObjAction) {
        
        var changeCursor = require("./cursor").changeCursor;
        var activeBtn_ = setActivebutton(btnObjAction.active);
        
        if (activeBtn_ === btnObjAction.active) {
            changeCursor(btnObjAction.action);
        } else {
            changeCursor('paint');
            
            var colorSelected = $(cpicker.holder).css('background-color');
            $(cpicker.selectedColorId).val(colorSelected);
        }    
    }
};
 
 
var initBtnListeners = (function (){
    var eventSetter = require("../util/handler");
    
    //initializing drawing line listener 
    eventSetter.setFunctionElement(unDoBtn)('click')(unDoAction);
         
    //On FillBtn click event    
    eventSetter.setEvent(fillBtn)('click')(actionManager)('fill');
    
    eventSetter.setEvent(eraseBtn)('click')(actionManager)('erase');
    
    //Clear Area event    
    var clearCanvas = require("./canvas").clearCanvas;
    eventSetter.setFunctionElement(clearAllBtn)('click')(clearCanvas);
    
    //initializing mobile buttons events
    if(mobileButtons.isMobile){
        eventSetter.setEvent(mobileButtons.menuTool)('click')(mobileButtons.initMenu)(mobileButtons);

        eventSetter.setFunctionElement(mobileButtons.unDoBtn)('click')(unDoAction);
        
        eventSetter.setEvent(mobileButtons.fillBtn)('click')(actionManagerMobile)('fill');
        
        eventSetter.setEvent(mobileButtons.eraseBtn)('click')(actionManagerMobile)('erase');
    }
}());  

module.exports.checkStatus = checkStatus;
module.exports.checkStatusMobile = checkStatusMobile;
module.exports.resetErase = resetErase;
module.exports.initBtnListeners = initBtnListeners;
module.exports.fillBtn = fillBtn;
module.exports.activeBtn = activeBtn;

//Unit test export
module.exports.setActivebutton = setActivebutton;
module.exports.unDoAction = unDoAction;



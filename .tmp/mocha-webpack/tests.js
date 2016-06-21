/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//var QUnit = require("qunitjs");

	/*
	var assert = require('chai').assert;

	(function() {
	    console.log('aaa');
	    QUnit.test( "hello test", function( assert ) {
	        console.log('aaa2');
	        assert.ok( 1 == "1", "Passed!" );
	    });
	}());*/


	var $ = __webpack_require__(1);
	window.jQuery = $;
	window.$ = $;

	var should = __webpack_require__(2);
	var btnObjActive = __webpack_require__(3).activeBtn;
	  console.log(btnObjActive());

	describe("Checking if the user is created correctly", function(){  
	    it("should create the user with the correct name", function(){
	        debugger
	        //var tom = "tom";
	        btnObjActive.should.not.be.equal("");
	    });
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("should");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var domId = "",
	    dangerClass = "btn-danger",
	    primaryClass = "btn-primary",
	    fillBtn = "#fill",
	    unDoBtn = "#unDo",
	    eraseBtn = "#erase",
	    clearAllBtn = "#clearAll",
	    togglebuttons = ".togglebtn";
	      
	// Evaluate the state of the buttons (fill or eraser).
	var checkStatus = function (element, toActivate) {
	    
	        var clicked = element;
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
	            /*if(activated){
	                $(element).removeClass(dangerClass).addClass(primaryClass);
	            }*/
	        } else if(toActivate){
	            $(togglebuttons).removeClass(dangerClass).addClass(primaryClass);
	            $(element).addClass(dangerClass);
	            isActive = true;   
	        }
	    return isActive;
	};

	var unDoAction = function() {
	    var paths = document.getElementById(__webpack_require__(4).domId ? __webpack_require__(4).domId.replace("#", "") : "").getElementsByTagName("path");
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
	     $(togglebuttons).each(function(){ 
	         if($(this).hasClass(dangerClass)){
	             thatId = $(this).attr("id");
	         } 
	     });
	     return thatId;
	};

	var clearActiveBtn = function () {
	    $(togglebuttons).removeClass(dangerClass).addClass(primaryClass);
	};

	var setActivebutton = function (active) {
	    
	    var activeBtn_ = activeBtn();
	    
	    if (activeBtn_ === "" || activeBtn_ !== active) {
	        $('#' + active).addClass(dangerClass).removeClass(primaryClass);
	        $('#' + activeBtn_).addClass(primaryClass).removeClass(dangerClass);
	        //this.btnActive = btnAct;
	    }
	    else {
	        if (activeBtn_ === active) {
	            $('#' + active).addClass(primaryClass).removeClass(dangerClass);
	            //this.btnActive = '';
	            clearActiveBtn();
	        }
	    }
	    return activeBtn();
	};

	var actionManager = function (action) {
	    
	    var btnObjAction = { action : "", active: "" };
	    var cpicker = __webpack_require__(6);
	    
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
	        
	        var changeCursor = __webpack_require__(7).changeCursor;
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
	      
	var initBtnListeners = function (){

	    var eventSetter = __webpack_require__(5);
	    
	    //initializing drawing line listener 
	    //var setPoint = require("./cursor").setCursorPoint;
	    eventSetter.setFunctionElement(unDoBtn)('click')(unDoAction);
	         
	    //On FillBtn click event    
	    eventSetter.setEvent(fillBtn)('click')(actionManager)('fill');
	    
	    eventSetter.setEvent(eraseBtn)('click')(actionManager)('erase');
	    
	    //Clear Area event    
	    var clearCanvas = __webpack_require__(4).clearCanvas;
	    eventSetter.setFunctionElement(clearAllBtn)('click')(clearCanvas);
	    
	    
	};  

	module.exports.checkStatus = checkStatus;
	module.exports.resetErase = resetErase;
	module.exports.initBtnListeners = initBtnListeners;
	module.exports.fillBtn = fillBtn;
	module.exports.activeBtn = activeBtn;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var domId = "#canvas",
	gviewPort = "#viewport";

	var setCanvasEvents = function (){
	    
	    var eventSetter = __webpack_require__(5);
	    
	    var cpicker = __webpack_require__(6).domId
	    $('body').on('click',function(){
	        $(cpicker).fadeOut();
	    });
	    
	    //initializing drawing point 
	    var brushManager = __webpack_require__(9);
	    var viewPort = gviewPort ? gviewPort.replace("#", "") : "";
	    eventSetter.setEvent(domId)('mousedown touchstart')(brushManager.startDrawing)(viewPort);
	    
	    //Set stop drawing event
	    eventSetter.setFunctionElement(domId)('mouseup touchend')(brushManager.stopDrawing);
	    
	    //initializing drawing line listener 
	    var setDrawPoint = __webpack_require__(7).setCursorPoint;
	    eventSetter.setEventElement(domId)('mousemove touchmove')(setDrawPoint);  
	};

	var clearCanvas = function () {
	    $(domId).find("path").remove();
	}
	      
	var init = function(){
	    __webpack_require__(7).init();
	    setCanvasEvents();
	};

	module.exports.domId = domId;
	module.exports.clearCanvas = clearCanvas;
	module.exports.init = init;


/***/ },
/* 5 */
/***/ function(module, exports) {

	
	//closure to associate a function with a dom event
	var setEvent = function(domId) {
	    return function(event) {
	        return function(bfunc) {
	            return function(fparam) {
	                return (function() {
	                    $(domId).on(event, function() {
	                        bfunc(fparam);  
	                    });
	                } ());
	            };
	        };
	    };
	};

	//closure to associate an event element within a Function in dom
	var setEventElement = function(domId) {
	    return function(event) {
	        return function(bfunc) {
	            return (function() {
	                $(domId).on(event, function(e) {
	                    bfunc(e);  
	                });
	            } ());
	        };
	    };
	};

	//closure to associate an event element to call a function
	var setFunctionElement = function(domId) {
	    return function(event) {
	        return function(bfunc) {
	            return (function() {
	                $(domId).on(event, function() { 
	                    bfunc();  
	                });
	            } ());
	        };
	    };
	};

	module.exports.setEvent = setEvent;
	module.exports.setEventElement = setEventElement;
	module.exports.setFunctionElement = setFunctionElement;




/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var domId = "#color-picker",
	    defaultColor = "#000000",
	    selectedColor = "", //where ?
	    selectedColorId = "#pickcolor",
	    holder = ".color-holder";

	var selectColor = function (e) {
	    
	        e.stopPropagation();
	        $(domId).fadeIn();

	        var btnFunctions = __webpack_require__(3);
	        var changeCursor = __webpack_require__(7).changeCursor;
	        
	        $(domId).children('li').on('click',function() {
	          var codeHex = $(this).data('hex');
	          $(holder).css({ 'background-color': codeHex });
	          $(selectedColorId).val(codeHex);
	          defaultColor = codeHex;

	          if (btnFunctions.checkStatus('fill',false)){
	              changeCursor('fill');
	          }
	          else {
	            if (btnFunctions.checkStatus('erase',false)){
	                btnFunctions.resetErase('erase', selectedColorId);
	                changeCursor('erase');
	            }
	            else {
	                changeCursor('paint');
	                $(selectedColorId).val(codeHex);
	                defaultColor = codeHex;
	            }
	          }
	        });
	      };
	           
	var init = (function (){
	    
	    var colorList = [
	          '000000', '993300', '333300', '003300',
	          '003366', '000066', '333399', '333333',
	          '660000', 'FF6633', '666633', '336633',
	          '336666', '0066FF', '666699', '666666',
	          'CC3333', 'FF9933', '99CC33', '669966',
	          '66CCCC', '3366FF', '663366', '999999',
	          'CC66FF', 'FFCC33', 'FFFF66', '99FF66',
	          '99CCCC', '66CCFF', '993366', 'CCCCCC',
	          'FF99CC', 'FFCC99', 'FFFF99', 'CCffCC',
	          'CCFFff', '99CCFF', 'CC99FF', 'FFFFFF'];
	            
	    //populate colors
	    colorList.forEach(function(color){
	          $(domId).append(
	            '<li class="color-item" data-hex="' +
	            '#' + color + '" style="background-color:' +
	            '#' + color + ';"></li>'
	          );
	        });
	        
	    var setEventElement = __webpack_require__(5).setEventElement;    
	    setEventElement(holder)('click')(selectColor);
	    //setEventElement(holder)('')(selectColor);
	    
	    $(selectedColorId).val(defaultColor);
	    $(holder).css({'background-color': defaultColor});
	    
	}());

	module.exports.domId = domId;
	module.exports.defaultColor = defaultColor;
	module.exports.selectedColor = selectedColor;
	module.exports.selectedColorId = selectedColorId;
	module.exports.holder = holder;
	module.exports.init = init;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var cursor_ = {"x":0,"y":0}, 
	    delta_ = {"x":0,"y":0},
	    initialized = false; 
	    
	var changeCursor = function (cursor){
	        switch (cursor) {
	          case 'paint': cursor = 'url(../../images/paint-brush-01.ico), auto';break;
	          case 'erase': cursor = 'url(../../images/eraser-01.ico), auto'; break;
	          case 'fill':  cursor = 'move'; break;
	        }
	        var canvasId = __webpack_require__(4).domId;
	        $(canvasId).css('cursor', cursor);
	};

	var init = function () {
	    window.cursor = cursor_;
	    window.delta = delta_; 
	    initialized = true;
	};

	var setCursorPoint = function (e) {
	    
	    if(initialized){
	        
	        var canvasId = __webpack_require__(4).domId;
	        
	        if(canvasId){
	            
	            var xPos = null, yPos = null;    
	            canvasId = canvasId.replace("#", "");
	            var rect = document.getElementById(canvasId).getBoundingClientRect();
	               
	            var browservalid = __webpack_require__(8); 
	            // Validating touch event for devices 
	            if(browservalid.isMobile.any()){
	                xPos = e.originalEvent.touches[0].pageX;
	                yPos = e.originalEvent.touches[0].pageY;
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
	            /*
	            (obj.getMyBrowser() == true) ?
	                cursor.y += delta.y :
	                cursor.y += delta.y + 30;*/ 
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


/***/ },
/* 8 */
/***/ function(module, exports) {

	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        if (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()) { 
	            return true; 
	        } 
	        else { 
	            return false;
	        }  
	    }
	};

	var isIE = function () {
	    
	    var sAgent = window.navigator.userAgent,
	        Idx = sAgent.indexOf("MSIE");

	    if (Idx > 0) {
	        return true;
	    }
	    else if (navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Trident\/6\./)) {
	        return true;
	    }
	    else {
	        return false;   
	    }
	};
	      

	module.exports.isMobile = isMobile;
	module.exports.isIE = isIE;



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var domId = "#brushValue",
	    diameter = "#diameter",
	    opacityId = "#opacity",
	    opacityValue = "#opacityValue";

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
	    
	    var btnObj = __webpack_require__(3);
	    
	    if(btnObj.fillBtn && btnObj.checkStatus('fill',0)) {
	        var selectedElement = e.target;
	        var color = $(__webpack_require__(6).holder).css('background-color');
	        selectedElement.setAttribute('fill', color);
	    }
	};

	var stopDrawing = function () {
	    stopdraw = true;
	};

	var startDrawing = function (viewPort) {
	    
	    var checkStatus_ = __webpack_require__(3).checkStatus;
	    
	    if(!checkStatus_('fill',false)){
	        var color = $(__webpack_require__(6).selectedColorId).val(),
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
	                path.setAttribute("touchstart","doFillListener(evt)");
	                path.setAttribute("d","M"+ cursor.x+" "+ cursor.y);
	                var g = document.getElementById(viewPort);
	                g.appendChild(path);
	                loop = setTimeout(draw(),1);                  
	    }
	};

	var setBrushValue = function () {
	        var value = ($(diameter).val() / 1 ).toFixed(0)+'px';
	        $(domId).text(value);
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
	    var handlerFunction = __webpack_require__(5).setFunctionElement;
	    handlerFunction(diameter)('change')(setBrushValue);
	    handlerFunction(opacityId)('change')(setOpacityValue);
	    
	}());

	module.exports.setBrushValue = startBrush;
	module.exports.startDrawing = startDrawing;
	module.exports.draw = draw;
	module.exports.stopDrawing = stopDrawing;


/***/ }
/******/ ]);
//# sourceMappingURL=tests.js.map
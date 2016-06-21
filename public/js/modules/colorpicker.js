var domId = "#color-picker",
    defaultColor = "#000000",
    selectedColor = "", //where ?
    selectedColorId = "#pickcolor",
    holder = ".color-holder";

var mobilePicker = {
    domId : "#color-picker-mobile",
    selectedColorId: "#pickcolor-mobile",
    holder : ".color-holder-mobile",
    isMobile : require("../util/browser").isMobile.any() //true-false
};   

var selectColor = function (e) {
    
    e.stopPropagation();
        
    $(domId).fadeIn();

    var btnFunctions = require("./button");
    var changeCursor = require("./cursor").changeCursor;
        
    $(domId).children('li').on('click',function() {
        var codeHex = $(this).data('hex');
        $(holder).css({ 'background-color': codeHex });
        $(selectedColorId).val(codeHex);
        defaultColor = codeHex;

        if (btnFunctions.checkStatus('fill',false)){
            changeCursor('fill');
        } else if (btnFunctions.checkStatus('erase',false)){
                btnFunctions.resetErase('erase', selectedColorId);
                changeCursor('erase');
        } else { changeCursor('paint'); }
    });
    
    if(mobilePicker.isMobile){
        $(mobilePicker.domId).fadeIn();
        
        $(mobilePicker.domId).children('li').on('click',function() { 
            var codeHex = $(this).data('hex');
            $(mobilePicker.holder).css({ 'background-color': codeHex });
            $(mobilePicker.selectedColorId).val(codeHex);
            
            defaultColor = codeHex;
            
            if (btnFunctions.checkStatusMobile('erase',false)){
                btnFunctions.resetErase('erase', mobilePicker.selectedColorId);
            }
        });
    }
        
};

var fillColors = function (domId) {
    
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
            
    //populating colors
    colorList.forEach(function(color){
          $(domId).append(
            '<li class="color-item" data-hex="' +
            '#' + color + '" style="background-color:' +
            '#' + color + ';"></li>'
          );
        });
};

var setDefaultColor = function () {
    
    $(selectedColorId).val(defaultColor);
    $(holder).css({'background-color': defaultColor});
    
    if(mobilePicker.isMobile){ 
        $(mobilePicker.selectedColorId).val(defaultColor);
        $(mobilePicker.holder).css({'background-color': defaultColor});
    }
};
     
var init = (function (){
    
    fillColors(domId);

    var setEventElement = require("../util/handler").setEventElement;
    
    if(mobilePicker.isMobile){ 
        fillColors(mobilePicker.domId);
        setEventElement(mobilePicker.holder)('click')(selectColor);    
    }
    
    setEventElement(holder)('click')(selectColor);
    
    setDefaultColor();
}());

module.exports.domId = domId;
module.exports.defaultColor = defaultColor;
module.exports.selectedColor = selectedColor;
module.exports.selectedColorId = selectedColorId;
module.exports.holder = holder;
module.exports.init = init;
module.exports.mobilePicker = mobilePicker;
var should = require("should"),
    buttonModel = require("../modules/button"),
    brushModel = require("../modules/brush"),
    cpickerModel = require("../modules/colorpicker");

describe("Checking Buttons Status", function(){  
    
    //creating test buttons
    var fillBtn = $("<button id='fill' class='togglebtn btn-primary'></button>");
    var eraseBtn = $("<button id='erase' class='togglebtn btn-primary'></button>");
    fillBtn.appendTo("body");
    eraseBtn.appendTo("body");
    
    var fillActive = buttonModel.setActivebutton("fill");
    
    it("Fill Button should be Activated", function(){
       fillActive.should.be.equal("fill");
    });
     
    var activeToggleBtn1 =  buttonModel.activeBtn();
    
    it("Erase Button shoud be Inactive and Fill Button should be Active", function(){
        activeToggleBtn1.should.not.be.equal("erase");
    });
    
    var eraseActive = buttonModel.setActivebutton("erase");
    
    it("Erase Button should be Activated", function(){
       eraseActive.should.be.equal("erase");
    });
    
    var activeToggleBtn2 = buttonModel.activeBtn();
    
     it("Fill Button shoud be Inactive and Erase Button should be Active", function(){
        activeToggleBtn2.should.not.be.equal("fill");
    });
    
});

  
describe("Checking Drawing Events", function(){
      
    var vPortTest = $("<g class='draggable' id='viewport' transform='matrix(1,0,0,1,1,1)'></g>");
    vPortTest.appendTo("body");
    
    var cIdInputDom = $("<input type='text' id='pickcolor' class='call-picker'>");
    cIdInputDom.appendTo("body");
    
    $(cpickerModel.selectedColorId).val(cpickerModel.defaultColor);
    
    var drawObj = brushModel.startDrawing("viewport");
    
    it("Brush should be drawing", function(){
        drawObj.should.not.equal(null);
    });
    
    it("Brush should be drawing in default color (Black)", function(){
        $(drawObj).attr("stroke").should.be.equal("#000000");
    });
    
    $(cpickerModel.selectedColorId).val("#162B64");
    var drawObjColor = brushModel.startDrawing("viewport");
    
    it("Brush should not be drawing the default color but any other color like blue", function(){
        $(drawObjColor).attr("stroke").should.be.equal("#162B64");
    });
    
    var eventObj = { 
        target : $(drawObjColor)[0]
    }
    
    //activating fill button
    var fillActive_ = buttonModel.setActivebutton("fill");
    
    var filledObj = brushModel.doFillEListener(eventObj);
    
    it("Drawn element should be filled with the current selected Color", function(){
        $(filledObj).attr("fill").should.be.equal($(cpickerModel.selectedColorId).val());
    });
    
    //activating erase button
    var eraseActive = buttonModel.setActivebutton("erase");
    
    it("Eraser should be painting white elements", function(){
    
        //Erasing something    
        buttonModel.resetErase("erase", cpickerModel.selectedColorId);
        var drawObjErase = brushModel.startDrawing("viewport");
        $(drawObjErase).attr("stroke").should.be.equal("#FFFFFF");
    });
    
    var drawUndoObj = brushModel.startDrawing("viewport");
    
    it("Last painted element should be removed", function(){
        
        var paths = document.getElementsByTagName("path").length;
        //undoing last painted element
        buttonModel.unDoAction();
        var pathsUpdated = document.getElementsByTagName("path").length;
        
        pathsUpdated.should.be.below(paths);
    });
    
    //Set range input
    var brushSizeElement = $("<input type='range' id='diameter' min='1' max='100' step='1' value='1' style='display:none'>");
    brushSizeElement.appendTo("body");
    $("#diameter").val("25");
    
    var drawBiggerLineObj = brushModel.startDrawing("viewport");
    
    it("Brush size should be painting in 25px", function(){
         $(drawBiggerLineObj).attr("stroke-width").should.be.equal("25");
    });
});
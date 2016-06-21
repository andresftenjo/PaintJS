"use strict";

/* App Bundled dependencies */

var $ = require("jquery");
window.jQuery = $;
window.$ = $;
require("bootstrap");
require("../css/style.css");

var start = function () {
    require("./modules/colorpicker").init;
    require("./modules/brush").startBrush;
    require("./modules/cursor").changeCursor("paint");
        
    require("./modules/canvas").init;
    
    require("./modules/button").initBtnListeners;
};

start();
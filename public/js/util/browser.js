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


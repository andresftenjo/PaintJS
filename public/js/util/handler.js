
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



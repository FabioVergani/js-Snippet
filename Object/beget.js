Object.beget = (function(Function){
    return function(Object){
        Function.prototype = Object;
        return new Function;
    }
})(function(){});

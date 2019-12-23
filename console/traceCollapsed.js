(function(e){
    e.clear();
    e.memory;
    if(!e.traceCollapsed){
        var i=-1;
        e.traceCollapsed=function(x){
            e.groupCollapsed(++i,x);
            e.trace(x);
            e.groupEnd(i)
        }
    }
})(console);

function hasChangedSize(rect1, rect2) {
  return rect1.width != rect2.width || rect1.height != rect2.height;
}

function watchForResize(element, cb) {
    var startingSize = element.getBoundingClientRect();

    function checkForRezize() {
        var currentSize = element.getBoundingClientRect();
        if(hasChangedSize(startingSize, currentSize)) {
            startingSize = currentSize;
            cb();
        }
        requestAnimationFrame(checkForRezize);
    }
    requestAnimationFrame(checkForRezize);
}

document.addEventListener('keyup', function(evt) {
var o=evt,p;

console.clear();

p='altKey';console.log(p,o[p]);
p='ctrlKey';console.log(p,o[p]);
p='shiftKey';console.log(p,o[p]);
//p='repeat';console.log(p,o[p]);

p='code';console.log(p,o[p]);
p='keyCode';console.log(p,o[p]);

console.dir(evt);

});


/*
code ArrowRight
keyCode 39

code ArrowLeft
keyCode 37

code ArrowUp
keyCode 38

code ArrowDown
keyCode 40

*/

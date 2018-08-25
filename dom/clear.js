//Fastest method of clearing all children from a DOM element
var child;
while ((child = box.lastChild)) {
  box.removeChild(child);
}

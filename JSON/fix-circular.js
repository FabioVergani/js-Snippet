/*
This error occurs when you try to convert a JavaScript object to JSON, but the object contains a circular reference. 
A circular reference occurs when an object refers to itself, directly or indirectly. 
For example, imagine you have a JavaScript object with a property that references the object itself:

let obj = {
  name: "Codedamn",
  parent: null
}

obj.parent = obj;

In this case, the obj object contains a circular reference because the parent property references the obj object. 
When you try to convert this object to JSON, you’ll get the 
“TypeError: Converting circular structure to JSON” 
error because JSON.stringify() doesn’t support circular references.

To fix this error, you need to make sure that your objects don’t contain circular references. 
One way to do this is to use a library like JSONC that supports converting circular structures to JSON. 
Alternatively, you can manually detect and remove circular references from your objects before calling JSON.stringify().
*/

function stringify(obj) {
  let cache = [];
  let str = JSON.stringify(obj, function(key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
  cache = null; // reset the cache
  return str;
}

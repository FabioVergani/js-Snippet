// Use Proxy object and handler to create a new property on the fly
let AutoViv = () =>
 
  // Proxy() object of JavaScript
  new Proxy({}, // ANY blank object
    {
      // if property exists, return it
      // Otherwise, create it
      get: (obj, prop) => 
        prop in obj 
          ? obj[prop] 
          : obj[prop] = AutoViv()
    }
  )
  
  /*
// Use Proxy object and handler to create a new property on the fly
let AutoViv = () =>
 
  // Proxy() object of JavaScript
  new Proxy({},
    {
      // Handler checks if prop does not exists, creates it
      get: (obj, prop) => prop in obj ? obj[prop] : obj[prop] = AutoViv()
    }
  )
 
// Create only TOP level
let univ = AutoViv();
 
// Now assign to deeper level
univ.college.stream.year = "A+";
console.log("univ", univ);
 
let univ2 = AutoViv();
univ2['college']['stream']['year'] = "A+";
 
// Bingo! It works
console.log("univ2", univ2);
  */

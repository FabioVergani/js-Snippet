function unique(arr) {
 return arr.filter((v,i,m)=>i===m.indexOf(v));
}

/*
Array.prototype.unique = function() {
  return this.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
  });
}

var arr = ['a', 1, 'a', 2, '1']
arr.unique(); // => ['a', 1, 2, '1']

This is a really nice and compact solution, however I found it didn't work with objects. I have a version that does take into account objects and mixed value arrays:

var j = {};

this.forEach(function (v) {
  var typ = (typeof v === 'object') ? 'object' : typeof v;
  var v = (typ === 'object') ? JSON.stringify(v) : v;

  j[v + '::' + typ] = v;
});

return Object.keys(j).map(function (v) {
  if (v.indexOf('::object') > -1) {
    return JSON.parse(j[v]);
  }

  return j[v];
});


With JavaScript 1.6 / ECMAScript 5 you can use the native filter method of an Array in the following way to get an array with unique values:

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

// usage example:
var a = ['a', 1, 'a', 2, '1'];
var unique = a.filter( onlyUnique ); // returns ['a', 1, 2, '1']

With ES6 it could be shorten to this:

// usage example:
var myArray = ['a', 1, 'a', 2, '1'];
var unique = myArray.filter((v, i, a) => a.indexOf(v) === i); 

// unique is ['a', 1, 2, '1']


ES6 has a native object Set to store unique values. To get an array with unique values you could do now this:

var myArray = ['a', 1, 'a', 2, '1'];

let unique = [...new Set(myArray)]; 

// unique is ['a', 1, 2, '1']

var items = [4,5,4,6,3,4,5,2,23,1,4,4,4]
var uniqueItems = Array.from(new Set(items))
Which returns

[4, 5, 6, 3, 2, 23, 1]
As suggested, this can also be shortened using spread operator , like

var uniqueItems = [...new Set(items)]


function uniques(arr) {
    var a = [];
    for (var i=0, l=arr.length; i<l; i++)
        if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
            a.push(arr[i]);
    return a;
}

Array.prototype.unique = function() {
    var a = [];
    for (var i=0, l=this.length; i<l; i++)
        if (a.indexOf(this[i]) === -1)
            a.push(this[i]);
    return a;
}


Array.prototype.getUnique = function() {
    return [...new Set( [this] )];
};

Use new ES6 feature: [...new Set( [1, 1, 2] )];
function uniqueArray0(array) {
  var result = Array.from(new Set(array));
  return result    
}
Use object { } to prevent duplicates
function uniqueArray1( ar ) {
  var j = {};

  ar.forEach( function(v) {
    j[v+ '::' + typeof v] = v;
  });

  return Object.keys(j).map(function(v){
    return j[v];
  });
} 
Use helper array [ ]
function uniqueArray2(arr) {
    var a = [];
    for (var i=0, l=arr.length; i<l; i++)
        if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
            a.push(arr[i]);
    return a;
}
Use filter + indexOf
function uniqueArray3(a) {
  function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
  }

  // usage
  var unique = a.filter( onlyUnique ); // returns ['a', 1, 2, '1']

  return unique;
}






Sorting
When also needing to sort the array, the following is the fastest:

Array.prototype.sortUnique = function() {
    this.sort();
    var last_i;
    for (var i=0;i<this.length;i++)
        if ((last_i = this.lastIndexOf(this[i])) !== i)
            this.splice(i+1, last_i-i);
    return this;
}
or non-prototype:

function sortUnique(arr) {
    arr.sort();
    var last_i;
    for (var i=0;i<arr.length;i++)
        if ((last_i = arr.lastIndexOf(arr[i])) !== i)
            arr.splice(i+1, last_i-i);
    return arr;
}









PERFORMANCE ONLY! this code is probably 10X faster than all the codes in here *works on all browsers and also has the lowest memory impact.... and more

if you don't need to reuse the old array;btw do the necessary other operations before you convert it to unique here is probably the fastest way to do this, also very short.

var array=[1,2,3,4,5,6,7,8,9,0,1,2,1];
then you can try this

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 1];

function toUnique(a, b, c) { //array,placeholder,placeholder
  b = a.length;
  while (c = --b)
    while (c--) a[b] !== a[c] || a.splice(c, 1);
  return a // not needed ;)
}
console.log(toUnique(array));
//[3, 4, 5, 6, 7, 8, 9, 0, 2, 1]




*/

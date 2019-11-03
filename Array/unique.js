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

*/

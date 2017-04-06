



//=================================


//=================================

let myObject = {first: "one"};

for(let [key, value] of Object.entries(myObject)) {
    console.log(key, value); // "first", "one"
}


//=================================
for(let key in obj){
    console.log(obj[key]); 
}

Object.keys(obj).forEach(function(key){
    console.log(obj[key]);
});


var obj = { a: 'foo', z: 'bar', m: 'baz' };
Object.keys(obj).forEach(function (prop) {
  var value = obj[prop];
  console.log(value);
});


//=================================
let test = new Map();
test.set('first', "one");
test.set('second', "two");

for(var item of test) {
  console.log(item); // "one" "two"
}


//=================================


const myObject = {
    country: "Canada",
    province: "Quebec",
    city: "Montreal"
}

for (let i of Object.keys(myObject)) {
    console.log("Key:", i, "| Value:", myObject[i]);
}







//=================================


function* entries(obj) {
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
}

for ([key, value] of entries({a: "1", b: "2"})) {
    console.log(key + " " + value);
}

//=================================

var x = { a: 1, b: 2, c: 3 }
x[Symbol.iterator] = function* (){
    yield 1;
    yield 'foo';
    yield 'last'
}
Then just directly iterate x

for (let i in x){
    console.log(i);
}
//1
//foo
//last

//=================================

Object.prototype[Symbol.iterator] = function*() {
    for(let key of Object.keys(this)) {
         yield key 
    } 
 }


var t = {a :'foo', b : 'bar'}
for(let i of t){
    console.log(t[i]);
}
//Or this way

var it = t[Symbol.iterator](), p;
while(p = it.next().value){
    console.log(t[p])
}



//=================================
var obj = {1: 'a', 2: 'b'};

function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}

let generator = entries(obj);

let step1 = generator.next();
let step2 = generator.next();
let step3 = generator.next();

console.log(JSON.stringify(step1)); // {"value":["1","a"],"done":false}
console.log(JSON.stringify(step2)); // {"value":["2","b"],"done":false}
console.log(JSON.stringify(step3)); // {"done":true}

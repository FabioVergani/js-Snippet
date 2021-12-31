const a = [1, 2, 3];
const b = [2, 3];

const isFounded = a.some( e => b.includes(e) );

const allFounded = b.every( e => a.includes(e) );

 

const a2 = ['a', 'b', 'c'];
const b2 = ['c', 'a', 'd'];
a2.some(e=>  -1!== b2.indexOf(e) )


const areCommonElements = (arr1, arr2) => {
    const [shortArr, longArr] = (arr1.length < arr2.length) ? [arr1, arr2] : [arr2, arr1];
    const longArrSet = new Set(longArr);
    return shortArr.some(el => longArrSet.has(el));
};

var target = ["apple","banana","orange"];
var checkArray = ["apple","banana","pineapple"];

var containsOneCommonItem = target.some(x => checkArray.some(y => y === x));`

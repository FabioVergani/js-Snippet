const eliminateDuplicatesFromString = str => str.replace(/(\b\S.+\b)(?=.*\1)/g, "").trim();

/*
https://www.measurethat.net/Benchmarks/Show/19182/1/eliminate-duplicates-from-an-array-of-strings
const str = 'Hello world nice to meet you hello again world';

// 97,988 ops/sec
console.log('unique words:', [...new Set(str.toLowerCase().split(/\s+/))]);

// 96,867 ops/sec
const words = {};
for ( const word of str.toLowerCase().split(/\s+/)) {
 words[word] = word;
}
console.log('unique words:', Object.keys(words));

// 63,593 ops/sec
console.log('unique words:',str.toLowerCase().split(/\s+/).filter((v, i, m) =>  i === m.indexOf(v)));

console.log('unique words:',str.replace(/(\b\S.+\b)(?=.*\1)/g, "").trim());
*/

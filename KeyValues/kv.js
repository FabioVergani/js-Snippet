for(const [key, value] of [
[1,'one'],
[2,'two']
]){
 console.log(key, value);
}


for(const [key,value] of [
['§','.style'],
]){
i=i.replace(RegExp(key,'g'),value);
};
console.log(i);

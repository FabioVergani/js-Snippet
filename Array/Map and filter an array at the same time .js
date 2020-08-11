//Map and filter an array at the same time

const options = [
    { name: 'One', flag: true },
    { name: 'Two', flag: false },
    { name: 'Three', flag: true },
];

const reduced = options.reduce((filtered, option)=>{
    if (option.flag) {
        filtered.push(6666);//someNewValue
    }
    return filtered;
}, []);

console.log(reduced);

const cars = [
  { brand: "Audi", color: "black" },
  { brand: "Audi", color: "white" },
  { brand: "Audi", color: "white" },
  { brand: "Ferarri", color: "red" },
  { brand: "Ford", color: "white" },
  { brand: "Ford", color: "blue" },
  { brand: "Peugot", color: "white" }
];

/*
const groupBy = (m, prop) => {
  return m.reduce((e, obj) => {
    const i = obj[prop];
    if (e.hasOwnProperty(i)) {
      e[i].push(obj);
    } else {
      e[i] = [obj];
    }
    return e;
  }, {});
};
*/

const groupObjectsByProp = (m, prop) => {
  return m.reduce((e, obj) => {
    const i = obj[prop];
    if (i in e) {
      e[i].push(obj);
    } else {
      e[i] = [obj];
    }
    return e;
  }, Object.create(null));
};

console.log("group", groupObjectsByProp(cars, "brand"));

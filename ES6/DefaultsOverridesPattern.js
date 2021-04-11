let i = 0;
const test = (params) => {
  const { text = "-", num = 0, bool = true } = params || {};
  console.log(++i, `"${text}", ${num}, ${bool}`);
};

console.clear();

test({ text: "a", num: 2, bool: false });
// ➝ "a", 2, false

test({ text: "b", num: 1 });
// ➝  "b", 1, true*

test({ text: "c" });
// ➝  "c", 0*, true*

test({});
test();
test(null);
test("");
// ➝  "-"*, 0*, true*

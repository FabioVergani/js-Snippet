let i;

/*
ES6 Defaults / Overrides Pattern
Combine default parameters and destructuring for a compact version of the defaults / overrides pattern.
*/

function fn1 ({
    a = '1',
    b = '2'
  } = {}) {

  console.log(`1.${++i}) a:${a}, b:${b}\n`);
}

i=0;
fn1();
fn1({ a:666 });
fn1({ a:null });

/*
a:1, b:2
a:666, b:2
a:null, b:2
*/

function fn2 (options) {
  
  const {
    a = '1',
    b = '2'
  } = options||{};

   console.log(`2.${++i}) a:${a}, b:${b}\n`);
}

i=0;
fn2();
fn2({ a:666 });
fn2({ a:null });
/*
a:1, b:2
a:666, b:2
a:null, b:2
*/


function fn3 (options) {
  const defaultOptions = {a:'1',b:'2'};
  const {a,b} = options ? {
    ...defaultOptions,
    ...options
  }: defaultOptions;

   console.log(`3.${++i}) a:${a}, b:${b}\n`);
}

i=0;
fn3();
fn3({ a:666 });
fn3({ a:null });
/*
a:1, b:2
a:666, b:2
a:null, b:2
*/


##### `| 0` is an easy and fast way to convert anything to integer:



    ( 3|0 ) === 3;                 // it does not change integers
    ( 3.3|0 ) === 3;               // it casts off the fractional part in fractionalal numbers
    ( 3.8|0 ) === 3;               // it does not round, but exactly casts off the fractional part
    ( -3.3|0 ) === -3;             // including negative fractional numbers
    ( -3.8|0 ) === -3;             // which have Math.floor(-3.3) == Math.floor(-3.8) == -4
    ( "3"|0 ) === 3;               // strings with numbers are typecast to integers
    ( "3.8"|0 ) === 3;             // during this the fractional part is cast off too
    ( "-3.8"|0 ) === -3;           // including negative fractional numbers
    ( NaN|0 ) === 0;               // NaN is typecast to 0
    ( Infinity|0 ) === 0;          // the typecast to 0 occurs with the Infinity
    ( -Infinity|0 ) === 0;         // and with -Infinity
    ( null|0 ) === 0;              // and with null,
    ( (void 0)|0 ) === 0;          // and with undefined
    ( []|0 ) === 0;                // and with an empty array
    ( [3]|0 ) === 3;               // but an array with one number is typecast to number
    ( [-3.8]|0 ) === -3;           // including the cast off of the fractional part
    ( [" -3.8 "]|0 ) === -3;       // including the typecast of strings to numbers
    ( [-3.8, 22]|0 ) === 0         // but an Array with several numbers is typecast to 0
    ( {}|0 ) === 0;                // an empty object is typecast to 0
    ( {'2':'3'}|0 ) === 0;         // or a not empty object
    ( (function(){})|0 ) === 0;    // an empty function is typecast to 0 too
    ( (function(){ return 3;})|0 ) === 0;



##### Replacements for `Math.floor()`:



    (~~n)                           
    n|n
    n&n

    // Generate random RGB value:
    var r = ~~(Math.random() * 255);

    ~~null;      // 0
    ~~undefined; // 0
    ~~0;         // 0
    ~~{};        // 0
    ~~[];        // 0
    ~~(1/0);     // 0
    ~~false;     // 0
    ~~true;      // 1
    ~~1.2543;    // 1
    ~~4.9;       // 4
    ~~(-2.999);  // -2

    // An example
    const n = Math.PI;   // 3.141592653589793

    Math.floor(n);       // 3
    parseInt(n, 10);     // 3
    ~~n; // 3 
    n|n; // 3            // n|n and n&n always yield the same results as ~~n
    n&n; // 3



It should be noted that of these last three alternatives, `n|n` [appears to be the fastest](https://jsperf.com/rounding-numbers-down).

`~~`'s flooring capabilities make it a better alternative to `Math.floor` if you know you’re dealing with positives — it’s faster and takes up fewer characters. It’s not quite as readable though.

##### Parsing hexadecimal value to get RGB color values:



    var hex = 'ffaadd';
    var rgb = parseInt(hex, 16); // rgb value is 16755421 in decimal = 111111111010101011011101 in binary = total 24 bits

    var red   = (rgb >> 16) & 0xFF; // returns 255
    var green = (rgb >> 8) & 0xFF;  // returns 170
    var blue  = rgb & 0xFF;         // returns 221  

    // How is it working:

    // There are two bitwise operations as named SHIFTING and AND operations.
    // SHIFTING is an operation the bits are shifted toward given direction by adding 0 (zero) bit for vacated bit fields.
    // AND is an operation which is the same with multiplying in Math. For instance, if 9th bit of the given first bit-set is 0
    // and 9th bit of the given second bit-set is 1, the new value will be 0 because of 0 x 1 = 0 in math.

    // 0xFF (000000000000000011111111 in binary) - used for to evaluate only last 8 bits of a given another bit-set by performing bitwise AND (&) operation. 
    // The count of bits is 24 and the first 16 bits of 0xFF value consist of zero (0) value. Rest of bit-set consists of one (1) value.
    console.log("0xFF \t\t\t\t: ", 0xFF) 

    // 111111111010101011011101 -> bits of rgb variable
    // 000000000000000011111111 -> 255 after (rgb >> 16) shifting operation
    // 000000000000000011111111 -> 255 complement (changes the first 16 bits and does nothing for the last 8 bits)
    // 000000000000000011111111 -> result bits after performing bitwise & operation
    console.log("Red - (rgb >> 16) & 0xFF \t: ", (rgb >> 16) & 0xFF) // used for to evaluate the first 8 bits

    // 111111111010101011011101 -> bits of rgb variable
    // 000000001111111110101010 -> 65450 -> 'ffaa'
    // 000000000000000011111111 -> 255 complement (changes the first 16 bits and does nothing for the last 8 bits)
    // 000000000000000010101010 -> result bits after performing bitwise & operation
    // calculation -> 000000001111111110101010 & 000000000000000011111111 = 000000000000000010101010 = 170 in decimal = 'aa' in hex-decimal
    console.log("Green - (rgb >> 8) & 0xFF \t: ", (rgb >> 8) & 0xFF) // used for to evaluate the middle 8 bits 

    // 111111111010101011011101 -> 'ffaadd'
    // 000000000000000011111111 -> 255 complement (changes the first 16 bits and does nothing for the last 8 bits)
    // 000000000000000011011101 -> result bits after performing bitwise & operation 
    // calculation -> 111111111010101011011101 & 000000000000000011111111 = 221 in decimal = 'dd' in hex-decimal
    console.log("Blue - rgb & 0xFF \t\t: ", rgb & 0xFF) // // used for to evaluate the last 8 bits.

    console.log("It means that `FFAADD` hex-decimal value specifies the same color with rgb(255, 170, 221)")



##### `^` bitwise XOR as a `I/O` toggler



    // https://stackoverflow.com/a/22061240/7453363
    function toggle(evt) {
      evt.target.IO ^= 1;                                    // Bitwise XOR as 1/0 toggler
      evt.target.textContent = evt.target.IO ? "ON" : "OFF"; // Unleash your ideas
    }



##### Check if number is odd:



    function isOdd(number) {
        return !!(number & 1);
    }

    isOdd(1); // true, 1 is odd



#### Check whether indexOf returned -1 or not:



    var foo = 'abc';
    !~foo.indexOf('bar'); // true



##### Flip a boolean value:



    var foo = 1;
    var bar = 0;

    foo ^= 1 // 0
    bar ^= 1 // 1

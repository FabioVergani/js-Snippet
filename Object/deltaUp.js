const delta = (a, b) => {
    let e = a||b;
    if (e && e !== b && b) {
        const fn = Object.entries;
        if (fn(b).length) {
            const m = fn(a);
            if (m.length) {
                let i = 0;
                const obj = {};
                for (const [key, value] of m) {
                    if (!b.hasOwnProperty(key) || value !== b[key]) {
                        ++i;
                        obj[key] = value;
                    }
                }
                e = i ? obj : null;
            }
        }
    }
    /*
    console.log({
        'b': b && JSON.parse(JSON.stringify(b)),
        'a': a, //update
        'delta': e
    });
    */
    return e;
};

/*
{ // delta tests:
    const obj = {};
    [
        /// sx
        [null, null],
        [{}, null],
        [{}, {}],
        [{x:1}, {}],

        /// dx
        [null, {}],

        /// ( new object ) {x:1}
        [
            {x:1},
            {x:null}
        ],
        [
            {x:1},
            {x:{}}
        ],

        /// ( new object ) {}
        [
            {x: {}},
            {x: {}}
        ],

        /// null
        [
            {x:1},
            {x:1}
        ],
        [
            {x:obj},
            {x:obj}
        ],
        [
            { x:obj },
            { x:obj, y:2 }
        ],
        [
            { x:obj, y:2 },
            { x:obj, y:2 }
        ],

        /// ( new object ) { y: 3 }
        [
            { x:obj, y:3 },
            { x:obj, y:2 }
        ],

        /// ( new object ) { x:{z:obj}, y:3 }
        [
            { x:{z:obj}, y:3 },
            { x:{z:666}, y:2 }
        ]
    ].forEach(([a,b],i)=>{
      // a changes over b
      console.log(i, delta(a,b));
    });

}
*/


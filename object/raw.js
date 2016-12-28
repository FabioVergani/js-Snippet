'use strict';
let e;

const w=window,
O=w.Object,
Seal=O.seal,
Create=O.create,
aBindedCall=(e=w.Function.prototype).bind.bind(e.call),
aRawObj=aBindedCall(Create,(e=null),e);

Seal(aRawObj({zz:{value:1}}));

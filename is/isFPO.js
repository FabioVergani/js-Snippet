	function isFunction(o,p){return typeof o[p] === 'function';}
	function isProperty(o,p){return typeof o[p] !== 'undefined';}
	function isObject(o,p){const e=o[p];return typeof e === 'object' && e !== null;}

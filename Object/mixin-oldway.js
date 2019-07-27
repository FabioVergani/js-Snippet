
    function eachProp(obj, func) {
        var prop;
        for(prop in obj){
            if(hasOwn.call(obj,prop)) {
                if (func(obj[prop],prop)) {
                    break;
                }
            }
        }
    }

//function isFunction(it) {return Object.prototype.toString.call(it) === '[object Function]';}
//typeof obj === 'function'
//function isArray(x){return Object.prototype.toString.call(x) === '[object Array]'}

const isArray=Array.isArray;

   /**
     * Simple function to mix in properties from source into target,
     * but only if target does not already have a property of the same name.
     */
    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function (value, prop) {
                if (force || !hasOwn.call(target, prop)) {
                    if (
								deepStringMixin &&
							'object'===typeof value   && value &&
                        !isArray(value) &&
							'function'!==typeof value &&
                        !(value instanceof RegExp)
						) {

                        if (!target[prop]) {
                            target[prop] = {};
                        }
                        mixin(target[prop], value, force, deepStringMixin);
                    } else {
                        target[prop] = value;
                    }
                }
            });
        }
        return target;
    }

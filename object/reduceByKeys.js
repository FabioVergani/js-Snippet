/**
 * Returns a reduced subset from original source
 * @param {Object} obj
 * @param {Array} keys
 * @return {Object}
 */

export const reduceByKeys = (obj, keys) =>
    keys?.reduce?.((e, key) => (key && (e[key] = obj[key]), e), {}) || {};


/*
    test('Should reduceByKeys() return expected subsets', () => {
        const object = { one: 1, two: 2, three: 3, four: 1 };
        const fn = keys => JSON.stringify(reduceByKeys(object, keys));
        expect(fn(['two', 'four'])).toStrictEqual('{"two":2,"four":1}');
        expect(fn(['one', 'three'])).toStrictEqual('{"one":1,"three":3}');
        expect(fn(['x', '', null, 'y'])).toStrictEqual('{}');
        expect(fn(null)).toStrictEqual('{}');
        expect(fn([])).toStrictEqual('{}');
        expect(fn('')).toStrictEqual('{}');
    });
*/

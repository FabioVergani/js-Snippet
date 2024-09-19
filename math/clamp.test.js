import { clamp, clampToUnit } from './clamp.mjs';

describe('clamp', () => {
	const tester = ({ value, min, max, expected }) => {
		expect(clamp(value, { min, max })).toBe(expected);
	};
	const titler = /*#$#*/ '$value 【$min,$max】 $expected';
	describe('should clamp to min', () => {
		it.each`
			value  | min    | max     | expected 
			-------------------------------------
			${0}   | ${0}   | ${1}    | ${0}
			${1}   | ${2}   | ${3}    | ${2}
			${0.5} | ${0.6} | ${1}    | ${0.6}
			${0.5} | ${1.2} | ${2}    | ${1.2}
			${-1}  | ${1}   | ${2.3}  | ${1}
			${-1}  | ${-1}  | ${0}    | ${-1}
			${-2}  | ${-1}  | ${-0.5} | ${-1}
			${-6}  | ${-5}  | ${0}    | ${-5}
			${-11} | ${-10} | ${-2}   | ${-10}
			${3.9} | ${4}   | ${9}    | ${4}
			${4}   | ${5}   | ${7}    | ${5}
			${5}   | ${5.1} | ${8}    | ${5.1}
			${7.5} | ${7.5} | ${9}    | ${7.5}
			${8}   | ${9}   | ${10}   | ${9}
			${0}   | ${2}   | ${1}    | ${2}
			${7}   | ${10}  | ${5}    | ${10}
			${5}   | ${10}  | ${0}    | ${10}
		`(titler, tester);
	});
	describe('should clamp to the same value', () => {
		it.each`
			value  | min    | max    | expected
			${-1}  | ${-2}  | ${-1}  | ${-1}
			${-1}  | ${-2}  | ${0}   | ${-1}
			${-1}  | ${-1}  | ${0}   | ${-1}
			${-1}  | ${-1}  | ${-1}  | ${-1}
			${0}   | ${-1}  | ${1}   | ${0}
			${-5}  | ${-10} | ${-2}  | ${-5}
			${0.5} | ${0.5} | ${0.5} | ${0.5}
			${0.5} | ${0.4} | ${0.6} | ${0.5}
			${0}   | ${0}   | ${0}   | ${0}
			${1}   | ${0}   | ${2}   | ${1}
			${1}   | ${1}   | ${1}   | ${1}
		`(titler, tester);
	});
	describe('should clamp to max', () => {
		it.each`
			value   | min    | max     | expected
			${0.1}  | ${-1}  | ${0.05} | ${0.05}
			${4}    | ${2}   | ${3}    | ${3}
			${5}    | ${5}   | ${5}    | ${5}
			${-1}   | ${-10} | ${-2}   | ${-2}
			${11.1} | ${0}   | ${10.5} | ${10.5}
		`(titler, tester);
	});
	describe('should handle edge cases', () => {
		it.each`
			value    | min          | max          | expected
			${'one'} | ${0}         | ${2}         | ${NaN}
			${'1'}   | ${0}         | ${2}         | ${1}
			${1}     | ${'zero'}    | ${2}         | ${NaN}
			${1}     | ${'0'}       | ${2}         | ${1}
			${1}     | ${0}         | ${'two'}     | ${NaN}
			${1}     | ${0}         | ${'2'}       | ${1}
			${5}     | ${undefined} | ${4}         | ${4}
			${5}     | ${null}      | ${4}         | ${4}
			${5}     | ${undefined} | ${6}         | ${5}
			${5}     | ${null}      | ${6}         | ${5}
			${5}     | ${0}         | ${undefined} | ${5}
			${5}     | ${6}         | ${undefined} | ${6}
			${5}     | ${0}         | ${null}      | ${5}
			${-1}    | ${null}      | ${10}        | ${-1}
			${5}     | ${null}      | ${null}      | ${5}
			${-1}    | ${undefined} | ${10}        | ${-1}
			${5}     | ${undefined} | ${undefined} | ${5}
		`(titler, tester);
	});
});

describe('clampToUnit', () => {
	const tester = ({ value, expected }) => {
		expect(clampToUnit(value)).toBe(expected);
	};
	const titler = /*#$#*/ '$value 【0,1】 $expected';
	describe('should clamp the value between 0 and 1', () => {
		it.each`
			value    | expected
			${-1}    | ${0}
			${-0.5}  | ${0}
			${0}     | ${0}
			${0.5}   | ${0.5}
			${0.999} | ${0.999}
			${1}     | ${1}
			${1.5}   | ${1}
			${2}     | ${1}
		`(titler, tester);
	});
	describe('should handle edge cases', () => {
		it.each`
			value        | expected
			${Infinity}  | ${1}
			${-Infinity} | ${0}
			${undefined} | ${0}
			${null}      | ${0}
			${NaN}       | ${0}
		`(titler, tester);
	});
});

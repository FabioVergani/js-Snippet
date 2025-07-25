import { splitAtFirst } from './splitAtFirst.mjs';

describe('splitAtFirst', () => {
	describe('behavior', () => {
		const titler = '"$input", "$delimiter" ➝ $expected';
		const tester = ({ input, delimiter, expected }) => {
			const result = splitAtFirst(input, delimiter);
			expect(result).toEqual(expected);
		};
		describe('split', () => {
			test.each`
				input                    | delimiter | expected
				${'prefix*suffix'}       | ${'*'}    | ${['prefix', 'suffix']}
				${'first second third'}  | ${' '}    | ${['first', 'second third']}
				${'line1\tline2\tline3'} | ${'\t'}   | ${['line1', 'line2\tline3']}
				${'line1\nline2'}        | ${'\n'}   | ${['line1', 'line2']}
				${'héllo→wørld'}         | ${'→'}    | ${['héllo', 'wørld']}
				${'text🔥more'}          | ${'🔥'}   | ${['text', 'more']}
				${'123.456.789'}         | ${'.'}    | ${['123', '456.789']}
				${'a-b-c'}               | ${'-'}    | ${['a', 'b-c']}
				${'a:b:c'}               | ${':'}    | ${['a', 'b:c']}
				${'x:'}                  | ${':'}    | ${['x']}
				${':x'}                  | ${':'}    | ${['', 'x']}
				${'::x'}                 | ${'::'}   | ${['', 'x']}
				${'a::b'}                | ${':'}    | ${['a', ':b']}
				${'a::b::c'}             | ${'::'}   | ${['a', 'b::c']}
				${'a::b'}                | ${'::'}   | ${['a', 'b']}
				${'a::'}                 | ${'::'}   | ${['a']}
				${'abc'}                 | ${'bc'}   | ${['a']}
				${'abcabc'}              | ${'bca'}  | ${['a', 'bc']}
				${'a||b||c'}             | ${'||'}   | ${['a', 'b||c']}
			`(titler, tester);
		});
		describe('no-split', () => {
			describe('delimiter not found or equal to input', () => {
				test.each`
					input    | delimiter | expected
					${'abc'} | ${'abcd'} | ${['abc']}
					${'abc'} | ${'abc'}  | ${['abc']}
					${'abc'} | ${'Abc'}  | ${['abc']}
					${'abc'} | ${'xyz'}  | ${['abc']}
				`(titler, tester);
			});
			describe('falsy delimiter', () => {
				test.each`
					input    | delimiter    | expected
					${'abc'} | ${''}        | ${['abc']}
					${'abc'} | ${null}      | ${['abc']}
					${'abc'} | ${undefined} | ${['abc']}
				`(titler, tester);
			});
		});
	});
	describe('cases', () => {
		const titler = '$description'; //: "$input", "$delimiter" ➝ $expected
		const tester = ({ input, delimiter, expected }) => {
			const result = splitAtFirst(input, delimiter);
			expect(result).toEqual(expected);
		};
		describe('edge', () => {
			test.each`
				description                      | input         | delimiter   | expected
				${'whitespace only input'}       | ${'   '}      | ${' '}      | ${['', '  ']}
				${'space input and delimiter'}   | ${' '}        | ${' '}      | ${[' ']}
				${'empty input'}                 | ${''}         | ${'-'}      | ${['']}
				${'input and delimiter'}         | ${'a b'}      | ${' '}      | ${['a', 'b']}
				${'zero-width characters'}       | ${'a\u200Bb'} | ${'\u200B'} | ${['a', 'b']}
				${'newline characters'}          | ${'a\r\nb'}   | ${'\r\n'}   | ${['a', 'b']}
				${'tab'}                         | ${'a\tb'}     | ${'\t'}     | ${['a', 'b']}
				${'same characters'}             | ${'---'}      | ${'-'}      | ${['', '--']}
				${'delimiter at start and end'}  | ${'*text*'}   | ${'*'}      | ${['', 'text*']}
				${'delimiter longer than input'} | ${'ab'}       | ${'abc'}    | ${['ab']}
				${'input is just the delimiter'} | ${'::'}       | ${'::'}     | ${['::']}
				${'accented character'}          | ${'café'}     | ${'é'}      | ${['caf']}
			`(titler, tester);
		});
		describe('real-world', () => {
			test.each`
				description                    | input                               | delimiter | expected
				${'email address parsing'}     | ${'user@domain.com'}                | ${'@'}    | ${['user', 'domain.com']}
				${'key-value configuration'}   | ${'database_url=postgres://host'}   | ${'='}    | ${['database_url', 'postgres://host']}
				${'CSV field parsing'}         | ${'Last, First, Middle'}            | ${', '}   | ${['Last', 'First, Middle']}
				${'URL query parameters'}      | ${'search?q=javascript'}            | ${'?'}    | ${['search', 'q=javascript']}
				${'semantic versioning'}       | ${'v2.1.0-alpha.1'}                 | ${'-'}    | ${['v2.1.0', 'alpha.1']}
				${'log timestamp parsing'}     | ${'[2024-07-24T10:30:00] ERROR'}    | ${'] '}   | ${['[2024-07-24T10:30:00', 'ERROR']}
				${'URL path splitting'}        | ${'/api/v1/users/123'}              | ${'/'}    | ${['', 'api/v1/users/123']}
				${'Windows path parsing'}      | ${'C:\\Users\\Documents'}           | ${'\\'}   | ${['C:', 'Users\\Documents']}
				${'file extension extraction'} | ${'document.tar.gz'}                | ${'.'}    | ${['document', 'tar.gz']}
				${'HTTP header parsing'}       | ${'Content-Type: application/json'} | ${': '}   | ${['Content-Type', 'application/json']}
			`(titler, tester);
		});
	});
});

import { splitAtFirst } from './splitAtFirst.mjs';

describe('splitAtFirst', () => {
	describe('Core behavior', () => {
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
			${'a||b||c'}             | ${'||'}   | ${['a', 'b||c']}
		`(
			'"$input", "$delimiter" ➝ $expected', // ➝ []
			({ input, delimiter, expected }) => {
				const result = splitAtFirst(input, delimiter);
				expect(result).toEqual(expected);
			}
		);
	});
	describe('No-split', () => {
		const input = 'abc';
		const expected = ['abc'];
		const boundTestEach = test.each.bind(
			null,
			null,
			`"${input}", "%s" ➝ ${expected}`, //
			delimiter => {
				const result = splitAtFirst(input, delimiter);
				expect(result).toEqual(expected);
			}
		);
		describe('falsy delimiter', () => {
			boundTestEach(['', 0, false, null, undefined]);
		});
		describe('delimiter not found or equal to input', () => {
			boundTestEach(['abcd', input, 'Abc', 'xyz', 123, 0]);
		});
	});
	describe('Cases', () => {
		const boundTestEach = test.each.bind(
			null,
			null,
			'%sdescription: "%sinput", "%sdelimiter" ➝ %sexpected',
			(description, input, delimiter, expected) => {
				const result = splitAtFirst(input, delimiter);
				expect(result).toEqual(expected);
			}
		);
		describe('Edge', () => {
			boundTestEach`
				description                    | input    | delimiter | expected
				${'space input and delimiter'} | ${' '}   | ${' '}    | ${[' ']}
				${'empty input'}               | ${''}    | ${'-'}    | ${['']}
				${'same characters'}           | ${'---'} | ${'-'}    | ${['', '--']}
				${'boolean input'}             | ${true}  | ${'-'}    | ${[true]}
			`;
		});
		describe('Real-world', () => {
			boundTestEach`
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
			`;
		});
	});
});

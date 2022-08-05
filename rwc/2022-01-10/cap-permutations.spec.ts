import capPermutations from './cap-permutations';

describe('capPermutations', () => {
	const testCases: [string, string[]][] = [
		['ab2', ['ab2', 'aB2', 'Ab2', 'AB2']],
		['35p', ['35p', '35P']],
	];

	test.concurrent.each(testCases)(
		'capPermutations(%s) = %s',
		(input, expected) => {
			expect(capPermutations(input)).toStrictEqual(expected);
		}
	);
});

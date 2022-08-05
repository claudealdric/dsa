import longestPrefix from './longestPrefix';

describe('longestPrefix', () => {
	test.concurrent.each([
		['cra', ['cranberry', 'crawfish', 'crap']],
		['p', ['parrot', 'poodle', 'pie']],
		['', ['parrot', 'poodle', 'fish']],
	])(
		'returns the prefix "%s" for the word list %s',
		async (expected, words) => {
			expect(longestPrefix(words)).toBe(expected);
		}
	);
});

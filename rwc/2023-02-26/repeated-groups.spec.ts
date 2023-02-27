import { repeatedGroups } from './repeated-groups';

describe('repeatedGroups', () => {
	const testCases: Array<[number[], number[][]]> = [
		[[1, 2, 2, 4, 5], [[2, 2]]],
		[
			[1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9],
			[
				[1, 1],
				[0, 0],
				[4, 4, 4],
				[9, 9],
			],
		],
	];

	it.concurrent.each(testCases)(
		'returns all groups of repeating consecutive numbers',
		(input, expected) => {
			expect(repeatedGroups(input)).toEqual(expected);
		}
	);
});

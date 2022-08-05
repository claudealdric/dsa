import threeDepthsSum from './three-depths-sum';

describe('threeDepthsSum', () => {
	const testCases = [
		[[1, 2, 3], [6]],
		[
			[199, 200, 208, 210, 200, 207, 240, 269, 260, 263],
			[607, 618, 618, 617, 647, 716, 769, 792],
		],
	];

	test.concurrent.each(testCases)(
		'threeDepthsSum(%s) = %s',
		(arg, expected) => {
			expect(threeDepthsSum(arg)).toStrictEqual(expected);
		}
	);
});

import depthIncreaseCount from '../depth-increase-count';
import threeDepthsSum from '../three-depths-sum';

describe('part 2 solution', () => {
	it('counts the increases for three-depth window sums', () => {
		const depths = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
		const depthSums = threeDepthsSum(depths);
		expect(depthIncreaseCount(depthSums)).toBe(5);
	});
});

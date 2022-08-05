import depthIncreaseCount from './depth-increase-count';

describe('depthIncrease', () => {
	it('returns the correct number of increases', () => {
		expect(
			depthIncreaseCount([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])
		).toBe(7);
	});
});

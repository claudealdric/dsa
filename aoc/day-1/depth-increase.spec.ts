import depthIncreaseCount from './depth-increase';

describe('depthIncrease', () => {
  it('Returns the correct number of increases', () => {
    expect(
      depthIncreaseCount([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])
    ).toBe(7);
  });
});

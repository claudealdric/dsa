import reorder from './reorder';

describe('reorder', () => {
  it('returns the correct value', () => {
    expect(
      reorder(['C', 'D', 'E', 'F', 'G', 'H'], [3, 0, 4, 1, 2, 5])
    ).toEqual(['D', 'F', 'G', 'C', 'E', 'H']);
  });
});

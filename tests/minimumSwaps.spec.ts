import { expect } from 'chai'
import { minimumSwaps } from '../minimumSwaps'

describe('minimumSwaps', () => {
  it('([5, 1, 3, 2, 6, 4, 7]) => 4', () => {
    expect(minimumSwaps([5, 1, 3, 2, 6, 4, 7])).to.equal(4)
  })

  it('([3, 7, 6, 9, 1, 8, 10, 4, 2, 5]) => 9', () => {
    expect(minimumSwaps([3, 7, 6, 9, 1, 8, 10, 4, 2, 5])).to.equal(9)
  })
})

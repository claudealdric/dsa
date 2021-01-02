import { expect } from 'chai'
import { minimumBribes } from '../minimumBribes'

describe('minimumBribes', () => {
  it('([2, 1, 3, 5, 4]) => 3', () => {
    expect(minimumBribes([2, 1, 5, 3, 4])).to.equal(3)
  })

  it('([1, 2, 5, 3, 7, 8, 6, 4]) => 7', () => {
    expect(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])).to.equal(7)
  })

  it('([1, 2, 5, 3, 4, 7, 8, 6]) => 4', () => {
    expect(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])).to.equal(4)
  })

  it('([2, 5, 1, 3, 4]) => "Too chaotic"', () => {
    expect(minimumBribes([2, 5, 1, 3, 4])).to.equal('Too chaotic')
  })

  it('([5, 1, 2, 3, 7, 8, 6, 4]) => "Too chaotic"', () => {
    expect(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])).to.equal('Too chaotic')
  })
})

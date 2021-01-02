import 'mocha'
import { expect } from 'chai'
import { miniMaxSum } from '../miniMaxSum'

describe('miniMaxSum', () => {
  it('Returns [10, 14] with [1, 2, 3, 4, 5] passed in', () => {
    const result = miniMaxSum([1, 2, 3, 4, 5])
    expect(result).to.have.same.members([10, 14])
  })

  it('Returns [16, 24] with [1, 3, 5, 7, 9] passed in', () => {
    const result = miniMaxSum([1, 3, 5, 7, 9])
    expect(result).to.have.same.members([16, 24])
  })

  it('Throws an error when an array smaller than length 5 is passed in', () => {
    expect(() => miniMaxSum([1, 2, 3, 4])).to.throw()
    expect(() => miniMaxSum([1, 2, 3])).to.throw()
    expect(() => miniMaxSum([1, 2])).to.throw()
    expect(() => miniMaxSum([1])).to.throw()
    expect(() => miniMaxSum([])).to.throw()
  })
})

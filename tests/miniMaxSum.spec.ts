import 'mocha'
import { expect } from 'chai'
import { miniMaxSum } from '../miniMaxSum'

describe('miniMaxSum', () => {
  it('Returns an empty array with an empty array as its argument', () => {
    const result = miniMaxSum([])
    expect(result).to.have.same.members([])
  })

  it('Returns [10, 14] with [1, 2, 3, 4, 5] passed in', () => {
    const result = miniMaxSum([1, 2, 3, 4, 5])
    expect(result).to.have.members([10, 14])
  })
})

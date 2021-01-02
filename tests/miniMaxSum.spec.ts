import 'mocha'
import { expect } from 'chai'
import { miniMaxSum } from '../miniMaxSum'

describe('miniMaxSum', () => {
  it('Returns [10, 14] with [1, 2, 3, 4, 5] passed in', () => {
    const result = miniMaxSum([1, 2, 3, 4, 5])
    expect(result).to.have.same.members([10, 14])
  })
})

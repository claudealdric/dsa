import 'mocha'
import { expect } from 'chai'
import { miniMaxSum } from '../miniMaxSum'

describe('miniMaxSum', () => {
  it('Returns an empty array with an empty array as its argument', () => {
    const result = miniMaxSum([])
    expect(result).to.have.same.members([])
  })
})

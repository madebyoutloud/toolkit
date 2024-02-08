import { describe, expect, it } from 'vitest'
import { groupBy } from '~/groupBy'

const array = [
  { a: 1, b: 1 },
  { a: 1, b: 2 },
  { a: 2, b: 1 },
  { a: 1, b: 3 },
] as const

const expected = {
  1: [
    { a: 1, b: 1 },
    { a: 1, b: 2 },
    { a: 1, b: 3 },
  ],
  2: [{ a: 2, b: 1 }],
}

describe('groupBy', () => {
  it('should group values', () => {
    expect(groupBy(array, item => item.a)).toEqual(expected)
  })
})

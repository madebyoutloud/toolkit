import { describe, expect, it } from 'vitest'
import { omit } from '../src/omit'

describe('omit', () => {
  it('should omit props', () => {
    const result = omit({ a: 1, b: 2, c: 3 }, ['a', 'c'])

    expect(result).toStrictEqual({ b: 2 })
  })
})

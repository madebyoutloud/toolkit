import { describe, expect, it } from 'vitest'
import { pick } from '../src/pick'

describe('pick', () => {
  it('should pick props', () => {
    const result = pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])

    expect(result).toStrictEqual({ a: 1, c: 3 });
  })

})

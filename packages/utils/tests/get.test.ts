import { describe, expect, it } from 'vitest'
import { get } from '~/get'

describe('get', () => {
  it('should get nested value', () => {
    const result = get({ a: { b: { c: 3 } } }, 'a.b.c')

    expect(result).toStrictEqual(3);
  })

})

import { describe, expect, it } from 'vitest'
import { uniq } from '~/uniq'

describe('uniq', () => {
  it('should filter duplicate values', () => {
    const result = uniq([1, 1, 2, 2])

    expect(result).toStrictEqual([1, 2]);
  })

})

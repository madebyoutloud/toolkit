import { describe, expect, it } from 'vitest'
import { chunk } from '~/chunk'

describe('chunk', () => {
  it('should split array', () => {
    const array = [1, 2, 3, 4, 5]
    const size = 2
    const result = chunk(array, size)

    expect(result.length).toBe(Math.ceil(array.length / size))
    expect(result[0]).toStrictEqual([1, 2])
    expect(result[1]).toStrictEqual([3, 4])
    expect(result[2]).toStrictEqual([5])
  })
})

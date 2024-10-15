import { describe, expect, it } from 'vitest'
import { toArray } from '~/toArray'

describe('toArray', () => {
  it('leaves array as is', () => {
    const value = [1, 2, 3]
    const result = toArray(value)

    expect(result).toStrictEqual(value)
  })

  it('converts value to array', () => {
    const value = 1
    const result = toArray(value)

    expect(result).toStrictEqual([value])
  })

  it('returns empty array when null or undefined', () => {
    expect(toArray(null)).toStrictEqual([])
    expect(toArray(undefined)).toStrictEqual([])
  })
})

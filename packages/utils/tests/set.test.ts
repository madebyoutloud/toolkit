import { describe, expect, it } from 'vitest'
import { set } from '~/set'

describe('set', () => {
  it('should set nested value', () => {
    const obj = { a: { b: { c: 3 } } }
    set(obj, 'a.b.c', 4)
    set(obj, 'a.d.e', 5)

    expect(obj).toStrictEqual({ a: { b: { c: 4 }, d: { e: 5 } } })
  })
})

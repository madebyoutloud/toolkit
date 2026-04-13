import { describe, expect, it, vi } from 'vitest'
import { once } from './once'

describe('once', () => {
  it('calls a function only once', () => {
    const func = vi.fn(() => 1)
    const onceFunc = once(func)

    expect(onceFunc()).toBe(1)
    expect(onceFunc()).toBe(1)
    expect(func).toHaveBeenCalledTimes(1)
  })

  it('works without a return value', () => {
    const func = vi.fn(() => {})
    const onceFunc = once(func)

    expect(onceFunc()).toBeUndefined()
    expect(onceFunc()).toBeUndefined()
    expect(func).toHaveBeenCalledTimes(1)
  })

  it('works with promises', async () => {
    const func = vi.fn(() => Promise.resolve(1))
    const onceFunc = once(func)

    await expect(onceFunc()).resolves.toBe(1)
    await expect(onceFunc()).resolves.toBe(1)
    expect(func).toHaveBeenCalledTimes(1)
  })
})

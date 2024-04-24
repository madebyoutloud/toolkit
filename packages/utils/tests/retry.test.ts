import { describe, expect, it, vi } from 'vitest'
import { retry } from '~/retry'

describe('retry', () => {
  it('should retry callback', () => {
    const fn = vi.fn(() => {
      throw new Error('error')
    })

    expect(() => retry(fn, { retries: 3 })).rejects.toThrowError()
    expect(fn).toBeCalledTimes(4)
  })

  it('should return value', async () => {
    const value = 'value'
    let count = 0
    const fn = vi.fn(() => {
      count++

      if (count < 2) {
        throw new Error('error')
      }

      return value
    })

    const result = await retry(fn, { retries: 3 })

    expect(result).toBe(value)
    expect(fn).toBeCalledTimes(2)
  })

  it('should delay retry', async () => {
    const start = Date.now()
    const delay = 200

    const fn = vi.fn(() => {
      if (Date.now() - start < delay) {
        throw new Error('error')
      }

      return true
    })

    const result = await retry(fn, { retries: 3, delay: () => delay })

    expect(result).toBe(true)
    expect(fn).toBeCalledTimes(2)
  })

  it('should filter retry', async () => {
    let count = 0

    const fn = vi.fn(() => {
      throw new Error(`${++count}`)
    })

    expect(() => retry(fn, { filter: error => Number((error as Error).message) < 2 })).rejects.toThrowError()
    expect(fn).toBeCalledTimes(2)
  })
})

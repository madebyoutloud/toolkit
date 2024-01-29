import { describe, expect, it, sle, vi } from 'vitest'
import { debounce } from '~/debounce'
import { identity } from '~/identity'

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

describe('debounce', () => {
  it('should debounce a function', async () => {
    const mockFn = vi.fn(identity)

    const debouncer = debounce(mockFn, { wait: 32 })

    expect([
      debouncer('a'),
      debouncer('b'),
      debouncer('c'),
    ]).toEqual([undefined, undefined, undefined])
    expect(mockFn).toBeCalledTimes(0)

    await sleep(50)

    expect(mockFn).toBeCalledTimes(1)
    expect([
      debouncer('d'),
      debouncer('e'),
      debouncer('f'),
    ]).toEqual(['c', 'c', 'c'])
    expect(mockFn).toBeCalledTimes(1)

    await sleep(50)

    expect(mockFn).toBeCalledTimes(2)
  })

  it('wait for an async function', async () => {
    const mockFn = vi.fn((value) => {
      return new Promise(resolve => setTimeout(() => resolve(value), 200))
    })

    const debouncer = debounce(mockFn, { wait: 32 })

    expect([
      debouncer('a'),
      debouncer('b'),
      debouncer('c'),
    ]).toEqual([undefined, undefined, undefined])
    expect(mockFn).toBeCalledTimes(0)

    await sleep(50)

    expect(mockFn).toBeCalledTimes(1)

    debouncer('d')

    await sleep(50)

    expect(mockFn).toBeCalledTimes(1)

    await sleep(200)

    expect(mockFn).toBeCalledTimes(2)
  })
})

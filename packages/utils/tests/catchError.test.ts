import { describe, expect, it } from 'vitest'
import { catchError } from '~/catchError'

describe('catchError', () => {
  it('resolves value', async () => {
    const value = 'test'
    const result = catchError(() => value)

    expect(result[0]).toBe(value)
    expect(result[1]).toBe(null)
  })

  it('catches error', async () => {
    const result = catchError(() => {
      throw new Error('test')
    })

    expect(result[0]).toBe(null)
    expect(result[1]).toBeInstanceOf(Error)
  })

  it('resolves promise value', async () => {
    const value = 'test'
    const result = await catchError(Promise.resolve(value))

    expect(result[0]).toBe(value)
    expect(result[1]).toBe(null)
  })

  it('catches promise error', async () => {
    const result = await catchError(Promise.reject(new Error('promise')))

    expect(result[0]).toBe(null)
    expect(result[1]).toBeInstanceOf(Error)
  })
})

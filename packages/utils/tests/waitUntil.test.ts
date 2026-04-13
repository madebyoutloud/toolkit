import { describe, expect, it } from 'vitest'
import { waitUntil } from '~/waitUntil'

describe('waitUntil', () => {
  it('should wait for callback to be truthy', async () => {
    const time = performance.now()
    const duration = 200
    let value = false

    setTimeout(() => {
      value = true
    }, duration)

    await waitUntil(() => value)

    expect(performance.now() - time).toBeGreaterThanOrEqual(duration)
  })

  it('respects maxWait', async () => {
    const time = performance.now()
    const duration = 300
    const maxWait = 200
    let value = false

    setTimeout(() => {
      value = true
    }, duration)

    await waitUntil(() => value, { maxWait: 200 })

    expect(performance.now() - time).toBeLessThanOrEqual(duration)
    expect(performance.now() - time).toBeGreaterThanOrEqual(maxWait)
  })
})

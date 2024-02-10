import { describe, expect, it } from 'vitest'
import { waitUntil } from '~/waitUntil'

describe('waitUntil', () => {
  it('should wait for callback to be truthy', async () => {
    const time = Date.now()
    const duration = 200
    let value = false

    setTimeout(() => {
      value = true
    }, duration)

    await waitUntil(() => value)

    expect(Date.now() - time).toBeGreaterThanOrEqual(duration)
  })

  it('respects maxWait', async () => {
    const time = Date.now()
    const duration = 300
    const maxWait = 200
    let value = false

    setTimeout(() => {
      value = true
    }, duration)

    await waitUntil(() => value, { maxWait: 200 })

    expect(Date.now() - time).toBeLessThanOrEqual(duration)
    expect(Date.now() - time).toBeGreaterThanOrEqual(maxWait)
  })
})

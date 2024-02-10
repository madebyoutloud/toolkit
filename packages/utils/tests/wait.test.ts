import { describe, expect, it } from 'vitest'
import { wait } from '~/wait'

describe('wait', () => {
  it('should wait x milliseconds', async () => {
    const time = Date.now()
    const duration = 200

    await wait(duration)

    expect(Date.now() - time).toBeGreaterThan(duration - 1)
  })
})

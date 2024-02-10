interface WaitUntilOptions {
  readonly interval?: number
  readonly maxWait?: number
}

export function waitUntil(callback: () => unknown, { interval = 100, maxWait }: WaitUntilOptions = {}) {
  return new Promise<void>((resolve) => {
    let timer: ReturnType<typeof setTimeout> | undefined
    let maxWaitTimer: ReturnType<typeof setTimeout> | undefined

    const complete = () => {
      clearInterval(timer)
      maxWaitTimer && clearTimeout(maxWaitTimer)
      resolve()
    }

    const check = async () => {
      const result = await callback()

      if (!result) {
        timer = setTimeout(check, interval)
      }
      else {
        complete()
      }
    }

    timer = setTimeout(check, interval)

    if (maxWait) {
      maxWaitTimer = setTimeout(complete, maxWait)
    }
  })
}

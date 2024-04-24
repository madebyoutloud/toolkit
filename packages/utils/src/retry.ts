type RetryDelayFn = (count: number, error: unknown) => number
type FilterFn = (error: unknown) => boolean

export interface RetryOptions {
  retries?: number
  delay?: RetryDelayFn
  filter?: FilterFn
}

function constantDelay(duration: number): RetryDelayFn {
  return () => duration
}

function exponentialDelay(factor = 100): RetryDelayFn {
  return (count) => {
    const delay = 2 ** count * factor
    const randomSum = delay * 0.2 * Math.random()

    return delay + randomSum
  }
}

async function retry<Result, T extends () => Result | Promise<Result>>(
  fn: T,
  {
    retries = 5,
    delay,
    filter,
  }: RetryOptions,
): Promise<Result> {
  let count = 0

  do {
    try {
      return await fn()
    }
    catch (error) {
      if (count >= retries || (filter && !filter(error))) {
        throw error
      }

      if (delay) {
        await new Promise(resolve => setTimeout(resolve, delay(count, error)))
      }
    }

    count += 1
  } while (true)
}

const api = Object.assign(retry, {
  constantDelay,
  exponentialDelay,
})

export { api as retry }

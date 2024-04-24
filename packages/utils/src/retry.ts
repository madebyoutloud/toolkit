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

function wrap<T extends (...args: any[]) => any>(fn: T, options: RetryOptions = {}): (...args: Parameters<T>) => Promise<ReturnType<Awaited<T>>> {
  return (...args) => retry(() => fn(...args), options)
}

async function retry<T extends (...args: any[]) => any>(
  fn: T,
  {
    retries = 5,
    delay,
    filter,
  }: RetryOptions = {},
): Promise<Awaited<ReturnType<T>>> {
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
  wrap,
  constantDelay,
  exponentialDelay,
})

export { api as retry }

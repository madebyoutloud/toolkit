type DebouncerCall<
  F extends (...args: any) => unknown,
  IsNullable extends boolean = true,
> = (
  ...args: Parameters<F>
) => ReturnType<F> | (true extends IsNullable ? undefined : never)

type Debouncer<
  F extends (...args: any) => unknown,
  IsNullable extends boolean = true,
> = DebouncerCall<F, IsNullable> & {
  readonly cancel: () => void
  readonly flush: () => ReturnType<F> | undefined
  readonly isPending: boolean
  readonly cachedValue: ReturnType<F> | undefined
}

type Timing = 'leading' | 'both' | 'trailing'

interface DebounceOptions {
  readonly timing?: Timing
  readonly wait?: number
  readonly maxWait?: number
}

export function debounce<F extends (...args: any) => any>(
  fn: F,
  options: DebounceOptions & { readonly timing: 'leading' | 'both' }
): Debouncer<F, false>
export function debounce<F extends (...args: any) => any>(
  fn: F,
  options?: DebounceOptions
): Debouncer<F>

export function debounce<F extends (...args: any) => any>(
  fn: F,
  {
    wait,
    timing = 'trailing',
    maxWait,
  }: DebounceOptions = {},
): Debouncer<F> {
  if (maxWait !== undefined && wait !== undefined && maxWait < wait) {
    throw new Error(
      `debounce: maxWaitMs (${maxWait}) cannot be less than waitMs (${wait})`,
    )
  }

  let coolDownTimeoutId: ReturnType<typeof setTimeout> | undefined
  let maxWaitTimeoutId: ReturnType<typeof setTimeout> | undefined
  let latestCallArgs: Parameters<F> | undefined
  let latestResult: ReturnType<F> | undefined
  let isPending = false

  function handleInvoke() {
    if (latestCallArgs === undefined || isPending) {
      return
    }

    if (maxWaitTimeoutId !== undefined) {
      clearTimeout(maxWaitTimeoutId)
      maxWaitTimeoutId = undefined
    }

    const args: any = latestCallArgs
    latestCallArgs = undefined

    // Invoke the function and store the results locally.
    const result = fn(...args)
    latestResult = result

    if (result instanceof Promise) {
      isPending = true
      result.finally(handleAsync)
    }
  }

  function handleAsync() {
    isPending = false

    if (coolDownTimeoutId !== undefined && maxWaitTimeoutId === undefined && maxWait !== undefined) {
      // max wait timeout already passed, we should invoke
      handleInvoke()
    }
    else if (coolDownTimeoutId === undefined && latestCallArgs !== undefined) {
      // cool down timeout already passed, we should invoke
      handleInvoke()
    }
  }

  function handleCoolDownEnd() {
    if (coolDownTimeoutId === undefined) {
      return
    }

    clearTimeout(coolDownTimeoutId)
    coolDownTimeoutId = undefined

    if (latestCallArgs !== undefined) {
      handleInvoke()
    }
  }

  function handleDebouncedCall(args: Parameters<F>) {
    // We save the latest call args so that (if and) when we invoke the function
    // in the future, we have args to invoke it with.
    latestCallArgs = args

    if (maxWait !== undefined && maxWaitTimeoutId === undefined) {
      // We only need to start the maxWait timeout once, on the first debounced
      // call that is now being delayed.
      maxWaitTimeoutId = setTimeout(handleInvoke, maxWait)
    }
  }

  function call(...args: Parameters<F>) {
    if (coolDownTimeoutId === undefined) {
      // This call is starting a new cool-down window!

      if (timing === 'trailing') {
        // Only when the timing is "trailing" is the first call "debounced".
        handleDebouncedCall(args)
      }
      else {
        // Otherwise for "leading" and "both" the first call is actually
        // called directly and not via a timeout.
        latestCallArgs = args
        handleInvoke()
      }
    }
    else {
      if (timing !== 'leading') {
        // When the timing is 'leading' all following calls are just ignored
        // until the cool-down period ends. But for the other timings the call
        // is "debounced".
        handleDebouncedCall(args)
      }

      // The current timeout is no longer relevant because we need to wait the
      // full `waitMs` time from this call.
      clearTimeout(coolDownTimeoutId)
      coolDownTimeoutId = undefined
    }

    coolDownTimeoutId = setTimeout(handleCoolDownEnd, wait ?? maxWait ?? 0)

    return latestResult
  }

  function cancel() {
    if (coolDownTimeoutId !== undefined) {
      clearTimeout(coolDownTimeoutId)
      coolDownTimeoutId = undefined
    }

    if (maxWaitTimeoutId !== undefined) {
      clearTimeout(maxWaitTimeoutId)
      maxWaitTimeoutId = undefined
    }

    latestCallArgs = undefined
  }

  function flush() {
    handleCoolDownEnd()
    return latestResult
  }

  const api: Debouncer<F> = call as any

  Object.defineProperties(api, {
    cancel: { value: cancel },
    flush: { value: flush },
    isPending: { get: () => coolDownTimeoutId !== undefined },
    cachedValue: { get: () => latestResult },
  })

  return api
}

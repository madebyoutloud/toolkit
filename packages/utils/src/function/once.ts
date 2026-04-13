export function once<F extends (...args: any[]) => any>(func: F): F {
  let called = false
  let result: ReturnType<F>

  return function (...args: Parameters<F>): ReturnType<F> {
    if (!called) {
      called = true
      result = func(...args)
    }

    return result
  } as F
}

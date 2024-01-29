import type { DeepIndex } from './types'

export function get<T extends object, K extends string, V = undefined>(object: T, key: K, defaultValue?: V): DeepIndex<T, K> | V {
  const path = key.split('.')
  const length = path.length

  let index = 0
  let obj: any = object

  while (obj != null && index < length) {
    obj = obj[path[index++]]
  }

  if (index === length && obj !== undefined) {
    return obj
  }

  return defaultValue as V
}

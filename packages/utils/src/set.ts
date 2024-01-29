import type { DeepIndex } from './types'

export function set<T extends object, K extends string>(object: T, key: K, value: DeepIndex<T, K> | unknown) {
  const path = key.split('.')
  const length = path.length
  const lastIndex = length - 1

  let index = -1
  let obj: any = object

  while (obj != null && ++index < length) {
    if (index === lastIndex) {
      obj[path[index]] = value
    }
    else if (obj[path[index]] == null) {
      obj[path[index]] = {}
    }

    obj = obj[path[index]]
  }

  return object
}

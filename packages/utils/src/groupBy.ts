import type { PredIndexedOptional } from './_types'

export function groupBy<T, Key extends PropertyKey = PropertyKey>(array: readonly T[], fn: PredIndexedOptional<T, Key>) {
  return array.reduce<Record<string, T[]>>((result, item) => {
    const key = fn(item)

    if (key === undefined) {
      return result
    }

    const actualKey = String(key)
    if (!result[actualKey]) {
      result[actualKey] = []
    }

    result[actualKey].push(item)

    return result
  }, {})
}

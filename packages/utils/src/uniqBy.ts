import type { PredIndexedOptional } from './_types'

export function uniqBy<T, Key extends PropertyKey = PropertyKey>(array: readonly T[], fn: PredIndexedOptional<T, Key>): T[] {
  return array.filter((value, index) => {
    const result = fn(value)

    return array.findIndex(item => fn(item) === result) === index
  })
}

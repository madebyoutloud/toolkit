export function uniq<T>(array: readonly T[]): T[] {
  return array.filter((value, index) => array.indexOf(value) === index)
}

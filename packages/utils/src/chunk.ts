export function chunk<T>(array: readonly T[], size: number): T[][] {
  const length = array.length

  if (!length || size < 1) {
    return []
  }

  let index = 0
  let resultIndex = 0
  const result: T[][] = Array.from({ length: Math.ceil(length / size) })

  while (index < length) {
    result[resultIndex++] = array.slice(index, index + size)
    index += size
  }

  return result
}

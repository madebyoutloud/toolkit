export function toArray<T>(value: T[] | T | null | undefined): T[] {
  if (Array.isArray(value)) {
    return value
  }

  if (value === null || value === undefined) {
    return []
  }

  return [value]
}

export function pick<T extends object, K extends keyof T>(
  object: T,
  keys: Readonly<K[]>,
): Pick<T, K> {
  return keys.reduce((acc, key) => {
    if (key in object) {
      acc[key] = object[key]
    }
    return acc
  }, {} as Pick<T, K>)
}

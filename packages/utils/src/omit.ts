export function omit<T extends object, K extends keyof T>(
  object: T,
  keys: Readonly<K[]>,
): Omit<T, K> {
  return (Object.keys(object) as K[]).reduce((acc, key) => {
    if (!keys.includes(key)) {
      acc[key] = object[key]
    }

    return acc
  }, {} as any)
}

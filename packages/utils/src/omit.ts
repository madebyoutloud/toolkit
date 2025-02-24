export function omit<
  T extends object,
  const Keys extends ReadonlyArray<keyof T>,
>(
  object: T,
  keys: Keys,
): Omit<T, Keys[number]> {
  return Object.keys(object).reduce((result, key) => {
    if (!keys.includes(key as keyof T)) {
      result[key] = object[key as keyof T]
    }

    return result
  }, {} as any)
}

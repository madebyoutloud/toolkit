export function pick<
  T extends object,
  const Keys extends ReadonlyArray<keyof T>,
>(
  object: T,
  keys: Keys,
): Pick<T, Keys[number]> {
  return keys.reduce((result, key) => {
    if (key in object) {
      result[key] = object[key]
    }
    return result
  }, {} as Pick<T, Keys[number]>)
}

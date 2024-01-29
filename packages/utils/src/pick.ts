export function pick<T extends object, K extends keyof T>(
  object: T,
  names: Readonly<K[]>
): Pick<T, K> {
  return names.reduce((acc, name) => {
    if (name in object) {
      acc[name] = object[name];
    }
    return acc;
  }, {} as Pick<T, K>);
}

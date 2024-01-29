export function uniq<T extends unknown[]>(array: T) {
  return array.filter((value, index) => array.indexOf(value) === index);
}

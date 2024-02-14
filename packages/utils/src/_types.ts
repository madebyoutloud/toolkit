export type PredIndexedOptional<T, K> = (
  input: T,
  index?: number,
  array?: Array<T>
) => K

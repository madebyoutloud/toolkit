# uniqBy
Returns a new array containing only one copy of each element in the original list transformed by a function.

```ts
uniqBy(array, fn)

uniqBy(
  [{ n: 1 }, { n: 2 }, { n: 2 }, { n: 5 }, { n: 1 }],
  (item) => item.n,
) // => [{n: 1}, {n: 2}, {n: 5}]
```

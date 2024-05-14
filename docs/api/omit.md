# omit
Returns a partial copy of an `object` omitting the `keys` specified.

```ts
omit(object, keys)

omit({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'b']) // => { c: 3, d: 4 }
```

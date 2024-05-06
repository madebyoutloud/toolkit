# set
Sets the `value` at `path` of `object`.

```ts
set(object, path, value)

set({ a: { b: 2 } }, 'a.c', 3) // => { a: { b: 2, c: 3 } }
```

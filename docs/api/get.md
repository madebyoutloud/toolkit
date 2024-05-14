# get

Gets the value at `key` of `object`. If the resolved value is `null` or `undefined`, the `defaultValue` is returned in its place.

```ts
get(object, key, defaultValue)

get({ a: { b: 2 } }, 'a.c', 1); // 1
get({ a: { b: 2 } }, 'a.b', 1); // 2
```

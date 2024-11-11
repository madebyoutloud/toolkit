# toArray

Transforms `value` to array if not `null` or `undefined`.

```ts
toArray(value)

toArray(1) // => [1]
toArray('test') // => ['test']
toArray([1, 2]) // => [1, 2]
toArray(null) // => []
toArray(undefined) // => []
```

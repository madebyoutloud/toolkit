# chunk

Split an array into groups the length of `size`. If `array` can't be split evenly, the final chunk will be the remaining elements.

```ts
chunk(array, size)

chunk(['a', 'b', 'c', 'd', 2]) // => [['a', 'b'], ['c', 'd']]
```

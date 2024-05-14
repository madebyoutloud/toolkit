# groupBy
Splits an `array` into sets, grouped by the result of running each value through `fn`.

```ts
groupBy(array, fn)

groupBy([1, 2, 3, 4], (value) => value % 2 === 0); // [[1,3],[2,4]]
```

# catchError

Catches error from promise or function execution and returns set with output and error.

`input` can be either instance of `Promise` or `function` that will be immediately executed.

```ts
catchError(input)

catchError(() => {
  throw new Error('error')
}) // => [null, Error]

catchError(() => {
  return true
}) // => [true, null]


catchError(
  new Promise<string>(resolve => {
    resolve('test')
  })
) // => ['test', null]
```

# once

Ensures a function is called only once. Subsequent calls return the result of the first call.

```ts
once(func)

const func = () => 1
const onceFunc = once(func)

onceFunc() // => 1
onceFunc() // => 1
```

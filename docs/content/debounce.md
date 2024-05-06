# debounce

Wraps `fn` with a debouncer object that "debounces" (delays) invocations of the function during a defined cool-down period (`waitMs`). It can be configured to invoke the function either at the start of the cool-down period, the end of it, or at both ends (`timing`). It can also be configured to allow invocations during the cool-down period (`maxWaitMs`). It stores the latest call's arguments so they could be used at the end of the cool-down period when invoking func (if configured to invoke the function at the end of the cool-down period). It stores the value returned by `fn` whenever its invoked. This value is returned on every call, and is accessible via the `cachedValue` property of the debouncer. Its important to note that the value might be different from the value that would be returned from running `fn` with the current arguments as it is a cached value from a previous invocation. Important: The cool-down period defines the minimum between two invocations, and not the maximum. The period will be extended each time a call is made until a full cool-down period has elapsed without any additional calls.

```ts
debounce(fn, options)

const debounced = debounce(console.log, { timing: 'trailing', waitMs: 100, maxWaitMs: 1000 })
debounced('test')

// debounce will wait for promise to resolve because calling the method again
const debouncedAsync = debounce(() => new Promise(resolve => setTimeout(resolve, 500)), { waitMs: 100 })
debouncedAsync()
```

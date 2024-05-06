# retry
Wraps `fn` and retries calling the function when it throws and error.

```ts
retry(fn, options)

await retry(() => fetch('/api'), { retries: 3 })

const wrappedApi = retry.wrap((endpoint) => fetch(endpoint), { retries: 3 })
await wrappedApi('/api')

// custom delay
await retry(() => fetch('/api'), { retries: 3, delay: retry.exponentialDelay(100) })

// filter
await retry(() => fetch('/api'), { retries: 3, filter: (error) => error.code !== 'E_FORBIDDEN' })
```

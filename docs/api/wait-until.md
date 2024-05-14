# waitUntil
Returns a promise that resolves after specified `callback` returns truthy value.

```ts
waitUntil(callback, options)

// checks /api/status every seconds and resolves when returns valid status
await waitUntil(async () => {
  const response = await fetch('/api/status')

  return (await response.json()).status
}, {
  interval: 1000,
  maxWait: 60000
})
```

# Getting Started

## Installation

> [!NOTE]
> This package is currently private and you will need an access token or package archive.

::: code-group
```sh-vue [npm]
npm add -D {{$packageName}}
```
```sh-vue [pnpm]
pnpm add -D {{$packageName}}
```
```sh-vue [yarn]
yarn add -D {{$packageName}}
```
```sh-vue [bun]
bun add -D {{$packageName}}
```
:::

## Usage

```ts
import { chunk } from '@outloud/utils'

const chunked = chunk([1, 2, 3, 4, 5], 2)
```

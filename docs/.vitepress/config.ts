import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Utils',
  description: 'JavaScript utility functions',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '32x32' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  ],
  themeConfig: {
    logo: '/logo.svg',

    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/guide/getting-started' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [{ text: 'Getting Started', link: '/guide/getting-started' }],
      },
      {
        text: 'Function',
        items: [
          { text: 'catchError', link: '/api/catch-error' },
          { text: 'identity', link: '/api/identity' },
          { text: 'debounce', link: '/api/debounce' },
          { text: 'retry', link: '/api/retry' },
          { text: 'wait', link: '/api/wait' },
          { text: 'waitUntil', link: '/api/wait-until' },
        ],
      },
      {
        text: 'Array',
        items: [
          { text: 'chunk', link: '/api/chunk' },
          { text: 'groupBy', link: '/api/group-by' },
          { text: 'toArray', link: '/api/to-array' },
          { text: 'uniq', link: '/api/uniq' },
          { text: 'uniqBy', link: '/api/uniq-by' },
        ],
      },
      {
        text: 'Object',
        items: [
          { text: 'get', link: '/api/get' },
          { text: 'omit', link: '/api/omit' },
          { text: 'pick', link: '/api/pick' },
          { text: 'set', link: '/api/set' },
        ],
      },
    ],

    footer: {
      copyright: 'Copyright © 2024-present Outloud',
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    // ],
  },
})

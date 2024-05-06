import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Outloud Utils',
  description: 'JavaScript utility functions',
  srcDir: 'content',
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/getting-started' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [{ text: 'Getting Started', link: '/getting-started' }],
      },
      {
        text: 'Function',
        items: [
          { text: 'identity', link: '/identity' },
          { text: 'debounce', link: '/debounce' },
          { text: 'retry', link: '/retry' },
          { text: 'wait', link: '/wait' },
          { text: 'waitUntil', link: '/wait-until' },
        ],
      },
      {
        text: 'Array',
        items: [
          { text: 'chunk', link: '/chunk' },
          { text: 'groupBy', link: '/group-by' },
          { text: 'uniq', link: '/uniq' },
          { text: 'uniqBy', link: '/uniq-by' },
        ],
      },
      {
        text: 'Object',
        items: [
          { text: 'get', link: '/get' },
          { text: 'omit', link: '/omit' },
          { text: 'pick', link: '/pick' },
          { text: 'set', link: '/set' },
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

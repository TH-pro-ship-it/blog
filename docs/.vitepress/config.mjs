import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/blog/',
  title: '学习笔记',
  description: '跨介质无人机飞控 · 学习记录',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '飞控学习', link: '/飞控学习/' },
      { text: '硬件笔记', link: '/硬件笔记/' },
      { text: '阅读笔记', link: '/阅读笔记/' },
    ],
    sidebar: {
      '/飞控学习/': [
        {
          text: '飞控学习',
          items: [
            { text: '概览', link: '/飞控学习/' },
          ]
        }
      ],
      '/硬件笔记/': [
        {
          text: '硬件笔记',
          items: [
            { text: '概览', link: '/硬件笔记/' },
          ]
        }
      ],
      '/阅读笔记/': [
        {
          text: '阅读笔记',
          items: [
            { text: '概览', link: '/阅读笔记/' },
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],
    footer: {
      message: '跨介质无人机飞控 · 学习记录'
    }
  }
})

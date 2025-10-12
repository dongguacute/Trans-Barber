import { defineConfig } from 'vitepress'
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'
import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "Trans Barber",
      description: "帮助理发师了解跨性别者需求的网站",
      themeConfig: {
        logo: '/logo.svg',
        nav: [
          { text: '首页', link: '/' },
        ],
        sidebar: [
          {
            text: '文档',
            items: [
              { text: '测试文档 1', link: '/test' },
              { text: '测试文档 2', link: '/test2' }
            ]
          }
        ],
        footer: {
          message: '根据 CC BY-SA 4.0 许可证发布。',
          copyright: '版权所有 © 2025-present Cherry Fu & Contributors'
        },
        editLink: {
          pattern: 'https://github.com/dongguacute/Trans-Barber/edit/main/:path',
          text: '在 GitHub 上编辑此页'
        },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'short'
          }
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '页面导航'
        },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      title: "Trans Barber",
      description: "A website that helps hairdressers understand the needs of transgender people",
      themeConfig: {
        logo: '/logo.svg',
        nav: [
          { text: 'Home', link: '/en/' },
        ],
        sidebar: calculateSidebar([
          'Documentation',
          { folderName: 'en', separate: true },
        ]),
        footer: {
          message: 'Released under the CC BY-SA 4.0 License.',
          copyright: 'Copyright © 2025-present Cherry Fu & Contributors'
        },
        editLink: {
          pattern: 'https://github.com/dongguacute/Trans-Barber/edit/main/:path',
          text: 'Edit this page on GitHub'
        },
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'short'
          }
        },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        outline: {
          label: 'On this page'
        },
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme'
      }
    },
    'zh-tw': {
      label: '繁體中文',
      lang: 'zh-TW',
      title: "Trans Barber",
      description: "幫助理髮師了解跨性別者需求的網站",
      themeConfig: {
        logo: '/logo.svg',
        nav: [
          { text: '首頁', link: '/zh-tw/' },
        ],
        sidebar: calculateSidebar([
          '文檔',
          { folderName: 'zh-tw', separate: true },
        ]),
        footer: {
          message: '根據 CC BY-SA 4.0 授權條款發布。',
          copyright: '版權所有 © 2025-present Cherry Fu & Contributors'
        },
        editLink: {
          pattern: 'https://github.com/dongguacute/Trans-Barber/edit/main/:path',
          text: '在 GitHub 上編輯此頁'
        },
        lastUpdated: {
          text: '最後更新於',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'short'
          }
        },
        docFooter: {
          prev: '上一頁',
          next: '下一頁'
        },
        outline: {
          label: '頁面導覽'
        },
        returnToTopLabel: '回到頂部',
        sidebarMenuLabel: '選單',
        darkModeSwitchLabel: '主題',
        lightModeSwitchTitle: '切換到淺色模式',
        darkModeSwitchTitle: '切換到深色模式'
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      title: "Trans Barber",
      description: "理髪師がトランスジェンダーの人々のニーズを理解するのを支援するウェブサイト",
      themeConfig: {
        logo: '/logo.svg',
        nav: [
          { text: 'ホーム', link: '/ja/' },
        ],
        sidebar: calculateSidebar([
          'ドキュメント',
          { folderName: 'ja', separate: true },
        ]),
        footer: {
          message: 'CC BY-SA 4.0 ライセンスの下で公開されています。',
          copyright: 'Copyright © 2025-present Cherry Fu & Contributors'
        },
        editLink: {
          pattern: 'https://github.com/dongguacute/Trans-Barber/edit/main/:path',
          text: 'GitHub でこのページを編集'
        },
        lastUpdated: {
          text: '最終更新',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'short'
          }
        },
        docFooter: {
          prev: '前のページ',
          next: '次のページ'
        },
        outline: {
          label: '目次'
        },
        returnToTopLabel: 'トップに戻る',
        sidebarMenuLabel: 'メニュー',
        darkModeSwitchLabel: 'テーマ',
        lightModeSwitchTitle: 'ライトテーマに切り替える',
        darkModeSwitchTitle: 'ダークテーマに切り替える'
      }
    }
  },
  vite: {
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
        'vitepress', 
        '@nolebase/ui', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
        '@nolebase/ui',  
      ], 
    }, 
     plugins: [
       GitChangelog({
         // Fill in your repository URL here
         repoURL: () => 'https://github.com/dongguacute/Trans-Barber',
       }),
       GitChangelogMarkdownSection(),
     ],
   },
   markdown: {
     config: (md) => {
       md.use(InlineLinkPreviewElementTransform)
     },
   },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'stylesheet', href: '/style.css' }]
  ],
  appearance: true,
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dongguacute/Trans-Barber' }
    ]
  },
})

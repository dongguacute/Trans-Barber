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
        darkModeSwitchTitle: '切换到深色模式',
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除查询条件',
                backButtonTitle: '返回上一级',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '回车',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'escape'
                }
              }
            }
          }
        }
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
        darkModeSwitchTitle: 'Switch to dark theme',
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                displayDetails: 'Display detailed list',
                resetButtonTitle: 'Clear query conditions',
                backButtonTitle: 'Go back to previous level',
                noResultsText: 'Unable to find relevant results',
                footer: {
                  selectText: 'Select',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: 'Switch',
                  navigateUpKeyAriaLabel: 'Up arrow',
                  navigateDownKeyAriaLabel: 'Down arrow',
                  closeText: 'Close',
                  closeKeyAriaLabel: 'escape'
                }
              }
            }
          }
        }
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
        darkModeSwitchTitle: '切換到深色模式',
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '搜尋',
                buttonAriaLabel: '搜尋'
              },
              modal: {
                displayDetails: '顯示詳細列表',
                resetButtonTitle: '清除查詢條件',
                backButtonTitle: '返回上一級',
                noResultsText: '無法找到相關結果',
                footer: {
                  selectText: '選擇',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: '切換',
                  navigateUpKeyAriaLabel: '上箭頭',
                  navigateDownKeyAriaLabel: '下箭頭',
                  closeText: '關閉',
                  closeKeyAriaLabel: 'escape'
                }
              }
            }
          }
        }
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
        darkModeSwitchTitle: 'ダークテーマに切り替える',
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: '検索',
                buttonAriaLabel: '検索'
              },
              modal: {
                displayDetails: '詳細リストを表示',
                resetButtonTitle: 'クエリ条件をクリア',
                backButtonTitle: '前のレベルに戻る',
                noResultsText: '関連する結果が見つかりません',
                footer: {
                  selectText: '選択',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: '切り替え',
                  navigateUpKeyAriaLabel: '上矢印',
                  navigateDownKeyAriaLabel: '下矢印',
                  closeText: '閉じる',
                  closeKeyAriaLabel: 'escape'
                }
              }
            }
          }
        }
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

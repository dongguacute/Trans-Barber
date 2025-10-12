import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'
import {
  NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'
import {
  NolebaseInlineLinkPreviewPlugin
} from '@nolebase/vitepress-plugin-inline-link-preview/client'
import {
  NolebaseHighlightTargetedHeading,
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
// Import plugin styles after Tailwind to ensure higher specificity
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css' //*
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { InjectionKey } from '@nolebase/vitepress-plugin-inline-link-preview/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import MyLayout from './MyLayout.vue'
export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => h(MyLayout, null, {
    'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
    'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
    'layout-top': () => [
      h(NolebaseHighlightTargetedHeading),
    ],
  }),
  enhanceApp({ app }) {
    app.provide(InjectionKey, {
      locales: { // i18n
        'zh-CN': { // configure for Simplified Chinese
          popup: {
            loading: '加载中...',
            loadingAriaLabel: '加载中',
          }
        },
        'zh-TW': { // configure for Traditional Chinese
          popup: {
            loading: '載入中...',
            loadingAriaLabel: '載入中',
          }
        },
        'en': { // configure for English
          popup: {
            loading: 'Loading...',
            loadingAriaLabel: 'Loading',
          }
        },
        'ja': { // configure for Japanese
          popup: {
            loading: '読み込み中...',
            loadingAriaLabel: '読み込み中',
          }
        }
      }
    })
    app.use(NolebaseGitChangelogPlugin)
    app.use(NolebaseInlineLinkPreviewPlugin)
  },
}

export default Theme
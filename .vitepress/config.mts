import { defineConfig } from 'vitepress'
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'
import { InlineLinkPreviewElementTransform } from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'
import { calculateSidebar } from '@nolebase/vitepress-plugin-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
     ['link', { rel: 'stylesheet', href: '/style.css' }]
   ],
   title: "Trans Barber",
   description: "A website that helps hairdressers understand the needs of transgender people",
  themeConfig: {
    search: {
      provider: 'local'
    },
    sidebar: calculateSidebar([ 
      '文档', 
      { folderName: 'docs', separate: true }, 
    ]), 
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})

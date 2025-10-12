import { defineConfig } from 'vitepress'
import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
   vite: {
     plugins: [
       GitChangelog({
         // Fill in your repository URL here
         repoURL: () => 'https://github.com/dongguacute/Trans-Barber',
       }),
       GitChangelogMarkdownSection(),
     ],
   },
   head: [
     ['link', { rel: 'stylesheet', href: '/style.css' }]
   ],
   title: "Trans Barber",
   description: "A website that helps hairdressers understand the needs of transgender people",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./**/*.{js,ts,vue,md}', './.vitepress/**/*.{js,ts,vue}'],
  corePlugins: {
    preflight: false, // Disable Preflight to avoid conflicts with plugin styles
  },
}
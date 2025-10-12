/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './*.{js,ts,vue,md}',
    './.vitepress/**/*.{js,ts,vue}',
    './zh-tw/**/*.{js,ts,vue,md}',
    './en/**/*.{js,ts,vue,md}',
    './ja/**/*.{js,ts,vue,md}'
  ],
  corePlugins: {
    preflight: false, // Disable Preflight to avoid conflicts with plugin styles
  },
}
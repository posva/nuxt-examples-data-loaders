export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    // Enable Prose components (ProsePre/ProseCode) without @nuxt/content
    prose: true,
  },

  compatibilityDate: '2024-04-03',
})

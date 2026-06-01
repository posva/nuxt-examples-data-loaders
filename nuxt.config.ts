import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    // Pinia + Pinia Colada power the `defineColadaLoader()` data loader.
    // Order matters: pinia must be registered before pinia-colada.
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
  ],

  css: ['~/assets/css/main.css'],

  experimental: {
    typedPages: true,
  },

  ui: {
    // Enable Prose components (ProsePre/ProseCode) without @nuxt/content
    prose: true,
  },
})

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2026-06-02',

  modules: [
    '@nuxt/ui',
    // Pinia + Pinia Colada power the `defineColadaLoader()` data loader.
    // Order matters: pinia must be registered before pinia-colada.
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
    '@vercel/analytics',
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  experimental: {
    typedPages: true,
  },

  ui: {
    // Enable Prose components (ProsePre/ProseCode) without @nuxt/content
    prose: true,
  },

  devtools: {
    timeline: {
      enabled: true,
    },
  },
})

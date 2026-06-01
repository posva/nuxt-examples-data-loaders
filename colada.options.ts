import type { PiniaColadaOptions } from '@pinia/colada'

// Options passed to the PiniaColada plugin installed by `@pinia/colada-nuxt`.
// These defaults also apply to queries created by `defineColadaLoader()`.
export default {
  queryOptions: {
    // Keep data "fresh" for 30s so repeated navigations don't refetch.
    staleTime: 1000 * 30,
  },
} satisfies PiniaColadaOptions

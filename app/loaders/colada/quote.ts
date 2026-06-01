import { defineColadaLoader } from 'vue-router/experimental/pinia-colada'

// Defined in its own file so it can be consumed from a child component
// (`TheQuoteColada.vue`) while still being re-exported from the page that owns
// the route. The router only awaits loaders that a page component exports.
export const useQuote = defineColadaLoader({
  key: to => ['quotes', to.params.id],
  query: (to, { signal }) =>
    $fetch(`https://dummyjson.com/quotes/${to.params.id}`, { signal }),
  staleTime: 1000 * 60,
})

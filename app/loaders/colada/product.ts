import { defineColadaLoader } from 'vue-router/experimental/pinia-colada'

// A Pinia Colada data loader fetches during navigation and caches by `key`.
// `query` tracks the route properties it reads (here `to.params.id`), so it
// only refreshes when the `id` changes. The `key` is shared with `useQuery()`
// and can be invalidated through `useMutation()`.
export const useProduct = defineColadaLoader('colada-products-id', {
  key: to => ['products', to.params.id],
  query: (to, { signal }) =>
    $fetch(`https://dummyjson.com/products/${to.params.id}`, { signal }),
  // Keep this product "fresh" for a minute before refreshing on navigation.
  staleTime: 1000 * 60,
})

import { defineBasicLoader } from 'vue-router/experimental'

// The basic loader has no cache: it reruns the function on every navigation.
// The `key` is only used to transfer the data from server to client (SSR).
export const useProduct = defineBasicLoader(
  (to, { signal }) =>
    $fetch(`https://dummyjson.com/products/${to.params.id}`, { signal }),
  { key: 'basic-product' },
)

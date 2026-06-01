import { defineBasicLoader } from 'vue-router/experimental'

export const useQuote = defineBasicLoader(
  (to, { signal }) =>
    $fetch(`https://dummyjson.com/quotes/${to.params.id}`, { signal }),
  { key: 'basic-quote' },
)

<script lang="ts">
import { useQuote } from '~/loaders/colada/quote'

// Exported here (the page) so the router awaits it during navigation, even
// though the data is actually consumed inside the <TheQuoteColada> child.
export { useQuote }
</script>

<script setup lang="ts">
const route = useRoute()
const id = computed(() => Number(route.params.id))
</script>

<template>
  <div class="flex flex-col gap-2">
    <p>The loader is defined on this page but consumed by a child component:</p>
    <p>
      <UButton
        :disabled="id <= 1"
        :to="`/colada/quotes/${id - 1}`"
      >
        Previous
      </UButton>
      -
      <UButton :to="`/colada/quotes/${id + 1}`">
        Next
      </UButton>
    </p>
    <TheQuoteColada />
  </div>
</template>

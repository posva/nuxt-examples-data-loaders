<script lang="ts">
import { useProduct } from '~/loaders/colada/product'

// Re-export so the router connects this loader to the page and awaits it.
export { useProduct }
</script>

<script setup lang="ts">
const route = useRoute()
const id = computed(() => Number(route.params.id))

const { data: product, isLoading, error, refresh } = useProduct()
</script>

<template>
  <div class="flex flex-col gap-2">
    <p class="flex items-center gap-2">
      <ProseCode>https://dummyjson.com/products/{{ id }}</ProseCode>
    </p>
    <p class="flex items-center gap-2">
      <UButton
        :disabled="id <= 1"
        :to="`/colada/products/${id - 1}`"
      >
        Previous
      </UButton>
      -
      <UButton :to="`/colada/products/${id + 1}`">
        Next
      </UButton>
      <UButton
        color="neutral"
        variant="outline"
        :loading="isLoading"
        @click="refresh()"
      >
        Refresh
      </UButton>
    </p>
    <p v-if="isLoading && !product">
      Fetching...
    </p>
    <ProsePre v-else-if="error">{{ error }}</ProsePre>
    <ProsePre v-else>{{ product }}</ProsePre>
  </div>
</template>

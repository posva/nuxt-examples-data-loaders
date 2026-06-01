<script lang="ts">
import { defineColadaLoader } from 'vue-router/experimental/pinia-colada'

// The loader is exported from the page so the router runs it during
// navigation and awaits it before rendering. No `await` needed in `setup`.
export const useHello = defineColadaLoader({
  key: ['hello'],
  query: () => $fetch('/api/hello'),
})
</script>

<script setup lang="ts">
const { data, isLoading, error } = useHello()
</script>

<template>
  <div class="flex flex-col gap-2">
    <p>
      Pinia Colada loader for <UKbd
        size="lg"
        value="/api/hello"
      />:
    </p>
    <p v-if="isLoading">
      Fetching...
    </p>
    <ProsePre v-else-if="error">{{ error }}</ProsePre>
    <ProsePre v-else>{{ data }}</ProsePre>
  </div>
</template>

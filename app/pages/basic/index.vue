<script lang="ts">
import { defineBasicLoader } from 'vue-router/experimental'

export const useHello = defineBasicLoader(() => $fetch('/api/hello'), {
  key: 'basic-hello',
})
</script>

<script setup lang="ts">
const { data, isLoading, error } = useHello()
</script>

<template>
  <div class="flex flex-col gap-2">
    <p>
      Basic loader for <UKbd
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

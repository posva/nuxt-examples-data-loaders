<script setup lang="ts">
const id = ref(1)
const { data: product, pending, error } = await useFetch(() => `https://dummyjson.com/products/${id.value}`)

/* Same as:
const { data: product, pending, error } = await useAsyncData(() => {
  return $fetch(`https://dummyjson.com/products/${id.value}`)
}, {
  watch: [id]
})
*/

const canDecrease = computed(() => id.value > 1)
</script>

<template>
  <div class="flex flex-col gap-2">
    <p class="flex items-center gap-2">
      Result of <ProseCode>https://dummyjson.com/products/</ProseCode>
      <UInput
        v-model="id"
        type="number"
      />
    </p>
    <p>
      <UButton
        :disabled="!canDecrease"
        @click="canDecrease ? id-- : null"
      >
        Previous
      </UButton>
      -
      <UButton @click="id++">
        Next
      </UButton>
    </p>
    <p v-if="pending">
      Fetching...
    </p>
    <ProsePre v-else-if="error">{{ error }}</ProsePre>
    <ProsePre v-else>{{ product }}</ProsePre>
    <NuxtLink
      class="underline"
      to="/"
    >
      Back to Home
    </NuxtLink>
  </div>
</template>

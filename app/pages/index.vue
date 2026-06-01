<script setup lang="ts">
// Data loaders attach data fetching to the route: the loader runs during
// navigation (and on the server) and the page renders once the data is ready.
// Two implementations are demonstrated side by side.
const sections = [
  {
    title: 'Pinia Colada loader',
    description: 'defineColadaLoader() — cached, deduplicated, SSR-friendly.',
    links: [
      { label: 'Hello', to: '/colada' },
      { label: 'Product by id', to: '/colada/products/1' },
      { label: 'Quote (child component)', to: '/colada/quotes/1' },
    ],
  },
  {
    title: 'Basic loader',
    description: 'defineBasicLoader() — reruns the fetch on every navigation.',
    links: [
      { label: 'Hello', to: '/basic' },
      { label: 'Product by id', to: '/basic/products/1' },
      { label: 'Quote (child component)', to: '/basic/quotes/1' },
    ],
  },
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <p>
      Data fetching with
      <NuxtLink
        to="https://router.vuejs.org/data-loaders/"
        target="_blank"
        class="underline"
      >Vue Router data loaders</NuxtLink>.
    </p>

    <div
      v-for="section in sections"
      :key="section.title"
      class="flex flex-col gap-2"
    >
      <h2 class="text-lg font-semibold">
        {{ section.title }}
      </h2>
      <p class="opacity-70">
        {{ section.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <UButton
          v-for="link in section.links"
          :key="link.to"
          :to="link.to"
          color="neutral"
          variant="outline"
        >
          {{ link.label }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuote } from '~/loaders/basic/quote'

const { data: quote, isLoading, error } = useQuote()
</script>

<template>
  <div>
    <p v-if="isLoading && !quote">
      Fetching...
    </p>
    <ProsePre v-else-if="error">Could not load quote: {{ error }}</ProsePre>
    <figure
      v-else-if="quote"
      class="bg-(--ui-bg-elevated) border border-(--ui-border-muted) rounded-lg p-4 my-6 max-w-xl text-lg"
    >
      <blockquote class="m-4">
        {{ quote.quote }}
      </blockquote>
      <figcaption class="m-4">
        &mdash; {{ quote.author }}
      </figcaption>
    </figure>
  </div>
</template>

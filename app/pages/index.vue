<script setup>
const { data } = await useFetch('/api/hello')
</script>

<template>
  <div>
    <p>
      Result of <UKbd
        size="lg"
        value="/api/hello"
      />:
    </p>
    <ProsePre>{{ data }}</ProsePre>
  </div>
</template>

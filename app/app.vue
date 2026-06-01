<script setup lang="ts">
const dir = 'features/data-loaders'
const github = `https://github.com/nuxt/examples/tree/main/examples/${dir}`

// "features/data-fetching" -> "Data Fetching"
const title = dir
  .split('/')
  .pop()!
  .split('-')
  .map(word => word[0]!.toUpperCase() + word.slice(1))
  .join(' ')

const nav = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'External',
    to: '/external',
  },
  {
    label: 'Component',
    to: '/component',
  },
]

const colorMode = useColorMode()
const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})

useSeoMeta({
  title: dir,
})
</script>

<template>
  <UApp>
    <!-- Show Nuxt progress indicator on page change -->
    <NuxtLoadingIndicator />

    <UContainer class="min-h-screen p-10">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <UTooltip text="Open on GitHub">
              <UButton
                :to="github"
                target="_blank"
                color="neutral"
                variant="outline"
                icon="i-simple-icons-github"
                aria-label="Open on GitHub"
              />
            </UTooltip>

            <Logo :label="title" />

            <ClientOnly>
              <UButton
                :icon="isDark ? 'i-heroicons-moon-solid' : 'i-heroicons-sun-solid'"
                color="neutral"
                variant="outline"
                aria-label="Toggle color mode"
                @click="isDark = !isDark"
              />
              <template #fallback>
                <div class="size-8" />
              </template>
            </ClientOnly>
          </div>
        </template>

        <nav class="mb-4 flex justify-center gap-4 border-b border-default pb-4">
          <NuxtLink
            v-for="item of nav"
            :key="item.label"
            :to="item.to"
            class="hover:underline"
            exact-active-class="text-primary"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <main class="min-h-96">
          <NuxtPage />
        </main>

        <template #footer>
          <div class="flex items-center justify-between">
            <Logo label="Examples" />
            <NuxtLink
              :to="github"
              target="_blank"
              class="text-xs opacity-40"
            >
              {{ dir }}
            </NuxtLink>
          </div>
        </template>
      </UCard>
    </UContainer>
  </UApp>
</template>

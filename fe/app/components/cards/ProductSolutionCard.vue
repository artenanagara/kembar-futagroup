<script setup lang="ts">
defineProps<{
  solution: {
    slug: string
    name: string
    description: string
    image: string
    cardImage?: string
  }
  index: number
}>()
</script>

<template>
  <NuxtLink
    :to="`/produk-solusi/${solution.slug}`"
    class="grid min-h-110 gap-6 border-t border-black/20 bg-white py-8 last:border-b md:min-h-80 md:grid-cols-[120px_1fr] lg:sticky lg:top-24 lg:min-h-75 lg:grid-cols-[180px_1.1fr_1.45fr_minmax(280px,452px)] lg:items-start"
    :style="{ zIndex: index + 1 }"
  >
    <p class="font-mono text-base leading-tight text-black/45">
      [{{ String(index + 1).padStart(2, '0') }}]
    </p>

    <h3 class="text-xl font-medium leading-tight text-ink sm:text-2xl">
      {{ solution.name }}
    </h3>

    <p class="max-w-xl text-base leading-relaxed text-black/70">
      {{ solution.description }}
    </p>

    <img
      :src="solution.cardImage ?? solution.image"
      :alt="solution.name"
      class="h-52 w-full object-cover md:col-span-2 lg:col-span-1 lg:h-48"
    >
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}>(), {
  eyebrow: undefined,
  description: undefined,
  align: 'left',
  tone: 'dark'
})
</script>

<template>
  <div
    :class="[
      align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl',
      tone === 'light' ? 'text-white' : 'text-ink'
    ]"
  >
    <p
      v-if="eyebrow"
      class="text-sm font-medium leading-tight"
      :class="tone === 'light' ? 'text-brand-orange' : 'text-brand-green'"
    >
      {{ eyebrow }}
    </p>
    <h2 class="mt-1 text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-2 text-base leading-relaxed"
      :class="tone === 'light' ? 'text-white/70' : 'text-black/70'"
    >
      {{ description }}
    </p>
  </div>
</template>

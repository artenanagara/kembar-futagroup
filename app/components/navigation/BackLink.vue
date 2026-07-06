<script setup lang="ts">
withDefaults(defineProps<{
  to: string
  label: string
  tone?: 'dark' | 'light'
}>(), {
  tone: 'dark'
})
</script>

<template>
  <NuxtLink
    :to="to"
    class="inline-flex items-center gap-2 text-sm font-medium leading-tight transition"
    :class="tone === 'light' ? 'text-white/75 hover:text-white' : 'text-black/60 hover:text-ink'"
  >
    <UIcon
      name="i-lucide-arrow-left"
      class="size-4"
    />
    {{ label }}
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  unit: {
    slug: string
    name: string
    category: string
    description: string
    cardImage?: string
  }
}>()
</script>

<template>
  <NuxtLink
    :to="`/unit-bisnis/${unit.slug}`"
    class="group relative flex h-125 overflow-hidden bg-black p-8 text-white transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1"
  >
    <img
      v-if="unit.cardImage"
      :src="unit.cardImage"
      :alt="unit.name"
      class="absolute inset-0 size-full object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105 group-hover:opacity-0"
    >
    <div
      v-if="unit.cardImage"
      class="bg-card-scrim absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:opacity-0"
    />
    <div class="absolute inset-0 bg-black/0 transition-colors duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:bg-black" />

    <div class="relative z-10 flex w-full flex-col justify-between">
      <div class="flex w-full items-center justify-between gap-5">
        <UiBadge
          variant="orange"
          size="lg"
        >
          {{ unit.category }}
        </UiBadge>

        <UIcon
          name="i-lucide-arrow-up-right"
          class="size-6 text-white"
        />
      </div>

      <div class="flex w-full flex-col gap-2">
        <h2 class="text-3xl font-medium leading-tight lg:text-4xl">
          {{ unit.name }}
        </h2>
        <div class="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <p class="min-h-0 translate-y-2 overflow-hidden text-base leading-relaxed text-white/70 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0">
            {{ unit.description }}
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

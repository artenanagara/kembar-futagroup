<script setup lang="ts">
import type { BusinessUnit } from '~/data/business-units'

defineProps<{
  unit: BusinessUnit
}>()
</script>

<template>
  <NuxtLink
    :to="`/unit-bisnis/${unit.slug}`"
    class="group relative flex min-h-105 overflow-hidden bg-black p-6 text-white sm:min-h-115 sm:p-8 lg:min-h-125"
    data-reveal-item
  >
    <img
      :src="unit.image"
      :alt="unit.name"
      class="absolute inset-0 size-full object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:grayscale"
    >
    <div class="bg-card-scrim absolute inset-0" />
    <div class="absolute inset-0 bg-black opacity-0 transition duration-500 ease-out group-hover:opacity-85" />
    <div class="relative z-10 flex w-full flex-col justify-between">
      <div class="flex items-center justify-between gap-4">
        <UiBadge
          variant="orange"
          size="lg"
        >
          {{ unit.category }}
        </UiBadge>
        <UIcon
          name="i-lucide-arrow-up-right"
          class="size-6"
        />
      </div>
      <div class="space-y-3 transition duration-500 ease-out lg:translate-y-18 lg:group-hover:translate-y-0">
        <h3 class="text-3xl font-medium leading-tight transition duration-500 ease-out lg:text-4xl">
          {{ unit.name }}
        </h3>
        <p
          v-if="unit.description"
          class="max-w-sm text-sm leading-relaxed text-white/70 opacity-100 transition duration-500 ease-out sm:text-base lg:translate-y-6 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
        >
          {{ unit.description }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}>(), {
  title: 'Bangun solusi industri bersama kami.',
  description: 'Jelajahi unit usaha, produk, dan solusi yang terhubung dalam ekosistem industri kami.',
  primaryLabel: 'Hubungi Kami',
  primaryTo: '#',
  secondaryLabel: 'Lihat Unit Usaha',
  secondaryTo: '/unit-bisnis'
})
</script>

<template>
  <section
    class="bg-black text-white"
    data-section-reveal
  >
    <div class="mx-auto flex min-h-130 max-w-7xl flex-col items-center justify-center px-5 py-28 text-center sm:px-8 lg:px-25 lg:py-34">
      <div
        class="w-full"
        data-reveal-item
      >
        <h2 class="mx-auto max-w-340 text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl">
          {{ title }}
        </h2>
        <p
          v-if="description"
          class="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          {{ description }}
        </p>

        <div class="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <UiButton
            :to="primaryTo"
            variant="white"
            size="md"
          >
            {{ primaryLabel }}
          </UiButton>
          <UiButton
            v-if="secondaryLabel && secondaryTo"
            :to="secondaryTo"
            variant="white"
            size="md"
          >
            {{ secondaryLabel }}
          </UiButton>
        </div>
      </div>
    </div>
  </section>
</template>

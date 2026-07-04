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
    <div class="mx-auto flex min-h-[520px] max-w-[1817px] flex-col items-center justify-center px-5 py-28 text-center sm:px-8 lg:px-25 lg:py-34">
      <div
        class="w-full"
        data-reveal-item
      >
        <h2 class="mx-auto max-w-[1360px] text-5xl font-normal leading-[1.08] tracking-normal text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
          {{ title }}
        </h2>
        <p
          v-if="description"
          class="mx-auto mt-8 max-w-4xl text-base font-medium leading-relaxed text-white/50 lg:text-xl"
        >
          {{ description }}
        </p>

        <div class="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-6">
          <NuxtLink
            :to="primaryTo"
            class="inline-flex min-h-18 min-w-58 items-center justify-center rounded-full border border-brand-orange px-8 text-base font-medium leading-none text-brand-orange transition duration-300 ease-out hover:bg-brand-orange hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange lg:text-xl"
          >
            {{ primaryLabel }}
          </NuxtLink>
          <NuxtLink
            v-if="secondaryLabel && secondaryTo"
            :to="secondaryTo"
            class="inline-flex min-h-18 min-w-58 items-center justify-center rounded-full border border-white/85 px-8 text-base font-medium leading-none text-white transition duration-300 ease-out hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:text-xl"
          >
            {{ secondaryLabel }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

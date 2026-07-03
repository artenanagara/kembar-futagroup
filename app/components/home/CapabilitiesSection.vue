<script setup lang="ts">
import { capabilities } from '~/data/home'
</script>

<template>
  <section
    class="relative overflow-hidden bg-black text-white"
    data-section-reveal
  >
    <div class="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-25 lg:py-25">
      <div
        class="max-w-6xl"
        data-reveal-item
      >
        <p class="text-sm font-medium leading-tight text-brand-orange">
          Kapabilitas
        </p>
        <h2 class="mt-1 text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
          Kemampuan Terintegrasi Kami
        </h2>
        <p class="mt-2 max-w-3xl text-base leading-relaxed text-white/70">
          Kembar Futago Group menghubungkan pengalaman teknik, proses produksi, dan kontrol kualitas untuk menghadirkan solusi yang sesuai kebutuhan industri, proyek, dan bisnis.
        </p>
      </div>

      <div class="mt-8">
        <article
          v-for="item in capabilities"
          :key="item.number"
          class="group relative grid gap-8 border-b border-white/30 py-8 lg:grid-cols-[60px_1fr] lg:gap-36"
          data-reveal-item
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="pointer-events-none absolute -left-4 top-1/2 z-20 hidden h-56 w-80 -translate-y-1/2 -rotate-2 object-cover opacity-0 shadow-2xl shadow-black/60 transition duration-500 ease-out group-hover:-rotate-5 group-hover:scale-105 group-hover:opacity-100 lg:block"
          >
          <div class="pointer-events-none absolute -left-6 top-1/2 z-10 hidden h-56 w-80 -translate-y-1/2 opacity-0 transition duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-[calc(-50%+12px)] group-hover:rotate-5 group-hover:opacity-100 lg:block" />
          <p class="text-base font-medium leading-tight">
            {{ item.number }}
          </p>
          <div class="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-24">
            <h3 class="text-left text-xl font-medium leading-tight lg:text-right">
              {{ item.title }}
            </h3>
            <div class="space-y-10">
              <p class="text-base leading-relaxed text-white/80">
                {{ item.description }}
              </p>
              <div class="flex flex-wrap gap-4">
                <UiBadge
                  v-for="tag in item.tags"
                  :key="tag"
                  variant="outline-light"
                >
                  {{ tag }}
                </UiBadge>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

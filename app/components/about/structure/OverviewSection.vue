<script setup lang="ts">
import { groupStructureItems } from '~/data/about'
</script>

<template>
  <section
    class="overflow-hidden bg-white"
    data-section-reveal
  >
    <div class="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
      <div
        class="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"
        data-reveal-item
        data-reveal-from="left"
      >
        <div>
          <p class="text-sm font-medium leading-tight text-brand-green">
            Struktur
          </p>
          <h2 class="mt-2 text-4xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl">
            Ekosistem yang saling menguatkan
          </h2>
        </div>
        <p class="max-w-3xl text-base leading-relaxed text-black/70 lg:text-lg">
          Setiap unit usaha memiliki fokus berbeda, namun berjalan dalam satu standar kerja: memahami kebutuhan, merancang solusi, memproduksi dengan presisi, dan menjaga kualitas sampai produk digunakan.
        </p>
      </div>

      <div class="mt-12 grid gap-5 md:grid-cols-2">
        <article
          v-for="item in groupStructureItems"
          :key="item.label"
          class="border border-black/16 p-7"
          data-reveal-item
          data-reveal-from="right"
        >
          <p class="text-sm font-medium leading-tight text-brand-green">
            {{ item.label }}
          </p>
          <h3 class="mt-8 text-2xl font-medium leading-tight text-ink">
            {{ item.title }}
          </h3>
          <p class="mt-5 text-base leading-relaxed text-black/65">
            {{ item.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { valueOwnerPrinciples } from '~/data/about'
</script>

<template>
  <section
    class="overflow-hidden bg-white"
    data-section-reveal
  >
    <div class="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-20 lg:py-25">
      <div
        data-reveal-item
        data-reveal-from="left"
      >
        <p class="text-sm font-medium leading-tight text-brand-green">
          Nilai
        </p>
        <h2 class="mt-1 max-w-2xl text-4xl font-normal leading-[1.25] text-ink sm:text-5xl lg:text-6xl lg:leading-[1.4]">
          Prinsip yang ia wariskan ke grup
        </h2>
      </div>

      <div
        class="space-y-5"
      >
        <article
          v-for="principle in valueOwnerPrinciples"
          :key="principle.title"
          class="border border-black/20 p-6 transition duration-500 ease-out hover:-translate-y-1 hover:border-brand-green"
          data-reveal-item
          data-reveal-from="right"
          data-reveal-distance="44"
        >
          <h3 class="text-lg font-medium leading-relaxed text-ink lg:text-xl">
            {{ principle.title }}
          </h3>
          <p class="mt-6 text-base leading-relaxed text-black/70">
            {{ principle.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

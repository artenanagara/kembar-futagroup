<script setup lang="ts">
import { valueOwnerFounder } from '~/data/about'
</script>

<template>
  <section
    class="overflow-hidden bg-white"
    data-section-reveal
  >
    <div class="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_412px] lg:items-end lg:gap-16 lg:px-20 lg:py-25">
      <div class="space-y-8">
        <div
          class="space-y-2.5"
          data-reveal-item
          data-reveal-from="left"
        >
          <p class="text-sm font-medium leading-tight text-brand-green">
            {{ valueOwnerFounder.eyebrow }}
          </p>
          <h2 class="max-w-3xl text-4xl font-medium leading-tight text-ink sm:text-5xl lg:text-6xl">
            {{ valueOwnerFounder.title }}
          </h2>
        </div>

        <div
          class="h-px origin-left bg-black/20"
          data-reveal-item
          data-reveal-from="scale"
          data-reveal-distance="16"
        />

        <div class="max-w-4xl space-y-6 text-base leading-relaxed text-black/70 lg:text-lg lg:leading-[1.6]">
          <p
            v-for="paragraph in valueOwnerFounder.paragraphs"
            :key="paragraph"
            data-reveal-item
            data-reveal-from="left"
            data-reveal-distance="32"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>

      <div
        class="min-h-[360px] bg-neutral-300 sm:min-h-[480px] lg:h-[549px]"
        aria-hidden="true"
        data-reveal-item
        data-reveal-from="right"
        data-scroll-clip
      />
    </div>
  </section>
</template>

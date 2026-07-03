<script setup lang="ts">
import { aboutIntro } from '~/data/about'
</script>

<template>
  <section
    class="bg-white"
    data-section-reveal
  >
    <div class="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
      <p
        class="text-sm font-medium leading-tight text-brand-green"
        data-reveal-item
      >
        {{ aboutIntro.eyebrow }}
      </p>

      <div
        class="mt-2 space-y-8"
        data-reveal-item
      >
        <h2 class="max-w-4xl text-4xl font-normal leading-[1.12] text-ink sm:text-5xl lg:text-6xl">
          {{ aboutIntro.title }}
        </h2>
        <div class="h-px bg-black/20" />
      </div>

      <div
        class="mt-8 grid gap-8 text-base leading-relaxed text-black/70 lg:grid-cols-2 lg:gap-24"
        data-reveal-item
      >
        <p
          v-for="paragraph in aboutIntro.paragraphs"
          :key="paragraph"
        >
          {{ paragraph }}
        </p>
      </div>

      <div
        class="mt-12 overflow-hidden bg-neutral-200"
        data-reveal-item
      >
        <img
          :src="aboutIntro.media.src"
          :alt="aboutIntro.media.alt"
          class="h-[280px] w-full object-cover grayscale transition duration-900 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.02] hover:grayscale-0 sm:h-[420px] lg:h-[500px]"
        >
      </div>

      <dl
        class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        data-reveal-item
      >
        <div
          v-for="[label, value] in aboutIntro.stats"
          :key="label"
          class="space-y-3"
        >
          <dt class="text-sm leading-tight text-black/45">
            {{ label }}
          </dt>
          <dd class="text-4xl font-medium leading-none text-ink sm:text-5xl">
            {{ value }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

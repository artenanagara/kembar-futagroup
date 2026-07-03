<script setup lang="ts">
import { valueOwnerQuote } from '~/data/about'
</script>

<template>
  <section class="overflow-hidden bg-black text-white">
    <div class="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-20 lg:py-25">
      <p
        class="mx-auto max-w-6xl text-center text-2xl font-normal leading-[1.6] sm:text-3xl lg:text-[32px]"
        data-scroll-scrub-reveal
        data-scroll-from-y="64"
        data-scroll-start="top 82%"
        data-scroll-end="center 70%"
      >
        {{ valueOwnerQuote }}
      </p>
    </div>
  </section>
</template>

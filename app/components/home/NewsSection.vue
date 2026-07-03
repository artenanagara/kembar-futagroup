<script setup lang="ts">
import { posts } from '~/data/home'
</script>

<template>
  <section
    class="bg-white"
    data-section-reveal
  >
    <div class="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-20 lg:py-25">
      <div
        class="mx-auto max-w-4xl text-center"
        data-reveal-item
      >
        <p class="text-sm font-medium leading-tight text-brand-green">
          Berita & Insight
        </p>
        <h2 class="mt-1 text-4xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl">
          Cerita dan Perkembangan Grup
        </h2>
        <p class="mt-2 text-base leading-relaxed text-black/70">
          Kembar Futago Group menghubungkan pengalaman teknik, proses produksi, dan kontrol kualitas untuk menghadirkan solusi yang sesuai kebutuhan industri, proyek, dan bisnis.
        </p>
      </div>

      <div class="mt-8 grid gap-8 md:grid-cols-3">
        <article
          v-for="post in posts"
          :key="post.image"
          class="space-y-4"
          data-reveal-item
        >
          <img
            :src="post.image"
            :alt="post.title"
            class="h-64 w-full object-cover lg:h-[304px]"
          >
          <div class="space-y-2">
            <UiBadge
              variant="outline-dark"
              size="sm"
            >
              Berita
            </UiBadge>
            <h3 class="min-h-11 text-base font-normal leading-snug text-ink">
              {{ post.title }}
            </h3>
          </div>
          <div class="flex items-center gap-4 text-sm leading-relaxed text-black/50">
            <time datetime="2026-06-19">19 Juni 2026</time>
            <span class="size-1.5 rounded-full bg-neutral-300" />
            <span>5 Menit Baca</span>
          </div>
        </article>
      </div>

      <div
        class="mt-8 flex justify-center"
        data-reveal-item
      >
        <UiButton
          to="#"
          variant="secondary"
        >
          Lihat Semua Berita
        </UiButton>
      </div>
    </div>
  </section>
</template>

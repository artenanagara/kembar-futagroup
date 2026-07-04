<script setup lang="ts">
import { productSolutions } from '~/data/product-solutions'

const route = useRoute()
const slug = String(route.params.slug ?? '')
const solution = productSolutions.find(item => item.slug === slug)

if (!solution) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Produk atau solusi tidak ditemukan'
  })
}

const title = `${solution.name} - Kembar Futa Group`
const description = solution.description

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: solution.image,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <section
      class="relative min-h-125 overflow-hidden bg-ink text-white"
      data-section-reveal
    >
      <img
        :src="solution.image"
        :alt="solution.name"
        class="absolute inset-0 size-full object-cover"
      >
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.78)_0%,rgba(0,0,0,.34)_48%,rgba(0,0,0,.72)_100%)]" />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.72)_0%,rgba(0,0,0,.16)_42%,rgba(0,0,0,.56)_100%)]" />

      <LayoutSiteHeader />

      <div class="relative z-10 mx-auto flex min-h-125 max-w-360 items-end px-5 pb-14 pt-28 sm:px-8 lg:px-20">
        <div class="max-w-3xl">
          <p
            class="text-sm font-medium leading-tight text-white/70"
            data-reveal-item
          >
            Beranda / Produk & Solusi
          </p>
          <h1 class="mt-8 text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            <UiRevealText :text="solution.name" />
          </h1>
          <p
            class="mt-5 max-w-2xl text-base leading-relaxed text-white/80"
            data-reveal-item
          >
            {{ solution.description }}
          </p>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto grid max-w-360 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-20 lg:py-25">
        <div data-reveal-item>
          <p class="text-sm font-medium leading-tight text-brand-green">
            {{ solution.category }}
          </p>
          <h2 class="mt-2 text-4xl font-normal leading-tight text-ink sm:text-5xl">
            Detail solusi
          </h2>
        </div>
        <div
          class="space-y-6 text-base leading-relaxed text-black/70 lg:text-lg"
          data-reveal-item
        >
          <p>
            Halaman ini disiapkan sebagai halaman detail berbasis slug untuk {{ solution.name }}. Setiap produk dan solusi dapat dikembangkan dengan konten teknis, spesifikasi, dan studi kasus masing-masing.
          </p>
          <p>
            Struktur slug menjaga navigasi tetap scalable ketika daftar produk dan solusi bertambah.
          </p>
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Lihat produk dan solusi lainnya."
      primary-label="Semua Produk & Solusi"
      primary-to="/produk-solusi"
    />
  </div>
</template>

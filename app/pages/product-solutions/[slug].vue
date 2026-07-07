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

const title = `${solution.name} - Kembar Futagroup`
const description = solution.description

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/og-image.webp',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <SectionsPageHero
      :title="solution.name"
      :description="solution.description"
      :image="solution.image"
      :image-alt="solution.name"
      :breadcrumbs="[
        { label: 'Beranda', to: '/' },
        { label: 'Produk & Solusi', to: '/produk-solusi' }
      ]"
      height-class="h-125"
      overlay="vignette-soft"
    />

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

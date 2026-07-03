<script setup lang="ts">
import { businessUnits } from '~/data/business-units'

const route = useRoute()
const slug = String(route.params.slug ?? '')
const unit = businessUnits.find(item => item.slug === slug)

if (!unit) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Unit bisnis tidak ditemukan'
  })
}

const title = `${unit.name} - Kembar Futa Group`
const description = unit.description

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: unit.image,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <section class="relative min-h-125 overflow-hidden bg-ink text-white">
      <img
        :src="unit.image"
        :alt="unit.name"
        class="absolute inset-0 size-full object-cover"
      >
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.78)_0%,rgba(0,0,0,.34)_48%,rgba(0,0,0,.72)_100%)]" />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.72)_0%,rgba(0,0,0,.16)_42%,rgba(0,0,0,.56)_100%)]" />

      <LayoutSiteHeader />

      <div class="relative z-10 mx-auto flex min-h-125 max-w-360 items-end px-5 pb-14 pt-28 sm:px-8 lg:px-20">
        <div class="max-w-3xl">
          <p class="text-sm font-medium leading-tight text-white/70">
            Beranda / Unit Bisnis
          </p>
          <h1 class="mt-8 text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            {{ unit.name }}
          </h1>
          <p class="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            {{ unit.description }}
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
            {{ unit.category }}
          </p>
          <h2 class="mt-2 text-4xl font-normal leading-tight text-ink sm:text-5xl">
            Fokus unit bisnis
          </h2>
        </div>
        <div
          class="space-y-6 text-base leading-relaxed text-black/70 lg:text-lg"
          data-reveal-item
        >
          <p>
            Halaman ini disiapkan sebagai halaman detail berbasis slug untuk {{ unit.name }}. Konten lengkap dapat dikembangkan per unit tanpa mengubah struktur navigasi.
          </p>
          <p>
            Struktur slug membuat setiap unit bisnis punya URL mandiri, lebih rapi untuk SEO, campaign, dan pembaruan konten berikutnya.
          </p>
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Lihat unit bisnis lainnya."
      primary-label="Semua Unit Bisnis"
      primary-to="/unit-bisnis"
    />
  </div>
</template>

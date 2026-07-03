<script setup lang="ts">
import { productSolutions } from '~/data/product-solutions'

const title = 'Produk & Solusi - Kembar Futa Group'
const description = 'Daftar produk dan solusi Kembar Futago Group untuk kebutuhan manufaktur, proyek, lansekap, dan infrastruktur.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: productSolutions[0]?.image,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <section class="relative min-h-[500px] overflow-hidden bg-ink text-white">
      <img
        :src="productSolutions[0]?.image"
        alt="Produk dan solusi Kembar Futago Group"
        class="absolute inset-0 size-full object-cover"
      >
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.78)_0%,rgba(0,0,0,.34)_48%,rgba(0,0,0,.7)_100%)]" />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.72)_0%,rgba(0,0,0,.16)_42%,rgba(0,0,0,.56)_100%)]" />

      <LayoutSiteHeader />

      <div class="relative z-10 mx-auto flex min-h-[500px] max-w-[1440px] items-end px-5 pb-14 pt-28 sm:px-8 lg:px-20">
        <div class="max-w-3xl">
          <p class="text-sm font-medium leading-tight text-white/70">
            Beranda / Produk & Solusi
          </p>
          <h1 class="mt-8 text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            Produk & Solusi
          </h1>
          <p class="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            Produk dan layanan teknis dari desain, produksi, kontrol kualitas, hingga distribusi.
          </p>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <NuxtLink
            v-for="solution in productSolutions"
            :key="solution.slug"
            :to="`/produk-solusi/${solution.slug}`"
            class="group border border-black/16 p-6 transition duration-500 ease-out hover:-translate-y-1 hover:border-brand-green"
            data-reveal-item
          >
            <img
              :src="solution.image"
              :alt="solution.name"
              class="h-56 w-full object-cover grayscale transition duration-700 ease-out group-hover:grayscale-0"
            >
            <p class="mt-6 text-sm font-medium leading-tight text-brand-green">
              {{ solution.category }}
            </p>
            <h2 class="mt-3 text-2xl font-medium leading-tight text-ink">
              {{ solution.name }}
            </h2>
            <p class="mt-4 text-base leading-relaxed text-black/65">
              {{ solution.description }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Temukan unit bisnis pendukungnya."
      primary-label="Unit Bisnis"
      primary-to="/unit-bisnis"
    />
  </div>
</template>

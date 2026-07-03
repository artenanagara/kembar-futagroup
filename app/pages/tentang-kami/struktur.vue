<script setup lang="ts">
import { aboutStructureHero, groupStructureItems } from '~/data/about'

const title = 'Struktur Grup - Kembar Futa Group'
const description = 'Struktur Kembar Futa Group sebagai ekosistem holding manufaktur, teknik, produk, dan solusi infrastruktur.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=85',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <section class="relative min-h-125 overflow-hidden bg-ink text-white">
      <img
        :src="aboutStructureHero.image"
        :alt="aboutStructureHero.title"
        class="absolute inset-0 size-full object-cover"
      >
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.74)_0%,rgba(0,0,0,.28)_48%,rgba(0,0,0,.68)_100%)]" />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.72)_0%,rgba(0,0,0,.16)_42%,rgba(0,0,0,.56)_100%)]" />

      <LayoutSiteHeader />

      <div class="relative z-10 mx-auto flex min-h-125 max-w-360 items-end px-5 pb-14 pt-28 sm:px-8 lg:px-20">
        <div class="max-w-3xl">
          <nav
            class="mb-8 flex flex-wrap items-center gap-2 text-sm leading-tight text-white/70"
            aria-label="Breadcrumb"
          >
            <template
              v-for="(crumb, index) in aboutStructureHero.breadcrumbs"
              :key="crumb.label"
            >
              <NuxtLink
                v-if="crumb.to"
                :to="crumb.to"
                class="transition hover:text-white"
              >
                {{ crumb.label }}
              </NuxtLink>
              <span
                v-else
                class="text-white/90"
              >
                {{ crumb.label }}
              </span>
              <span
                v-if="index < aboutStructureHero.breadcrumbs.length - 1"
                class="text-white/40"
              >/</span>
            </template>
          </nav>

          <h1 class="text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            {{ aboutStructureHero.title }}
          </h1>
          <p class="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            {{ aboutStructureHero.description }}
          </p>
        </div>
      </div>
    </section>

    <section
      class="overflow-hidden bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
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

    <LayoutSiteFooter
      title="Kenali nilai yang membentuk grup ini."
      primary-label="Value Owner"
      primary-to="/tentang-kami/value-owner"
    />
  </div>
</template>

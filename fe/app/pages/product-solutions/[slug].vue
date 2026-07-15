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
  ogImage: '/images/brand/og-image.webp',
  twitterCard: 'summary_large_image'
})

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: 'Beranda', item: '/' },
      { name: 'Produk & Solusi', item: '/produk-solusi' },
      { name: solution.name }
    ]
  })
])
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
        { label: 'Produk & Solusi', to: '/produk-solusi' },
        { label: solution.name }
      ]"
      height-class="min-h-125"
      overlay="vignette-soft"
    />

    <!-- Overview -->
    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <p
          class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green"
          data-reveal-item
        >
          {{ solution.category }}
        </p>

        <div
          class="mt-5 grid gap-10 lg:grid-cols-2 lg:gap-20"
          data-reveal-item
        >
          <h2 class="text-4xl font-normal leading-tight text-ink sm:text-5xl">
            {{ solution.detail.overview.title }}
          </h2>

          <div class="flex flex-col gap-5 text-base leading-relaxed text-black/70 lg:pt-2 lg:text-lg">
            <p
              v-for="paragraph in solution.detail.overview.paragraphs"
              :key="paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div
          class="mt-12 h-px w-full bg-black/15"
          data-reveal-item
        />
      </div>
    </section>

    <!-- Lingkup Produk -->
    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto grid max-w-360 gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[minmax(280px,.76fr)_minmax(0,1.24fr)] lg:gap-18 lg:px-20 lg:pb-25">
        <div data-reveal-item>
          <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
            Lingkup Produk
          </p>
          <h2 class="mt-2 text-4xl font-normal leading-tight text-ink sm:text-5xl">
            Cakupan {{ solution.name }}
          </h2>
          <p class="mt-6 max-w-md text-base leading-relaxed text-black/70">
            Rangkaian produk dalam lini ini dapat disesuaikan spesifikasinya sesuai kebutuhan proyek maupun retail.
          </p>
        </div>

        <div
          class="grid border-t border-black/14 md:grid-cols-2"
          data-reveal-item
        >
          <article
            v-for="(item, index) in solution.detail.items"
            :key="item.title"
            class="group border-b border-black/14 py-8 md:odd:pr-8 md:even:border-l md:even:border-black/14 md:even:pl-8"
          >
            <div class="flex items-start gap-5">
              <span class="flex size-10 shrink-0 items-center justify-center rounded-full border border-black/18 text-sm font-medium text-brand-green transition duration-300 group-hover:border-brand-green group-hover:bg-brand-green group-hover:text-white">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <div>
                <h3 class="text-xl font-medium leading-tight text-ink">
                  {{ item.title }}
                </h3>
                <p class="mt-3 text-base leading-relaxed text-black/70">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Penggunaan + Unit Pendukung -->
    <section
      class="bg-black text-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <div class="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div data-reveal-item>
            <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
              Penggunaan
            </p>
            <h2 class="mt-2 text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
              Untuk kebutuhan apa saja
            </h2>
            <div class="mt-8 flex flex-wrap gap-3">
              <UiBadge
                v-for="application in solution.detail.applications"
                :key="application"
                variant="outline-light"
              >
                {{ application }}
              </UiBadge>
            </div>
          </div>

          <div data-reveal-item>
            <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
              Unit Pendukung
            </p>
            <h2 class="mt-2 text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
              Dikerjakan oleh unit grup
            </h2>
            <div class="mt-8 flex flex-col divide-y divide-white/18 border-y border-white/18">
              <NuxtLink
                v-for="unit in solution.detail.units"
                :key="unit.slug"
                :to="`/unit-bisnis/${unit.slug}`"
                class="group flex items-center justify-between gap-6 py-5 transition-colors duration-200"
              >
                <span class="text-lg font-medium leading-tight text-white transition-colors duration-200 group-hover:text-brand-green">
                  {{ unit.name }}
                </span>
                <UIcon
                  name="i-lucide-arrow-right"
                  class="size-5 shrink-0 text-white/45 transition duration-200 group-hover:translate-x-1 group-hover:text-brand-green"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Butuh produk ini untuk proyek Anda?"
      primary-label="Hubungi Kami"
      primary-to="/kontak"
      secondary-label="Semua Produk & Solusi"
      secondary-to="/produk-solusi"
    />
  </div>
</template>

<script setup lang="ts">
import { businessUnitPage, businessUnits } from '~/data/business-units'

const title = 'Unit Bisnis - Kembar Futagroup'
const description = 'Daftar unit bisnis Kembar Futagroup di bidang manufaktur, logam, teknik, lansekap, dan solusi industri.'
const activeFilter = ref<(typeof businessUnitPage.filters)[number]['value']>('all')

const filteredUnits = computed(() => {
  if (activeFilter.value === 'all') {
    return businessUnits
  }

  return businessUnits.filter(unit => unit.group === activeFilter.value)
})

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
    itemListElement: businessUnitPage.hero.breadcrumbs.map((label, index) => ({
      name: label,
      item: index === 0 ? '/' : undefined
    }))
  })
])
</script>

<template>
  <div>
    <SectionsPageHero
      :title="businessUnitPage.hero.title"
      :description="businessUnitPage.hero.description"
      :image="businessUnitPage.hero.image"
      image-alt="Unit bisnis Kembar Futagroup"
      :breadcrumbs="businessUnitPage.hero.breadcrumbs.map((crumb, index) => ({ label: crumb, to: index === 0 ? '/' : undefined }))"
      height-class="h-125"
    />

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <!-- Eyebrow -->
        <p
          class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green"
          data-reveal-item
        >
          {{ businessUnitPage.intro.eyebrow }}
        </p>

        <!-- 2-column: title left, paragraphs right -->
        <div
          class="mt-5 grid gap-10 lg:grid-cols-2 lg:gap-20"
          data-reveal-item
        >
          <h2 class="text-4xl font-normal leading-tight text-ink sm:text-5xl">
            {{ businessUnitPage.intro.title }}
          </h2>

          <div class="flex flex-col gap-5 text-base leading-relaxed text-black/70 lg:pt-2">
            <p
              v-for="paragraph in businessUnitPage.intro.paragraphs"
              :key="paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <!-- Separator -->
        <div
          class="mt-12 h-px w-full bg-black/15"
          data-reveal-item
        />

        <!-- Filter + cards grid -->
        <div
          class="mt-12 flex flex-col items-start gap-8"
          data-reveal-item
        >
          <div class="flex flex-wrap items-center gap-4">
            <button
              v-for="filter in businessUnitPage.filters"
              :key="filter.value"
              type="button"
              class="inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-normal leading-[1.2] transition duration-300 ease-out focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-brand-green"
              :class="activeFilter === filter.value ? 'bg-brand-green text-white' : 'border border-black/10 text-black/70 hover:border-brand-green hover:text-brand-green'"
              @click="activeFilter = filter.value"
            >
              {{ filter.label }}
            </button>
          </div>

          <div class="grid w-full gap-8 md:grid-cols-2 xl:grid-cols-3">
            <CardsBusinessUnitCard
              v-for="unit in filteredUnits"
              :key="unit.slug"
              :unit="unit"
            />
          </div>
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Temukan produk dari setiap unit kami"
      primary-label="Lihat Produk & Solusi"
      primary-to="/produk-solusi"
    />
  </div>
</template>

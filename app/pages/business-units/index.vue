<script setup lang="ts">
import { businessUnitPage, businessUnits } from '~/data/business-units'

const title = 'Unit Bisnis - Kembar Futa Group'
const description = 'Daftar unit bisnis Kembar Futa Group di bidang manufaktur, logam, teknik, lansekap, dan solusi industri.'
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
  ogImage: businessUnitPage.hero.image,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <SectionsPageHero
      :title="businessUnitPage.hero.title"
      :description="businessUnitPage.hero.description"
      :image="businessUnitPage.hero.image"
      image-alt="Unit bisnis Kembar Futa Group"
      :breadcrumbs="businessUnitPage.hero.breadcrumbs.map((crumb, index) => ({ label: crumb, to: index === 0 ? '/' : undefined }))"
      height-class="h-125"
      overlay-class="bg-[linear-gradient(180deg,rgba(0,0,0,.8)_0%,rgba(0,0,0,.35)_20%,rgba(0,0,0,.1)_40%,rgba(0,0,0,.2)_100%)]"
    />

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto flex max-w-360 flex-col items-end gap-16 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <div
          class="flex w-full max-w-200 flex-col gap-8"
          data-reveal-item
        >
          <div class="flex flex-col gap-2.5">
            <p class="text-sm font-medium leading-tight text-brand-green">
              {{ businessUnitPage.intro.eyebrow }}
            </p>
            <h2 class="text-4xl font-medium leading-[1.2] text-black sm:text-5xl lg:text-[56px]">
              {{ businessUnitPage.intro.title }}
            </h2>
          </div>

          <div class="h-px w-full bg-black/20" />

          <p class="text-base font-normal leading-[1.6] text-black/70 lg:text-lg">
            {{ businessUnitPage.intro.paragraphs[0] }}<br><br>{{ businessUnitPage.intro.paragraphs[1] }}
          </p>
        </div>

        <div
          class="flex w-full flex-col items-start gap-8"
          data-reveal-item
        >
          <div class="flex flex-wrap items-center gap-4">
            <button
              v-for="filter in businessUnitPage.filters"
              :key="filter.value"
              type="button"
              class="inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-normal leading-[1.2] transition duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
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

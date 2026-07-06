<script setup lang="ts">
import { businessUnits } from '~/data/business-units'
import type { BusinessUnit } from '~/data/business-units'

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
const groupLabels: Record<BusinessUnit['group'], string> = {
  'manufaktur-logam': 'Manufaktur & Logam',
  'mesin-teknik': 'Mesin & Teknik',
  'material-lansekap': 'Material & Lansekap',
  'agribisnis': 'Agribisnis'
}
const unitHighlights = [
  {
    label: 'Kategori',
    value: unit.category
  },
  {
    label: 'Klaster',
    value: groupLabels[unit.group]
  },
  {
    label: 'Lingkup',
    value: `${unit.focus.items.length} area kerja`
  }
]

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
    <SectionsPageHero
      :title="unit.name"
      :description="unit.description"
      :image="unit.image"
      :image-alt="unit.name"
      :breadcrumbs="[
        { label: 'Beranda', to: '/' },
        { label: 'Unit Bisnis', to: '/unit-bisnis' },
        { label: unit.name }
      ]"
      height-class="h-125"
      overlay="vignette-soft"
    />

    <section
      class="relative bg-white"
    >
      <div
        class="sticky top-22.5 z-0 h-[calc(100svh-5.625rem)] overflow-hidden bg-ink"
        data-header-theme="dark"
      >
        <img
          :src="unit.image"
          :alt="`${unit.name} - ${unit.category}`"
          class="size-full object-cover"
        >
        <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.04)_0%,rgba(5,5,5,0)_42%,rgba(5,5,5,.28)_100%)]" />
      </div>

      <section
        class="relative z-10 bg-white text-ink"
        data-header-theme="light"
        data-section-reveal
      >
        <div class="mx-auto grid max-w-360 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(280px,.76fr)_minmax(0,1.24fr)] lg:gap-18 lg:px-20 lg:py-25">
          <div
            class="h-fit lg:sticky lg:top-28"
            data-reveal-item
          >
            <p class="text-sm font-medium leading-tight text-brand-green">
              {{ unit.about.eyebrow }}
            </p>
            <h2 class="mt-2 text-4xl font-medium leading-[1.15] text-ink sm:text-5xl lg:text-heading-lg">
              Tentang Unit
            </h2>

            <div class="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div
                v-for="item in unitHighlights"
                :key="item.label"
                class="border border-black/12 p-5"
              >
                <p class="text-xs font-medium uppercase leading-tight tracking-[0.18em] text-black/45">
                  {{ item.label }}
                </p>
                <p class="mt-3 text-lg font-medium leading-tight text-ink">
                  {{ item.value }}
                </p>
              </div>
            </div>
          </div>

          <div
            class="flex flex-col gap-8"
            data-reveal-item
          >
            <div class="space-y-6 lg:pt-12">
              <h3 class="text-3xl font-medium leading-[1.2] text-ink sm:text-4xl lg:text-5xl">
                {{ unit.about.title }}
              </h3>
              <div class="space-y-5 text-base leading-[1.75] text-black/68 lg:text-lg">
                <p
                  v-for="paragraph in unit.about.paragraphs"
                  :key="paragraph"
                >
                  {{ paragraph }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        class="relative h-[72svh]"
        aria-hidden="true"
      />

      <section
        class="relative z-10 overflow-hidden bg-white text-ink"
        data-header-theme="light"
        data-section-reveal
      >
        <div class="relative mx-auto grid max-w-360 gap-12 px-5 pb-20 pt-24 sm:px-8 lg:grid-cols-[minmax(280px,.76fr)_minmax(0,1.24fr)] lg:gap-18 lg:px-20 lg:pb-28 lg:pt-34">
          <div data-reveal-item>
            <p class="text-sm font-medium leading-tight text-brand-green">
              Fokus Unit
            </p>
            <h2 class="mt-2 text-4xl font-medium leading-[1.15] sm:text-5xl lg:text-heading-lg">
              Fokus/Lingkup Pekerjaan
            </h2>
            <p class="mt-6 max-w-md text-base leading-[1.75] text-black/62">
              {{ unit.focus.description }}
            </p>
          </div>

          <div
            class="flex flex-col gap-8"
            data-reveal-item
          >
            <h3 class="text-2xl font-medium leading-[1.25] text-ink sm:text-3xl lg:text-4xl">
              {{ unit.focus.title }}
            </h3>

            <div class="grid border-t border-black/14 md:grid-cols-2">
              <article
                v-for="(item, index) in unit.focus.items"
                :key="item.title"
                class="group border-b border-black/14 py-8 md:odd:pr-8 md:even:border-l md:even:border-black/14 md:even:pl-8"
              >
                <div class="flex items-start gap-5">
                  <span class="flex size-10 shrink-0 items-center justify-center rounded-full border border-black/18 text-sm font-medium text-brand-green transition duration-300 group-hover:border-brand-green group-hover:bg-brand-green group-hover:text-white">
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                  <div>
                    <h4 class="text-xl font-medium leading-tight text-ink">
                      {{ item.title }}
                    </h4>
                    <p class="mt-3 text-base leading-[1.7] text-black/62">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </section>

    <LayoutSiteFooter
      title="Lihat unit bisnis lainnya."
      primary-label="Semua Unit Bisnis"
      primary-to="/unit-bisnis"
    />
  </div>
</template>

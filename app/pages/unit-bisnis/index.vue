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
    <section class="relative h-125 overflow-hidden bg-ink text-white">
      <img
        :src="businessUnitPage.hero.image"
        alt="Unit bisnis Kembar Futa Group"
        class="absolute inset-0 size-full object-cover"
      >
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.8)_0%,rgba(0,0,0,.35)_20%,rgba(0,0,0,.1)_40%,rgba(0,0,0,.2)_100%)]" />

      <LayoutSiteHeader />

      <div class="relative z-10 mx-auto flex h-full max-w-360 flex-col items-start justify-end gap-8 px-5 pb-12 pt-28 sm:px-8 lg:px-20">
        <p class="text-sm font-medium leading-[1.2] text-white">
          {{ businessUnitPage.hero.breadcrumbs[0] }} / {{ businessUnitPage.hero.breadcrumbs[1] }}
        </p>

        <h1 class="text-5xl font-medium leading-[1.2]">
          {{ businessUnitPage.hero.title }}
        </h1>

        <p class="max-w-160 text-sm font-normal leading-[1.6] text-white">
          {{ businessUnitPage.hero.description }}
        </p>
      </div>
    </section>

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
            <NuxtLink
              v-for="unit in filteredUnits"
              :key="unit.slug"
              :to="`/unit-bisnis/${unit.slug}`"
              class="group relative flex h-125 overflow-hidden bg-black p-8 text-white transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1"
            >
              <img
                v-if="unit.cardImage"
                :src="unit.cardImage"
                :alt="unit.name"
                class="absolute inset-0 size-full object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105 group-hover:opacity-0"
              >
              <div
                v-if="unit.cardImage"
                class="absolute inset-0 bg-[linear-gradient(180deg,rgba(102,102,102,0)_0%,rgba(0,0,0,.7)_100%)] transition-opacity duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:opacity-0"
              />
              <div class="absolute inset-0 bg-black/0 transition-colors duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:bg-black" />

              <div class="relative z-10 flex w-full flex-col justify-between">
                <div class="flex w-full items-center justify-between gap-5">
                  <UiBadge
                    variant="orange"
                    size="lg"
                  >
                    {{ unit.category }}
                  </UiBadge>

                  <UIcon
                    name="i-lucide-arrow-up-right"
                    class="size-6 text-white"
                  />
                </div>

                <div class="flex w-full flex-col gap-2">
                  <h2 class="text-4xl font-medium leading-[1.2]">
                    {{ unit.name }}
                  </h2>
                  <div class="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:grid-rows-[1fr] group-hover:opacity-100">
                    <p class="min-h-0 translate-y-2 overflow-hidden text-base font-medium leading-[1.6] text-white/70 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0">
                      {{ unit.description }}
                    </p>
                  </div>
                </div>
              </div>
            </NuxtLink>
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

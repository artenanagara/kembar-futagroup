<script setup lang="ts">
import { productSolutionPage, productSolutions } from '~/data/product-solutions'

const title = 'Produk & Solusi - Kembar Futa Group'
const description = 'Daftar produk dan solusi Kembar Futa Group untuk kebutuhan manufaktur, proyek, lansekap, dan infrastruktur.'
const activeIndustryIndex = ref(0)

const activeIndustry = computed(() => productSolutionPage.industries[activeIndustryIndex.value] ?? productSolutionPage.industries[0])

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: productSolutionPage.hero.image,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <section
      class="relative h-125 overflow-hidden bg-ink text-white"
      data-section-reveal
    >
      <img
        :src="productSolutionPage.hero.image"
        alt="Produk dan solusi Kembar Futa Group"
        class="absolute inset-0 size-full object-cover"
      >
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.8)_0%,rgba(0,0,0,.38)_20%,rgba(0,0,0,.12)_40%,rgba(0,0,0,.42)_100%)]" />

      <LayoutSiteHeader />

      <div class="relative z-10 mx-auto flex h-full max-w-360 flex-col items-start justify-end gap-8 px-5 pb-12 pt-28 sm:px-8 lg:px-20">
        <p
          class="text-sm font-medium leading-[1.2] text-white"
          data-reveal-item
        >
          {{ productSolutionPage.hero.breadcrumbs[0] }} / {{ productSolutionPage.hero.breadcrumbs[1] }}
        </p>

        <h1 class="text-5xl font-medium leading-[1.2]">
          <UiRevealText :text="productSolutionPage.hero.title" />
        </h1>

        <p
          class="max-w-160 text-sm font-normal leading-[1.6] text-white"
          data-reveal-item
        >
          {{ productSolutionPage.hero.description }}
        </p>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div
        class="mx-auto grid max-w-360 gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.33fr_.67fr] lg:px-20 lg:py-35"
        data-reveal-item
      >
        <p class="text-sm font-medium leading-[1.2] tracking-[0.04em] text-brand-green">
          {{ productSolutionPage.focus.eyebrow }}
        </p>

        <div
          class="max-w-5xl"
        >
          <h2 class="text-4xl font-medium leading-tight text-black/78 sm:text-4xl ">
            {{ productSolutionPage.focus.title }}
          </h2>
          <div class="mt-10 grid gap-8 text-base font-medium leading-relaxed text-black/72 md:grid-cols-2 lg:max-w-4xl">
            <p
              v-for="paragraph in productSolutionPage.focus.paragraphs"
              :key="paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div
        class="relative h-107.5 overflow-hidden lg:h-130"
        data-reveal-item
      >
        <img
          :src="productSolutionPage.capabilityBand.image"
          alt="Kapabilitas produk dan solusi Kembar Futa Group"
          class="absolute inset-0 size-full object-cover"
        >
        <div class="absolute inset-0 bg-black/55" />
        <div class="relative z-10 grid h-full grid-cols-1 content-center gap-8 px-5 text-white sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-20">
          <p
            v-for="label in productSolutionPage.capabilityBand.labels"
            :key="label"
            class="text-sm font-medium uppercase leading-[1.2] tracking-[0.06em] text-white/90 lg:text-base"
          >
            + {{ label }}
          </p>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <h2
          class="text-5xl font-medium leading-[1.12] text-black/80 sm:text-6xl"
          data-reveal-item
        >
          Produk & Solusi
        </h2>

        <div class="mt-10">
          <NuxtLink
            v-for="(solution, index) in productSolutions"
            :key="solution.slug"
            :to="`/produk-solusi/${solution.slug}`"
            class="sticky top-0 grid min-h-110 gap-6 border-t border-black/20 bg-white py-8 last:border-b md:min-h-80 md:grid-cols-[120px_1fr] lg:min-h-75 lg:grid-cols-[180px_1.1fr_1.45fr_452px] lg:items-start"
            :style="{ zIndex: index + 1 }"
          >
            <p class="font-mono text-base leading-[1.2] text-black/80">
              [{{ String(index + 1).padStart(2, '0') }}]
            </p>

            <h3 class="text-xl font-medium leading-[1.15] text-black/78">
              {{ solution.name }}
            </h3>

            <p class="max-w-xl text-base font-medium leading-[1.35] text-black/72">
              {{ solution.description }}
            </p>

            <img
              :src="solution.cardImage ?? solution.image"
              :alt="solution.name"
              class="h-52 w-full object-cover md:col-span-2 lg:col-span-1 lg:h-48"
            >
          </NuxtLink>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 pb-20 sm:px-8 lg:px-20 lg:pb-25">
        <p
          class="text-2xl font-medium leading-[1.2] text-black/80"
          data-reveal-item
        >
          (Area yang Kami Dukung)
        </p>

        <div
          class="mt-10 grid gap-12 lg:grid-cols-[.95fr_.9fr] lg:items-center"
          data-reveal-item
        >
          <img
            :src="activeIndustry.image"
            :alt="activeIndustry.name"
            class="aspect-[1.08/1] w-full rounded-lg object-cover"
          >

          <div class="flex flex-col gap-4">
            <button
              v-for="(industry, index) in productSolutionPage.industries"
              :key="industry.name"
              type="button"
              class="w-full text-left text-3xl font-medium leading-[1.18] transition duration-300 ease-out sm:text-4xl"
              :class="activeIndustryIndex === index ? 'text-black' : 'text-black/22 hover:text-black/55'"
              @click="activeIndustryIndex = index"
              @mouseenter="activeIndustryIndex = index"
            >
              {{ industry.name }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Temukan unit bisnis pendukungnya"
      primary-label="Lihat Unit Bisnis"
      primary-to="/unit-bisnis"
    />
  </div>
</template>

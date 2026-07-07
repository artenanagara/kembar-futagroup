<script setup lang="ts">
import { productSolutionPage, productSolutions } from '~/data/product-solutions'

const title = 'Produk & Solusi - Kembar Futagroup'
const description = 'Daftar produk dan solusi Kembar Futagroup untuk kebutuhan manufaktur, proyek, lansekap, dan infrastruktur.'
const activeIndustryIndex = ref(0)

const activeIndustry = computed(() => productSolutionPage.industries[activeIndustryIndex.value] ?? productSolutionPage.industries[0])

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
      :title="productSolutionPage.hero.title"
      :description="productSolutionPage.hero.description"
      :image="productSolutionPage.hero.image"
      image-alt="Produk dan solusi Kembar Futagroup"
      :breadcrumbs="productSolutionPage.hero.breadcrumbs.map((crumb, index) => ({ label: crumb, to: index === 0 ? '/' : undefined }))"
      height-class="h-125"
    />

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
          alt="Kapabilitas produk dan solusi Kembar Futagroup"
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
          <CardsProductSolutionCard
            v-for="(solution, index) in productSolutions"
            :key="solution.slug"
            :solution="solution"
            :index="index"
          />
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

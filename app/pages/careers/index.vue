<script setup lang="ts">
import { careerAreas, careersHero, careersIntro, careersJobsSection, jobListings, workCulture, workEnvironment } from '~/data/careers'

const title = 'Karir - Kembar Futagroup'
const description = careersHero.description

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
    itemListElement: careersHero.breadcrumbs.map((label, index) => ({
      name: label,
      item: index === 0 ? '/' : undefined
    }))
  })
])

const openArea = ref(0)
</script>

<template>
  <div>
    <SectionsPageHero
      :title="careersHero.title"
      :description="careersHero.description"
      :image="careersHero.image"
      :image-alt="careersHero.title"
      :breadcrumbs="careersHero.breadcrumbs.map((crumb, index) => ({ label: crumb, to: index === 0 ? '/' : undefined }))"
      height-class="h-125"
      overlay="vignette-soft"
    />

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <p
          class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green"
          data-reveal-item
        >
          {{ careersIntro.eyebrow }}
        </p>

        <div
          class="mt-2 space-y-8"
          data-reveal-item
        >
          <h2 class="max-w-4xl text-4xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl">
            {{ careersIntro.title }}
          </h2>
          <div class="h-px bg-black/20" />
        </div>

        <div
          class="mt-8 grid gap-8 text-base leading-relaxed text-black/70 lg:grid-cols-2 lg:gap-24"
          data-reveal-item
        >
          <p
            v-for="paragraph in careersIntro.paragraphs"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div
        class="overflow-hidden bg-neutral-200"
        data-reveal-item
      >
        <img
          :src="careersIntro.image.src"
          :alt="careersIntro.image.alt"
          class="h-70 w-full object-cover grayscale transition duration-900 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.02] hover:grayscale-0 sm:h-105 lg:h-150"
        >
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <p
          class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green"
          data-reveal-item
        >
          {{ careersJobsSection.eyebrow }}
        </p>
        <h2
          class="mt-2 max-w-2xl text-4xl font-normal leading-tight text-ink sm:text-5xl"
          data-reveal-item
        >
          {{ careersJobsSection.title }}
        </h2>

        <div
          class="mt-12 divide-y divide-black/10 border-y border-black/10"
          data-reveal-item
        >
          <NuxtLink
            v-for="job in jobListings"
            :key="job.slug"
            :to="`/karir/${job.slug}`"
            class="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-3 px-2 py-7 transition-colors duration-200 hover:bg-neutral-50 sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:px-4"
          >
            <h3 class="text-lg font-medium leading-tight text-ink transition-colors duration-200 group-hover:text-brand-green sm:text-xl">
              {{ job.title }}
            </h3>

            <div class="order-3 sm:order-none sm:justify-self-center">
              <UiBadge
                variant="outline-dark"
                size="sm"
              >
                {{ job.type }}
              </UiBadge>
            </div>

            <span class="order-4 inline-flex items-center gap-2 text-sm leading-tight text-black/65 sm:order-none sm:justify-self-center">
              <UIcon
                name="i-lucide-map-pin"
                class="size-4 shrink-0 text-black/45"
              />
              {{ job.city }}
            </span>

            <UIcon
              name="i-lucide-arrow-right"
              class="size-6 shrink-0 justify-self-end text-black/45 transition duration-200 group-hover:translate-x-1 group-hover:text-brand-green"
            />
          </NuxtLink>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <p
          class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green"
          data-reveal-item
        >
          {{ workCulture.eyebrow }}
        </p>
        <h2
          class="mt-2 max-w-3xl text-4xl font-normal leading-tight text-ink sm:text-5xl"
          data-reveal-item
        >
          {{ workCulture.title }}
        </h2>

        <div class="mt-12 grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="value in workCulture.values"
            :key="value.title"
            class="border-l border-black/15 pl-6 transition-colors duration-500 ease-out hover:border-brand-green"
            data-reveal-item
          >
            <h3 class="text-base font-medium leading-tight text-ink">
              {{ value.title }}
            </h3>
            <p class="mt-4 text-sm leading-relaxed text-black/65">
              {{ value.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="bg-black text-white"
      data-section-reveal
    >
      <div class="mx-auto grid max-w-360 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-20 lg:py-25">
        <div data-reveal-item>
          <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
            {{ careerAreas.eyebrow }}
          </p>
          <h2 class="mt-2 max-w-xl text-4xl font-normal leading-tight sm:text-5xl">
            {{ careerAreas.title }}
          </h2>
          <p class="mt-6 max-w-md text-base leading-relaxed text-white/70">
            {{ careerAreas.description }}
          </p>
        </div>

        <div
          class="divide-y divide-white/20 border-y border-white/20"
          data-reveal-item
        >
          <div
            v-for="(area, index) in careerAreas.items"
            :key="area.title"
          >
            <button
              type="button"
              class="flex w-full items-center justify-between gap-6 py-6 text-left"
              :aria-expanded="openArea === index"
              @click="openArea = openArea === index ? -1 : index"
            >
              <h3
                class="text-base font-medium leading-tight transition-colors duration-200"
                :class="openArea === index ? 'text-white' : 'text-white/80 hover:text-white'"
              >
                {{ area.title }}
              </h3>
              <UIcon
                :name="openArea === index ? 'i-lucide-minus' : 'i-lucide-plus'"
                class="size-5 shrink-0 text-white/45"
              />
            </button>
            <p
              v-if="openArea === index"
              class="pb-6 text-sm leading-relaxed text-white/70"
            >
              {{ area.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto grid max-w-360 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-20 lg:py-25">
        <div data-reveal-item>
          <h2 class="text-4xl font-normal leading-tight text-ink sm:text-5xl">
            {{ workEnvironment.title }}
          </h2>
          <p class="mt-6 max-w-md text-base leading-relaxed text-black/70">
            {{ workEnvironment.description }}
          </p>
        </div>

        <div
          class="grid gap-5 sm:grid-cols-2"
          data-reveal-item
        >
          <div
            class="aspect-4/5 bg-neutral-200"
            aria-hidden="true"
          />
          <div
            class="aspect-4/5 bg-neutral-200"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Siap mengambil peran bersama kami?"
      description=""
      primary-label="Hubungi Kami"
      primary-to="/kontak"
      secondary-label="Lihat Produk Lainnya"
      secondary-to="/produk-solusi"
    />
  </div>
</template>

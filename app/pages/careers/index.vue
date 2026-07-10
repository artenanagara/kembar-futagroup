<script setup lang="ts">
import { careerBenefits, careersHero, careersIntro, careersListImage, jobListings } from '~/data/careers'

const title = 'Karir - Kembar Futagroup'
const description = careersHero.description

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/og-image.webp',
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

        <div
          class="mt-12 overflow-hidden bg-neutral-200"
          data-reveal-item
        >
          <img
            :src="careersIntro.image.src"
            :alt="careersIntro.image.alt"
            class="h-70 w-full object-cover grayscale transition duration-900 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.02] hover:grayscale-0 sm:h-105 lg:h-125"
          >
        </div>
      </div>
    </section>

    <section
      class="bg-black text-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <div
          class="grid gap-5 sm:grid-cols-3"
          data-reveal-item
        >
          <article
            v-for="benefit in careerBenefits"
            :key="benefit.number"
            class="border border-white/20 p-7 transition duration-500 ease-out hover:border-brand-green"
          >
            <p class="text-sm font-medium leading-tight text-white/45">
              {{ benefit.number }}
            </p>
            <h3 class="mt-6 text-xl font-medium leading-tight text-white">
              {{ benefit.title }}
            </h3>
            <p class="mt-4 text-sm leading-relaxed text-white/70">
              {{ benefit.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto grid max-w-360 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-20 lg:py-25">
        <div
          class="relative min-h-90 overflow-hidden lg:sticky lg:top-28 lg:h-150"
          data-reveal-item
        >
          <img
            :src="careersListImage.src"
            :alt="careersListImage.alt"
            class="absolute inset-0 size-full object-cover grayscale"
          >
        </div>

        <div data-reveal-item>
          <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
            Bergabung Sekarang
          </p>
          <h2 class="mt-2 text-4xl font-normal leading-tight text-ink sm:text-5xl">
            Karir yang Tersedia
          </h2>

          <div class="mt-10 divide-y divide-black/10 border-t border-black/10">
            <NuxtLink
              v-for="(job, index) in jobListings"
              :key="job.slug"
              :to="`/karir/${job.slug}`"
              class="group flex items-center justify-between gap-6 py-6"
            >
              <div class="flex items-center gap-6">
                <span class="font-mono text-sm text-black/45">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <div>
                  <h3 class="text-xl font-medium leading-tight text-ink transition-colors duration-200 group-hover:text-brand-green sm:text-2xl">
                    {{ job.title }}
                  </h3>
                  <div class="mt-2 flex flex-wrap items-center gap-3">
                    <span class="text-sm leading-tight text-black/65">
                      {{ job.city }}
                    </span>
                    <UiBadge
                      variant="outline-dark"
                      size="sm"
                    >
                      {{ job.type }}
                    </UiBadge>
                  </div>
                </div>
              </div>

              <UIcon
                name="i-lucide-arrow-up-right"
                class="size-6 shrink-0 text-black/45 transition-colors duration-200 group-hover:text-brand-green"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Tidak menemukan posisi yang cocok?"
      primary-label="Hubungi Kami"
      primary-to="#"
    />
  </div>
</template>

<script setup lang="ts">
import { sustainabilityCommitments, sustainabilityHero, sustainabilityIntro, sustainabilityPillars } from '~/data/sustainability'

const title = 'Keberlanjutan - Kembar Futagroup'
const description = sustainabilityHero.description

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
    itemListElement: sustainabilityHero.breadcrumbs.map((label, index) => ({
      name: label,
      item: index === 0 ? '/' : undefined
    }))
  })
])
</script>

<template>
  <div>
    <SectionsPageHero
      :title="sustainabilityHero.title"
      :description="sustainabilityHero.description"
      :image="sustainabilityHero.image"
      :image-alt="sustainabilityHero.title"
      :breadcrumbs="sustainabilityHero.breadcrumbs.map((crumb, index) => ({ label: crumb, to: index === 0 ? '/' : undefined }))"
      height-class="h-125"
      overlay="vignette-side"
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
          {{ sustainabilityIntro.eyebrow }}
        </p>
        <div
          class="mt-2 space-y-8"
          data-reveal-item
        >
          <h2 class="max-w-4xl text-4xl font-normal leading-tight text-ink sm:text-5xl">
            {{ sustainabilityIntro.title }}
          </h2>
          <div class="h-px bg-black/20" />
        </div>
        <div
          class="mt-8 grid gap-8 text-base leading-relaxed text-black/70 lg:grid-cols-2 lg:gap-24"
          data-reveal-item
        >
          <p
            v-for="paragraph in sustainabilityIntro.paragraphs"
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
      <div class="mx-auto max-w-360 px-5 pb-20 sm:px-8 lg:px-20 lg:pb-25">
        <div
          class="grid gap-8 lg:grid-cols-2 lg:gap-16"
          data-reveal-item
        >
          <div>
            <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
              {{ sustainabilityPillars.eyebrow }}
            </p>
            <h2 class="mt-2 max-w-xl text-4xl font-normal leading-tight text-ink sm:text-5xl">
              {{ sustainabilityPillars.title }}
            </h2>
          </div>
          <p class="max-w-xl text-base leading-relaxed text-black/70 lg:pt-3">
            {{ sustainabilityPillars.description }}
          </p>
        </div>

        <div class="mt-12 grid gap-5 md:grid-cols-3">
          <article
            v-for="item in sustainabilityPillars.items"
            :key="item.title"
            class="group border border-black/16 p-8 transition duration-500 ease-out hover:-translate-y-1 hover:border-brand-green"
            data-reveal-item
          >
            <div class="flex size-11 items-center justify-center bg-neutral-200 text-black/45 transition duration-500 ease-out group-hover:bg-brand-green group-hover:text-white">
              <UIcon
                :name="item.icon"
                class="size-6"
              />
            </div>
            <h3 class="mt-8 text-xl font-medium leading-tight text-ink">
              {{ item.title }}
            </h3>
            <p class="mt-4 text-base leading-relaxed text-black/65">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="bg-black text-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <p
          class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green"
          data-reveal-item
        >
          {{ sustainabilityCommitments.eyebrow }}
        </p>
        <h2
          class="mt-2 max-w-2xl text-4xl font-normal leading-tight sm:text-5xl"
          data-reveal-item
        >
          {{ sustainabilityCommitments.title }}
        </h2>

        <div
          class="mt-12 divide-y divide-white/12 border-t border-white/12"
          data-reveal-item
        >
          <div
            v-for="(item, index) in sustainabilityCommitments.items"
            :key="item.title"
            class="flex flex-col gap-3 py-8 sm:flex-row sm:items-baseline sm:gap-10"
          >
            <span class="font-mono text-sm text-white/45 sm:w-12 sm:shrink-0">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <h3 class="text-xl font-medium leading-tight text-white sm:w-72 sm:shrink-0 sm:text-2xl">
              {{ item.title }}
            </h3>
            <p class="text-base leading-relaxed text-white/70">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Bertumbuh dengan cara yang bertanggung jawab."
      primary-label="Hubungi Kami"
      primary-to="/kontak"
      secondary-label="Kegiatan CSR"
      secondary-to="/kegiatan-csr"
    />
  </div>
</template>

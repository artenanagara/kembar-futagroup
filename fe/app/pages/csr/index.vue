<script setup lang="ts">
import { csrFoundation, csrHero, csrIntro, csrPillars } from '~/data/csr'

const title = 'Kegiatan CSR - Kembar Futagroup'
const description = csrHero.description

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
    itemListElement: csrHero.breadcrumbs.map((label, index) => ({
      name: label,
      item: index === 0 ? '/' : undefined
    }))
  })
])
</script>

<template>
  <div>
    <SectionsPageHero
      :title="csrHero.title"
      :description="csrHero.description"
      :image="csrHero.image"
      :image-alt="csrHero.title"
      :breadcrumbs="csrHero.breadcrumbs.map((crumb, index) => ({ label: crumb, to: index === 0 ? '/' : undefined }))"
      height-class="min-h-125"
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
          {{ csrIntro.eyebrow }}
        </p>
        <div
          class="mt-2 space-y-8"
          data-reveal-item
        >
          <h2 class="max-w-4xl text-4xl font-normal leading-tight text-ink sm:text-5xl">
            {{ csrIntro.title }}
          </h2>
          <div class="h-px bg-black/20" />
        </div>
        <div
          class="mt-8 grid gap-8 text-base leading-relaxed text-black/70 lg:grid-cols-2 lg:gap-24"
          data-reveal-item
        >
          <p
            v-for="paragraph in csrIntro.paragraphs"
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
              {{ csrPillars.eyebrow }}
            </p>
            <h2 class="mt-2 max-w-xl text-4xl font-normal leading-tight text-ink sm:text-5xl">
              {{ csrPillars.title }}
            </h2>
          </div>
          <p class="max-w-xl text-base leading-relaxed text-black/70 lg:pt-3">
            {{ csrPillars.description }}
          </p>
        </div>

        <div class="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="item in csrPillars.items"
            :key="item.title"
            class="group border border-black/16 p-7 transition duration-500 ease-out hover:-translate-y-1 hover:border-brand-green"
            data-reveal-item
          >
            <div class="flex items-baseline gap-2">
              <span class="text-5xl font-medium leading-none text-brand-green">{{ item.count }}</span>
              <span class="text-sm text-black/45">{{ item.unit }}</span>
            </div>
            <h3 class="mt-6 text-lg font-medium leading-tight text-ink">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-black/65">
              {{ item.description }}
            </p>
          </article>
        </div>
        <p
          class="mt-6 text-sm leading-relaxed text-black/45"
          data-reveal-item
        >
          Data kegiatan terdaftar di Forum CSR Kabupaten Klaten, periode 2023–2024.
        </p>
      </div>
    </section>

    <section class="relative isolate bg-black">
      <div
        class="sticky top-0 z-0 h-svh overflow-hidden bg-ink"
        data-header-theme="dark"
      >
        <img
          :src="csrHero.image"
          alt="Kegiatan sosial CSR Kembar Futagroup bersama masyarakat"
          class="size-full object-cover"
        >
        <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.08)_0%,rgba(0,0,0,.04)_42%,rgba(0,0,0,.38)_100%)]" />
      </div>

      <section
        class="relative z-10 mt-[-100svh] min-h-svh bg-black text-white"
        data-header-theme="dark"
        data-section-reveal
      >
        <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
          <div class="max-w-3xl">
            <p
              class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green"
              data-reveal-item
            >
              {{ csrFoundation.eyebrow }}
            </p>
            <h2
              class="mt-4 text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl"
              data-reveal-item
            >
              {{ csrFoundation.title }}
            </h2>
          </div>

          <div
            class="mt-10 grid gap-6 text-base leading-relaxed text-white/70 lg:grid-cols-2 lg:gap-16"
            data-reveal-item
          >
            <p
              v-for="paragraph in csrFoundation.paragraphs"
              :key="paragraph"
            >
              {{ paragraph }}
            </p>
          </div>

          <div class="mt-10 grid gap-5 sm:grid-cols-3">
            <article
              v-for="item in csrFoundation.commitments"
              :key="item.title"
              class="border border-white/24 p-6 transition duration-500 ease-out hover:border-brand-green hover:bg-white/4"
              data-reveal-item
            >
              <h3 class="text-base font-medium leading-tight text-white">
                {{ item.title }}
              </h3>
              <p class="mt-5 text-sm leading-relaxed text-white/70">
                {{ item.description }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <div
        class="relative z-0 h-[72svh]"
        aria-hidden="true"
      />

      <div class="relative z-10 -mt-px">
        <LayoutSiteFooter
          title="Tumbuh bersama, bermanfaat bersama."
          primary-label="Hubungi Kami"
          primary-to="/kontak"
          secondary-label="Tentang Kami"
          secondary-to="/tentang-kami/profil"
        />
      </div>
    </section>
  </div>
</template>

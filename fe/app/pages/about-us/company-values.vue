<script setup lang="ts">
import { companyValuesBehavior, companyValuesFoundation, companyValuesHero, companyValuesOperational, companyValuesPillars } from '~/data/about'

const title = 'Tata Nilai Perusahaan - Kembar Futagroup'
const description = 'Tata nilai CREATIVE+ yang menjadi pedoman kerja, pelayanan, dan sinergi seluruh unit usaha Kembar Futagroup.'

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
    itemListElement: companyValuesHero.breadcrumbs.map(crumb => ({
      name: crumb.label,
      item: crumb.to
    }))
  })
])

const activeBehaviorIndex = ref(0)
</script>

<template>
  <div>
    <section
      class="relative min-h-125 overflow-hidden bg-ink text-white"
      data-section-reveal
    >
      <img
        :src="companyValuesHero.image"
        :alt="companyValuesHero.title"
        class="absolute inset-0 size-full object-cover"
      >
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.74)_0%,rgba(0,0,0,.28)_48%,rgba(0,0,0,.68)_100%)]" />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.72)_0%,rgba(0,0,0,.16)_42%,rgba(0,0,0,.56)_100%)]" />

      <LayoutSiteHeader />

      <div class="relative z-10 mx-auto flex min-h-125 max-w-360 items-end px-5 pb-14 pt-28 sm:px-8 lg:px-20">
        <div class="max-w-3xl">
          <nav
            class="mb-8 flex flex-wrap items-center gap-2 text-sm leading-tight text-white/70"
            aria-label="Breadcrumb"
            data-reveal-item
          >
            <template
              v-for="(crumb, index) in companyValuesHero.breadcrumbs"
              :key="crumb.label"
            >
              <NuxtLink
                v-if="crumb.to"
                :to="crumb.to"
                class="transition hover:text-white"
              >
                {{ crumb.label }}
              </NuxtLink>
              <span
                v-else
                class="text-white/90"
              >
                {{ crumb.label }}
              </span>
              <span
                v-if="index < companyValuesHero.breadcrumbs.length - 1"
                class="text-white/40"
              >/</span>
            </template>
          </nav>

          <h1 class="text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            <UiRevealText :text="companyValuesHero.title" />
          </h1>
          <p
            class="mt-5 max-w-2xl text-base leading-relaxed text-white/80"
            data-reveal-item
          >
            {{ companyValuesHero.description }}
          </p>
        </div>
      </div>
    </section>

    <section
      class="overflow-hidden bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <div
          class="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"
          data-reveal-item
        >
          <div>
            <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
              {{ companyValuesFoundation.eyebrow }}
            </p>
            <h2 class="mt-2 max-w-md text-4xl font-normal leading-tight text-ink sm:text-5xl">
              {{ companyValuesFoundation.title }}
            </h2>
          </div>

          <div class="max-w-2xl space-y-5 text-base leading-relaxed text-black/70">
            <p
              v-for="paragraph in companyValuesFoundation.paragraphs"
              :key="paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div
          class="mt-14 grid gap-8 divide-y divide-black/12 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          data-reveal-item
        >
          <div
            v-for="commitment in companyValuesFoundation.commitments"
            :key="commitment.title"
            class="pt-6 first:pt-0 sm:pl-8 sm:pt-0 sm:first:pl-0"
          >
            <p class="text-sm font-medium leading-tight text-brand-orange">
              {{ commitment.title }}
            </p>
            <p class="mt-3 text-sm leading-relaxed text-black/65">
              {{ commitment.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="overflow-hidden bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 text-center sm:px-8 lg:px-20 lg:py-25">
        <p
          class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green"
          data-reveal-item
        >
          {{ companyValuesPillars.eyebrow }}
        </p>
        <h2
          class="mx-auto mt-2 max-w-3xl text-4xl font-normal leading-tight text-ink sm:text-5xl"
          data-reveal-item
        >
          {{ companyValuesPillars.title }}
        </h2>
        <p
          class="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/70"
          data-reveal-item
        >
          {{ companyValuesPillars.description }}
        </p>

        <div class="mt-16 grid gap-10 text-left sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-14">
          <div
            v-for="(pillar, index) in companyValuesPillars.items"
            :key="pillar.title"
            data-reveal-item
          >
            <p class="text-sm font-semibold leading-none text-brand-orange">
              {{ String(index + 1).padStart(2, '0') }}
            </p>
            <h3 class="mt-4 text-base font-medium leading-tight text-ink">
              {{ pillar.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-black/65">
              {{ pillar.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="overflow-hidden bg-black text-white"
      data-section-reveal
    >
      <div class="mx-auto grid max-w-360 gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-20 lg:py-25">
        <div data-reveal-item>
          <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
            {{ companyValuesBehavior.eyebrow }}
          </p>
          <h2 class="mt-2 max-w-md text-4xl font-normal leading-tight text-white sm:text-5xl">
            {{ companyValuesBehavior.title }}
          </h2>

          <div class="mt-10 divide-y divide-white/15 border-t border-white/15">
            <button
              v-for="(item, index) in companyValuesBehavior.items"
              :key="item.title"
              type="button"
              class="flex w-full flex-col items-start gap-2 py-5 text-left transition-colors duration-300"
              @click="activeBehaviorIndex = index"
            >
              <span
                class="text-base font-medium leading-tight"
                :class="activeBehaviorIndex === index ? 'text-white' : 'text-white/45'"
              >
                {{ item.title }}
              </span>
              <p
                v-if="activeBehaviorIndex === index"
                class="max-w-md text-sm leading-relaxed text-white/70"
              >
                {{ item.description }}
              </p>
            </button>
          </div>
        </div>

        <div
          class="min-h-72 overflow-hidden bg-white/8 lg:min-h-full"
          data-reveal-item
        >
          <div
            class="flex h-full min-h-72 items-center justify-center"
            aria-hidden="true"
          >
            <UIcon
              name="i-lucide-image"
              class="size-12 text-white/20"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      class="overflow-hidden bg-white"
      data-section-reveal
    >
      <div class="mx-auto grid max-w-360 gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-20 lg:py-25">
        <div data-reveal-item>
          <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
            {{ companyValuesOperational.eyebrow }}
          </p>
          <h2 class="mt-2 max-w-md text-4xl font-normal leading-tight text-ink sm:text-5xl">
            {{ companyValuesOperational.title }}
          </h2>
        </div>

        <div
          class="grid gap-x-10 gap-y-8 sm:grid-cols-2"
          data-reveal-item
        >
          <div
            v-for="item in companyValuesOperational.items"
            :key="item.title"
            class="border-t border-black/15 pt-5"
          >
            <h3 class="text-base font-medium leading-tight text-ink">
              {{ item.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-black/65">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Bangun bersama nilai yang sama"
      primary-label="Hubungi Kami"
      primary-to="/kontak"
      secondary-label="Jelajahi Unit Usaha"
      secondary-to="/unit-bisnis"
    />
  </div>
</template>

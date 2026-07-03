<script setup lang="ts">
import { valueOwnerFounder, valueOwnerHero, valueOwnerPrinciples, valueOwnerQuote } from '~/data/about'

const title = 'Value Owner - Kembar Futa Group'
const description = 'Kisah dan prinsip Ir. H. Fikky Arif Ardianta sebagai sosok di balik Kembar Futa Group.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=85',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <section
      class="relative min-h-125 overflow-hidden bg-ink text-white"
      data-scroll-parallax-container
    >
      <img
        :src="valueOwnerHero.image"
        :alt="valueOwnerHero.title"
        class="absolute -inset-y-12 left-0 h-[calc(100%+96px)] w-full scale-105 object-cover"
        data-scroll-parallax="96"
        data-scroll-scrub="0.9"
      >
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.8)_0%,rgba(0,0,0,.35)_20%,rgba(0,0,0,.1)_40%,rgba(0,0,0,.2)_100%)]" />
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.42)_0%,rgba(0,0,0,.04)_54%,rgba(0,0,0,.34)_100%)]" />

      <LayoutSiteHeader />

      <div class="relative z-10 mx-auto flex min-h-125 max-w-360 items-end px-5 pb-12 pt-28 sm:px-8 lg:px-20">
        <div class="space-y-8">
          <nav
            class="flex flex-wrap items-center gap-2 text-sm font-medium leading-tight text-white/72"
            aria-label="Breadcrumb"
          >
            <template
              v-for="(crumb, index) in valueOwnerHero.breadcrumbs"
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
                class="text-white"
              >
                {{ crumb.label }}
              </span>
              <span
                v-if="index < valueOwnerHero.breadcrumbs.length - 1"
                class="text-white/45"
              >/</span>
            </template>
          </nav>

          <h1 class="text-4xl font-medium leading-tight sm:text-5xl">
            {{ valueOwnerHero.title }}
          </h1>
        </div>
      </div>
    </section>

    <section
      class="overflow-hidden bg-white"
      data-section-reveal
    >
      <div class="mx-auto grid max-w-360 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_412px] lg:items-end lg:gap-16 lg:px-20 lg:py-25">
        <div class="space-y-8">
          <div
            class="space-y-2.5"
            data-reveal-item
            data-reveal-from="left"
          >
            <p class="text-sm font-medium leading-tight text-brand-green">
              {{ valueOwnerFounder.eyebrow }}
            </p>
            <h2 class="max-w-3xl text-4xl font-medium leading-tight text-ink sm:text-5xl lg:text-6xl">
              {{ valueOwnerFounder.title }}
            </h2>
          </div>

          <div
            class="h-px origin-left bg-black/20"
            data-reveal-item
            data-reveal-from="scale"
            data-reveal-distance="16"
          />

          <div class="max-w-4xl space-y-6 text-base leading-relaxed text-black/70 lg:text-lg lg:leading-[1.6]">
            <p
              v-for="paragraph in valueOwnerFounder.paragraphs"
              :key="paragraph"
              data-reveal-item
              data-reveal-from="left"
              data-reveal-distance="32"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div
          class="min-h-90 bg-neutral-300 sm:min-h-120 lg:h-137.25"
          aria-hidden="true"
          data-reveal-item
          data-reveal-from="right"
          data-scroll-clip
        />
      </div>
    </section>

    <section class="overflow-hidden bg-black text-white">
      <div class="mx-auto max-w-360 px-5 py-16 sm:px-8 lg:px-20 lg:py-25">
        <p
          class="mx-auto max-w-6xl text-center text-2xl font-normal leading-[1.6] sm:text-3xl lg:text-[32px]"
          data-scroll-scrub-reveal
          data-scroll-from-y="64"
          data-scroll-start="top 82%"
          data-scroll-end="center 70%"
        >
          {{ valueOwnerQuote }}
        </p>
      </div>
    </section>

    <section
      class="overflow-hidden bg-white"
      data-section-reveal
    >
      <div class="mx-auto grid max-w-360 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-20 lg:py-25">
        <div
          data-reveal-item
          data-reveal-from="left"
        >
          <p class="text-sm font-medium leading-tight text-brand-green">
            Nilai
          </p>
          <h2 class="mt-1 max-w-2xl text-4xl font-normal leading-[1.25] text-ink sm:text-5xl lg:text-6xl lg:leading-[1.4]">
            Prinsip yang ia wariskan ke grup
          </h2>
        </div>

        <div class="space-y-5">
          <article
            v-for="principle in valueOwnerPrinciples"
            :key="principle.title"
            class="border border-black/20 p-6 transition duration-500 ease-out hover:-translate-y-1 hover:border-brand-green"
            data-reveal-item
            data-reveal-from="right"
            data-reveal-distance="44"
          >
            <h3 class="text-lg font-medium leading-relaxed text-ink lg:text-xl">
              {{ principle.title }}
            </h3>
            <p class="mt-6 text-base leading-relaxed text-black/70">
              {{ principle.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Kenali lebih dalam grup yang ia bangun."
      primary-label="Tentang Grup"
      primary-to="/tentang-kami"
    />
  </div>
</template>

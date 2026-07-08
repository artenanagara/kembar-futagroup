<script setup lang="ts">
import { leadershipHero, leadershipJourney, leadershipPrinciples, leadershipQuote, leadershipStory } from '~/data/about'

const title = 'Kepemimpinan - Kembar Futagroup'
const description = 'Sosok di balik Kembar Futagroup dan prinsip kepemimpinan yang menjadi dasar cara grup bekerja.'

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
    <section
      class="relative min-h-125 overflow-hidden bg-ink text-white"
      data-section-reveal
    >
      <img
        :src="leadershipHero.image"
        :alt="leadershipHero.title"
        class="absolute inset-0 size-full object-cover -scale-x-100"
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
              v-for="(crumb, index) in leadershipHero.breadcrumbs"
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
                v-if="index < leadershipHero.breadcrumbs.length - 1"
                class="text-white/40"
              >/</span>
            </template>
          </nav>

          <h1 class="text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            <UiRevealText :text="leadershipHero.title" />
          </h1>
          <p
            class="mt-5 max-w-2xl text-base leading-relaxed text-white/80"
            data-reveal-item
          >
            {{ leadershipHero.description }}
          </p>
        </div>
      </div>
    </section>

    <section
      class="overflow-hidden bg-white"
      data-section-reveal
    >
      <div class="mx-auto grid max-w-360 gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-20 lg:py-25">
        <div data-reveal-item>
          <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
            {{ leadershipStory.eyebrow }}
          </p>
          <h2 class="mt-2 max-w-xl text-4xl font-normal leading-tight text-ink sm:text-5xl">
            {{ leadershipStory.title }}
          </h2>

          <div class="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-black/70">
            <p
              v-for="paragraph in leadershipStory.paragraphs"
              :key="paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div
          class="flex items-center justify-center py-8 lg:py-12"
          data-reveal-item
        >
          <div class="aspect-[3/4] w-full max-w-sm overflow-hidden bg-neutral-200 lg:max-w-md">
            <img
              v-if="leadershipStory.portrait"
              :src="leadershipStory.portrait.src"
              :alt="leadershipStory.portrait.alt"
              class="h-full w-full object-cover"
            >
            <div
              v-else
              class="flex h-full w-full items-center justify-center"
              aria-hidden="true"
            >
              <UIcon
                name="i-lucide-user-round"
                class="size-16 text-black/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="overflow-hidden bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-4 sm:px-8 lg:px-20">
        <div
          class="h-px bg-black/15"
          data-reveal-item
        />
        <p
          class="mx-auto my-14 max-w-4xl text-center text-2xl font-normal leading-[1.6] text-ink sm:text-3xl"
          data-reveal-item
        >
          {{ leadershipQuote }}
        </p>
        <div
          class="h-px bg-black/15"
          data-reveal-item
        />
      </div>
    </section>

    <section
      class="overflow-hidden bg-black text-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <p
          class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green"
          data-reveal-item
        >
          {{ leadershipPrinciples.eyebrow }}
        </p>
        <h2
          class="mt-2 text-4xl font-normal leading-tight text-white sm:text-5xl"
          data-reveal-item
        >
          {{ leadershipPrinciples.title }}
        </h2>

        <div
          class="mt-14 grid gap-8 divide-y divide-white/12 sm:grid-cols-4 sm:divide-x sm:divide-y-0"
          data-reveal-item
        >
          <div
            v-for="item in leadershipPrinciples.items"
            :key="item.title"
            class="pt-6 first:pt-0 sm:pt-0 sm:first:pl-0 sm:pl-8"
          >
            <p class="text-base font-medium leading-tight text-white">
              {{ item.title }}
            </p>
            <p class="mt-3 text-sm leading-relaxed text-white/60">
              {{ item.description }}
            </p>
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
            {{ leadershipJourney.eyebrow }}
          </p>
          <h2 class="mt-2 max-w-md text-4xl font-normal leading-tight text-ink sm:text-5xl">
            {{ leadershipJourney.title }}
          </h2>
        </div>

        <div
          class="divide-y divide-black/10 border-t border-black/10"
          data-reveal-item
        >
          <div
            v-for="(item, index) in leadershipJourney.items"
            :key="item.title"
            class="flex flex-col gap-3 py-8 sm:flex-row sm:items-baseline sm:gap-10"
          >
            <span class="font-mono text-sm text-black/40 sm:w-12 sm:shrink-0">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <h3 class="text-base font-medium leading-tight text-ink sm:w-56 sm:shrink-0">
              {{ item.title }}
            </h3>
            <p class="text-sm leading-relaxed text-black/65">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Nilai yang sama, tujuan yang satu"
      description=""
      primary-label="Hubungi Kami"
      primary-to="#"
      secondary-label="Tentang Grup"
      secondary-to="/tentang-kami"
    />
  </div>
</template>

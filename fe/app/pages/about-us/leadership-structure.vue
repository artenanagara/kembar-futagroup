<script setup lang="ts">
import { leadershipStructureDireksi, leadershipStructureDivisi, leadershipStructureFounder, leadershipStructureHero, leadershipStructureIntro } from '~/data/about'

const title = 'Struktur Kepemimpinan - Kembar Futagroup'
const description = 'Susunan tim kepemimpinan Kembar Futagroup, dari pendiri, dewan direksi, hingga kepala divisi di setiap unit bisnis.'

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
    itemListElement: leadershipStructureHero.breadcrumbs.map(crumb => ({
      name: crumb.label,
      item: crumb.to
    }))
  })
])
</script>

<template>
  <div>
    <section
      class="relative min-h-125 overflow-hidden bg-ink text-white"
      data-section-reveal
    >
      <img
        :src="leadershipStructureHero.image"
        :alt="leadershipStructureHero.title"
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
              v-for="(crumb, index) in leadershipStructureHero.breadcrumbs"
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
                v-if="index < leadershipStructureHero.breadcrumbs.length - 1"
                class="text-white/40"
              >/</span>
            </template>
          </nav>

          <h1 class="text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            <UiRevealText :text="leadershipStructureHero.title" />
          </h1>
          <p
            class="mt-5 max-w-2xl text-base leading-relaxed text-white/80"
            data-reveal-item
          >
            {{ leadershipStructureHero.description }}
          </p>
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
          {{ leadershipStructureIntro.eyebrow }}
        </p>

        <div
          class="mt-5 grid gap-10 lg:grid-cols-2 lg:gap-20"
          data-reveal-item
        >
          <h2 class="text-4xl font-normal leading-tight text-ink sm:text-5xl">
            {{ leadershipStructureIntro.title }}
          </h2>
          <p class="text-base leading-relaxed text-black/70 lg:pt-2">
            {{ leadershipStructureIntro.description }}
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
          class="mb-10 h-px bg-black/15"
          data-reveal-item
        />

        <div data-reveal-item>
          <h2 class="text-3xl font-normal leading-tight text-ink sm:text-4xl">
            {{ leadershipStructureFounder.title }}
          </h2>
          <p class="mt-3 max-w-2xl text-base leading-relaxed text-black/70">
            {{ leadershipStructureFounder.description }}
          </p>
        </div>

        <article
          class="group relative mt-10 flex aspect-square w-full max-w-xs overflow-hidden bg-black sm:aspect-4/5"
          data-reveal-item
        >
          <img
            :src="leadershipStructureFounder.portrait.src"
            :alt="leadershipStructureFounder.portrait.alt"
            class="absolute inset-0 size-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale"
          >
          <div class="bg-card-scrim absolute inset-0" />

          <div class="relative z-10 mt-auto flex w-full items-end justify-between p-6 text-white">
            <div>
              <p class="text-lg font-medium leading-tight">
                {{ leadershipStructureFounder.name }}
              </p>
              <p class="mt-1 text-sm text-white/70">
                {{ leadershipStructureFounder.role }}
              </p>
            </div>
            <NuxtLink
              to="#"
              aria-label="LinkedIn"
              class="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/50 text-white/80 transition duration-300 hover:border-white hover:text-white"
            >
              <UIcon
                name="i-carbon-logo-linkedin"
                class="size-4"
              />
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 pb-20 sm:px-8 lg:px-20 lg:pb-25">
        <div
          class="mb-10 h-px bg-black/15"
          data-reveal-item
        />

        <div data-reveal-item>
          <h2 class="text-3xl font-normal leading-tight text-ink sm:text-4xl">
            {{ leadershipStructureDireksi.title }}
          </h2>
          <p class="mt-3 max-w-2xl text-base leading-relaxed text-black/70">
            {{ leadershipStructureDireksi.description }}
          </p>
        </div>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(member, index) in leadershipStructureDireksi.members"
            :key="`direksi-${index}`"
            class="group relative flex aspect-4/5 overflow-hidden bg-neutral-800"
            data-reveal-item
          >
            <div
              v-if="!member.portrait"
              class="absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <UIcon
                name="i-lucide-user-round"
                class="size-16 text-white/20"
              />
            </div>
            <img
              v-else
              :src="member.portrait.src"
              :alt="member.portrait.alt"
              class="absolute inset-0 size-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale"
            >
            <div class="bg-card-scrim absolute inset-0" />

            <div class="relative z-10 mt-auto flex w-full items-end justify-between p-5 text-white">
              <div>
                <p class="text-base font-medium leading-tight">
                  {{ member.name }}
                </p>
                <p class="mt-1 text-sm text-white/70">
                  {{ member.role }}
                </p>
              </div>
              <NuxtLink
                to="#"
                aria-label="LinkedIn"
                class="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-white/50 text-white/80 transition duration-300 hover:border-white hover:text-white"
              >
                <UIcon
                  name="i-carbon-logo-linkedin"
                  class="size-4"
                />
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 pb-20 sm:px-8 lg:px-20 lg:pb-25">
        <div
          class="mb-10 h-px bg-black/15"
          data-reveal-item
        />

        <div data-reveal-item>
          <h2 class="text-3xl font-normal leading-tight text-ink sm:text-4xl">
            {{ leadershipStructureDivisi.title }}
          </h2>
          <p class="mt-3 max-w-2xl text-base leading-relaxed text-black/70">
            {{ leadershipStructureDivisi.description }}
          </p>
        </div>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(member, index) in leadershipStructureDivisi.members"
            :key="`divisi-${index}`"
            class="group relative flex aspect-4/5 overflow-hidden bg-neutral-800"
            data-reveal-item
          >
            <div
              v-if="!member.portrait"
              class="absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <UIcon
                name="i-lucide-user-round"
                class="size-16 text-white/20"
              />
            </div>
            <img
              v-else
              :src="member.portrait.src"
              :alt="member.portrait.alt"
              class="absolute inset-0 size-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale"
            >
            <div class="bg-card-scrim absolute inset-0" />

            <div class="relative z-10 mt-auto flex w-full items-end justify-between p-5 text-white">
              <div>
                <p class="text-base font-medium leading-tight">
                  {{ member.name }}
                </p>
                <p class="mt-1 text-sm text-white/70">
                  {{ member.role }}
                </p>
              </div>
              <NuxtLink
                to="#"
                aria-label="LinkedIn"
                class="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-white/50 text-white/80 transition duration-300 hover:border-white hover:text-white"
              >
                <UIcon
                  name="i-carbon-logo-linkedin"
                  class="size-4"
                />
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Bangun kolaborasi dengan tim kami"
      description=""
      primary-label="Hubungi Kami"
      primary-to="/kontak"
      secondary-label="Lihat Karir"
      secondary-to="/karir"
    />
  </div>
</template>

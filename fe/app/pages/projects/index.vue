<script setup lang="ts">
import { projects, projectsHero, projectsIntro, projectsNational } from '~/data/projects'

const title = 'Proyek - Kembar Futagroup'
const description = projectsHero.description

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
    itemListElement: projectsHero.breadcrumbs.map((label, index) => ({
      name: label,
      item: index === 0 ? '/' : undefined
    }))
  })
])
</script>

<template>
  <div>
    <SectionsPageHero
      :title="projectsHero.title"
      :description="projectsHero.description"
      :image="projectsHero.image"
      :image-alt="projectsHero.title"
      :breadcrumbs="projectsHero.breadcrumbs.map((crumb, index) => ({ label: crumb, to: index === 0 ? '/' : undefined }))"
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
          {{ projectsIntro.eyebrow }}
        </p>
        <div
          class="mt-2 space-y-8"
          data-reveal-item
        >
          <h2 class="max-w-4xl text-4xl font-normal leading-tight text-ink sm:text-5xl">
            {{ projectsIntro.title }}
          </h2>
          <div class="h-px bg-black/20" />
        </div>
        <div
          class="mt-8 grid gap-8 text-base leading-relaxed text-black/70 lg:grid-cols-2 lg:gap-24"
          data-reveal-item
        >
          <p
            v-for="paragraph in projectsIntro.paragraphs"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="project in projects"
            :key="project.title"
            class="group flex flex-col overflow-hidden border border-black/12 bg-white transition duration-500 ease-out hover:-translate-y-1 hover:border-brand-green"
            data-reveal-item
          >
            <div class="relative aspect-4/3 overflow-hidden bg-neutral-200">
              <img
                :src="project.image"
                :alt="project.title"
                class="size-full object-cover transition duration-700 ease-out group-hover:scale-105"
              >
              <span class="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium uppercase tracking-wide text-ink backdrop-blur">
                {{ project.category }}
              </span>
            </div>
            <div class="flex flex-1 flex-col p-6">
              <div class="flex items-center gap-2 text-sm text-black/45">
                <UIcon
                  name="i-lucide-map-pin"
                  class="size-4 text-brand-green"
                />
                <span>{{ project.location }}</span>
                <span class="text-black/25">·</span>
                <span>{{ project.year }}</span>
              </div>
              <h3 class="mt-3 text-xl font-medium leading-tight text-ink">
                {{ project.title }}
              </h3>
              <p class="mt-3 text-base leading-relaxed text-black/70">
                {{ project.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      class="bg-black text-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <div
          class="grid gap-8 lg:grid-cols-2 lg:gap-16"
          data-reveal-item
        >
          <div>
            <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
              {{ projectsNational.eyebrow }}
            </p>
            <h2 class="mt-2 max-w-xl text-4xl font-normal leading-tight sm:text-5xl">
              {{ projectsNational.title }}
            </h2>
          </div>
          <p class="max-w-xl text-base leading-relaxed text-white/70 lg:pt-3">
            {{ projectsNational.description }}
          </p>
        </div>

        <div class="mt-12 grid gap-5 sm:grid-cols-3">
          <article
            v-for="item in projectsNational.items"
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

    <LayoutSiteFooter
      title="Punya proyek yang ingin kami dukung?"
      primary-label="Hubungi Kami"
      primary-to="/kontak"
      secondary-label="Lihat Produk & Solusi"
      secondary-to="/produk-solusi"
    />
  </div>
</template>

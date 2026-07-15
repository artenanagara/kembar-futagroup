<script setup lang="ts">
import { contactChannels, contactHero, contactIntro, contactLocations, contactSocial } from '~/data/contact'

const title = 'Hubungi Kami - Kembar Futagroup'
const description = contactHero.description

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
    itemListElement: contactHero.breadcrumbs.map((label, index) => ({
      name: label,
      item: index === 0 ? '/' : undefined
    }))
  })
])
</script>

<template>
  <div>
    <SectionsPageHero
      :title="contactHero.title"
      :description="contactHero.description"
      :image="contactHero.image"
      :image-alt="contactHero.title"
      :breadcrumbs="contactHero.breadcrumbs.map((crumb, index) => ({ label: crumb, to: index === 0 ? '/' : undefined }))"
      height-class="min-h-125"
      overlay="vignette-side"
    />

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div data-reveal-item>
            <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
              {{ contactIntro.eyebrow }}
            </p>
            <h2 class="mt-2 text-4xl font-normal leading-tight text-ink sm:text-5xl">
              {{ contactIntro.title }}
            </h2>
            <div class="mt-8 space-y-5 text-base leading-relaxed text-black/70">
              <p
                v-for="paragraph in contactIntro.paragraphs"
                :key="paragraph"
              >
                {{ paragraph }}
              </p>
            </div>

            <div class="mt-10 grid gap-4 sm:grid-cols-2">
              <a
                v-for="channel in contactChannels"
                :key="channel.label"
                :href="channel.href"
                target="_blank"
                rel="noopener"
                class="group flex flex-col gap-3 border border-black/16 p-6 transition duration-500 ease-out hover:-translate-y-1 hover:border-brand-green"
              >
                <div class="flex size-10 items-center justify-center bg-neutral-200 text-black/45 transition duration-500 ease-out group-hover:bg-brand-green group-hover:text-white">
                  <UIcon
                    :name="channel.icon"
                    class="size-5"
                  />
                </div>
                <div>
                  <p class="text-sm leading-tight text-black/45">
                    {{ channel.label }}
                  </p>
                  <p class="mt-1 text-lg font-medium leading-tight text-ink">
                    {{ channel.value }}
                  </p>
                </div>
                <p
                  v-if="channel.note"
                  class="text-sm leading-relaxed text-black/60"
                >
                  {{ channel.note }}
                </p>
              </a>
            </div>
          </div>

          <div
            class="flex flex-col gap-6"
            data-reveal-item
          >
            <article
              v-for="location in contactLocations"
              :key="location.name"
              class="border border-black/16 p-7"
            >
              <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
                {{ location.label }}
              </p>
              <h3 class="mt-4 text-xl font-medium leading-tight text-ink">
                {{ location.name }}
              </h3>
              <p class="mt-3 flex items-start gap-3 text-base leading-relaxed text-black/70">
                <UIcon
                  name="i-lucide-map-pin"
                  class="mt-1 size-5 shrink-0 text-brand-green"
                />
                <span>{{ location.address }}</span>
              </p>
              <a
                :href="location.mapUrl"
                target="_blank"
                rel="noopener"
                class="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-green transition hover:text-ink"
              >
                Lihat di Peta
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="size-4"
                />
              </a>
            </article>

            <div class="border border-black/16 p-7">
              <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
                {{ contactSocial.eyebrow }}
              </p>
              <h3 class="mt-4 text-xl font-medium leading-tight text-ink">
                {{ contactSocial.title }}
              </h3>
              <div class="mt-5 flex flex-wrap gap-3">
                <NuxtLink
                  v-for="social in contactSocial.links"
                  :key="social.label"
                  :to="social.to"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex min-h-11 items-center justify-center rounded-full bg-black/8 px-6 text-sm font-medium leading-none text-ink transition duration-300 hover:bg-black hover:text-white"
                >
                  {{ social.label }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Kenali ekosistem usaha kami"
      primary-label="Lihat Unit Bisnis"
      primary-to="/unit-bisnis"
      secondary-label="Produk & Solusi"
      secondary-to="/produk-solusi"
    />
  </div>
</template>

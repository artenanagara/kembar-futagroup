<script setup lang="ts">
import { newsDisclaimer, newsHero, newsPosts } from '~/data/news'

const title = 'Berita & Insight - Kembar Futagroup'
const description = newsHero.description

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
    itemListElement: newsHero.breadcrumbs.map((label, index) => ({
      name: label,
      item: index === 0 ? '/' : undefined
    }))
  })
])
</script>

<template>
  <div>
    <SectionsPageHero
      :title="newsHero.title"
      :description="newsHero.description"
      :image="newsHero.image"
      :image-alt="newsHero.title"
      :breadcrumbs="newsHero.breadcrumbs.map((crumb, index) => ({ label: crumb, to: index === 0 ? '/' : undefined }))"
      height-class="h-125"
      overlay="vignette-side"
    />

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <p
          class="mb-10 flex items-start gap-2 rounded-md bg-neutral-100 p-4 text-sm leading-relaxed text-black/60"
          data-reveal-item
        >
          <UIcon
            name="i-lucide-info"
            class="mt-0.5 size-4 shrink-0 text-brand-green"
          />
          <span>{{ newsDisclaimer }}</span>
        </p>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CardsNewsCard
            v-for="post in newsPosts"
            :key="post.slug"
            :post="post"
          />
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Ingin tahu lebih lanjut tentang kami?"
      primary-label="Hubungi Kami"
      primary-to="/kontak"
    />
  </div>
</template>

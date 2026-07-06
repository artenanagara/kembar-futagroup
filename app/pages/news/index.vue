<script setup lang="ts">
import { newsHero, newsPosts } from '~/data/news'

const title = 'Berita & Insight - Kembar Futa Group'
const description = newsHero.description

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: newsHero.image,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <SectionsPageHero
      :title="newsHero.title"
      :description="newsHero.description"
      :image="newsHero.image"
      :image-alt="newsHero.title"
      :breadcrumbs="newsHero.breadcrumbs.map((crumb, index) => ({ label: crumb, to: index === 0 ? '/' : undefined }))"
      :reveal-title="false"
      height-class="min-h-125"
      overlay-class="bg-[linear-gradient(90deg,rgba(0,0,0,.74)_0%,rgba(0,0,0,.28)_48%,rgba(0,0,0,.68)_100%)]"
    />

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
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
      primary-to="#"
    />
  </div>
</template>

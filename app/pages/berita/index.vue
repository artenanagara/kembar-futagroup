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
    <section
      class="relative min-h-125 overflow-hidden bg-ink text-white"
      data-section-reveal
    >
      <img
        :src="newsHero.image"
        :alt="newsHero.title"
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
              v-for="(crumb, index) in newsHero.breadcrumbs"
              :key="crumb"
            >
              <NuxtLink
                v-if="index === 0"
                to="/"
                class="transition hover:text-white"
              >
                {{ crumb }}
              </NuxtLink>
              <span
                v-else
                class="text-white/90"
              >
                {{ crumb }}
              </span>
              <span
                v-if="index < newsHero.breadcrumbs.length - 1"
                class="text-white/40"
              >/</span>
            </template>
          </nav>

          <h1
            class="text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl"
            data-reveal-item
          >
            {{ newsHero.title }}
          </h1>
          <p
            class="mt-5 max-w-2xl text-base leading-relaxed text-white/80"
            data-reveal-item
          >
            {{ newsHero.description }}
          </p>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="post in newsPosts"
            :key="post.slug"
            :to="`/berita/${post.slug}`"
            class="group space-y-4"
            data-reveal-item
          >
            <div class="overflow-hidden">
              <img
                :src="post.image"
                :alt="post.title"
                class="h-64 w-full object-cover transition duration-700 ease-out group-hover:scale-105 lg:h-76"
              >
            </div>
            <div class="space-y-2">
              <UiBadge
                variant="outline-dark"
                size="sm"
              >
                {{ post.category }}
              </UiBadge>
              <h2 class="min-h-11 text-base font-normal leading-snug text-ink transition-colors duration-200 group-hover:text-brand-green">
                {{ post.title }}
              </h2>
            </div>
            <div class="flex items-center gap-4 text-sm leading-relaxed text-black/50">
              <time :datetime="post.date">{{ formatNewsDate(post.date) }}</time>
              <span class="size-1.5 rounded-full bg-neutral-300" />
              <span>{{ post.readTime }}</span>
            </div>
          </NuxtLink>
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

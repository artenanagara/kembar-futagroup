<script setup lang="ts">
import { newsPosts } from '~/data/news'

const route = useRoute()
const slug = String(route.params.slug ?? '')
const post = newsPosts.find(item => item.slug === slug)

if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Berita tidak ditemukan'
  })
}

const title = `${post.title} - Kembar Futagroup`
const description = post.excerpt

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
    itemListElement: [
      { name: 'Beranda', item: '/' },
      { name: 'Berita', item: '/berita' },
      { name: post.title }
    ]
  })
])

const otherPosts = newsPosts.filter(item => item.slug !== slug).slice(0, 3)

const slugify = (text: string) => text
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '')

const headings = computed(() => post.content.filter(block => block.type === 'heading'))
</script>

<template>
  <div>
    <LayoutSiteHeader />

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 pb-12 pt-40 sm:px-8 lg:px-20">
        <NavigationBackLink
          to="/berita"
          label="Kembali ke Berita"
          data-reveal-item
        />

        <div class="mt-8 max-w-3xl">
          <nav
            class="flex flex-wrap items-center gap-2 text-sm leading-tight text-black/45"
            aria-label="Breadcrumb"
            data-reveal-item
          >
            <NuxtLink
              to="/"
              class="transition hover:text-ink"
            >
              Beranda
            </NuxtLink>
            <span class="text-black/20">/</span>
            <NuxtLink
              to="/berita"
              class="transition hover:text-ink"
            >
              Berita
            </NuxtLink>
            <span class="text-black/20">/</span>
            <span class="text-black/70">{{ post.title }}</span>
          </nav>

          <h1 class="mt-5 text-4xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl">
            <UiRevealText :text="post.title" />
          </h1>
          <p
            class="mt-5 text-base leading-relaxed text-black/70"
            data-reveal-item
          >
            {{ post.excerpt }}
          </p>

          <div
            class="mt-5 flex flex-wrap items-center gap-3 text-sm leading-tight text-black/45"
            data-reveal-item
          >
            <span>{{ post.category }}</span>
            <span class="size-1.5 rounded-full bg-neutral-300" />
            <time :datetime="post.date">{{ formatNewsDate(post.date) }}</time>
            <span class="size-1.5 rounded-full bg-neutral-300" />
            <span>{{ post.readTime }}</span>
          </div>
        </div>

        <div
          class="mt-12 overflow-hidden bg-neutral-200"
          data-reveal-item
        >
          <img
            :src="post.image"
            :alt="post.title"
            class="h-70 w-full object-cover sm:h-105 lg:h-130"
          >
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto grid max-w-360 gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-20 lg:pb-25">
        <div
          v-if="headings.length"
          class="h-fit border border-black/16 p-7 lg:sticky lg:top-28"
          data-reveal-item
        >
          <p class="text-sm font-medium leading-tight text-ink">
            Daftar Isi
          </p>
          <ul class="mt-5 space-y-3">
            <li
              v-for="heading in headings"
              :key="heading.text"
            >
              <a
                :href="`#${slugify(heading.text)}`"
                class="block text-sm leading-relaxed text-black/65 transition hover:text-brand-green"
              >
                {{ heading.text }}
              </a>
            </li>
          </ul>
        </div>

        <div
          class="space-y-6 text-base leading-relaxed text-black/70 lg:text-lg"
          data-reveal-item
        >
          <template
            v-for="(block, index) in post.content"
            :key="index"
          >
            <h2
              v-if="block.type === 'heading'"
              :id="slugify(block.text)"
              class="text-2xl font-medium leading-tight text-ink sm:text-3xl"
            >
              {{ block.text }}
            </h2>

            <p v-else-if="block.type === 'paragraph'">
              {{ block.text }}
            </p>

            <figure v-else-if="block.type === 'image'">
              <img
                :src="block.src"
                :alt="block.alt"
                class="w-full object-cover"
              >
              <figcaption
                v-if="block.caption"
                class="mt-3 text-sm leading-relaxed text-black/45"
              >
                {{ block.caption }}
              </figcaption>
            </figure>
          </template>
        </div>
      </div>
    </section>

    <section
      v-if="otherPosts.length"
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 pb-20 sm:px-8 lg:px-20 lg:pb-25">
        <h2
          class="text-2xl font-medium leading-tight text-ink sm:text-3xl"
          data-reveal-item
        >
          Berita Lainnya
        </h2>

        <div class="mt-8 grid gap-8 md:grid-cols-3">
          <CardsNewsCard
            v-for="item in otherPosts"
            :key="item.slug"
            :post="item"
            heading-tag="h3"
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

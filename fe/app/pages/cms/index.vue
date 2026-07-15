<script setup lang="ts">
const pageTitle = 'CMS Dashboard - Kembar Futagroup'
const pageDescription = 'Overview frontend CMS untuk modul artikel, SEO artikel, dan media Kembar Futagroup.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  robots: 'noindex, nofollow',
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  twitterCard: 'summary'
})

const modules = [
  {
    title: 'Artikel',
    description: 'Kelola draft, kategori, status publish, isi artikel, excerpt, dan workflow editorial.',
    to: '/cms/artikel',
    icon: 'i-lucide-newspaper',
    action: 'Buka Artikel'
  },
  {
    title: 'SEO',
    description: 'Atur focus keyword, meta title, meta description, Open Graph, alt text, dan preview SERP.',
    to: '/cms/seo',
    icon: 'i-lucide-search-check',
    action: 'Buka SEO'
  },
  {
    title: 'Media',
    description: 'Kelola asset gambar artikel, status alt text, ukuran file, penggunaan, dan kategori media.',
    to: '/cms/media',
    icon: 'i-lucide-images',
    action: 'Buka Media'
  }
]
</script>

<template>
  <CmsShell
    title="CMS artikel Kembar Futagroup"
    description="Pilih modul kerja: artikel, SEO, atau media. Setiap modul sekarang punya halaman sendiri."
    badge-label="CMS Overview"
    badge-icon="i-lucide-layout-dashboard"
  >
    <template #actions>
      <NuxtLink
        to="/cms/artikel"
        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-semibold text-white transition hover:bg-brand-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
      >
        <UIcon
          name="i-lucide-newspaper"
          class="size-4"
        />
        Mulai dari Artikel
      </NuxtLink>
    </template>

    <section class="grid gap-4 md:grid-cols-3">
      <NuxtLink
        v-for="module in modules"
        :key="module.to"
        :to="module.to"
        class="group rounded-lg border border-black/10 bg-white p-5 transition hover:border-brand-green hover:bg-brand-green/5"
      >
        <span class="inline-flex size-12 items-center justify-center rounded-lg bg-[#eef3ea] text-brand-green transition group-hover:bg-brand-green group-hover:text-white">
          <UIcon
            :name="module.icon"
            class="size-6"
          />
        </span>
        <h2 class="mt-5 text-xl font-semibold leading-tight text-ink">
          {{ module.title }}
        </h2>
        <p class="mt-3 text-sm leading-6 text-black/58">
          {{ module.description }}
        </p>
        <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-green">
          {{ module.action }}
          <UIcon
            name="i-lucide-arrow-right"
            class="size-4"
          />
        </span>
      </NuxtLink>
    </section>
  </CmsShell>
</template>

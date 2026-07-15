<script setup lang="ts">
import { businessUnits } from '~/data/business-units'
import { jobListings } from '~/data/careers'
import { newsPosts } from '~/data/news'
import { productSolutions } from '~/data/product-solutions'

const title = 'Peta Situs - Kembar Futagroup'
const description = 'Daftar lengkap seluruh halaman di situs Kembar Futagroup, mulai dari profil perusahaan, unit bisnis, produk & solusi, karir, hingga berita.'

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
      { name: 'Peta Situs' }
    ]
  })
])

const sitemapSections = [
  {
    title: 'Halaman Utama',
    links: [
      { label: 'Beranda', to: '/' }
    ]
  },
  {
    title: 'Tentang Kami',
    links: [
      { label: 'Profil Perusahaan', to: '/tentang-kami/profil' },
      { label: 'Kepemimpinan', to: '/tentang-kami/kepemimpinan' },
      { label: 'Struktur Kepemimpinan', to: '/tentang-kami/struktur' },
      { label: 'Tata Nilai Perusahaan', to: '/tentang-kami/tata-nilai-perusahaan' }
    ]
  },
  {
    title: 'Unit Bisnis',
    links: [
      { label: 'Semua Unit Bisnis', to: '/unit-bisnis' },
      ...businessUnits.map(unit => ({ label: unit.name, to: `/unit-bisnis/${unit.slug}` }))
    ]
  },
  {
    title: 'Produk & Solusi',
    links: [
      { label: 'Semua Produk & Solusi', to: '/produk-solusi' },
      ...productSolutions.map(solution => ({ label: solution.name, to: `/produk-solusi/${solution.slug}` }))
    ]
  },
  {
    title: 'Karir',
    links: [
      { label: 'Semua Lowongan', to: '/karir' },
      ...jobListings.map(job => ({ label: job.title, to: `/karir/${job.slug}` }))
    ]
  },
  {
    title: 'Berita & Insight',
    links: [
      { label: 'Semua Berita', to: '/berita' },
      ...newsPosts.map(post => ({ label: post.title, to: `/berita/${post.slug}` }))
    ]
  },
  {
    title: 'Informasi Lain',
    links: [
      { label: 'Proyek', to: '/proyek' },
      { label: 'Kegiatan CSR', to: '/kegiatan-csr' },
      { label: 'Keberlanjutan', to: '/keberlanjutan' },
      { label: 'Kontak', to: '/kontak' }
    ]
  }
]
</script>

<template>
  <div>
    <SectionsPageHero
      title="Peta Situs"
      description="Daftar lengkap seluruh halaman di situs Kembar Futagroup."
      image="/images/hero/profil.webp"
      image-alt="Peta situs Kembar Futagroup"
      :breadcrumbs="[
        { label: 'Beranda', to: '/' },
        { label: 'Peta Situs' }
      ]"
      height-class="min-h-125"
    />

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="section in sitemapSections"
            :key="section.title"
            data-reveal-item
          >
            <h2 class="text-lg font-medium leading-tight text-ink">
              {{ section.title }}
            </h2>
            <ul class="mt-5 space-y-3">
              <li
                v-for="link in section.links"
                :key="link.to"
              >
                <NuxtLink
                  :to="link.to"
                  class="text-base leading-relaxed text-black/70 transition hover:text-brand-green"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <LayoutSiteFooter />
  </div>
</template>

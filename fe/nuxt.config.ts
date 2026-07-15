// https://nuxt.com/docs/api/configuration/nuxt-config
import type { NuxtPage } from '@nuxt/schema'
import { businessUnits } from './app/data/business-units'
import { jobListings } from './app/data/careers'
import { newsPosts } from './app/data/news'
import { productSolutions } from './app/data/product-solutions'

const detailRoutes = [
  ...businessUnits.map(unit => `/unit-bisnis/${unit.slug}`),
  ...productSolutions.map(solution => `/produk-solusi/${solution.slug}`),
  ...jobListings.map(job => `/karir/${job.slug}`),
  ...jobListings.map(job => `/karir/${job.slug}/lamar`),
  ...newsPosts.map(post => `/berita/${post.slug}`)
]

const localizedRoutePaths = new Map([
  ['app/pages/about-us/index.vue', '/tentang-kami'],
  ['app/pages/about-us/company-profile.vue', '/tentang-kami/profil'],
  ['app/pages/about-us/leadership.vue', '/tentang-kami/kepemimpinan'],
  ['app/pages/about-us/leadership-structure.vue', '/tentang-kami/struktur'],
  ['app/pages/about-us/company-values.vue', '/tentang-kami/tata-nilai-perusahaan'],
  ['app/pages/business-units/index.vue', '/unit-bisnis'],
  ['app/pages/business-units/[slug].vue', '/unit-bisnis/:slug()'],
  ['app/pages/product-solutions/index.vue', '/produk-solusi'],
  ['app/pages/product-solutions/[slug].vue', '/produk-solusi/:slug()'],
  ['app/pages/news/index.vue', '/berita'],
  ['app/pages/news/[slug].vue', '/berita/:slug()'],
  ['app/pages/careers/index.vue', '/karir'],
  ['app/pages/careers/[slug]/index.vue', '/karir/:slug()'],
  ['app/pages/careers/[slug]/apply.vue', '/karir/:slug()/lamar'],
  ['app/pages/projects/index.vue', '/proyek'],
  ['app/pages/csr/index.vue', '/kegiatan-csr'],
  ['app/pages/sustainability/index.vue', '/keberlanjutan'],
  ['app/pages/contact/index.vue', '/kontak'],
  ['app/pages/sitemap.vue', '/peta-situs']
])

const applyLocalizedRoutePaths = (pages: NuxtPage[]) => {
  for (const page of pages) {
    const localizedPath = [...localizedRoutePaths.entries()]
      .find(([filePath]) => page.file?.endsWith(filePath))?.[1]

    if (localizedPath) {
      page.path = localizedPath
    }

    if (page.children?.length) {
      applyLocalizedRoutePaths(page.children)
    }
  }
}

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/seo'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    name: 'Kembar Futagroup',
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://kembarfutagroup.com'
  },

  routeRules: {
    '/': { prerender: true },
    '/tentang-kami': { prerender: true },
    '/tentang-kami/profil': { prerender: true },
    '/tentang-kami/kepemimpinan': { prerender: true },
    '/tentang-kami/struktur': { prerender: true },
    '/tentang-kami/tata-nilai-perusahaan': { prerender: true },
    '/unit-bisnis': { prerender: true },
    '/unit-bisnis/**': { prerender: true },
    '/produk-solusi': { prerender: true },
    '/produk-solusi/**': { prerender: true },
    '/karir': { prerender: true },
    '/karir/**': { prerender: true },
    '/berita': { prerender: true },
    '/berita/**': { prerender: true },
    '/proyek': { prerender: true },
    '/kegiatan-csr': { prerender: true },
    '/keberlanjutan': { prerender: true },
    '/kontak': { prerender: true },
    '/cms': { prerender: true },
    '/cms/artikel': { prerender: true },
    '/cms/artikel/buat': { prerender: true },
    '/cms/seo': { prerender: true },
    '/cms/media': { prerender: true },
    '/peta-situs': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    prerender: {
      routes: detailRoutes
    }
  },

  hooks: {
    'pages:extend': applyLocalizedRoutePaths
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  ogImage: {
    enabled: false
  }
})

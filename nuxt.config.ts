// https://nuxt.com/docs/api/configuration/nuxt-config
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

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    name: 'Kembar Futa Group'
  },

  routeRules: {
    '/': { prerender: true },
    '/tentang-kami': { prerender: true },
    '/tentang-kami/profil': { prerender: true },
    '/tentang-kami/value-owner': { prerender: true },
    '/tentang-kami/struktur': { prerender: true },
    '/unit-bisnis': { prerender: true },
    '/unit-bisnis/**': { prerender: true },
    '/produk-solusi': { prerender: true },
    '/produk-solusi/**': { prerender: true },
    '/karir': { prerender: true },
    '/karir/**': { prerender: true },
    '/berita': { prerender: true },
    '/berita/**': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  nitro: {
    prerender: {
      routes: detailRoutes
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})

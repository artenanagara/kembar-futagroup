<script setup lang="ts">
import type { ArticleCategory, ArticleStatus } from '~/data/cms'
import { checkStatusClass } from '~/data/cms'

type SeoCheckStatus = 'ready' | 'warning'

const pageTitle = 'Buat Artikel - CMS Kembar Futagroup'
const pageDescription = 'Halaman frontend untuk membuat artikel baru lengkap dengan kebutuhan SEO artikel Kembar Futagroup.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  robots: 'noindex, nofollow',
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  twitterCard: 'summary'
})

const slugify = (value: string) => value
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '')

const articleForm = ref({
  title: 'Kembar Futagroup Perkuat Solusi Ruang Publik dari Klaten',
  slug: 'kembar-futagroup-solusi-ruang-publik-klaten',
  category: 'Proyek' as ArticleCategory,
  status: 'draft' as ArticleStatus,
  author: 'Content Lead',
  publishDate: 'Belum dijadwalkan',
  excerpt: 'Kembar Futagroup menghadirkan produk dan solusi ruang publik melalui kolaborasi unit manufaktur, pengecoran, lanskap, dan engineering.',
  tags: 'ruang publik, manufaktur, klaten',
  content: 'Kembar Futagroup memperkuat perannya sebagai ekosistem manufaktur dari Klaten yang mendukung kebutuhan ruang publik di berbagai daerah.\n\n## Kolaborasi antarunit\nProduk ruang publik dikembangkan melalui kolaborasi unit pengecoran logam, fabrikasi, engineering, dan lanskap. Pola kerja ini membantu proyek mendapatkan produk yang fungsional, tahan pakai, dan sesuai karakter kawasan.\n\n## Fokus kualitas produksi\nSetiap produk melewati proses desain, produksi, finishing, dan pemeriksaan kualitas sebelum dikirim ke lokasi proyek.'
})

const seoForm = ref({
  focusKeyword: 'solusi ruang publik klaten',
  secondaryKeywords: 'furnitur jalan, pengecoran logam, manufaktur klaten',
  metaTitle: 'Solusi Ruang Publik Kembar Futagroup dari Klaten',
  metaDescription: 'Kembar Futagroup memperkuat solusi ruang publik melalui kolaborasi unit manufaktur, pengecoran logam, lanskap, dan engineering dari Klaten.',
  canonical: 'https://kembarfutagroup.com/berita/kembar-futagroup-solusi-ruang-publik-klaten',
  robots: 'index, follow',
  ogTitle: 'Solusi Ruang Publik Kembar Futagroup',
  ogDescription: 'Kolaborasi unit manufaktur Kembar Futagroup untuk kebutuhan ruang publik, lanskap, pengecoran, dan engineering.',
  ogImage: '/images/news/ruang-publik-klaten.webp',
  coverImage: 'ruang-publik-klaten.webp',
  imageAlt: 'Produk ruang publik Kembar Futagroup hasil produksi manufaktur Klaten',
  schemaType: 'Article',
  articleSection: 'Proyek',
  faqQuestion: 'Apa solusi ruang publik yang dikerjakan Kembar Futagroup?',
  faqAnswer: 'Kembar Futagroup mengerjakan produk ruang publik seperti bollard, bangku taman, tiang lampu, elemen lanskap, dan komponen infrastruktur pendukung.'
})

const slugTouched = ref(false)
const saveState = ref('Draft lokal')

watch(() => articleForm.value.title, (title) => {
  if (!slugTouched.value) {
    articleForm.value.slug = slugify(title)
    seoForm.value.canonical = `https://kembarfutagroup.com/berita/${articleForm.value.slug}`
  }
})

watch(() => articleForm.value.slug, (slug) => {
  seoForm.value.canonical = `https://kembarfutagroup.com/berita/${slug}`
})

const contentWordCount = computed(() => articleForm.value.content.trim().split(/\s+/).filter(Boolean).length)
const readingTime = computed(() => `${Math.max(1, Math.ceil(contentWordCount.value / 200))} menit`)
const h2Count = computed(() => (articleForm.value.content.match(/^##\s+/gm) ?? []).length)

const keywordInTitle = computed(() => articleForm.value.title.toLowerCase().includes(seoForm.value.focusKeyword.toLowerCase()))
const keywordInDescription = computed(() => seoForm.value.metaDescription.toLowerCase().includes(seoForm.value.focusKeyword.toLowerCase()))
const keywordInContent = computed(() => articleForm.value.content.toLowerCase().includes(seoForm.value.focusKeyword.toLowerCase()))

const seoChecks = computed(() => [
  {
    label: 'Meta title',
    value: `${seoForm.value.metaTitle.length}/60`,
    detail: 'Ideal 45 sampai 60 karakter.',
    icon: 'i-lucide-heading-1',
    status: seoForm.value.metaTitle.length >= 35 && seoForm.value.metaTitle.length <= 60 ? 'ready' : 'warning'
  },
  {
    label: 'Meta description',
    value: `${seoForm.value.metaDescription.length}/160`,
    detail: 'Ideal 120 sampai 160 karakter.',
    icon: 'i-lucide-align-left',
    status: seoForm.value.metaDescription.length >= 120 && seoForm.value.metaDescription.length <= 160 ? 'ready' : 'warning'
  },
  {
    label: 'Focus keyword',
    value: keywordInTitle.value || keywordInDescription.value || keywordInContent.value ? 'Terpakai' : 'Belum kuat',
    detail: 'Keyword sebaiknya muncul alami di judul, deskripsi, atau konten.',
    icon: 'i-lucide-key-round',
    status: keywordInTitle.value && keywordInDescription.value ? 'ready' : 'warning'
  },
  {
    label: 'Heading H2',
    value: `${h2Count.value} H2`,
    detail: 'Minimal dua subjudul membantu struktur artikel.',
    icon: 'i-lucide-list-tree',
    status: h2Count.value >= 2 ? 'ready' : 'warning'
  },
  {
    label: 'Panjang konten',
    value: `${contentWordCount.value} kata`,
    detail: 'Artikel pilar sebaiknya minimal 600 kata.',
    icon: 'i-lucide-file-text',
    status: contentWordCount.value >= 600 ? 'ready' : 'warning'
  },
  {
    label: 'Alt text gambar',
    value: seoForm.value.imageAlt ? 'Ada' : 'Kosong',
    detail: 'Alt text perlu menjelaskan isi gambar secara spesifik.',
    icon: 'i-lucide-image',
    status: seoForm.value.imageAlt.length >= 20 ? 'ready' : 'warning'
  },
  {
    label: 'Canonical',
    value: seoForm.value.canonical.startsWith('https://') ? 'Valid' : 'Review',
    detail: 'Canonical wajib mengarah ke URL artikel final.',
    icon: 'i-lucide-link',
    status: seoForm.value.canonical.startsWith('https://') ? 'ready' : 'warning'
  },
  {
    label: 'Schema',
    value: seoForm.value.schemaType,
    detail: 'Article schema membantu mesin pencari memahami konten.',
    icon: 'i-lucide-code-xml',
    status: seoForm.value.schemaType ? 'ready' : 'warning'
  }
] satisfies {
  label: string
  value: string
  detail: string
  icon: string
  status: SeoCheckStatus
}[])

const seoScore = computed(() => Math.round((seoChecks.value.filter(check => check.status === 'ready').length / seoChecks.value.length) * 100))

const scoreToneClass = computed(() => {
  if (seoScore.value >= 85) {
    return 'text-emerald-700'
  }

  if (seoScore.value >= 70) {
    return 'text-amber-700'
  }

  return 'text-red-700'
})

const saveDraft = () => {
  saveState.value = 'Draft tersimpan'

  window.setTimeout(() => {
    saveState.value = 'Draft lokal'
  }, 1800)
}
</script>

<template>
  <CmsShell
    title="Buat Artikel"
    description="Tulis artikel baru lengkap dengan metadata SEO, gambar utama, Open Graph, schema, FAQ, dan preview hasil pencarian."
    badge-label="Buat Artikel"
    badge-icon="i-lucide-file-plus-2"
  >
    <template #actions>
      <NuxtLink
        to="/cms/artikel"
        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-4 text-sm font-semibold text-ink transition hover:border-brand-green hover:text-brand-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
      >
        <UIcon
          name="i-lucide-arrow-left"
          class="size-4"
        />
        Daftar Artikel
      </NuxtLink>
      <button
        type="button"
        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-semibold text-white transition hover:bg-brand-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
        @click="saveDraft"
      >
        <UIcon
          name="i-lucide-save"
          class="size-4"
        />
        Simpan Draft
      </button>
    </template>

    <section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <article class="rounded-lg border border-black/10 bg-white p-5">
        <p class="text-sm font-medium text-black/55">
          SEO Score
        </p>
        <div class="mt-3 flex items-end justify-between gap-3">
          <p
            class="text-3xl font-semibold leading-none"
            :class="scoreToneClass"
          >
            {{ seoScore }}
          </p>
          <span class="inline-flex size-11 items-center justify-center rounded-lg bg-brand-green text-white">
            <UIcon
              name="i-lucide-gauge"
              class="size-5"
            />
          </span>
        </div>
        <p class="mt-5 text-sm font-medium text-black/56">
          {{ seoChecks.filter(check => check.status === 'ready').length }} dari {{ seoChecks.length }} checklist siap
        </p>
      </article>

      <article class="rounded-lg border border-black/10 bg-white p-5">
        <p class="text-sm font-medium text-black/55">
          Word Count
        </p>
        <p class="mt-3 text-3xl font-semibold leading-none text-ink">
          {{ contentWordCount }}
        </p>
        <p class="mt-5 text-sm font-medium text-black/56">
          Estimasi baca {{ readingTime }}
        </p>
      </article>

      <article class="rounded-lg border border-black/10 bg-white p-5">
        <p class="text-sm font-medium text-black/55">
          URL Artikel
        </p>
        <p class="mt-3 truncate text-lg font-semibold leading-tight text-brand-green">
          /berita/{{ articleForm.slug }}
        </p>
        <p class="mt-5 text-sm font-medium text-black/56">
          {{ saveState }}
        </p>
      </article>

      <article class="rounded-lg border border-black/10 bg-white p-5">
        <p class="text-sm font-medium text-black/55">
          Status
        </p>
        <p class="mt-3 text-3xl font-semibold leading-none text-ink">
          Draft
        </p>
        <p class="mt-5 text-sm font-medium text-black/56">
          Siap review setelah SEO lengkap
        </p>
      </article>
    </section>

    <section class="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
      <div class="grid gap-6">
        <section class="rounded-lg border border-black/10 bg-white p-5">
          <div class="flex items-center justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold leading-tight text-ink">
                Informasi Artikel
              </h2>
              <p class="mt-2 text-sm leading-6 text-black/56">
                Data utama untuk listing berita dan workflow editorial.
              </p>
            </div>
            <UIcon
              name="i-lucide-newspaper"
              class="size-5 text-black/40"
            />
          </div>

          <div class="mt-5 grid gap-4">
            <label class="grid gap-2">
              <span class="text-xs font-bold uppercase tracking-wide text-black/45">Judul artikel</span>
              <input
                v-model="articleForm.title"
                class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
              >
            </label>

            <div class="grid gap-4 md:grid-cols-2">
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Slug</span>
                <input
                  v-model="articleForm.slug"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                  @input="slugTouched = true"
                >
              </label>
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Kategori</span>
                <select
                  v-model="articleForm.category"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
                  <option>Proyek</option>
                  <option>Bisnis</option>
                  <option>Perusahaan</option>
                  <option>CSR</option>
                  <option>Karir</option>
                </select>
              </label>
            </div>

            <div class="grid gap-4 md:grid-cols-3">
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Status</span>
                <select
                  v-model="articleForm.status"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
                  <option value="draft">
                    Draft
                  </option>
                  <option value="review">
                    Review
                  </option>
                  <option value="scheduled">
                    Scheduled
                  </option>
                  <option value="published">
                    Published
                  </option>
                </select>
              </label>
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Penulis</span>
                <input
                  v-model="articleForm.author"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
              </label>
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Tanggal publish</span>
                <input
                  v-model="articleForm.publishDate"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
              </label>
            </div>

            <label class="grid gap-2">
              <span class="text-xs font-bold uppercase tracking-wide text-black/45">Excerpt</span>
              <textarea
                v-model="articleForm.excerpt"
                rows="3"
                class="resize-none rounded-lg border border-black/10 bg-[#f8faf6] px-3 py-3 text-sm font-medium leading-6 text-ink outline-none transition focus:border-brand-green focus:bg-white"
              />
              <span class="text-xs font-semibold text-black/45">{{ articleForm.excerpt.length }} karakter</span>
            </label>

            <label class="grid gap-2">
              <span class="text-xs font-bold uppercase tracking-wide text-black/45">Tag</span>
              <input
                v-model="articleForm.tags"
                class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
              >
            </label>
          </div>
        </section>

        <section class="rounded-lg border border-black/10 bg-white p-5">
          <div class="flex items-center justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold leading-tight text-ink">
                Isi Artikel
              </h2>
              <p class="mt-2 text-sm leading-6 text-black/56">
                Konten mendukung heading markdown sederhana untuk preview struktur.
              </p>
            </div>
            <UIcon
              name="i-lucide-file-text"
              class="size-5 text-black/40"
            />
          </div>

          <label class="mt-5 grid gap-2">
            <span class="text-xs font-bold uppercase tracking-wide text-black/45">Body content</span>
            <textarea
              v-model="articleForm.content"
              rows="16"
              class="resize-none rounded-lg border border-black/10 bg-[#f8faf6] px-3 py-3 text-sm font-medium leading-6 text-ink outline-none transition focus:border-brand-green focus:bg-white"
            />
          </label>
        </section>

        <section class="rounded-lg border border-black/10 bg-white p-5">
          <div class="flex items-center justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold leading-tight text-ink">
                Media Utama
              </h2>
              <p class="mt-2 text-sm leading-6 text-black/56">
                Gambar utama, Open Graph image, dan alt text.
              </p>
            </div>
            <button
              type="button"
              class="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-black/10 px-4 text-sm font-semibold text-ink transition hover:border-brand-green hover:text-brand-green"
            >
              <UIcon
                name="i-lucide-upload"
                class="size-4"
              />
              Upload
            </button>
          </div>

          <div class="mt-5 grid gap-5 lg:grid-cols-[240px_minmax(0,1fr)]">
            <div class="flex aspect-[4/3] items-center justify-center rounded-lg bg-[linear-gradient(135deg,#008938,#fe8700)] text-white">
              <UIcon
                name="i-lucide-image"
                class="size-10"
              />
            </div>
            <div class="grid gap-4">
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Cover image</span>
                <input
                  v-model="seoForm.coverImage"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
              </label>
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Alt text</span>
                <textarea
                  v-model="seoForm.imageAlt"
                  rows="3"
                  class="resize-none rounded-lg border border-black/10 bg-[#f8faf6] px-3 py-3 text-sm font-medium leading-6 text-ink outline-none transition focus:border-brand-green focus:bg-white"
                />
              </label>
            </div>
          </div>
        </section>

        <section class="rounded-lg border border-black/10 bg-white p-5">
          <div class="flex items-center justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold leading-tight text-ink">
                SEO Dasar
              </h2>
              <p class="mt-2 text-sm leading-6 text-black/56">
                Metadata utama untuk mesin pencari dan index control.
              </p>
            </div>
            <UIcon
              name="i-lucide-search-check"
              class="size-5 text-black/40"
            />
          </div>

          <div class="mt-5 grid gap-4">
            <div class="grid gap-4 md:grid-cols-2">
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Focus keyword</span>
                <input
                  v-model="seoForm.focusKeyword"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
              </label>
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Secondary keyword</span>
                <input
                  v-model="seoForm.secondaryKeywords"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
              </label>
            </div>

            <label class="grid gap-2">
              <span class="text-xs font-bold uppercase tracking-wide text-black/45">Meta title</span>
              <input
                v-model="seoForm.metaTitle"
                class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
              >
              <span class="text-xs font-semibold text-black/45">{{ seoForm.metaTitle.length }} / 60 karakter</span>
            </label>

            <label class="grid gap-2">
              <span class="text-xs font-bold uppercase tracking-wide text-black/45">Meta description</span>
              <textarea
                v-model="seoForm.metaDescription"
                rows="4"
                class="resize-none rounded-lg border border-black/10 bg-[#f8faf6] px-3 py-3 text-sm font-medium leading-6 text-ink outline-none transition focus:border-brand-green focus:bg-white"
              />
              <span class="text-xs font-semibold text-black/45">{{ seoForm.metaDescription.length }} / 160 karakter</span>
            </label>

            <div class="grid gap-4 md:grid-cols-[minmax(0,1fr)_180px]">
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Canonical URL</span>
                <input
                  v-model="seoForm.canonical"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
              </label>
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Robots</span>
                <select
                  v-model="seoForm.robots"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
                  <option>index, follow</option>
                  <option>noindex, follow</option>
                  <option>noindex, nofollow</option>
                </select>
              </label>
            </div>
          </div>
        </section>

        <section class="rounded-lg border border-black/10 bg-white p-5">
          <div class="flex items-center justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold leading-tight text-ink">
                Open Graph & Schema
              </h2>
              <p class="mt-2 text-sm leading-6 text-black/56">
                Data sosial, article schema, dan FAQ snippet.
              </p>
            </div>
            <UIcon
              name="i-lucide-share-2"
              class="size-5 text-black/40"
            />
          </div>

          <div class="mt-5 grid gap-4">
            <div class="grid gap-4 md:grid-cols-2">
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">OG title</span>
                <input
                  v-model="seoForm.ogTitle"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
              </label>
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">OG image</span>
                <input
                  v-model="seoForm.ogImage"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
              </label>
            </div>

            <label class="grid gap-2">
              <span class="text-xs font-bold uppercase tracking-wide text-black/45">OG description</span>
              <textarea
                v-model="seoForm.ogDescription"
                rows="3"
                class="resize-none rounded-lg border border-black/10 bg-[#f8faf6] px-3 py-3 text-sm font-medium leading-6 text-ink outline-none transition focus:border-brand-green focus:bg-white"
              />
            </label>

            <div class="grid gap-4 md:grid-cols-2">
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Schema type</span>
                <select
                  v-model="seoForm.schemaType"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
                  <option>Article</option>
                  <option>NewsArticle</option>
                  <option>BlogPosting</option>
                </select>
              </label>
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Article section</span>
                <input
                  v-model="seoForm.articleSection"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
              </label>
            </div>

            <div class="grid gap-4 md:grid-cols-2">
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">FAQ question</span>
                <textarea
                  v-model="seoForm.faqQuestion"
                  rows="3"
                  class="resize-none rounded-lg border border-black/10 bg-[#f8faf6] px-3 py-3 text-sm font-medium leading-6 text-ink outline-none transition focus:border-brand-green focus:bg-white"
                />
              </label>
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">FAQ answer</span>
                <textarea
                  v-model="seoForm.faqAnswer"
                  rows="3"
                  class="resize-none rounded-lg border border-black/10 bg-[#f8faf6] px-3 py-3 text-sm font-medium leading-6 text-ink outline-none transition focus:border-brand-green focus:bg-white"
                />
              </label>
            </div>
          </div>
        </section>
      </div>

      <aside class="grid content-start gap-6 xl:sticky xl:top-6">
        <section class="rounded-lg border border-black/10 bg-white p-5">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold leading-tight text-ink">
                Checklist SEO
              </h2>
              <p class="mt-2 text-sm leading-6 text-black/56">
                Ringkasan kesiapan artikel.
              </p>
            </div>
            <p
              class="text-3xl font-semibold leading-none"
              :class="scoreToneClass"
            >
              {{ seoScore }}
            </p>
          </div>

          <div class="mt-5 grid gap-3">
            <article
              v-for="check in seoChecks"
              :key="check.label"
              class="rounded-lg border border-black/8 bg-[#fbfcfa] p-4"
            >
              <div class="flex items-start justify-between gap-3">
                <div class="flex items-start gap-3">
                  <span class="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#eef3ea] text-brand-green">
                    <UIcon
                      :name="check.icon"
                      class="size-4"
                    />
                  </span>
                  <div>
                    <h3 class="text-sm font-semibold text-ink">
                      {{ check.label }}
                    </h3>
                    <p class="mt-1 text-xs font-semibold text-black/45">
                      {{ check.value }}
                    </p>
                  </div>
                </div>
                <span
                  class="mt-1 size-2.5 shrink-0 rounded-full"
                  :class="checkStatusClass[check.status]"
                />
              </div>
              <p class="mt-3 text-sm leading-6 text-black/55">
                {{ check.detail }}
              </p>
            </article>
          </div>
        </section>

        <section class="rounded-lg border border-black/10 bg-ink p-5 text-white">
          <h2 class="text-xl font-semibold leading-tight">
            SERP Preview
          </h2>
          <div class="mt-5 rounded-lg border border-white/10 bg-white/6 p-4">
            <p class="truncate text-sm font-medium text-[#8ab4f8]">
              {{ seoForm.metaTitle }}
            </p>
            <p class="mt-1 truncate text-xs font-medium text-[#81c995]">
              {{ seoForm.canonical }}
            </p>
            <p class="mt-2 line-clamp-3 text-sm leading-6 text-white/64">
              {{ seoForm.metaDescription }}
            </p>
          </div>
        </section>

        <section class="rounded-lg border border-black/10 bg-white p-5">
          <h2 class="text-xl font-semibold leading-tight text-ink">
            Preview Artikel
          </h2>
          <div class="mt-5 rounded-lg border border-black/10 bg-[#fbfcfa] p-4">
            <div class="flex aspect-[16/9] items-center justify-center rounded-lg bg-[linear-gradient(135deg,#008938,#fe8700)] text-white">
              <UIcon
                name="i-lucide-image"
                class="size-10"
              />
            </div>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="inline-flex min-h-7 items-center rounded-full bg-brand-green px-3 text-xs font-bold text-white">
                {{ articleForm.category }}
              </span>
              <span class="inline-flex min-h-7 items-center rounded-full bg-black/8 px-3 text-xs font-bold text-black/54">
                {{ readingTime }}
              </span>
            </div>
            <h3 class="mt-4 text-xl font-semibold leading-tight text-ink">
              {{ articleForm.title }}
            </h3>
            <p class="mt-3 text-sm leading-6 text-black/62">
              {{ articleForm.excerpt }}
            </p>
          </div>
        </section>

        <section class="rounded-lg border border-black/10 bg-white p-5">
          <h2 class="text-xl font-semibold leading-tight text-ink">
            Schema Preview
          </h2>
          <dl class="mt-5 grid gap-3 text-sm">
            <div class="flex items-center justify-between gap-4 rounded-lg bg-[#fbfcfa] px-3 py-2">
              <dt class="font-semibold text-black/50">
                Type
              </dt>
              <dd class="font-semibold text-ink">
                {{ seoForm.schemaType }}
              </dd>
            </div>
            <div class="flex items-center justify-between gap-4 rounded-lg bg-[#fbfcfa] px-3 py-2">
              <dt class="font-semibold text-black/50">
                Section
              </dt>
              <dd class="font-semibold text-ink">
                {{ seoForm.articleSection }}
              </dd>
            </div>
            <div class="flex items-center justify-between gap-4 rounded-lg bg-[#fbfcfa] px-3 py-2">
              <dt class="font-semibold text-black/50">
                Robots
              </dt>
              <dd class="font-semibold text-ink">
                {{ seoForm.robots }}
              </dd>
            </div>
          </dl>
        </section>
      </aside>
    </section>
  </CmsShell>
</template>

<script setup lang="ts">
import {
  articleStatusClass,
  articleStatusLabel,
  cmsArticles,
  cmsEditorialTasks,
  scoreClass
} from '~/data/cms'

const pageTitle = 'CMS Artikel - Kembar Futagroup'
const pageDescription = 'Halaman frontend CMS artikel untuk mengelola draft, kategori, status publish, dan isi artikel Kembar Futagroup.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  robots: 'noindex, nofollow',
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  twitterCard: 'summary'
})

const articles = ref(cmsArticles.map(article => ({ ...article })))

const statusFilters = [
  { value: 'all', label: 'Semua' },
  { value: 'draft', label: 'Draft' },
  { value: 'review', label: 'Review' },
  { value: 'scheduled', label: 'Scheduled' },
  { value: 'published', label: 'Published' }
] as const

const selectedStatus = ref<(typeof statusFilters)[number]['value']>('all')
const selectedArticleId = ref(articles.value[0]?.id ?? '')
const searchQuery = ref('')
const saveState = ref('Draft lokal')

const selectedArticle = computed(() => articles.value.find(article => article.id === selectedArticleId.value) ?? articles.value[0])

const filteredArticles = computed(() => {
  const search = searchQuery.value.trim().toLowerCase()

  return articles.value.filter((article) => {
    const matchesStatus = selectedStatus.value === 'all' || article.status === selectedStatus.value
    const matchesSearch = !search || [
      article.title,
      article.slug,
      article.category,
      article.focusKeyword,
      article.tags
    ].some(item => item.toLowerCase().includes(search))

    return matchesStatus && matchesSearch
  })
})

const metrics = computed(() => [
  {
    label: 'Total Artikel',
    value: `${articles.value.length}`,
    detail: 'Semua status editorial',
    icon: 'i-lucide-newspaper',
    tone: 'bg-brand-green text-white'
  },
  {
    label: 'Menunggu Review',
    value: `${articles.value.filter(article => article.status === 'review').length}`,
    detail: 'Butuh persetujuan editor',
    icon: 'i-lucide-message-square-warning',
    tone: 'bg-brand-orange text-white'
  },
  {
    label: 'Terjadwal',
    value: `${articles.value.filter(article => article.status === 'scheduled').length}`,
    detail: 'Siap masuk kalender publish',
    icon: 'i-lucide-calendar-clock',
    tone: 'bg-sky-600 text-white'
  },
  {
    label: 'Draft',
    value: `${articles.value.filter(article => article.status === 'draft').length}`,
    detail: 'Konten belum siap tayang',
    icon: 'i-lucide-file-pen-line',
    tone: 'bg-ink text-white'
  }
])

const selectArticle = (articleId: string) => {
  selectedArticleId.value = articleId
  saveState.value = 'Draft lokal'
}

const saveDraft = () => {
  saveState.value = 'Tersimpan lokal'

  window.setTimeout(() => {
    saveState.value = 'Draft lokal'
  }, 1800)
}
</script>

<template>
  <CmsShell
    title="CMS Artikel"
    description="Kelola draft, kategori, status publish, excerpt, isi artikel, dan preview kartu berita."
    badge-label="Artikel"
    badge-icon="i-lucide-newspaper"
  >
    <template #actions>
      <button
        type="button"
        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-4 text-sm font-semibold text-ink transition hover:border-brand-green hover:text-brand-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
      >
        <UIcon
          name="i-lucide-eye"
          class="size-4"
        />
        Preview
      </button>
      <NuxtLink
        to="/cms/artikel/buat"
        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-semibold text-white transition hover:bg-brand-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
      >
        <UIcon
          name="i-lucide-plus"
          class="size-4"
        />
        Artikel Baru
      </NuxtLink>
    </template>

    <section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <article
        v-for="metric in metrics"
        :key="metric.label"
        class="rounded-lg border border-black/10 bg-white p-5"
      >
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="text-sm font-medium text-black/55">
              {{ metric.label }}
            </p>
            <p class="mt-3 text-3xl font-semibold leading-none text-ink">
              {{ metric.value }}
            </p>
          </div>
          <span
            class="inline-flex size-11 shrink-0 items-center justify-center rounded-lg"
            :class="metric.tone"
          >
            <UIcon
              :name="metric.icon"
              class="size-5"
            />
          </span>
        </div>
        <p class="mt-5 text-sm font-medium text-black/56">
          {{ metric.detail }}
        </p>
      </article>
    </section>

    <section class="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(360px,.75fr)]">
      <div class="rounded-lg border border-black/10 bg-white">
        <div class="border-b border-black/10 p-5">
          <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h2 class="text-xl font-semibold leading-tight text-ink">
                Daftar Artikel
              </h2>
              <p class="mt-2 text-sm leading-6 text-black/56">
                Pilih artikel untuk diedit di panel kanan.
              </p>
            </div>

            <label class="relative block sm:w-80">
              <span class="sr-only">Cari artikel</span>
              <UIcon
                name="i-lucide-search"
                class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-black/40"
              />
              <input
                v-model="searchQuery"
                type="search"
                class="h-11 w-full rounded-lg border border-black/10 bg-[#f8faf6] pl-10 pr-3 text-sm font-medium text-ink outline-none transition placeholder:text-black/38 focus:border-brand-green focus:bg-white"
                placeholder="Cari judul, slug, keyword, tag"
              >
            </label>
          </div>

          <div class="mt-5 flex flex-wrap gap-2">
            <button
              v-for="filter in statusFilters"
              :key="filter.value"
              type="button"
              class="inline-flex min-h-10 items-center justify-center rounded-lg px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
              :class="selectedStatus === filter.value ? 'bg-ink text-white' : 'bg-[#f2f4ef] text-black/62 hover:bg-black hover:text-white'"
              @click="selectedStatus = filter.value"
            >
              {{ filter.label }}
            </button>
          </div>
        </div>

        <div class="divide-y divide-black/8">
          <article
            v-for="article in filteredArticles"
            :key="article.id"
            class="cursor-pointer p-5 transition hover:bg-brand-green/5"
            :class="selectedArticle?.id === article.id ? 'bg-brand-green/8' : ''"
            @click="selectArticle(article.id)"
          >
            <div class="grid gap-4 lg:grid-cols-[minmax(0,1fr)_170px_110px] lg:items-start">
              <div class="min-w-0">
                <div class="flex flex-wrap items-center gap-2">
                  <span
                    class="inline-flex min-h-7 items-center rounded-full border px-3 text-xs font-bold"
                    :class="articleStatusClass[article.status]"
                  >
                    {{ articleStatusLabel[article.status] }}
                  </span>
                  <span class="inline-flex min-h-7 items-center rounded-full bg-[#eef3ea] px-3 text-xs font-bold text-black/54">
                    {{ article.category }}
                  </span>
                </div>
                <h3 class="mt-3 text-base font-semibold leading-snug text-ink">
                  {{ article.title }}
                </h3>
                <p class="mt-2 line-clamp-2 text-sm leading-6 text-black/56">
                  {{ article.excerpt }}
                </p>
                <p class="mt-3 truncate text-xs font-semibold text-brand-green">
                  /berita/{{ article.slug }}
                </p>
              </div>

              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-black/42">
                  Publish
                </p>
                <p class="mt-2 text-sm font-semibold text-ink">
                  {{ article.publishDate }}
                </p>
                <p class="mt-1 text-xs font-medium text-black/45">
                  {{ article.author }}
                </p>
              </div>

              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-black/42">
                  SEO
                </p>
                <p
                  class="mt-2 text-lg font-semibold"
                  :class="scoreClass(article.score)"
                >
                  {{ article.score }}
                </p>
                <p class="mt-1 text-xs font-medium text-black/45">
                  {{ article.wordCount }} kata
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div
        v-if="selectedArticle"
        class="grid gap-6"
      >
        <section class="rounded-lg border border-black/10 bg-white p-5">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold leading-tight text-ink">
                Editor Artikel
              </h2>
              <p class="mt-2 text-sm font-medium text-black/52">
                /berita/{{ selectedArticle.slug }}
              </p>
            </div>
            <span class="inline-flex min-h-8 shrink-0 items-center rounded-full bg-[#eef3ea] px-3 text-xs font-bold text-black/60">
              {{ saveState }}
            </span>
          </div>

          <div class="mt-5 grid gap-4">
            <label class="grid gap-2">
              <span class="text-xs font-bold uppercase tracking-wide text-black/45">Judul artikel</span>
              <input
                v-model="selectedArticle.title"
                class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
              >
            </label>

            <div class="grid gap-4 sm:grid-cols-2">
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Slug</span>
                <input
                  v-model="selectedArticle.slug"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
              </label>
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Status</span>
                <select
                  v-model="selectedArticle.status"
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
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Kategori</span>
                <select
                  v-model="selectedArticle.category"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
                  <option>Proyek</option>
                  <option>Bisnis</option>
                  <option>Perusahaan</option>
                  <option>CSR</option>
                  <option>Karir</option>
                </select>
              </label>
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Tanggal publish</span>
                <input
                  v-model="selectedArticle.publishDate"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
              </label>
            </div>

            <label class="grid gap-2">
              <span class="text-xs font-bold uppercase tracking-wide text-black/45">Excerpt</span>
              <textarea
                v-model="selectedArticle.excerpt"
                rows="3"
                class="resize-none rounded-lg border border-black/10 bg-[#f8faf6] px-3 py-3 text-sm font-medium leading-6 text-ink outline-none transition focus:border-brand-green focus:bg-white"
              />
              <span class="text-xs font-semibold text-black/45">{{ selectedArticle.excerpt.length }} karakter</span>
            </label>

            <label class="grid gap-2">
              <span class="text-xs font-bold uppercase tracking-wide text-black/45">Isi artikel</span>
              <textarea
                v-model="selectedArticle.content"
                rows="10"
                class="resize-none rounded-lg border border-black/10 bg-[#f8faf6] px-3 py-3 text-sm font-medium leading-6 text-ink outline-none transition focus:border-brand-green focus:bg-white"
              />
            </label>

            <button
              type="button"
              class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand-green px-4 text-sm font-semibold text-white transition hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
              @click="saveDraft"
            >
              <UIcon
                name="i-lucide-save"
                class="size-4"
              />
              Simpan draft lokal
            </button>
          </div>
        </section>

        <section class="rounded-lg border border-black/10 bg-ink p-5 text-white">
          <h2 class="text-xl font-semibold leading-tight">
            Editorial Task
          </h2>
          <div class="mt-5 grid gap-4">
            <article
              v-for="task in cmsEditorialTasks"
              :key="task.title"
              class="rounded-lg border border-white/10 bg-white/6 p-4"
            >
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3 class="text-sm font-semibold leading-snug text-white">
                    {{ task.title }}
                  </h3>
                  <p class="mt-2 text-xs font-semibold text-white/45">
                    {{ task.owner }} - {{ task.due }}
                  </p>
                </div>
                <span class="text-sm font-semibold text-brand-orange">{{ task.progress }}%</span>
              </div>
              <div class="mt-4 h-2 rounded-full bg-white/12">
                <div
                  class="h-2 rounded-full bg-brand-orange"
                  :style="{ width: `${task.progress}%` }"
                />
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
  </CmsShell>
</template>

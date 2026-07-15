<script setup lang="ts">
import {
  articleStatusClass,
  articleStatusLabel,
  checkStatusClass,
  cmsArticles,
  cmsContentChecks,
  cmsKeywordRows,
  scoreClass
} from '~/data/cms'

const pageTitle = 'CMS SEO Artikel - Kembar Futagroup'
const pageDescription = 'Halaman frontend untuk mengelola SEO artikel, meta tag, keyword, preview SERP, dan checklist optimasi.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  robots: 'noindex, nofollow',
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  twitterCard: 'summary'
})

const articles = ref(cmsArticles.map(article => ({ ...article })))
const selectedArticleId = ref(articles.value[0]?.id ?? '')
const saveState = ref('Draft SEO lokal')

const selectedArticle = computed(() => articles.value.find(article => article.id === selectedArticleId.value) ?? articles.value[0])
const readySeoCount = computed(() => articles.value.filter(article => article.score >= 80).length)
const averageScore = computed(() => Math.round(articles.value.reduce((total, article) => total + article.score, 0) / articles.value.length))

const metrics = computed(() => [
  {
    label: 'SEO Rata-rata',
    value: `${averageScore.value}`,
    detail: 'Dari artikel CMS',
    icon: 'i-lucide-gauge',
    tone: 'bg-brand-green text-white'
  },
  {
    label: 'Meta Siap',
    value: `${readySeoCount.value}`,
    detail: 'Score 80 ke atas',
    icon: 'i-lucide-search-check',
    tone: 'bg-sky-600 text-white'
  },
  {
    label: 'Perlu Optimasi',
    value: `${articles.value.length - readySeoCount.value}`,
    detail: 'Butuh review keyword',
    icon: 'i-lucide-triangle-alert',
    tone: 'bg-brand-orange text-white'
  },
  {
    label: 'Keyword Map',
    value: `${cmsKeywordRows.length}`,
    detail: 'Keyword prioritas artikel',
    icon: 'i-lucide-chart-no-axes-column-increasing',
    tone: 'bg-ink text-white'
  }
])

const selectArticle = (articleId: string) => {
  selectedArticleId.value = articleId
  saveState.value = 'Draft SEO lokal'
}

const saveSeoDraft = () => {
  saveState.value = 'SEO tersimpan'

  window.setTimeout(() => {
    saveState.value = 'Draft SEO lokal'
  }, 1800)
}
</script>

<template>
  <CmsShell
    title="CMS SEO Artikel"
    description="Kelola focus keyword, meta title, meta description, Open Graph, alt text gambar, dan preview SERP per artikel."
    badge-label="SEO"
    badge-icon="i-lucide-search-check"
  >
    <template #actions>
      <button
        type="button"
        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-4 text-sm font-semibold text-ink transition hover:border-brand-green hover:text-brand-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
      >
        <UIcon
          name="i-lucide-list-checks"
          class="size-4"
        />
        Audit
      </button>
      <button
        type="button"
        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-semibold text-white transition hover:bg-brand-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
      >
        <UIcon
          name="i-lucide-download"
          class="size-4"
        />
        Export
      </button>
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

    <section class="grid gap-6 xl:grid-cols-[minmax(0,.95fr)_minmax(420px,1.05fr)]">
      <div class="rounded-lg border border-black/10 bg-white">
        <div class="border-b border-black/10 p-5">
          <h2 class="text-xl font-semibold leading-tight text-ink">
            Artikel & Score SEO
          </h2>
          <p class="mt-2 text-sm leading-6 text-black/56">
            Pilih artikel untuk mengedit metadata SEO.
          </p>
        </div>

        <div class="divide-y divide-black/8">
          <article
            v-for="article in articles"
            :key="article.id"
            class="cursor-pointer p-5 transition hover:bg-brand-green/5"
            :class="selectedArticle?.id === article.id ? 'bg-brand-green/8' : ''"
            @click="selectArticle(article.id)"
          >
            <div class="flex items-start justify-between gap-5">
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
                <h3 class="mt-3 text-sm font-semibold leading-snug text-ink">
                  {{ article.title }}
                </h3>
                <p class="mt-2 truncate text-xs font-semibold text-brand-green">
                  {{ article.focusKeyword }}
                </p>
              </div>
              <div class="shrink-0 text-right">
                <p
                  class="text-2xl font-semibold leading-none"
                  :class="scoreClass(article.score)"
                >
                  {{ article.score }}
                </p>
                <p class="mt-2 text-xs font-medium text-black/45">
                  score
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
                Editor SEO
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
              <span class="text-xs font-bold uppercase tracking-wide text-black/45">Focus keyword</span>
              <input
                v-model="selectedArticle.focusKeyword"
                class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
              >
            </label>

            <label class="grid gap-2">
              <span class="text-xs font-bold uppercase tracking-wide text-black/45">Meta title</span>
              <input
                v-model="selectedArticle.metaTitle"
                class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
              >
              <span class="text-xs font-semibold text-black/45">{{ selectedArticle.metaTitle.length }} / 60 karakter</span>
            </label>

            <label class="grid gap-2">
              <span class="text-xs font-bold uppercase tracking-wide text-black/45">Meta description</span>
              <textarea
                v-model="selectedArticle.metaDescription"
                rows="4"
                class="resize-none rounded-lg border border-black/10 bg-[#f8faf6] px-3 py-3 text-sm font-medium leading-6 text-ink outline-none transition focus:border-brand-green focus:bg-white"
              />
              <span class="text-xs font-semibold text-black/45">{{ selectedArticle.metaDescription.length }} / 160 karakter</span>
            </label>

            <div class="grid gap-4 sm:grid-cols-2">
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Open Graph title</span>
                <input
                  v-model="selectedArticle.ogTitle"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
              </label>
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Alt text gambar</span>
                <input
                  v-model="selectedArticle.imageAlt"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
              </label>
            </div>

            <button
              type="button"
              class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand-green px-4 text-sm font-semibold text-white transition hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
              @click="saveSeoDraft"
            >
              <UIcon
                name="i-lucide-save"
                class="size-4"
              />
              Simpan SEO lokal
            </button>
          </div>
        </section>

        <section class="rounded-lg border border-black/10 bg-ink p-5 text-white">
          <h2 class="text-xl font-semibold leading-tight">
            SERP Preview
          </h2>
          <div class="mt-5 rounded-lg border border-white/10 bg-white/6 p-4">
            <p class="truncate text-sm font-medium text-[#8ab4f8]">
              {{ selectedArticle.metaTitle }}
            </p>
            <p class="mt-1 truncate text-xs font-medium text-[#81c995]">
              https://kembarfutagroup.com/berita/{{ selectedArticle.slug }}
            </p>
            <p class="mt-2 line-clamp-3 text-sm leading-6 text-white/64">
              {{ selectedArticle.metaDescription }}
            </p>
          </div>
        </section>
      </div>
    </section>

    <section class="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(420px,1fr)]">
      <div class="rounded-lg border border-black/10 bg-white p-5">
        <h2 class="text-xl font-semibold leading-tight text-ink">
          Keyword Map
        </h2>
        <div class="mt-5 grid gap-3">
          <article
            v-for="row in cmsKeywordRows"
            :key="row.keyword"
            class="grid gap-3 rounded-lg border border-black/8 bg-[#fbfcfa] p-4 md:grid-cols-[minmax(0,1fr)_110px_130px]"
          >
            <div class="min-w-0">
              <p class="text-sm font-semibold text-ink">
                {{ row.keyword }}
              </p>
              <p class="mt-1 truncate text-xs font-semibold text-brand-green">
                {{ row.article }}
              </p>
            </div>
            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-black/42">
                Volume
              </p>
              <p class="mt-1 text-sm font-semibold text-ink">
                {{ row.volume }}
              </p>
            </div>
            <div>
              <p class="text-xs font-bold uppercase tracking-wide text-black/42">
                Gap
              </p>
              <p class="mt-1 text-sm font-semibold text-brand-orange">
                {{ row.gap }}
              </p>
            </div>
          </article>
        </div>
      </div>

      <div class="rounded-lg border border-black/10 bg-white p-5">
        <h2 class="text-xl font-semibold leading-tight text-ink">
          Checklist SEO
        </h2>
        <div class="mt-5 grid gap-4 sm:grid-cols-2">
          <article
            v-for="check in cmsContentChecks"
            :key="check.label"
            class="rounded-lg border border-black/8 bg-[#fbfcfa] p-4"
          >
            <div class="flex items-start justify-between gap-4">
              <div class="flex items-start gap-3">
                <span class="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#eef3ea] text-brand-green">
                  <UIcon
                    :name="check.icon"
                    class="size-5"
                  />
                </span>
                <div>
                  <h3 class="text-sm font-semibold text-ink">
                    {{ check.label }}
                  </h3>
                  <p class="mt-2 text-sm font-bold text-black/68">
                    {{ check.value }}
                  </p>
                </div>
              </div>
              <span
                class="mt-1 size-2.5 shrink-0 rounded-full"
                :class="checkStatusClass[check.status]"
              />
            </div>
            <p class="mt-4 text-sm leading-6 text-black/55">
              {{ check.detail }}
            </p>
          </article>
        </div>
      </div>
    </section>
  </CmsShell>
</template>

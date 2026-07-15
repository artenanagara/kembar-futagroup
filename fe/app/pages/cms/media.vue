<script setup lang="ts">
import {
  cmsCategoryRows,
  cmsMediaItems,
  mediaStatusClass,
  mediaStatusLabel
} from '~/data/cms'

const pageTitle = 'CMS Media Artikel - Kembar Futagroup'
const pageDescription = 'Halaman frontend media library untuk mengelola asset gambar artikel, alt text, ukuran file, dan penggunaan media.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  robots: 'noindex, nofollow',
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  twitterCard: 'summary'
})

const mediaItems = ref(cmsMediaItems.map(item => ({ ...item })))
const selectedMediaId = ref(mediaItems.value[0]?.id ?? '')
const searchQuery = ref('')
const saveState = ref('Media lokal')

const selectedMedia = computed(() => mediaItems.value.find(item => item.id === selectedMediaId.value) ?? mediaItems.value[0])

const filteredMedia = computed(() => {
  const search = searchQuery.value.trim().toLowerCase()

  return mediaItems.value.filter((item) => {
    if (!search) {
      return true
    }

    return [item.name, item.type, item.usedIn, item.altText].some(value => value.toLowerCase().includes(search))
  })
})

const metrics = computed(() => [
  {
    label: 'Total Asset',
    value: `${mediaItems.value.length}`,
    detail: 'Gambar artikel CMS',
    icon: 'i-lucide-images',
    tone: 'bg-brand-green text-white'
  },
  {
    label: 'Siap Pakai',
    value: `${mediaItems.value.filter(item => item.status === 'ready').length}`,
    detail: 'Alt text lengkap',
    icon: 'i-lucide-badge-check',
    tone: 'bg-sky-600 text-white'
  },
  {
    label: 'Butuh Alt',
    value: `${mediaItems.value.filter(item => item.status === 'needs-alt').length}`,
    detail: 'Perlu deskripsi gambar',
    icon: 'i-lucide-message-square-warning',
    tone: 'bg-brand-orange text-white'
  },
  {
    label: 'Draft Asset',
    value: `${mediaItems.value.filter(item => item.status === 'draft').length}`,
    detail: 'Belum digunakan',
    icon: 'i-lucide-file-image',
    tone: 'bg-ink text-white'
  }
])

const selectMedia = (mediaId: string) => {
  selectedMediaId.value = mediaId
  saveState.value = 'Media lokal'
}

const saveMedia = () => {
  saveState.value = 'Media tersimpan'

  window.setTimeout(() => {
    saveState.value = 'Media lokal'
  }, 1800)
}
</script>

<template>
  <CmsShell
    title="CMS Media Artikel"
    description="Kelola gambar utama, gambar inline, thumbnail, alt text, ukuran file, dan pemakaian media pada artikel."
    badge-label="Media"
    badge-icon="i-lucide-images"
  >
    <template #actions>
      <button
        type="button"
        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-4 text-sm font-semibold text-ink transition hover:border-brand-green hover:text-brand-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
      >
        <UIcon
          name="i-lucide-filter"
          class="size-4"
        />
        Filter
      </button>
      <button
        type="button"
        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-semibold text-white transition hover:bg-brand-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
      >
        <UIcon
          name="i-lucide-upload"
          class="size-4"
        />
        Upload
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

    <section class="grid gap-6 xl:grid-cols-[minmax(0,1fr)_390px]">
      <div class="rounded-lg border border-black/10 bg-white p-5">
        <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h2 class="text-xl font-semibold leading-tight text-ink">
              Media Library
            </h2>
            <p class="mt-2 text-sm leading-6 text-black/56">
              Pilih asset untuk mengedit metadata media.
            </p>
          </div>

          <label class="relative block sm:w-80">
            <span class="sr-only">Cari media</span>
            <UIcon
              name="i-lucide-search"
              class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-black/40"
            />
            <input
              v-model="searchQuery"
              type="search"
              class="h-11 w-full rounded-lg border border-black/10 bg-[#f8faf6] pl-10 pr-3 text-sm font-medium text-ink outline-none transition placeholder:text-black/38 focus:border-brand-green focus:bg-white"
              placeholder="Cari file, artikel, alt text"
            >
          </label>
        </div>

        <div class="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="media in filteredMedia"
            :key="media.id"
            class="cursor-pointer rounded-lg border p-4 transition hover:border-brand-green hover:bg-brand-green/5"
            :class="selectedMedia?.id === media.id ? 'border-brand-green bg-brand-green/8' : 'border-black/8 bg-[#fbfcfa]'"
            @click="selectMedia(media.id)"
          >
            <div class="flex aspect-[4/3] items-center justify-center rounded-lg bg-[linear-gradient(135deg,#008938,#fe8700)] text-white">
              <UIcon
                name="i-lucide-image"
                class="size-8"
              />
            </div>
            <div class="mt-4 flex items-start justify-between gap-3">
              <div class="min-w-0">
                <h3 class="truncate text-sm font-semibold text-ink">
                  {{ media.name }}
                </h3>
                <p class="mt-1 truncate text-xs font-semibold text-black/45">
                  {{ media.usedIn }}
                </p>
              </div>
              <span
                class="inline-flex min-h-7 shrink-0 items-center rounded-full border px-3 text-xs font-bold"
                :class="mediaStatusClass[media.status]"
              >
                {{ mediaStatusLabel[media.status] }}
              </span>
            </div>
            <div class="mt-4 flex items-center justify-between text-xs font-semibold text-black/45">
              <span>{{ media.type }}</span>
              <span>{{ media.size }}</span>
            </div>
          </article>
        </div>
      </div>

      <div
        v-if="selectedMedia"
        class="grid gap-6"
      >
        <section class="rounded-lg border border-black/10 bg-white p-5">
          <div class="flex items-start justify-between gap-4">
            <div>
              <h2 class="text-xl font-semibold leading-tight text-ink">
                Detail Media
              </h2>
              <p class="mt-2 text-sm font-medium text-black/52">
                {{ selectedMedia.dimensions }}
              </p>
            </div>
            <span class="inline-flex min-h-8 shrink-0 items-center rounded-full bg-[#eef3ea] px-3 text-xs font-bold text-black/60">
              {{ saveState }}
            </span>
          </div>

          <div class="mt-5 grid gap-4">
            <label class="grid gap-2">
              <span class="text-xs font-bold uppercase tracking-wide text-black/45">Nama file</span>
              <input
                v-model="selectedMedia.name"
                class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
              >
            </label>

            <div class="grid gap-4 sm:grid-cols-2">
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Tipe</span>
                <select
                  v-model="selectedMedia.type"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
                  <option>Hero</option>
                  <option>Inline</option>
                  <option>Thumbnail</option>
                  <option>Draft</option>
                </select>
              </label>
              <label class="grid gap-2">
                <span class="text-xs font-bold uppercase tracking-wide text-black/45">Status</span>
                <select
                  v-model="selectedMedia.status"
                  class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
                >
                  <option value="ready">
                    Siap
                  </option>
                  <option value="needs-alt">
                    Butuh Alt
                  </option>
                  <option value="draft">
                    Draft
                  </option>
                </select>
              </label>
            </div>

            <label class="grid gap-2">
              <span class="text-xs font-bold uppercase tracking-wide text-black/45">Digunakan di artikel</span>
              <input
                v-model="selectedMedia.usedIn"
                class="min-h-11 rounded-lg border border-black/10 bg-[#f8faf6] px-3 text-sm font-semibold text-ink outline-none transition focus:border-brand-green focus:bg-white"
              >
            </label>

            <label class="grid gap-2">
              <span class="text-xs font-bold uppercase tracking-wide text-black/45">Alt text</span>
              <textarea
                v-model="selectedMedia.altText"
                rows="4"
                class="resize-none rounded-lg border border-black/10 bg-[#f8faf6] px-3 py-3 text-sm font-medium leading-6 text-ink outline-none transition focus:border-brand-green focus:bg-white"
              />
            </label>

            <button
              type="button"
              class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-brand-green px-4 text-sm font-semibold text-white transition hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
              @click="saveMedia"
            >
              <UIcon
                name="i-lucide-save"
                class="size-4"
              />
              Simpan media lokal
            </button>
          </div>
        </section>

        <section class="rounded-lg border border-black/10 bg-white p-5">
          <h2 class="text-xl font-semibold leading-tight text-ink">
            Kategori Artikel
          </h2>
          <div class="mt-5 grid gap-3">
            <div
              v-for="category in cmsCategoryRows"
              :key="category.name"
              class="flex items-center justify-between rounded-lg border border-black/8 bg-[#fbfcfa] p-3"
            >
              <div class="flex items-center gap-3">
                <span
                  class="size-3 rounded-full"
                  :class="category.color"
                />
                <span class="text-sm font-semibold text-ink">{{ category.name }}</span>
              </div>
              <span class="text-sm font-semibold text-black/50">{{ category.count }}</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  </CmsShell>
</template>

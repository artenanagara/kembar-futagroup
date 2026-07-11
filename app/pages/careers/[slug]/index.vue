<script setup lang="ts">
import { jobListings } from '~/data/careers'

const route = useRoute()
const slug = String(route.params.slug ?? '')
const job = jobListings.find(item => item.slug === slug)

if (!job) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Lowongan tidak ditemukan'
  })
}

const title = `${job.title} - Karir Kembar Futagroup`
const description = job.description

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/brand/og-image.webp',
  twitterCard: 'summary_large_image'
})

const employmentTypeMap: Record<string, 'FULL_TIME' | 'CONTRACTOR' | 'INTERN'> = {
  'Penuh Waktu': 'FULL_TIME',
  'Kontrak': 'CONTRACTOR',
  'Magang': 'INTERN'
}

const [addressLocality, addressRegion] = job.city.split(',').map(part => part.trim())

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: 'Beranda', item: '/' },
      { name: 'Karir', item: '/karir' },
      { name: job.title }
    ]
  }),
  defineJobPosting({
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    employmentType: employmentTypeMap[job.type],
    hiringOrganization: {
      name: 'Kembar Futagroup',
      logo: 'https://kembarfutagroup.com/images/brand/logo.png',
      url: 'https://kembarfutagroup.com'
    },
    jobLocation: {
      address: {
        addressLocality,
        addressRegion,
        addressCountry: 'ID'
      }
    }
  })
])

const publishedDate = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}).format(new Date(job.datePosted))

const jobMeta = [
  ['Divisi', job.division],
  ['Tipe Pekerjaan', job.type],
  ['Lokasi', job.city],
  ['Diterbitkan', publishedDate]
]

const form = reactive({
  name: '',
  email: '',
  phone: '',
  university: '',
  prodi: ''
})

const errors = reactive<Record<string, string>>({})
const isSubmitted = ref(false)

const toTitleCase = (value: string) => value
  .toLowerCase()
  .replace(/(^|\P{L})(\p{L})/gu, (_, before, letter) => before + letter.toUpperCase())

const applyTitleCase = (field: 'name' | 'university' | 'prodi', event: Event) => {
  const input = event.target as HTMLInputElement
  const caret = input.selectionStart

  form[field] = toTitleCase(input.value)

  nextTick(() => {
    if (caret !== null) {
      input.setSelectionRange(caret, caret)
    }
  })
}

type SuggestField = 'university' | 'prodi'

const suggestions = reactive<Record<SuggestField, string[]>>({
  university: [],
  prodi: []
})
const activeSuggest = ref<SuggestField | null>(null)
const debounceTimers: Record<SuggestField, ReturnType<typeof setTimeout> | undefined> = {
  university: undefined,
  prodi: undefined
}

const searchPddikti = (field: SuggestField) => {
  const keyword = form[field].trim()

  clearTimeout(debounceTimers[field])

  if (keyword.length < 3) {
    suggestions[field] = []
    activeSuggest.value = null
    return
  }

  debounceTimers[field] = setTimeout(async () => {
    try {
      const { data } = await $fetch<{ data: Array<{ nama: string, jenjang?: string }> }>('/api/pddikti', {
        query: {
          type: field === 'university' ? 'pt' : 'prodi',
          q: keyword
        }
      })

      const names = data.map((item) => {
        const nama = toTitleCase(item.nama)

        return field === 'prodi' && item.jenjang ? `${nama} (${item.jenjang.toUpperCase()})` : nama
      })

      suggestions[field] = [...new Set(names)].slice(0, 8)
      activeSuggest.value = field
    } catch {
      suggestions[field] = []
    }
  }, 300)
}

const applyPhoneDigits = (event: Event) => {
  const input = event.target as HTMLInputElement
  const caret = input.selectionStart ?? input.value.length
  const digitsBeforeCaret = input.value.slice(0, caret).replace(/\D/g, '').length

  form.phone = input.value.replace(/\D/g, '')

  nextTick(() => input.setSelectionRange(digitsBeforeCaret, digitsBeforeCaret))
}

const handleSuggestInput = (field: SuggestField, event: Event) => {
  applyTitleCase(field, event)
  searchPddikti(field)
}

const selectSuggestion = (field: SuggestField, value: string) => {
  form[field] = value
  suggestions[field] = []
  activeSuggest.value = null
}

const MAX_CV_SIZE = 3 * 1024 * 1024
const cvFile = ref<File | null>(null)

const handleCvChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0] ?? null

  if (file && file.size > MAX_CV_SIZE) {
    errors.cv = 'Ukuran file CV maksimal 3MB'
    cvFile.value = null
    input.value = ''
    return
  }

  errors.cv = ''
  cvFile.value = file
}

const validate = () => {
  errors.name = form.name.trim() ? '' : 'Nama wajib diisi'
  errors.email = /^\S+@\S+\.\S+$/.test(form.email) ? '' : 'Email tidak valid'
  errors.phone = /^\d{9,14}$/.test(form.phone) ? '' : 'No. HP harus berupa 9-14 digit angka'
  errors.university = form.university.trim() ? '' : 'Asal universitas wajib diisi'
  errors.prodi = form.prodi.trim() ? '' : 'Program studi wajib diisi'
  errors.cv = cvFile.value ? '' : 'File CV wajib diunggah'

  return Object.values(errors).every(message => !message)
}

const handleSubmit = () => {
  if (!validate()) {
    return
  }

  isSubmitted.value = true
}
</script>

<template>
  <div>
    <LayoutSiteHeader />

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 pb-20 pt-40 sm:px-8 lg:px-20 lg:pb-25">
        <NavigationBackLink
          to="/karir"
          label="Karir"
          data-reveal-item
        />

        <div class="mt-10 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-32 2xl:gap-40">
          <div
            class="h-fit lg:sticky lg:top-28"
            data-reveal-item
          >
            <h1 class="text-4xl font-normal leading-tight text-ink sm:text-5xl">
              <UiRevealText :text="job.title" />
            </h1>

            <dl class="mt-10 divide-y divide-black/10 border-b border-black/10">
              <div
                v-for="[label, value] in jobMeta"
                :key="label"
                class="flex items-baseline justify-between gap-6 py-5"
              >
                <dt class="text-sm leading-tight text-black/65">
                  {{ label }}
                </dt>
                <dd class="text-right text-sm leading-tight text-black/45">
                  {{ value }}
                </dd>
              </div>
            </dl>
          </div>

          <div data-reveal-item>
            <h2 class="text-2xl font-medium leading-tight text-ink sm:text-3xl">
              Ringkasan
            </h2>
            <p class="mt-5 text-base leading-relaxed text-black/70">
              {{ job.description }}
            </p>

            <h2 class="mt-14 text-2xl font-medium leading-tight text-ink sm:text-3xl">
              Tanggung Jawab
            </h2>
            <ul class="mt-5 space-y-3">
              <li
                v-for="item in job.responsibilities"
                :key="item"
                class="flex gap-3 text-base leading-relaxed text-black/70"
              >
                <span aria-hidden="true">-</span>
                <span>{{ item }}</span>
              </li>
            </ul>

            <h2 class="mt-14 text-2xl font-medium leading-tight text-ink sm:text-3xl">
              Kualifikasi
            </h2>
            <ul class="mt-5 space-y-3">
              <li
                v-for="item in job.requirements"
                :key="item"
                class="flex gap-3 text-base leading-relaxed text-black/70"
              >
                <span aria-hidden="true">-</span>
                <span>{{ item }}</span>
              </li>
            </ul>

            <div class="mt-20">
              <template v-if="!isSubmitted">
                <h2 class="text-4xl font-normal leading-tight text-ink">
                  Kirim Lamaran Anda
                </h2>

                <form
                  class="mt-10 space-y-5"
                  @submit.prevent="handleSubmit"
                >
                  <div>
                    <label
                      for="name"
                      class="sr-only"
                    >Nama</label>
                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      placeholder="Nama"
                      class="w-full border border-black/20 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-green"
                      @input="applyTitleCase('name', $event)"
                    >
                    <p
                      v-if="errors.name"
                      class="mt-1.5 text-sm text-red-600"
                    >
                      {{ errors.name }}
                    </p>
                  </div>

                  <div class="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        for="phone"
                        class="sr-only"
                      >No. HP</label>
                      <input
                        id="phone"
                        v-model="form.phone"
                        type="tel"
                        inputmode="numeric"
                        maxlength="14"
                        placeholder="No. HP"
                        class="w-full border border-black/20 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-green"
                        @input="applyPhoneDigits"
                      >
                      <p
                        v-if="errors.phone"
                        class="mt-1.5 text-sm text-red-600"
                      >
                        {{ errors.phone }}
                      </p>
                    </div>

                    <div>
                      <label
                        for="email"
                        class="sr-only"
                      >Email</label>
                      <input
                        id="email"
                        v-model="form.email"
                        type="email"
                        placeholder="Email"
                        class="w-full border border-black/20 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-green"
                      >
                      <p
                        v-if="errors.email"
                        class="mt-1.5 text-sm text-red-600"
                      >
                        {{ errors.email }}
                      </p>
                    </div>
                  </div>

                  <div class="grid gap-5 sm:grid-cols-2">
                    <div class="relative">
                      <label
                        for="university"
                        class="sr-only"
                      >Asal Universitas</label>
                      <input
                        id="university"
                        v-model="form.university"
                        type="text"
                        placeholder="Asal Universitas"
                        autocomplete="off"
                        class="w-full border border-black/20 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-green"
                        @input="handleSuggestInput('university', $event)"
                        @blur="activeSuggest = null"
                      >
                      <ul
                        v-if="activeSuggest === 'university' && suggestions.university.length"
                        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto border border-black/15 bg-white shadow-lg"
                      >
                        <li
                          v-for="option in suggestions.university"
                          :key="option"
                        >
                          <button
                            type="button"
                            class="w-full px-4 py-2.5 text-left text-sm leading-tight text-ink transition-colors hover:bg-black hover:text-white"
                            @mousedown.prevent="selectSuggestion('university', option)"
                          >
                            {{ option }}
                          </button>
                        </li>
                      </ul>
                      <p
                        v-if="errors.university"
                        class="mt-1.5 text-sm text-red-600"
                      >
                        {{ errors.university }}
                      </p>
                    </div>

                    <div class="relative">
                      <label
                        for="prodi"
                        class="sr-only"
                      >Program Studi</label>
                      <input
                        id="prodi"
                        v-model="form.prodi"
                        type="text"
                        placeholder="Program Studi"
                        autocomplete="off"
                        class="w-full border border-black/20 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-green"
                        @input="handleSuggestInput('prodi', $event)"
                        @blur="activeSuggest = null"
                      >
                      <ul
                        v-if="activeSuggest === 'prodi' && suggestions.prodi.length"
                        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto border border-black/15 bg-white shadow-lg"
                      >
                        <li
                          v-for="option in suggestions.prodi"
                          :key="option"
                        >
                          <button
                            type="button"
                            class="w-full px-4 py-2.5 text-left text-sm leading-tight text-ink transition-colors hover:bg-black hover:text-white"
                            @mousedown.prevent="selectSuggestion('prodi', option)"
                          >
                            {{ option }}
                          </button>
                        </li>
                      </ul>
                      <p
                        v-if="errors.prodi"
                        class="mt-1.5 text-sm text-red-600"
                      >
                        {{ errors.prodi }}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label
                      for="cv"
                      class="text-sm font-medium leading-tight text-ink"
                    >Unggah CV (PDF/DOC, maks 3MB)</label>
                    <input
                      id="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      class="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-sm text-black/70 file:mr-4 file:rounded-full file:border-0 file:bg-brand-green file:px-4 file:py-2 file:text-sm file:font-medium file:text-white"
                      @change="handleCvChange"
                    >
                    <p
                      v-if="errors.cv"
                      class="mt-1.5 text-sm text-red-600"
                    >
                      {{ errors.cv }}
                    </p>
                  </div>

                  <UiButton
                    type="submit"
                    size="sm"
                    class="w-full"
                  >
                    Kirim
                  </UiButton>
                </form>
              </template>

              <div
                v-else
                class="border border-black/10 px-6 py-12 text-center"
              >
                <UIcon
                  name="i-lucide-check-circle-2"
                  class="mx-auto size-16 text-brand-green"
                />
                <h2 class="mt-6 text-3xl font-normal leading-tight text-ink sm:text-4xl">
                  Lamaran Terkirim
                </h2>
                <p class="mx-auto mt-3 max-w-md text-base leading-relaxed text-black/70">
                  Terima kasih, {{ form.name }}. Lamaranmu untuk posisi {{ job.title }} sudah kami terima. Tim kami akan menghubungimu melalui email atau WhatsApp jika profilmu sesuai.
                </p>
                <NuxtLink
                  to="/karir"
                  class="mt-8 inline-flex items-center gap-2 text-sm font-medium leading-tight text-brand-green transition hover:text-ink"
                >
                  Lihat Lowongan Lainnya
                  <UIcon
                    name="i-lucide-arrow-up-right"
                    class="size-4"
                  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Siap mengambil peran bersama kami?"
      description=""
      primary-label="Hubungi Kami"
      primary-to="#"
      secondary-label="Lihat Produk Lainnya"
      secondary-to="/produk-solusi"
    />
  </div>
</template>

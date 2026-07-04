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

const title = `Lamar ${job.title} - Karir Kembar Futa Group`
const description = `Form lamaran untuk posisi ${job.title} di Kembar Futa Group.`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const cvFile = ref<File | null>(null)
const errors = reactive<Record<string, string>>({})
const isSubmitted = ref(false)

const handleCvChange = (event: Event) => {
  const input = event.target as HTMLInputElement

  cvFile.value = input.files?.[0] ?? null
}

const validate = () => {
  errors.name = form.name.trim() ? '' : 'Nama lengkap wajib diisi'
  errors.email = /^\S+@\S+\.\S+$/.test(form.email) ? '' : 'Email tidak valid'
  errors.phone = form.phone.trim() ? '' : 'Nomor WhatsApp wajib diisi'
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
      <div class="mx-auto max-w-160 px-5 pb-16 pt-40 sm:px-8 lg:px-20 lg:pb-20">
        <NuxtLink
          :to="`/karir/${job.slug}`"
          class="inline-flex items-center gap-2 text-sm font-medium leading-tight text-brand-green transition hover:text-ink"
          data-reveal-item
        >
          <UIcon
            name="i-lucide-arrow-left"
            class="size-4"
          />
          {{ job.title }}
        </NuxtLink>

        <template v-if="!isSubmitted">
          <p
            class="mt-8 text-sm font-medium leading-tight text-brand-green"
            data-reveal-item
          >
            Form Lamaran
          </p>
          <h1
            class="mt-2 text-3xl font-normal leading-tight text-ink sm:text-4xl"
            data-reveal-item
          >
            Lamar untuk {{ job.title }}
          </h1>
          <p
            class="mt-3 text-base leading-relaxed text-black/65"
            data-reveal-item
          >
            Lengkapi data di bawah ini, tim kami akan menghubungimu jika profilmu sesuai dengan posisi ini.
          </p>

          <form
            class="mt-10 space-y-6"
            data-reveal-item
            @submit.prevent="handleSubmit"
          >
            <div>
              <label
                for="name"
                class="text-sm font-medium leading-tight text-ink"
              >Nama Lengkap</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Nama sesuai KTP"
                class="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-green"
              >
              <p
                v-if="errors.name"
                class="mt-1.5 text-sm text-red-600"
              >
                {{ errors.name }}
              </p>
            </div>

            <div class="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  for="email"
                  class="text-sm font-medium leading-tight text-ink"
                >Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="nama@email.com"
                  class="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-green"
                >
                <p
                  v-if="errors.email"
                  class="mt-1.5 text-sm text-red-600"
                >
                  {{ errors.email }}
                </p>
              </div>

              <div>
                <label
                  for="phone"
                  class="text-sm font-medium leading-tight text-ink"
                >No. WhatsApp</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="0812xxxxxxx"
                  class="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-green"
                >
                <p
                  v-if="errors.phone"
                  class="mt-1.5 text-sm text-red-600"
                >
                  {{ errors.phone }}
                </p>
              </div>
            </div>

            <div>
              <label class="text-sm font-medium leading-tight text-ink">Posisi yang Dilamar</label>
              <input
                type="text"
                readonly
                :value="job.title"
                class="mt-2 w-full border border-black/20 bg-black/5 px-4 py-3 text-base text-black/60"
              >
            </div>

            <div>
              <label
                for="cv"
                class="text-sm font-medium leading-tight text-ink"
              >Unggah CV (PDF/DOC, maks 5MB)</label>
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

            <div>
              <label
                for="message"
                class="text-sm font-medium leading-tight text-ink"
              >Pesan (opsional)</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                placeholder="Ceritakan alasan kamu tertarik dengan posisi ini"
                class="mt-2 w-full resize-none border border-black/20 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand-green"
              />
            </div>

            <UiButton
              type="submit"
              size="lg"
              class="w-full sm:w-auto"
            >
              Kirim Lamaran
            </UiButton>
          </form>
        </template>

        <div
          v-else
          class="py-12 text-center"
        >
          <UIcon
            name="i-lucide-check-circle-2"
            class="mx-auto size-16 text-brand-green"
          />
          <h2 class="mt-6 text-3xl font-normal leading-tight text-ink">
            Lamaran Terkirim
          </h2>
          <p class="mx-auto mt-3 max-w-md text-base leading-relaxed text-black/65">
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
    </section>

    <LayoutSiteFooter
      title="Tidak menemukan posisi yang cocok?"
      primary-label="Lihat Semua Karir"
      primary-to="/karir"
    />
  </div>
</template>

<script setup lang="ts">
import { careersListImage, jobListings } from '~/data/careers'

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
  ogImage: careersListImage.src,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <LayoutSiteHeader />

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 pb-20 pt-40 sm:px-8 lg:px-20">
        <NavigationBackLink
          to="/karir"
          label="Karir"
          data-reveal-item
        />

        <div class="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl">
            <h1 class="text-5xl font-medium leading-tight text-ink sm:text-6xl">
              <UiRevealText :text="job.title" />
            </h1>
            <p
              class="mt-5 max-w-2xl text-base leading-relaxed text-black/65"
              data-reveal-item
            >
              {{ job.description }}
            </p>
          </div>

          <UiButton
            :to="`/karir/${job.slug}/lamar`"
            size="lg"
            class="shrink-0"
            data-reveal-item
          >
            Lamar Sekarang
          </UiButton>
        </div>

        <div class="mt-16 grid gap-12 lg:grid-cols-[320px_1fr]">
          <div
            class="h-fit space-y-6 border border-black/16 p-7"
            data-reveal-item
          >
            <div>
              <p class="text-sm leading-tight text-black/45">
                Lokasi
              </p>
              <p class="mt-1 text-lg font-medium leading-tight text-ink">
                {{ job.city }}
              </p>
            </div>

            <div class="h-px bg-black/10" />

            <div>
              <p class="text-sm leading-tight text-black/45">
                Jenis Pekerjaan
              </p>
              <p class="mt-1 text-lg font-medium leading-tight text-ink">
                {{ job.type }}
              </p>
            </div>
          </div>

          <div data-reveal-item>
            <h2 class="text-2xl font-medium leading-tight text-ink sm:text-3xl">
              Tanggung Jawab
            </h2>
            <ul class="mt-6 space-y-4">
              <li
                v-for="item in job.responsibilities"
                :key="item"
                class="flex gap-3 text-base leading-relaxed text-black/70"
              >
                <UIcon
                  name="i-lucide-check"
                  class="mt-1 size-5 shrink-0 text-brand-green"
                />
                <span>{{ item }}</span>
              </li>
            </ul>

            <div class="my-10 h-px bg-black/10" />

            <h2 class="text-2xl font-medium leading-tight text-ink sm:text-3xl">
              Kualifikasi
            </h2>
            <ul class="mt-6 space-y-4">
              <li
                v-for="item in job.requirements"
                :key="item"
                class="flex gap-3 text-base leading-relaxed text-black/70"
              >
                <UIcon
                  name="i-lucide-check"
                  class="mt-1 size-5 shrink-0 text-brand-green"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
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

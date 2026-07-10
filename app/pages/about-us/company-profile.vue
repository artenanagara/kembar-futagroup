<script setup lang="ts">
import { aboutHero, aboutIntro, aboutStoryHeader, aboutStorySlides, companyValues, leadership, trackRecord, visionMission } from '~/data/about'

const title = 'Profil Perusahaan - Kembar Futagroup'
const description = 'Profil Kembar Futagroup sebagai holding manufaktur dari Klaten yang menaungi unit usaha logam, permesinan, lansekap, dan infrastruktur.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/og-image.webp',
  twitterCard: 'summary_large_image'
})

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: aboutHero.breadcrumbs.map((label, index) => ({
      name: label,
      item: index === 0 ? '/' : undefined
    }))
  })
])

const imgRevealed = ref(false)

onMounted(() => {
  const img = document.querySelector<HTMLElement>('[data-scale-reveal]')
  if (!img) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        imgRevealed.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15 }
  )

  observer.observe(img)
})
</script>

<template>
  <div>
    <section
      class="relative min-h-115 overflow-hidden bg-ink text-white sm:min-h-125"
      data-section-reveal
    >
      <img
        :src="aboutHero.image"
        :alt="aboutHero.title"
        class="absolute inset-0 size-full object-cover"
      >
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.5)_0%,rgba(0,0,0,.15)_48%,rgba(0,0,0,.45)_100%)]" />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.45)_0%,rgba(0,0,0,.08)_42%,rgba(0,0,0,.35)_100%)]" />

      <LayoutSiteHeader />

      <div class="relative z-10 mx-auto flex min-h-115 max-w-360 items-end px-5 pb-14 pt-28 sm:min-h-125 sm:px-8 lg:px-20">
        <div class="max-w-3xl">
          <nav
            class="mb-8 flex flex-wrap items-center gap-2 text-sm leading-tight text-white/70"
            aria-label="Breadcrumb"
            data-reveal-item
          >
            <template
              v-for="(crumb, index) in aboutHero.breadcrumbs"
              :key="crumb"
            >
              <NuxtLink
                v-if="index === 0"
                to="/"
                class="transition hover:text-white"
              >
                {{ crumb }}
              </NuxtLink>
              <span
                v-else
                class="text-white/90"
              >
                {{ crumb }}
              </span>
              <span
                v-if="index < aboutHero.breadcrumbs.length - 1"
                class="text-white/40"
              >/</span>
            </template>
          </nav>

          <h1 class="text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            <UiRevealText :text="aboutHero.title" />
          </h1>
          <p
            class="mt-5 max-w-2xl text-base leading-relaxed text-white/80"
            data-reveal-item
          >
            {{ aboutHero.description }}
          </p>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <p
          class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green"
          data-reveal-item
        >
          {{ aboutIntro.eyebrow }}
        </p>

        <div
          class="mt-2 space-y-8"
          data-reveal-item
        >
          <h2 class="max-w-4xl text-4xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl">
            {{ aboutIntro.title }}
          </h2>
          <div class="h-px bg-black/20" />
        </div>

        <div
          class="mt-8 grid gap-8 text-base leading-relaxed text-black/70 lg:grid-cols-2 lg:gap-24"
          data-reveal-item
        >
          <p
            v-for="paragraph in aboutIntro.paragraphs"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>

        <div
          class="mt-6 overflow-hidden"
          data-reveal-item
        >
          <img
            :src="aboutIntro.media.src"
            :alt="aboutIntro.media.alt"
            data-scale-reveal
            class="h-70 w-full object-cover object-bottom sm:h-105 lg:h-125"
            :style="{
              transform: imgRevealed ? 'scale(1)' : 'scale(0.5)',
              opacity: imgRevealed ? '1' : '0',
              transformOrigin: 'center',
              transition: 'transform 1200ms cubic-bezier(.16,1,.3,1), opacity 1200ms cubic-bezier(.16,1,.3,1)'
            }"
          >
        </div>

        <dl
          class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          data-reveal-item
        >
          <div
            v-for="[label, value] in aboutIntro.stats"
            :key="label"
            class="space-y-3"
          >
            <dt class="text-sm leading-tight text-black/45">
              {{ label }}
            </dt>
            <dd class="text-4xl font-medium leading-none text-ink sm:text-5xl">
              {{ value }}
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <section
      id="sejarah"
      class="bg-white text-ink scroll-mt-24"
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <div
          class="grid gap-8 lg:grid-cols-2 lg:gap-16"
          data-section-reveal
        >
          <div data-reveal-item>
            <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
              {{ aboutStoryHeader.eyebrow }}
            </p>
            <h2 class="mt-2 max-w-xl text-4xl font-normal leading-tight text-ink sm:text-5xl">
              {{ aboutStoryHeader.title }}
            </h2>
          </div>
          <p
            class="text-base leading-relaxed text-black/70 lg:max-w-sm lg:justify-self-end lg:pt-2"
            data-reveal-item
          >
            {{ aboutStoryHeader.description }}
          </p>
        </div>

        <div class="mt-10 h-px bg-black/15" />

        <div class="grid grid-cols-[auto_1fr]">
          <div
            class="relative hidden border-t border-black/10 pt-14 sm:block"
            aria-hidden="true"
          >
            <span class="sticky top-48 mb-28 block select-none font-medium leading-none text-brand-green text-7xl sm:text-8xl lg:text-9xl">
              20
            </span>
          </div>

          <div class="sm:pb-0">
            <article
              v-for="slide in aboutStorySlides"
              :key="slide.year"
              class="grid grid-cols-[auto_1fr] items-start gap-x-0 gap-y-6 border-t border-black/10 py-14 sm:gap-x-10 lg:gap-x-20"
              data-section-reveal
            >
              <p class="select-none font-medium leading-none text-brand-green text-7xl sm:text-8xl lg:text-9xl">
                <span
                  class="sm:hidden"
                  aria-hidden="true"
                >20</span><span class="inline-block overflow-hidden pb-[0.05em] align-top"><span
                  class="inline-block"
                  data-reveal-item
                  data-reveal-from="mask"
                >{{ slide.year.slice(2) }}</span></span>
              </p>
              <div class="max-w-xl">
                <p
                  class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green"
                  data-reveal-item
                >
                  {{ slide.eyebrow }}
                </p>
                <h3
                  class="mt-3 text-2xl font-medium leading-tight text-ink"
                  data-reveal-item
                >
                  {{ slide.title }}
                </h3>
                <p
                  class="mt-4 text-base leading-relaxed text-black/70"
                  data-reveal-item
                >
                  {{ slide.description }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section
      id="visi-misi"
      class="bg-black text-white scroll-mt-24"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <div
          class="grid gap-8 lg:grid-cols-[110px_1fr]"
          data-reveal-item
        >
          <p class="text-sm leading-tight text-white/45">
            {{ visionMission.vision.label }}
          </p>
          <div class="max-w-2xl">
            <h2 class="text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
              {{ visionMission.vision.title }}
            </h2>
            <p class="mt-5 text-base leading-relaxed text-white/70">
              {{ visionMission.vision.description }}
            </p>
          </div>
        </div>

        <div
          class="my-12 h-px bg-white/18"
          data-reveal-item
        />

        <div
          class="grid gap-8 lg:grid-cols-[110px_1fr]"
          data-reveal-item
        >
          <p class="text-sm leading-tight text-white/45">
            {{ visionMission.mission.label }}
          </p>
          <div>
            <div class="max-w-2xl">
              <h2 class="text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
                {{ visionMission.mission.title }}
              </h2>
              <p class="mt-5 text-base leading-relaxed text-white/70">
                {{ visionMission.mission.description }}
              </p>
            </div>

            <div class="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              <article
                v-for="principle in visionMission.principles"
                :key="principle.title"
                class="border border-white/24 p-6 transition duration-500 ease-out hover:border-brand-green hover:bg-white/4"
              >
                <h3 class="text-base font-medium leading-tight text-white">
                  {{ principle.title }}
                </h3>
                <p class="mt-6 text-sm leading-relaxed text-white/70">
                  {{ principle.description }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <p
          class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green"
          data-reveal-item
        >
          Nilai & Budaya
        </p>
        <h2
          class="mt-2 text-4xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl"
          data-reveal-item
        >
          Cara kami bersikap setiap hari
        </h2>
        <div
          class="mt-8 h-px bg-black/20"
          data-reveal-item
        />

        <div class="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="value in companyValues"
            :key="value.title"
            class="group border border-black/16 p-7 transition duration-500 ease-out hover:-translate-y-1 hover:border-brand-green"
            data-reveal-item
          >
            <div class="flex size-8 items-center justify-center bg-neutral-200 text-black/45 transition duration-500 ease-out group-hover:bg-brand-green group-hover:text-white">
              <UIcon
                :name="value.icon"
                class="size-5"
              />
            </div>
            <h3 class="mt-10 text-base font-medium leading-tight text-ink">
              {{ value.title }}
            </h3>
            <p class="mt-5 text-sm leading-relaxed text-black/65">
              {{ value.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <div
          class="mt-8 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16"
          data-reveal-item
        >
          <div class="flex items-center justify-center py-8 lg:order-2 lg:py-12">
            <div class="aspect-3/4 w-full max-w-sm overflow-hidden bg-neutral-200 lg:max-w-md">
              <img
                v-if="leadership.portrait"
                :src="leadership.portrait.src"
                :alt="leadership.portrait.alt"
                class="h-full w-full object-cover"
              >
              <div
                v-else
                class="flex h-full w-full items-center justify-center"
                aria-hidden="true"
              >
                <UIcon
                  name="i-lucide-user-round"
                  class="size-16 text-black/20"
                />
              </div>
            </div>
          </div>

          <div class="flex flex-col justify-end py-8 lg:order-1 lg:py-12">
            <p class="mb-4 text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
              {{ leadership.eyebrow }}
            </p>
            <h2 class="max-w-xl text-4xl font-normal leading-tight text-ink sm:text-5xl">
              {{ leadership.title }}
            </h2>
            <p class="mt-6 max-w-xl text-base leading-relaxed text-black/70">
              {{ leadership.description }}
            </p>
            <div class="mt-8">
              <UiButton
                :to="leadership.ctaTo"
                variant="secondary"
                size="sm"
              >
                {{ leadership.ctaLabel }}
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionsSalesNetwork />

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
        <p
          class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green"
          data-reveal-item
        >
          {{ trackRecord.eyebrow }}
        </p>

        <div
          class="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-16"
          data-reveal-item
        >
          <h2 class="max-w-xl text-4xl font-normal leading-tight text-ink sm:text-5xl">
            {{ trackRecord.title }}
          </h2>
          <p class="max-w-xl text-base leading-relaxed text-black/70 lg:pt-3">
            {{ trackRecord.description }}
          </p>
        </div>

        <div
          class="mt-14 divide-y divide-black/10 border-t border-black/10"
          data-reveal-item
        >
          <div
            v-for="(item, index) in trackRecord.items"
            :key="item.title"
            class="flex flex-col gap-3 py-8 sm:flex-row sm:items-baseline sm:gap-10"
          >
            <span class="font-mono text-sm text-black/45 sm:w-12 sm:shrink-0">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <h3 class="text-xl font-medium leading-tight text-ink sm:w-72 sm:shrink-0 sm:text-2xl">
              {{ item.title }}
            </h3>
            <p class="text-base leading-relaxed text-black/70">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <LayoutSiteFooter
      title="Kenali ekosistem usaha kami"
      primary-label="Lihat Unit Bisnis"
      primary-to="/unit-bisnis"
      secondary-label="Hubungi Kami"
      secondary-to="#"
    />
  </div>
</template>

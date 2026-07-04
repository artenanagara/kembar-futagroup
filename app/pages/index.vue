<script setup lang="ts">
import { businessUnits } from '~/data/business-units'
import { aboutStats, capabilities, expertiseItems, projects } from '~/data/home'
import { newsPosts } from '~/data/news'

const isVideoReady = ref(false)
let videoReadyTimer: ReturnType<typeof setTimeout> | undefined

const showHeroVideo = () => {
  if (isVideoReady.value) {
    return
  }

  if (videoReadyTimer) {
    clearTimeout(videoReadyTimer)
  }

  videoReadyTimer = setTimeout(() => {
    isVideoReady.value = true
  }, 900)
}

onMounted(() => {
  videoReadyTimer = setTimeout(() => {
    isVideoReady.value = true
  }, 1800)
})

onBeforeUnmount(() => {
  if (videoReadyTimer) {
    clearTimeout(videoReadyTimer)
  }
})

const sectionRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
const paragraphRef = ref<HTMLElement | null>(null)
const dividerRef = ref<HTMLElement | null>(null)
const statsRef = ref<HTMLElement | null>(null)
let aboutAnimationContext: { revert: () => void } | undefined

const introWords = [
  ['Kami', 'black'],
  ['mengubah', 'black'],
  ['logam', 'green'],
  ['cair', 'green'],
  ['menjadi', 'black'],
  ['produk', 'black'],
  ['yang', 'black'],
  ['dipakai', 'black'],
  ['setiap', 'black'],
  ['hari', 'black'],
  ['seperti', 'black'],
  ['tiang', 'black'],
  ['lampu,', 'black'],
  ['bangku', 'black'],
  ['taman,', 'black'],
  ['tutup', 'black'],
  ['manhole,', 'black'],
  ['dan', 'black'],
  ['mesin', 'black'],
  ['produksi', 'black'],
  ['dirancang,', 'black'],
  ['dicor,', 'black'],
  ['dan', 'black'],
  ['difinishing', 'black'],
  ['di', 'black'],
  ['Klaten,', 'black'],
  ['jantung', 'green'],
  ['industri', 'green'],
  ['cor', 'green'],
  ['logam', 'green'],
  ['Indonesia.', 'black']
]

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const gsap = (await import('gsap')).default
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')

  gsap.registerPlugin(ScrollTrigger)

  const section = sectionRef.value
  const content = contentRef.value
  const words = paragraphRef.value?.querySelectorAll<HTMLElement>('[data-reveal-word]')
  const stats = statsRef.value?.querySelectorAll<HTMLElement>('[data-about-stat]')

  if (!section || !content || !words?.length || !paragraphRef.value) {
    return
  }

  aboutAnimationContext = gsap.context(() => {
    const revealItems = [
      dividerRef.value,
      ...Array.from(stats ?? [])
    ].filter((item): item is HTMLElement => Boolean(item))

    gsap.set(words, {
      width: 0
    })

    gsap.set(revealItems, {
      autoAlpha: 0,
      y: 24
    })

    gsap.fromTo(content, {
      y: 72
    }, {
      y: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'top top',
        scrub: 0.9
      }
    })

    const revealTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=180%',
        scrub: 0.95,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    })

    revealTimeline
      .to(words, {
        width: '100%',
        stagger: {
          each: 0.12
        },
        ease: 'none',
        duration: 0.12
      })
      .to(revealItems, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out'
      }, '+=0.18')
  })
})

onBeforeUnmount(() => {
  aboutAnimationContext?.revert()
})

const activeExpertiseIndex = ref(0)
let expertiseHoverTimer: ReturnType<typeof setTimeout> | undefined

const setActiveExpertise = (index: number, delay = 45) => {
  if (expertiseHoverTimer) {
    clearTimeout(expertiseHoverTimer)
  }

  expertiseHoverTimer = setTimeout(() => {
    activeExpertiseIndex.value = index
  }, delay)
}

onBeforeUnmount(() => {
  if (expertiseHoverTimer) {
    clearTimeout(expertiseHoverTimer)
  }
})

const businessFilters = ['Manufaktur & Logam', 'Mesin & Teknik', 'Material & Lansekap']
</script>

<template>
  <div>
    <section
      class="relative min-h-svh overflow-hidden bg-ink text-white"
      data-section-reveal
    >
      <iframe
        class="pointer-events-none absolute left-1/2 top-1/2 h-[calc(56.25vw+220px)] min-h-[calc(100%+220px)] w-[calc(177.78vh+420px)] min-w-[calc(100%+420px)] -translate-x-1/2 -translate-y-1/2 border-0 transition-opacity duration-700 ease-out"
        :class="isVideoReady ? 'opacity-100' : 'opacity-0'"
        src="https://www.youtube-nocookie.com/embed/6CeIASQz6rc?autoplay=1&mute=1&controls=0&loop=1&playlist=6CeIASQz6rc&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&fs=0&disablekb=1&cc_load_policy=0&showinfo=0&autohide=1"
        title="Kembar Futa Group company profile video"
        allow="autoplay; encrypted-media"
        referrerpolicy="strict-origin-when-cross-origin"
        aria-hidden="true"
        tabindex="-1"
        @load="showHeroVideo"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-ink transition-opacity duration-700 ease-out"
        :class="isVideoReady ? 'opacity-0' : 'opacity-100'"
        aria-hidden="true"
      />
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/55 to-transparent" />
      <div class="pointer-events-none absolute bottom-0 right-0 h-28 w-64 bg-linear-to-l from-black/70 to-transparent" />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.8)_0%,rgba(0,0,0,.35)_22%,rgba(0,0,0,.12)_44%,rgba(0,0,0,.34)_72%,rgba(0,0,0,.24)_100%)]" />

      <LayoutSiteHeader />

      <div class="relative z-10 mx-auto flex min-h-svh max-w-360 items-end px-5 pb-12 pt-28 sm:px-8 lg:px-20 lg:pb-4">
        <div class="w-full lg:pl-30">
          <h1 class="max-w-6xl text-5xl font-medium leading-[1.12] text-white sm:text-6xl lg:text-7xl xl:text-[72px]">
            <UiRevealText text="Membangun Infrastruktur Indonesia, dari Logam hingga Solusi Industri" />
          </h1>

          <div
            class="mt-12 flex max-w-3xl flex-col gap-6 pb-4 sm:flex-row sm:gap-16 lg:mt-16"
            data-reveal-item
          >
            <div class="flex min-w-48 items-center gap-2 text-base leading-relaxed text-white/90">
              <span class="size-1.5 rounded-full bg-white" />
              <span>Holding Manufaktur</span>
            </div>
            <div class="space-y-8 text-base leading-relaxed text-white/90">
              <p>
                Berawal dari keahlian teknik dan pengolahan logam di Klaten, Kembar Futa Group tumbuh menjadi ekosistem bisnis yang menaungi berbagai lini usaha.
              </p>
              <NuxtLink
                to="#tentang"
                class="font-medium underline underline-offset-4"
              >
                Pelajari Lebih Lanjut
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="tentang"
      ref="sectionRef"
      class="relative z-20 h-screen overflow-hidden bg-white"
    >
      <div
        ref="contentRef"
        class="mx-auto grid h-screen max-w-360 items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[220px_1fr] lg:gap-48 lg:px-20"
      >
        <p class="pt-2 text-sm font-medium leading-tight text-brand-green lg:pt-1">
          Sekilas Tentang Kami
        </p>

        <div>
          <p
            ref="paragraphRef"
            class="max-w-5xl text-3xl leading-[1.55] text-ink sm:text-4xl"
          >
            <span
              v-for="([word, tone], index) in introWords"
              :key="`${word}-${index}`"
              class="relative inline-block pr-2.5"
              :class="tone === 'green' ? 'font-medium' : ''"
            >
              <span class="text-[#c9c9c9]">
                {{ word }}
              </span>
              <span
                data-reveal-word
                :data-tone="tone"
                aria-hidden="true"
                class="pointer-events-none absolute left-0 top-0 inline-block overflow-hidden whitespace-nowrap"
                :class="tone === 'green' ? 'text-brand-green' : 'text-ink'"
              >
                {{ word }}
              </span>
            </span>
          </p>

          <div
            ref="dividerRef"
            class="my-12 h-px bg-black/10"
          />

          <div
            ref="statsRef"
            class="grid max-w-3xl gap-x-16 gap-y-8 sm:grid-cols-2"
          >
            <div
              v-for="item in aboutStats"
              :key="item.title"
              class="space-y-2"
              data-about-stat
            >
              <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                {{ item.title }}
              </h3>
              <p class="text-base leading-relaxed text-black/70">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-20 lg:py-25">
        <p
          class="text-sm font-medium leading-tight text-brand-green"
          data-reveal-item
        >
          Nilai & Budaya
        </p>

        <div
          class="mt-1 space-y-8"
          data-reveal-item
        >
          <h2 class="text-4xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl">
            Bidang Keahlian Kami
          </h2>
          <div class="h-px bg-black/20" />
          <div class="ml-auto grid max-w-4xl gap-8 text-base leading-relaxed text-black/70 lg:grid-cols-2 lg:gap-24">
            <p>Semuanya berawal dari keahlian teknik dan pengolahan logam di Klaten. Dari sana, Kembar Futa Group berkembang ke berbagai bidang yang saling terhubung.</p>
            <p>Setiap bidang memiliki fokus berbeda, namun berjalan dalam satu cara kerja yang sama: merancang, memproduksi, mengontrol kualitas, dan menghadirkan solusi yang siap digunakan.</p>
          </div>
        </div>

        <div class="mt-12 grid items-center gap-10 lg:grid-cols-[375px_1fr] lg:gap-16">
          <div
            class="relative h-80 overflow-hidden bg-neutral-200 lg:h-125"
            data-reveal-item
          >
            <div
              v-for="(item, index) in expertiseItems"
              :key="item.image"
              class="absolute inset-0 transition-all duration-900 ease-[cubic-bezier(.22,1,.36,1)]"
              :class="activeExpertiseIndex === index ? 'z-10 opacity-100 scale-100' : 'z-0 opacity-0 scale-105'"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="size-full object-cover grayscale"
              >
            </div>
          </div>

          <div data-reveal-item>
            <button
              v-for="(item, index) in expertiseItems"
              :key="`${item.number}-${item.title}`"
              type="button"
              class="flex w-full items-start gap-8 overflow-hidden px-4 py-6 text-left transition-[background-color,color,border-color,padding] duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
              :class="activeExpertiseIndex === index ? 'bg-black text-white' : 'border-b border-black/20 text-ink hover:bg-black/3'"
              @focus="setActiveExpertise(index, 0)"
              @mouseenter="setActiveExpertise(index)"
              @click="activeExpertiseIndex = index"
            >
              <span
                class="w-5 pt-2 text-right text-sm font-medium transition-colors duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
                :class="activeExpertiseIndex === index ? 'text-white' : 'text-black/50'"
              >
                {{ item.number }}
              </span>
              <span class="min-w-0 flex-1">
                <span class="flex items-center gap-8">
                  <span class="flex-1 text-2xl font-medium leading-tight transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] sm:text-3xl">
                    {{ item.title }}
                  </span>
                  <UIcon
                    :name="activeExpertiseIndex === index ? 'i-lucide-minus' : 'i-lucide-plus'"
                    class="size-6 shrink-0 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
                    :class="activeExpertiseIndex === index ? 'rotate-180' : 'rotate-0'"
                  />
                </span>
                <span
                  class="grid transition-[grid-template-rows,opacity,margin] duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
                  :class="activeExpertiseIndex === index ? 'mt-8 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'"
                >
                  <span class="block min-h-0 overflow-hidden">
                    <span
                      class="block max-w-2xl translate-y-0 text-base leading-relaxed text-white/80 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
                      :class="activeExpertiseIndex === index ? 'translate-y-0' : '-translate-y-2'"
                    >
                      {{ item.description }}
                    </span>
                  </span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-20 lg:py-25">
        <div
          class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          data-reveal-item
        >
          <div class="max-w-2xl">
            <p class="text-sm font-medium leading-tight text-brand-green">
              Unit Bisnis
            </p>
            <h2 class="mt-1 text-4xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl">
              Satu Ekosistem Industri
            </h2>
            <p class="mt-2 text-base leading-relaxed text-black/70">
              Beberapa perusahaan yang bergerak dalam satu ekosistem industri yang terpadu
            </p>
          </div>

          <div class="flex flex-wrap gap-3 lg:justify-end">
            <UiButton
              v-for="(filter, index) in businessFilters"
              :key="filter"
              type="button"
              :variant="index === 0 ? 'primary' : 'secondary'"
            >
              {{ filter }}
            </UiButton>
          </div>
        </div>

        <div
          class="my-8 h-px bg-black/30"
          data-reveal-item
        />

        <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="unit in businessUnits"
            :key="unit.name"
            class="group relative flex min-h-105 overflow-hidden bg-black p-8 text-white lg:min-h-125"
            data-reveal-item
          >
            <img
              :src="unit.image"
              :alt="unit.name"
              class="absolute inset-0 size-full object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:grayscale"
            >
            <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.05)_0%,rgba(0,0,0,.72)_100%)]" />
            <div class="absolute inset-0 bg-black opacity-0 transition duration-500 ease-out group-hover:opacity-85" />
            <div class="relative z-10 flex w-full flex-col justify-between">
              <div class="flex items-center justify-between gap-4">
                <UiBadge
                  variant="orange"
                  size="lg"
                >
                  {{ unit.category }}
                </UiBadge>
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="size-6"
                />
              </div>
              <div class="translate-y-18 space-y-3 transition duration-500 ease-out group-hover:translate-y-0">
                <h3 class="text-3xl font-medium leading-tight transition duration-500 ease-out lg:text-4xl">
                  {{ unit.name }}
                </h3>
                <p
                  v-if="unit.description"
                  class="max-w-sm translate-y-6 text-base font-medium leading-relaxed text-white/70 opacity-0 transition duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {{ unit.description }}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden bg-black text-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-25 lg:py-25">
        <div
          class="max-w-6xl"
          data-reveal-item
        >
          <p class="text-sm font-medium leading-tight text-brand-orange">
            Kapabilitas
          </p>
          <h2 class="mt-1 text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            Kemampuan Terintegrasi Kami
          </h2>
          <p class="mt-2 max-w-3xl text-base leading-relaxed text-white/70">
            Kembar Futa Group menghubungkan pengalaman teknik, proses produksi, dan kontrol kualitas untuk menghadirkan solusi yang sesuai kebutuhan industri, proyek, dan bisnis.
          </p>
        </div>

        <div class="mt-8">
          <article
            v-for="item in capabilities"
            :key="item.number"
            class="group relative grid gap-8 border-b border-white/30 py-8 lg:grid-cols-[60px_1fr] lg:gap-36"
            data-reveal-item
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="pointer-events-none absolute -left-4 top-1/2 z-20 hidden h-56 w-80 -translate-y-1/2 -rotate-2 object-cover opacity-0 shadow-2xl shadow-black/60 transition duration-500 ease-out group-hover:-rotate-5 group-hover:scale-105 group-hover:opacity-100 lg:block"
            >
            <div class="pointer-events-none absolute -left-6 top-1/2 z-10 hidden h-56 w-80 -translate-y-1/2 opacity-0 transition duration-500 ease-out group-hover:translate-x-3 group-hover:translate-y-[calc(-50%+12px)] group-hover:rotate-5 group-hover:opacity-100 lg:block" />
            <p class="text-base font-medium leading-tight">
              {{ item.number }}
            </p>
            <div class="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-24">
              <h3 class="text-left text-xl font-medium leading-tight lg:text-right">
                {{ item.title }}
              </h3>
              <div class="space-y-10">
                <p class="text-base leading-relaxed text-white/80">
                  {{ item.description }}
                </p>
                <div class="flex flex-wrap gap-4">
                  <UiBadge
                    v-for="tag in item.tags"
                    :key="tag"
                    variant="outline-light"
                  >
                    {{ tag }}
                  </UiBadge>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-20 lg:py-25">
        <div
          class="space-y-8"
          data-reveal-item
        >
          <p class="text-sm font-medium leading-tight text-brand-green">
            Portfolio
          </p>
          <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 class="text-4xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl">
              Karya Kami <br>di Berbagai Sektor
            </h2>
            <UiButton
              to="#"
              variant="secondary"
              trailing-icon="i-lucide-arrow-up-right"
            >
              Lihat Karya Kami
            </UiButton>
          </div>
          <div class="h-px bg-black/20" />
        </div>

        <div class="mt-8 grid gap-8 lg:grid-cols-2">
          <article
            v-for="project in projects"
            :key="project.title"
            class="group space-y-8"
            data-reveal-item
          >
            <div class="space-y-4 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-1">
              <h3 class="text-2xl font-normal leading-snug text-ink transition-colors duration-500 group-hover:text-brand-green lg:text-3xl">
                {{ project.title }}
              </h3>
              <div class="relative h-80 overflow-hidden bg-neutral-200 sm:h-117">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="size-full object-cover transition duration-900 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105 group-hover:grayscale group-hover:brightness-75"
                >
                <div class="absolute inset-0 bg-black/0 transition duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:bg-black/20" />
                <div class="absolute right-5 top-5 flex size-12 translate-y-2 items-center justify-center border border-white/70 text-white opacity-0 transition duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  <UIcon
                    name="i-lucide-arrow-up-right"
                    class="size-5"
                  />
                </div>
              </div>
            </div>
            <dl class="transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-1">
              <div
                v-for="[label, value] in project.meta"
                :key="label"
                class="grid grid-cols-[1fr_1.3fr] gap-4 border-b border-black/20 px-5 py-4 text-sm transition-colors duration-500 group-hover:border-black/30"
              >
                <dt class="text-black/70">
                  {{ label }}
                </dt>
                <dd class="text-right font-medium leading-relaxed text-ink">
                  {{ value }}
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-20 lg:py-25">
        <div
          class="mx-auto max-w-4xl text-center"
          data-reveal-item
        >
          <p class="text-sm font-medium leading-tight text-brand-green">
            Berita & Insight
          </p>
          <h2 class="mt-1 text-4xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl">
            Cerita dan Perkembangan Grup
          </h2>
          <p class="mt-2 text-base leading-relaxed text-black/70">
            Kembar Futa Group menghubungkan pengalaman teknik, proses produksi, dan kontrol kualitas untuk menghadirkan solusi yang sesuai kebutuhan industri, proyek, dan bisnis.
          </p>
        </div>

        <div class="mt-8 grid gap-8 md:grid-cols-3">
          <NuxtLink
            v-for="post in newsPosts.slice(0, 3)"
            :key="post.slug"
            :to="`/berita/${post.slug}`"
            class="group space-y-4"
            data-reveal-item
          >
            <div class="overflow-hidden">
              <img
                :src="post.image"
                :alt="post.title"
                class="h-64 w-full object-cover transition duration-700 ease-out group-hover:scale-105 lg:h-76"
              >
            </div>
            <div class="space-y-2">
              <UiBadge
                variant="outline-dark"
                size="sm"
              >
                {{ post.category }}
              </UiBadge>
              <h3 class="min-h-11 text-base font-normal leading-snug text-ink transition-colors duration-200 group-hover:text-brand-green">
                {{ post.title }}
              </h3>
            </div>
            <div class="flex items-center gap-4 text-sm leading-relaxed text-black/50">
              <time :datetime="post.date">{{ formatNewsDate(post.date) }}</time>
              <span class="size-1.5 rounded-full bg-neutral-300" />
              <span>{{ post.readTime }}</span>
            </div>
          </NuxtLink>
        </div>

        <div
          class="mt-8 flex justify-center"
          data-reveal-item
        >
          <UiButton
            to="/berita"
            variant="secondary"
          >
            Lihat Semua Berita
          </UiButton>
        </div>
      </div>
    </section>

    <LayoutSiteFooter />
  </div>
</template>

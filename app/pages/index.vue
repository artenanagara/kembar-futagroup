<script setup lang="ts">
import { businessUnits } from '~/data/business-units'
import { aboutStats, capabilities, expertiseItems } from '~/data/home'
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
  ['Dari', 'black'],
  ['logam', 'black'],
  ['cair', 'green'],
  ['kami', 'green'],
  ['menghasilkan', 'black'],
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
  ['cover', 'black'],
  ['manhole,', 'black'],
  ['dan', 'black'],
  ['mesin', 'black'],
  ['produksi.', 'black'],
  ['Semuanya', 'black'],
  ['dirancang,', 'black'],
  ['dicor,', 'black'],
  ['dan', 'black'],
  ['difinishing', 'black'],
  ['di', 'black'],
  ['Klaten,', 'black'],
  ['salah', 'black'],
  ['satu', 'black'],
  ['pusat', 'green'],
  ['industri', 'green'],
  ['cor', 'green'],
  ['logam', 'green'],
  ['di', 'black'],
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

    gsap.set(content, {
      y: 72
    })

    const revealTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=180%',
        scrub: 1.4,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    })

    revealTimeline
      .to(content, {
        y: 0,
        ease: 'power2.out',
        duration: 0.5
      })
      .to(words, {
        width: '100%',
        stagger: {
          each: 0.12
        },
        ease: 'none',
        duration: 0.12
      }, '-=0.1')
      .to(revealItems, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.08,
        duration: 2,
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
        title="Kembar Futagroup company profile video"
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
          <h1 class="max-w-6xl text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl">
            <UiRevealText text="Membangun Infrastruktur Indonesia, dari Logam hingga Solusi Industri" />
          </h1>

          <div
            class="mt-12 flex max-w-3xl flex-col gap-6 pb-4 sm:flex-row sm:gap-16 lg:mt-16"
            data-reveal-item
          >
            <div class="flex min-w-48 items-center gap-2 text-base leading-relaxed text-white/80">
              <span class="size-1.5 rounded-full bg-white" />
              <span>Holding Manufaktur</span>
            </div>
            <div class="space-y-8 text-base leading-relaxed text-white/80">
              <p>
                Berawal dari keahlian pengecoran logam di Klaten, Kembar Futagroup tumbuh menjadi ekosistem industri yang menaungi lini manufaktur, lansekap, dan infrastruktur di seluruh Indonesia.
              </p>
              <NuxtLink
                to="/tentang-kami/profil"
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
        class="mx-auto grid h-screen max-w-360 items-start top-24 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[220px_1fr] lg:gap-48 lg:px-20"
      >
        <p class="pt-2 text-sm font-medium uppercase leading-tight tracking-wide text-brand-green lg:pt-1">
          Sekilas Tentang Kami
        </p>

        <div>
          <p
            ref="paragraphRef"
            class="max-w-5xl text-xl leading-[1.55] text-ink sm:text-3xl"
          >
            <span
              v-for="([word, tone], index) in introWords"
              :key="`${word}-${index}`"
              class="relative inline-block pr-2.5"
              :class="tone === 'green' ? 'font-medium' : ''"
            >
              <span class="text-mist">
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
              <h3 class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-orange">
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
      class="bg-black text-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-[1817px] px-5 py-24 sm:px-8 lg:px-25 lg:py-36">
        <div
          class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,600px)] lg:items-end lg:gap-20"
          data-reveal-item
        >
          <div>
            <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
              Ekosistem Kami
            </p>
            <h2 class="mt-8 text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
              Empat Bidang Keahlian
            </h2>
          </div>

          <p class="max-w-3xl text-base leading-relaxed text-white/70 lg:pb-2 lg:text-lg">
            Dari pengolahan logam hingga kebutuhan proyek, setiap bidang bekerja saling mendukung dalam satu ekosistem industri.
          </p>
        </div>

        <div
          class="mt-20 overflow-hidden border border-white bg-black lg:flex lg:min-h-93"
          data-reveal-item
        >
          <button
            v-for="(item, index) in expertiseItems"
            :key="`${item.number}-${item.title}`"
            type="button"
            class="group relative flex min-h-76 w-full min-w-0 flex-col border-white p-6 text-left transition-[background-color,color,flex-basis] duration-700 ease-[cubic-bezier(.16,1,.3,1)] lg:min-h-93 lg:w-auto"
            :class="[
              activeExpertiseIndex === index ? 'bg-white text-black lg:basis-[40%]' : 'bg-black text-white hover:bg-white/5 lg:basis-[20%]',
              index === 0 ? '' : 'border-t lg:border-l lg:border-t-0'
            ]"
            :aria-pressed="activeExpertiseIndex === index"
            @focus="setActiveExpertise(index, 0)"
            @mouseenter="setActiveExpertise(index)"
            @click="activeExpertiseIndex = index"
          >
            <span
              v-if="activeExpertiseIndex === index"
              class="grid min-h-0 flex-1 gap-6 md:grid-cols-[13rem_minmax(0,1fr)] md:items-start xl:grid-cols-[15rem_minmax(0,1fr)] xl:gap-8"
            >
              <span class="relative block size-44 shrink-0 overflow-hidden bg-neutral-300 sm:size-52 xl:size-60">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="size-full object-cover"
                >
              </span>

              <span class="block pt-2">
                <span class="block text-base font-normal leading-none text-black/80">
                  {{ item.number }}
                </span>
                <span class="mt-9 block text-3xl font-normal leading-tight sm:text-3xl">
                  {{ item.title }}
                </span>
                <span class="mt-4 block max-w-xs text-sm leading-relaxed text-black/65">
                  {{ item.description }}
                </span>
              </span>
            </span>

            <span
              v-else
              class="flex h-full min-h-60 flex-col justify-start"
            >
              <span class="text-base font-normal leading-none text-white/80">
                {{ item.number }}
              </span>
              <span class="mt-9 text-4xl font-normal leading-tight sm:text-4xl">
                {{ item.title }}
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>

    <section
      class="bg-white text-black"
      data-section-reveal
    >
      <div class="mx-auto grid gap-12 px-5 pb-0 pt-24 sm:px-8 lg:grid-cols-[minmax(180px,360px)_minmax(0,1fr)] lg:gap-18 lg:px-25 lg:pb-0 lg:pt-32">
        <div
          class="pt-2 pb-16 sticky top-24 self-start h-140"
          data-reveal-item
        >
          <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
            Unit Usaha
          </p>
          <h2 class="pt-2 text-4xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl">
            Satu Ekosistem Industri
          </h2>
          <p class="text-black/70 text-base leading-relaxed pt-4 sm:text-lg">
            Berbagai peran dalam satu <br> ekosistem industri.
          </p>
        </div>

        <div
          class="min-w-0 pb-8"
          data-reveal-item
        >
          <div class="grid gap-8 md:grid-cols-2 min-[1440px]:grid-cols-3">
            <CardsBusinessUnitShowcaseCard
              v-for="unit in businessUnits"
              :key="unit.name"
              :unit="unit"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      class="relative overflow-hidden bg-black text-white"
      data-section-reveal
      data-reveal-start="top 92%"
    >
      <div class="mx-auto max-w-360 px-5 pb-24 pt-8 sm:px-8 lg:px-25 lg:pb-25 lg:pt-10">
        <div
          class="max-w-6xl"
          data-reveal-item
        >
          <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
            Kapabilitas
          </p>
          <h2 class="mt-1 text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
            Kemampuan Terintegrasi Kami
          </h2>
          <p class="mt-2 max-w-3xl text-base leading-relaxed text-white/70">
            Kembar Futagroup menghubungkan pengalaman teknik, proses produksi, dan kontrol kualitas untuk menghadirkan solusi yang sesuai kebutuhan industri, proyek, dan bisnis.
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
              <h3 class="text-left text-xl font-medium leading-tight sm:text-2xl lg:text-right">
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

    <!-- <section
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
              to="/proyek"
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
    </section> -->

    <section
      class="bg-white"
      data-section-reveal
    >
      <div class="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-20 lg:py-25">
        <SectionsSectionHeader
          eyebrow="Berita & Insight"
          title="Cerita dan Perkembangan Grup"
          description="Kembar Futagroup menghubungkan pengalaman teknik, proses produksi, dan kontrol kualitas untuk menghadirkan solusi yang sesuai kebutuhan industri, proyek, dan bisnis."
          align="center"
          data-reveal-item
        />

        <div class="mt-8 grid gap-8 md:grid-cols-3">
          <CardsNewsCard
            v-for="post in newsPosts.slice(0, 3)"
            :key="post.slug"
            :post="post"
            heading-tag="h3"
          />
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

<script setup lang="ts">
import { aboutHero, aboutIntro, aboutStorySlides, companyValues, visionMission } from '~/data/about'

const title = 'Profil Perusahaan - Kembar Futagroup'
const description = 'Profil Kembar Futagroup sebagai holding manufaktur dari Klaten yang menaungi unit usaha logam, permesinan, lansekap, dan infrastruktur.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1600&q=85',
  twitterCard: 'summary_large_image'
})

const sectionRef = ref<HTMLElement | null>(null)
const activeStoryIndex = ref(0)
let storyTrigger: { kill: () => void } | undefined

const storyScrollUnits = aboutStorySlides.map((slide) => {
  const readableWeight = slide.description.length / 230

  return Math.min(1.45, Math.max(0.9, readableWeight))
})

const totalStoryScrollUnits = storyScrollUnits.reduce((total, unit) => total + unit, 0)

const storyStops = storyScrollUnits.reduce<number[]>((stops, unit) => {
  const previousStop = stops[stops.length - 1] ?? 0

  stops.push(previousStop + unit / totalStoryScrollUnits)

  return stops
}, [0])

const storySectionHeight = `${(1 + totalStoryScrollUnits) * 100}svh`

const storyProgressSegments = storyScrollUnits.map(unit => ({
  height: `${(unit / totalStoryScrollUnits) * 100}%`
}))

const storyTextTransition = {
  exitDuration: 0.8,
  enterDuration: 1.15,
  ease: 'power2.out'
}

onMounted(async () => {
  if (!sectionRef.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  const gsap = (await import('gsap')).default
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')

  gsap.registerPlugin(ScrollTrigger)

  const section = sectionRef.value
  const slides = gsap.utils.toArray<HTMLElement>('[data-story-slide]', section)
  const fills = gsap.utils.toArray<HTMLElement>('[data-story-progress-fill]', section)
  const titleWords = slides.map(slide => gsap.utils.toArray<HTMLElement>('[data-reveal-item][data-reveal-from="mask"]', slide))

  if (!slides.length || !fills.length || !slides[0]) {
    return
  }

  gsap.set(slides, {
    autoAlpha: 0,
    y: 54,
    filter: 'blur(10px)'
  })

  gsap.set(slides[0], {
    autoAlpha: 1,
    y: 0,
    filter: 'blur(0px)'
  })

  gsap.set(fills, {
    scaleY: 0,
    transformOrigin: 'top'
  })

  gsap.set(titleWords.flat(), { yPercent: 100 })

  if (titleWords[0]?.length) {
    gsap.to(titleWords[0], {
      yPercent: 0,
      duration: 0.85,
      ease: 'power4.out',
      stagger: 0.05
    })
  }

  const showSlide = (nextIndex: number) => {
    if (nextIndex === activeStoryIndex.value) {
      return
    }

    const previousIndex = activeStoryIndex.value
    const previousSlide = slides[previousIndex]
    const nextSlide = slides[nextIndex]

    if (!previousSlide || !nextSlide) {
      return
    }

    activeStoryIndex.value = nextIndex

    gsap.to(previousSlide, {
      autoAlpha: 0,
      y: nextIndex > previousIndex ? -42 : 42,
      filter: 'blur(10px)',
      duration: storyTextTransition.exitDuration,
      ease: storyTextTransition.ease,
      overwrite: true
    })

    gsap.fromTo(nextSlide, {
      autoAlpha: 0,
      y: nextIndex > previousIndex ? 54 : -54,
      filter: 'blur(10px)'
    }, {
      autoAlpha: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: storyTextTransition.enterDuration,
      ease: storyTextTransition.ease,
      overwrite: true
    })

    const previousWords = titleWords[previousIndex]
    const nextWords = titleWords[nextIndex]

    if (previousWords?.length) {
      gsap.to(previousWords, {
        yPercent: 100,
        duration: 0.3,
        ease: 'power2.in',
        overwrite: true
      })
    }

    if (nextWords?.length) {
      gsap.fromTo(nextWords, {
        yPercent: 100
      }, {
        yPercent: 0,
        duration: 0.85,
        ease: 'power4.out',
        stagger: 0.05,
        delay: 0.15,
        overwrite: true
      })
    }
  }

  storyTrigger = ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.85,
    onUpdate: (self) => {
      const slideCount = aboutStorySlides.length
      const progress = Math.min(0.999, self.progress)
      const nextIndex = Math.max(0, storyStops.findIndex((stop, index) => {
        const nextStop = storyStops[index + 1] ?? 1

        return progress >= stop && progress < nextStop
      }))

      showSlide(Math.min(slideCount - 1, nextIndex))

      fills.forEach((fill, index) => {
        const start = storyStops[index] ?? 0
        const end = storyStops[index + 1] ?? 1
        const localProgress = Math.min(1, Math.max(0, (self.progress - start) / (end - start)))

        gsap.set(fill, {
          scaleY: localProgress
        })
      })
    }
  })
})

onBeforeUnmount(() => {
  storyTrigger?.kill()
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
      <div class="absolute inset-0 backdrop-blur-[2px]" />
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.74)_0%,rgba(0,0,0,.28)_48%,rgba(0,0,0,.68)_100%)]" />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.72)_0%,rgba(0,0,0,.16)_42%,rgba(0,0,0,.56)_100%)]" />

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
          class="text-sm font-medium leading-tight text-brand-green"
          data-reveal-item
        >
          {{ aboutIntro.eyebrow }}
        </p>

        <div
          class="mt-2 space-y-8"
          data-reveal-item
        >
          <h2 class="max-w-4xl text-4xl font-normal leading-[1.12] text-ink sm:text-5xl lg:text-6xl">
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
          class="mt-12 overflow-hidden bg-neutral-200"
          data-reveal-item
        >
          <img
            :src="aboutIntro.media.src"
            :alt="aboutIntro.media.alt"
            class="h-70 w-full object-cover grayscale transition duration-900 ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.02] hover:grayscale-0 sm:h-105 lg:h-125"
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
      ref="sectionRef"
      class="relative bg-black text-white scroll-mt-24"
      :style="{ height: storySectionHeight }"
    >
      <div class="sticky top-0 h-svh overflow-hidden">
        <div
          v-for="(slide, index) in aboutStorySlides"
          :key="slide.year"
          class="absolute inset-0 transition duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
          :class="activeStoryIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
        >
          <img
            :src="slide.image"
            :alt="slide.title"
            class="size-full object-cover grayscale"
          >
        </div>

        <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.88)_0%,rgba(0,0,0,.5)_48%,rgba(0,0,0,.9)_100%)]" />
        <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.22)_0%,rgba(0,0,0,.68)_100%)]" />

        <div class="relative z-10 mx-auto flex h-full max-w-360 px-5 sm:px-8 lg:px-20">
          <div class="grid h-full w-full grid-cols-[24px_1fr] gap-6 sm:grid-cols-[32px_1fr] sm:gap-8">
            <div class="relative h-full">
              <div
                class="absolute inset-y-2 left-0 w-[1.5px] overflow-hidden bg-white/24"
                aria-hidden="true"
              >
                <div
                  v-for="(segment, index) in storyProgressSegments"
                  :key="`${aboutStorySlides[index]?.year}-progress`"
                  class="relative w-full overflow-hidden border-b border-black/40 last:border-b-0"
                  :style="{ height: segment.height }"
                >
                  <span
                    data-story-progress-fill
                    class="absolute inset-x-0 top-0 h-full origin-top scale-y-0 bg-brand-green transition-transform duration-300 ease-out"
                  />
                </div>
              </div>
            </div>

            <div class="relative flex max-w-3xl flex-col justify-between py-8 lg:py-12">
              <p class="text-sm font-medium leading-tight text-white/80">
                Kisah Kami
              </p>

              <div class="relative min-h-90 pb-6 sm:min-h-105 lg:min-h-110">
                <article
                  v-for="(slide, index) in aboutStorySlides"
                  :key="slide.year"
                  data-story-slide
                  class="absolute inset-x-0 bottom-0 max-w-2xl transition duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
                  :class="activeStoryIndex === index ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'"
                >
                  <p class="text-2xl font-normal leading-tight text-white sm:text-3xl">
                    {{ slide.year }}
                  </p>
                  <h2 class="mt-8 text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
                    <UiRevealText :text="slide.title" />
                  </h2>
                  <p class="mt-5 text-base leading-relaxed text-white/75">
                    {{ slide.description }}
                  </p>
                </article>
              </div>
            </div>
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
            <p class="mt-5 text-base leading-relaxed text-white/65">
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
              <p class="mt-5 text-base leading-relaxed text-white/65">
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
                <p class="mt-6 text-sm leading-relaxed text-white/62">
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
          class="text-sm font-medium leading-tight text-brand-green"
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
            <div class="flex size-8 items-center justify-center bg-neutral-200 text-black/55 transition duration-500 ease-out group-hover:bg-brand-green group-hover:text-white">
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

    <LayoutSiteFooter
      title="Kenali ekosistem usaha kami"
      primary-label="Lihat Unit Bisnis"
      primary-to="/unit-bisnis"
      secondary-label="Hubungi Kami"
      secondary-to="#"
    />
  </div>
</template>

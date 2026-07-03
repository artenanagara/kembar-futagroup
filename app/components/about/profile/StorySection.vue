<script setup lang="ts">
import { aboutStorySlides } from '~/data/about'

const sectionRef = ref<HTMLElement | null>(null)
const activeIndex = ref(0)
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

  const showSlide = (nextIndex: number) => {
    if (nextIndex === activeIndex.value) {
      return
    }

    const previousIndex = activeIndex.value
    const previousSlide = slides[previousIndex]
    const nextSlide = slides[nextIndex]

    if (!previousSlide || !nextSlide) {
      return
    }

    activeIndex.value = nextIndex

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
  <section
    ref="sectionRef"
    class="relative bg-black text-white"
    :style="{ height: storySectionHeight }"
  >
    <div class="sticky top-0 h-svh overflow-hidden">
      <div
        v-for="(slide, index) in aboutStorySlides"
        :key="slide.year"
        class="absolute inset-0 transition duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
        :class="activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
      >
        <img
          :src="slide.image"
          :alt="slide.title"
          class="size-full object-cover grayscale"
        >
      </div>

      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.88)_0%,rgba(0,0,0,.5)_48%,rgba(0,0,0,.9)_100%)]" />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.22)_0%,rgba(0,0,0,.68)_100%)]" />

      <div class="relative z-10 mx-auto flex h-full max-w-[1440px] px-5 sm:px-8 lg:px-20">
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

            <div class="relative min-h-[360px] pb-6 sm:min-h-[420px] lg:min-h-[440px]">
              <article
                v-for="(slide, index) in aboutStorySlides"
                :key="slide.year"
                data-story-slide
                class="absolute inset-x-0 bottom-0 max-w-2xl transition duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
                :class="activeIndex === index ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'"
              >
                <p class="text-2xl font-normal leading-tight text-white sm:text-3xl">
                  {{ slide.year }}
                </p>
                <h2 class="mt-8 text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
                  {{ slide.title }}
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
</template>

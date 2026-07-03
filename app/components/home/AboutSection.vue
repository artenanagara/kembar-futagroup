<script setup lang="ts">
import { aboutStats } from '~/data/home'

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
</script>

<template>
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
</template>

<script setup lang="ts">
const title = 'Kembar Futagroup - Holding Manufaktur dan Solusi Industri'
const description = 'Kembar Futagroup membangun ekosistem manufaktur, pengecoran logam, permesinan, lansekap, dan solusi infrastruktur dari Klaten untuk Indonesia.'

useHead({
  titleTemplate: '%s',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'id'
  }
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/brand/og-image.webp',
  twitterCard: 'summary_large_image'
})

useSchemaOrg([
  defineOrganization({
    name: 'Kembar Futagroup',
    logo: '/images/brand/logo.png',
    description,
    url: 'https://kembarfutagroup.com',
    sameAs: [
      'https://www.instagram.com/futakeindonesia/',
      'https://www.linkedin.com/company/futake-hardware-indonesia/',
      'https://www.youtube.com/@FutakeIndonesia'
    ]
  }),
  defineWebSite({
    name: 'Kembar Futagroup'
  }),
  defineWebPage()
])

const curtainRef = ref<HTMLElement | null>(null)
const isCovering = ref(false)
const curtainRevealed = useCurtainRevealed()
const route = useRoute()
const isPublicPage = computed(() => !route.path.startsWith('/cms'))

let gsapInstance: typeof import('gsap').default | undefined

const getGsap = async () => {
  if (!gsapInstance) {
    gsapInstance = (await import('gsap')).default
  }

  return gsapInstance
}

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const withTimeout = (done: () => void, ms: number) => {
  const timer = setTimeout(done, ms)

  return () => clearTimeout(timer)
}

const onBeforeEnter = async () => {
  if (prefersReducedMotion() || !curtainRef.value) {
    curtainRevealed.value = true

    return
  }

  curtainRevealed.value = false

  if (isCovering.value) {
    return
  }

  const gsap = await getGsap()

  gsap.set(curtainRef.value, { display: 'block', scaleY: 1, transformOrigin: 'bottom' })
  isCovering.value = true
}

const onEnter = async (_el: Element, done: () => void) => {
  if (prefersReducedMotion() || !curtainRef.value) {
    curtainRevealed.value = true
    done()

    return
  }

  const clearFallback = withTimeout(done, 1500)

  try {
    const gsap = await getGsap()
    const nuxtApp = useNuxtApp()

    ;(nuxtApp.$lenis as { scrollTo: (target: number, opts: { immediate: boolean }) => void } | undefined)?.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)

    gsap.set(curtainRef.value, { transformOrigin: 'top' })

    await new Promise<void>((resolve) => {
      gsap!.to(curtainRef.value, {
        scaleY: 0,
        duration: 0.6,
        delay: 0.08,
        ease: 'power3.inOut',
        onComplete: resolve
      })
    })

    gsap.set(curtainRef.value, { display: 'none' })
    isCovering.value = false
  } finally {
    curtainRevealed.value = true
    clearFallback()
    done()
  }
}

const onLeave = async (_el: Element, done: () => void) => {
  if (prefersReducedMotion() || !curtainRef.value) {
    done()

    return
  }

  curtainRevealed.value = false

  const clearFallback = withTimeout(done, 1200)

  try {
    const gsap = await getGsap()

    gsap.set(curtainRef.value, { display: 'block', transformOrigin: 'bottom' })

    await new Promise<void>((resolve) => {
      gsap!.to(curtainRef.value, {
        scaleY: 1,
        duration: 0.45,
        ease: 'power3.inOut',
        onComplete: resolve
      })
    })

    isCovering.value = true
  } finally {
    clearFallback()
    done()
  }
}

onMounted(() => {
  // Vue's <Transition appear> doesn't reliably fire onBeforeEnter/onEnter for
  // markup that arrived via SSR (only for client-created elements), so on a
  // fresh load/reload the curtain hooks above may never run. Without this,
  // hero reveals waiting on curtainRevealed would stay hidden forever.
  requestAnimationFrame(() => {
    if (!isCovering.value) {
      curtainRevealed.value = true
    }
  })
})
</script>

<template>
  <UApp>
    <main :class="isPublicPage ? 'public-page' : 'cms-page'">
      <NuxtPage
        :transition="{
          name: 'page',
          mode: 'out-in',
          appear: true,
          css: false,
          onBeforeEnter,
          onEnter,
          onLeave
        }"
      />
    </main>

    <div
      ref="curtainRef"
      class="pointer-events-none fixed inset-0 z-100 hidden bg-ink"
      aria-hidden="true"
    />
  </UApp>
</template>

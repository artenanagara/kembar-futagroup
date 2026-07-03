<script setup lang="ts">
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
</script>

<template>
  <section class="relative min-h-svh overflow-hidden bg-ink text-white">
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
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
    <div class="pointer-events-none absolute bottom-0 right-0 h-28 w-64 bg-gradient-to-l from-black/70 to-transparent" />
    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.8)_0%,rgba(0,0,0,.35)_22%,rgba(0,0,0,.12)_44%,rgba(0,0,0,.34)_72%,rgba(0,0,0,.24)_100%)]" />

    <LayoutSiteHeader />

    <div class="relative z-10 mx-auto flex min-h-svh max-w-[1440px] items-end px-5 pb-12 pt-28 sm:px-8 lg:px-20 lg:pb-4">
      <div class="w-full lg:pl-30">
        <h1 class="max-w-6xl text-5xl font-medium leading-[1.12] text-white sm:text-6xl lg:text-7xl xl:text-[72px]">
          Membangun Infrastruktur Indonesia, dari Logam hingga Solusi Industri
        </h1>

        <div class="mt-12 flex max-w-3xl flex-col gap-6 pb-4 sm:flex-row sm:gap-16 lg:mt-16">
          <div class="flex min-w-48 items-center gap-2 text-base leading-relaxed text-white/90">
            <span class="size-1.5 rounded-full bg-white" />
            <span>Holding Manufaktur</span>
          </div>
          <div class="space-y-8 text-base leading-relaxed text-white/90">
            <p>
              Berawal dari keahlian teknik dan pengolahan logam di Klaten, Kembar Futago Group tumbuh menjadi ekosistem bisnis yang menaungi berbagai lini usaha.
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
</template>

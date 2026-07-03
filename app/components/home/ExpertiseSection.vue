<script setup lang="ts">
import { expertiseItems } from '~/data/home'

const activeIndex = ref(0)
let hoverTimer: ReturnType<typeof setTimeout> | undefined

const setActive = (index: number, delay = 45) => {
  if (hoverTimer) {
    clearTimeout(hoverTimer)
  }

  hoverTimer = setTimeout(() => {
    activeIndex.value = index
  }, delay)
}

onBeforeUnmount(() => {
  if (hoverTimer) {
    clearTimeout(hoverTimer)
  }
})
</script>

<template>
  <section
    class="bg-white"
    data-section-reveal
  >
    <div class="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-20 lg:py-25">
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
        <h2 class="text-4xl font-normal leading-[1.25] text-ink sm:text-5xl lg:text-6xl">
          Bidang Keahlian Kami
        </h2>
        <div class="h-px bg-black/20" />
        <div class="ml-auto grid max-w-4xl gap-8 text-base leading-relaxed text-black/70 lg:grid-cols-2 lg:gap-24">
          <p>Semuanya berawal dari keahlian teknik dan pengolahan logam di Klaten. Dari sana, Kembar Futago Group berkembang ke berbagai bidang yang saling terhubung.</p>
          <p>Setiap bidang memiliki fokus berbeda, namun berjalan dalam satu cara kerja yang sama: merancang, memproduksi, mengontrol kualitas, dan menghadirkan solusi yang siap digunakan.</p>
        </div>
      </div>

      <div class="mt-12 grid items-center gap-10 lg:grid-cols-[375px_1fr] lg:gap-16">
        <div
          class="relative h-80 overflow-hidden bg-neutral-200 lg:h-[500px]"
          data-reveal-item
        >
          <div
            v-for="(item, index) in expertiseItems"
            :key="item.image"
            class="absolute inset-0 transition-all duration-900 ease-[cubic-bezier(.22,1,.36,1)]"
            :class="activeIndex === index ? 'z-10 opacity-100 scale-100' : 'z-0 opacity-0 scale-105'"
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
            :class="activeIndex === index ? 'bg-black text-white' : 'border-b border-black/20 text-ink hover:bg-black/[0.03]'"
            @focus="setActive(index, 0)"
            @mouseenter="setActive(index)"
            @click="activeIndex = index"
          >
            <span
              class="w-5 pt-2 text-right text-sm font-medium transition-colors duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
              :class="activeIndex === index ? 'text-white' : 'text-black/50'"
            >
              {{ item.number }}
            </span>
            <span class="min-w-0 flex-1">
              <span class="flex items-center gap-8">
                <span class="flex-1 text-2xl font-medium leading-tight transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] sm:text-3xl">
                  {{ item.title }}
                </span>
                <UIcon
                  :name="activeIndex === index ? 'i-lucide-minus' : 'i-lucide-plus'"
                  class="size-6 shrink-0 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
                  :class="activeIndex === index ? 'rotate-180' : 'rotate-0'"
                />
              </span>
              <span
                class="grid transition-[grid-template-rows,opacity,margin] duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
                :class="activeIndex === index ? 'mt-8 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'"
              >
                <span class="block min-h-0 overflow-hidden">
                  <span
                    class="block max-w-2xl translate-y-0 text-base leading-relaxed text-white/80 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
                    :class="activeIndex === index ? 'translate-y-0' : '-translate-y-2'"
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
</template>

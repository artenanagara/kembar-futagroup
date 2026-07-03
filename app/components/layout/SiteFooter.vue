<script setup lang="ts">
import { footerColumns } from '~/data/navigation'

withDefaults(defineProps<{
  title?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}>(), {
  title: 'Bangun solusi industri bersama kami.',
  primaryLabel: 'Hubungi Kami',
  primaryTo: '#',
  secondaryLabel: undefined,
  secondaryTo: undefined
})
</script>

<template>
  <footer
    class="bg-black text-white"
    data-section-reveal
  >
    <div class="mx-auto max-w-360 px-5 sm:px-8 lg:px-20">
      <div
        class="flex flex-col justify-between gap-12 border-b border-white/30 pb-8 pt-12 lg:flex-row"
        data-reveal-item
      >
        <div class="space-y-12">
          <h2 class="max-w-143.25 text-4xl font-normal leading-[1.2] sm:text-5xl lg:text-[56px]">
            {{ title }}
          </h2>
          <div class="flex flex-wrap gap-5">
            <UiButton
              :to="primaryTo"
              size="lg"
              variant="white"
            >
              {{ primaryLabel }}
            </UiButton>
            <NuxtLink
              v-if="secondaryLabel && secondaryTo"
              :to="secondaryTo"
              class="inline-flex items-center px-2 py-4 text-base font-medium leading-tight text-white transition hover:text-brand-green"
            >
              {{ secondaryLabel }}
            </NuxtLink>
          </div>
        </div>

        <div class="space-y-4">
          <p class="text-base leading-tight">
            Ikuti Kami
          </p>
          <div class="flex flex-wrap gap-5">
            <NuxtLink
              v-for="social in ['Instagram', 'LinkedIn', 'YouTube']"
              :key="social"
              to="#"
              class="rounded-full bg-charcoal px-5 py-2 text-base font-normal leading-[1.2] text-white transition hover:bg-white hover:text-ink"
            >
              {{ social }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        class="grid gap-10 border-b border-white/20 py-8 lg:grid-cols-[1.3fr_2fr]"
        data-reveal-item
      >
        <div class="space-y-8">
          <div>
            <AppLogo class="h-7 w-auto text-white lg:h-9" />
            <p class="mt-5 max-w-md text-sm leading-[1.6] text-white/80">
              Kembar Futa Group adalah ekosistem holding manufaktur berbasis Klaten yang menaungi berbagai lini bisnis di bidang logam, manufaktur, infrastruktur, lanskap, agribisnis, dan solusi industri.
            </p>
          </div>
          <address class="space-y-4 not-italic">
            <div>
              <p class="text-base font-bold leading-[1.4] tracking-[0.05em]">
                Kantor Pusat
              </p>
              <p class="mt-1 text-base leading-[1.6] text-white/80">
                Klaten, Jawa Tengah, Indonesia
              </p>
            </div>
            <div>
              <p class="text-base font-bold leading-[1.4] tracking-[0.05em]">
                Email
              </p>
              <p class="mt-1 text-base leading-[1.6] text-white/80">
                kembarfutagroup@gmail.com
              </p>
            </div>
            <div>
              <p class="text-base font-bold leading-[1.4] tracking-[0.05em]">
                WhatsApp
              </p>
              <p class="mt-1 text-base leading-[1.6] text-white/80">
                0821 3672 8913
              </p>
            </div>
          </address>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="column in footerColumns"
            :key="column[0]"
            class="space-y-4"
          >
            <h3 class="text-base font-normal leading-[1.2] text-white">
              {{ column[0] }}
            </h3>
            <ul class="space-y-5">
              <li
                v-for="item in column.slice(1)"
                :key="item"
              >
                <NuxtLink
                  to="#"
                  class="text-base leading-[1.2] text-white/80 hover:text-white"
                >
                  {{ item }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col gap-4 py-4 text-base leading-[1.6] text-white sm:flex-row sm:items-center sm:justify-between"
        data-reveal-item
      >
        <p>© Copyright PT Kembar Futa Group 2026. All Right Reserved.</p>
        <div class="flex gap-6">
          <NuxtLink to="#">Kebijakan Privasi</NuxtLink>
          <NuxtLink to="#">Syarat & Ketentuan</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

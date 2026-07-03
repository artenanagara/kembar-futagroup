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
    <div class="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-20">
      <div
        class="flex flex-col justify-between gap-12 border-b border-white/30 py-12 lg:flex-row"
        data-reveal-item
      >
        <div class="space-y-12">
          <h2 class="max-w-xl text-4xl font-normal leading-tight sm:text-5xl">
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
              class="inline-flex"
            >
              <UiBadge variant="dark">
                {{ social }}
              </UiBadge>
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
            <p class="text-3xl font-bold tracking-[0.05em]">
              LOGO
            </p>
            <p class="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Kembar Futago Group adalah ekosistem holding manufaktur berbasis Klaten yang menaungi berbagai lini bisnis di bidang logam, manufaktur, infrastruktur, lanskap, agribisnis, dan solusi industri.
            </p>
          </div>
          <address class="space-y-4 not-italic">
            <div>
              <p class="text-sm font-medium">
                Kantor Pusat
              </p>
              <p class="mt-1 text-sm leading-relaxed text-white/70">
                Klaten, Jawa Tengah, Indonesia
              </p>
            </div>
            <div>
              <p class="text-sm font-medium">
                Email
              </p>
              <p class="mt-1 text-sm leading-relaxed text-white/70">
                kembarfutagroup@gmail.com
              </p>
            </div>
            <div>
              <p class="text-sm font-medium">
                WhatsApp
              </p>
              <p class="mt-1 text-sm leading-relaxed text-white/70">
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
            <h3 class="text-sm font-medium text-white">
              {{ column[0] }}
            </h3>
            <ul class="space-y-3">
              <li
                v-for="item in column.slice(1)"
                :key="item"
              >
                <NuxtLink
                  to="#"
                  class="text-sm leading-tight text-white/70 hover:text-white"
                >
                  {{ item }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col gap-4 py-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between"
        data-reveal-item
      >
        <p>© Copyright PT Kembar Futagrup (Persero) 2026. All Right Reserved.</p>
        <div class="flex gap-6">
          <NuxtLink to="#">Kebijakan Privasi</NuxtLink>
          <NuxtLink to="#">Syarat & Ketentuan</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

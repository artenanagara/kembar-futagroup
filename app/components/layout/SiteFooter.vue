<script setup lang="ts">
import { footerColumns } from '~/data/navigation'

withDefaults(defineProps<{
  title?: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}>(), {
  title: 'Bangun solusi industri bersama kami.',
  description: 'Jelajahi unit usaha, produk, dan solusi yang terhubung dalam ekosistem industri kami.',
  primaryLabel: 'Hubungi Kami',
  primaryTo: '#',
  secondaryLabel: 'Lihat Unit Usaha',
  secondaryTo: '/unit-bisnis'
})
</script>

<template>
  <LayoutCtaSection
    :title="title"
    :description="description"
    :primary-label="primaryLabel"
    :primary-to="primaryTo"
    :secondary-label="secondaryLabel"
    :secondary-to="secondaryTo"
  />

  <footer
    class="bg-white text-ink"
    data-section-reveal
  >
    <div class="mx-auto px-5 py-10 sm:px-8 lg:px-16 lg:pb-6 lg:pt-14 2xl:px-25">
      <div
        class="grid gap-10 border-b border-black/18 pb-14 lg:grid-cols-[minmax(220px,520px)_minmax(0,1fr)] lg:items-start lg:gap-16 2xl:gap-24"
        data-reveal-item
      >
        <BrandLogo class="h-16 w-auto lg:h-18 2xl:h-32" />

        <div class="flex flex-col items-start gap-7 lg:items-end">
          <p class="max-w-2xl text-left text-base font-medium leading-[1.55] text-black/68 lg:text-right">
            Kembar Futago Group adalah ekosistem holding manufaktur berbasis Klaten yang menaungi berbagai lini bisnis di bidang logam, manufaktur, infrastruktur, lanskap, properti, dan solusi industri.
          </p>
          <div class="flex w-full flex-wrap justify-start gap-5 lg:justify-end 2xl:gap-7">
            <NuxtLink
              v-for="social in ['Instagram', 'LinkedIn', 'YouTube']"
              :key="social"
              to="#"
              class="inline-flex min-h-12 items-center justify-center rounded-full bg-black/10 px-6 text-base font-medium leading-none text-ink transition duration-300 hover:bg-black hover:text-white lg:min-w-28 2xl:min-w-36 2xl:px-7 2xl:text-xl"
            >
              {{ social }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div
        class="grid gap-12 border-b border-black/18 py-12 lg:grid-cols-[minmax(220px,320px)_minmax(0,1fr)] lg:gap-12 2xl:grid-cols-[minmax(240px,520px)_minmax(0,1fr)] 2xl:gap-24"
        data-reveal-item
      >
        <div>
          <address class="space-y-8 not-italic">
            <div>
              <p class="text-base font-bold leading-tight tracking-wide text-ink">
                Kantor Pusat
              </p>
              <p class="mt-3 text-base font-medium leading-[1.45] text-black/68">
                Klaten, Jawa Tengah, Indonesia
              </p>
            </div>
            <div>
              <p class="text-base font-bold leading-tight tracking-wide text-ink">
                Email
              </p>
              <p class="mt-3 text-base font-medium leading-[1.45] text-black/68">
                kembarfutagroup@gmail.com
              </p>
            </div>
            <div>
              <p class="text-base font-bold leading-tight tracking-wide text-ink">
                WhatsApp
              </p>
              <p class="mt-3 text-base font-medium leading-[1.45] text-black/68">
                0821 3672 8913
              </p>
            </div>
          </address>
        </div>

        <div class="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8 2xl:gap-12">
          <div
            v-for="column in footerColumns"
            :key="column[0]"
            class="space-y-6"
          >
            <h3 class="text-base font-normal leading-tight text-ink 2xl:text-xl">
              {{ column[0] }}
            </h3>
            <ul class="space-y-5">
              <li
                v-for="item in column.slice(1)"
                :key="item"
              >
                <NuxtLink
                  to="#"
                  class="text-sm font-medium leading-tight text-black/65 transition hover:text-ink 2xl:text-base"
                >
                  {{ item }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col gap-5 pt-4 text-base font-medium leading-[1.4] text-black/70 sm:flex-row sm:items-center sm:justify-between lg:text-sm"
        data-reveal-item
      >
        <p>© Copyright PT Kembar Futagrup (Persero) 2026. All Right Reserved.</p>
        <div class="flex flex-wrap gap-8 lg:gap-14">
          <NuxtLink
            to="#"
            class="transition hover:text-brand-green"
          >
            Kebijakan Privasi
          </NuxtLink>
          <NuxtLink
            to="#"
            class="transition hover:text-brand-green"
          >
            Syarat & Ketentuan
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

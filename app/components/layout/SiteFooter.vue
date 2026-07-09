<script setup lang="ts">
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
        class="border-b border-black/18 py-12"
        data-reveal-item
      >
        <address class="flex flex-wrap gap-12 not-italic lg:gap-20">
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
              <a
                href="mailto:kembarfutagroup@gmail.com"
                class="transition hover:text-ink"
              >kembarfutagroup@gmail.com</a>
            </p>
          </div>
          <div>
            <p class="text-base font-bold leading-tight tracking-wide text-ink">
              WhatsApp
            </p>
            <p class="mt-3 text-base font-medium leading-[1.45] text-black/68">
              <a
                href="https://wa.me/6282136728913"
                target="_blank"
                rel="noopener"
                class="transition hover:text-ink"
              >0821 3672 8913</a>
            </p>
          </div>
        </address>
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

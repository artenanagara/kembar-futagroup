<script setup lang="ts">
const cities = [
  'Jakarta',
  'Yogyakarta',
  'Semarang',
  'Surabaya',
  'Balikpapan',
  'Samarinda',
  'Makassar',
  'Medan'
] as const

const tickerCities = [...cities, ...cities]
</script>

<template>
  <section
    class="overflow-hidden bg-ink text-white"
    data-header-theme="dark"
    data-section-reveal
  >
    <div class="mx-auto max-w-360 px-5 py-18 sm:px-8 lg:px-20 lg:py-22">
      <div
        class="mx-auto flex max-w-6xl flex-col items-center text-center"
        data-reveal-item
      >
        <h2 class="max-w-4xl text-balance text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-6xl">
          Berbasis di Klaten, menjangkau pasar nasional
        </h2>

        <p class="mt-7 text-xs font-semibold uppercase leading-tight tracking-[0.22em] text-white/48">
          JARINGAN PENJUALAN
        </p>

        <div class="mt-5 w-full max-w-xs overflow-hidden text-base font-medium leading-none text-white/62 mask-[linear-gradient(90deg,transparent,black_18%,black_82%,transparent)] sm:max-w-md">
          <div class="sales-network-ticker-track flex w-max items-center gap-7 whitespace-nowrap">
            <template
              v-for="(city, index) in tickerCities"
              :key="`${city}-${index}`"
            >
              <span>{{ city }}</span>
              <span
                class="text-brand-green/80"
                aria-hidden="true"
              >•</span>
            </template>
          </div>
        </div>

        <div class="relative mx-auto h-112 w-full max-w-6xl overflow-hidden sm:h-144 lg:h-192">
          <img
            src="/images/misc/sales-network-globe.png"
            alt="Globe jaringan penjualan Kembar Futago Group dengan fokus Indonesia"
            class="absolute inset-0 size-full select-none object-cover object-top mix-blend-screen scale-[1.5] sm:scale-[1.75] lg:scale-[2] origin-top"
            draggable="false"
          >
          <div class="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-ink via-ink/80 to-transparent" />
        </div>
      </div>

      <p
        class="relative z-10 mx-auto -mt-20 max-w-4xl text-center text-base leading-relaxed text-white/80 sm:-mt-28 sm:text-lg lg:-mt-36"
        data-reveal-item
      >
        Melalui kantor cabang penjualan di berbagai kota besar, kami memastikan produk dan layanan Kembar Futago Group dapat diakses oleh pelanggan di seluruh Indonesia.
      </p>
    </div>
  </section>
</template>

<style scoped>
.sales-network-ticker-track {
  animation: sales-network-ticker 18s linear infinite;
}

@keyframes sales-network-ticker {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .sales-network-ticker-track {
    animation: none;
  }
}
</style>

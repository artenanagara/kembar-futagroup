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
        <h2 class="max-w-4xl text-balance text-3xl font-medium leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
          Berbasis di Klaten, menjangkau pasar nasional
        </h2>

        <p class="mt-7 text-xs font-semibold uppercase leading-tight tracking-[0.22em] text-white/48">
          JARINGAN PENJUALAN
        </p>

        <div class="mt-5 w-full max-w-xs overflow-hidden text-base font-medium leading-none text-white/62 [mask-image:linear-gradient(90deg,transparent,black_18%,black_82%,transparent)] sm:max-w-md">
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

        <div
          class="mt-7 flex flex-col items-center"
          aria-hidden="true"
        >
          <span class="h-15 w-px bg-white/28 sm:h-20" />
          <span class="-mt-px size-2.5 rounded-full bg-brand-green" />
        </div>

        <div class="relative mx-auto mt-6 h-[24rem] w-full max-w-[72rem] overflow-hidden sm:h-[28rem] lg:h-[33rem]">
          <img
            src="/images/sales-network-globe.png"
            alt="Globe jaringan penjualan Kembar Futago Group dengan fokus Indonesia"
            class="absolute inset-0 size-full origin-top scale-150 select-none object-cover object-top mix-blend-screen"
            draggable="false"
          >
          <div class="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-ink via-ink/85 to-transparent" />
        </div>
      </div>

      <p
        class="mx-auto mt-6 max-w-4xl text-center text-base leading-relaxed text-white/62 sm:text-lg"
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

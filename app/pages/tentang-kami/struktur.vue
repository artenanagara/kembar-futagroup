<script setup lang="ts">
const title = 'Struktur Grup - Kembar Futa Group'
const description = 'Struktur Kembar Futago Group sebagai ekosistem holding manufaktur, teknik, produk, dan solusi infrastruktur.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=85',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <AboutStructurePageHero />
    <AboutStructureOverviewSection />
    <LayoutSiteFooter
      title="Kenali nilai yang membentuk grup ini."
      primary-label="Value Owner"
      primary-to="/tentang-kami/value-owner"
    />
  </div>
</template>

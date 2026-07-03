<script setup lang="ts">
const title = 'Value Owner - Kembar Futa Group'
const description = 'Kisah dan prinsip Ir. H. Fikky Arif Ardianta sebagai sosok di balik Kembar Futago Group.'

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
    <AboutValueOwnerHero />
    <AboutValueOwnerFounderSection />
    <AboutValueOwnerQuoteSection />
    <AboutValueOwnerPrinciplesSection />
    <LayoutSiteFooter
      title="Kenali lebih dalam grup yang ia bangun."
      primary-label="Tentang Grup"
      primary-to="/tentang-kami"
    />
  </div>
</template>

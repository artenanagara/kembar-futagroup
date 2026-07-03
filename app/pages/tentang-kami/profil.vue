<script setup lang="ts">
const title = 'Profil Perusahaan - Kembar Futa Group'
const description = 'Profil Kembar Futago Group sebagai holding manufaktur dari Klaten yang menaungi unit usaha logam, permesinan, lansekap, dan infrastruktur.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1600&q=85',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <AboutProfilePageHero />
    <AboutProfileIntroSection />
    <AboutProfileStorySection />
    <AboutProfileVisionMissionSection />
    <AboutProfileValuesSection />
    <LayoutSiteFooter
      title="Kenali ekosistem usaha kami"
      primary-label="Lihat Unit Bisnis"
      primary-to="/unit-bisnis"
      secondary-label="Hubungi Kami"
      secondary-to="#"
    />
  </div>
</template>

<script setup lang="ts">
const title = 'Kembar Futa Group - Holding Manufaktur dan Solusi Industri'
const description = 'Kembar Futa Group membangun ekosistem manufaktur, pengecoran logam, permesinan, lansekap, dan solusi infrastruktur dari Klaten untuk Indonesia.'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'id'
  }
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=80',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <main>
      <NuxtPage />
    </main>
  </UApp>
</template>

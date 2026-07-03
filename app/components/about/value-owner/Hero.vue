<script setup lang="ts">
import { valueOwnerHero } from '~/data/about'
</script>

<template>
  <section
    class="relative min-h-[500px] overflow-hidden bg-ink text-white"
    data-scroll-parallax-container
  >
    <img
      :src="valueOwnerHero.image"
      :alt="valueOwnerHero.title"
      class="absolute -inset-y-12 left-0 h-[calc(100%+96px)] w-full scale-105 object-cover"
      data-scroll-parallax="96"
      data-scroll-scrub="0.9"
    >
    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.8)_0%,rgba(0,0,0,.35)_20%,rgba(0,0,0,.1)_40%,rgba(0,0,0,.2)_100%)]" />
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.42)_0%,rgba(0,0,0,.04)_54%,rgba(0,0,0,.34)_100%)]" />

    <LayoutSiteHeader />

    <div class="relative z-10 mx-auto flex min-h-[500px] max-w-[1440px] items-end px-5 pb-12 pt-28 sm:px-8 lg:px-20">
      <div class="space-y-8">
        <nav
          class="flex flex-wrap items-center gap-2 text-sm font-medium leading-tight text-white/72"
          aria-label="Breadcrumb"
        >
          <template
            v-for="(crumb, index) in valueOwnerHero.breadcrumbs"
            :key="crumb.label"
          >
            <NuxtLink
              v-if="crumb.to"
              :to="crumb.to"
              class="transition hover:text-white"
            >
              {{ crumb.label }}
            </NuxtLink>
            <span
              v-else
              class="text-white"
            >
              {{ crumb.label }}
            </span>
            <span
              v-if="index < valueOwnerHero.breadcrumbs.length - 1"
              class="text-white/45"
            >/</span>
          </template>
        </nav>

        <h1 class="text-4xl font-medium leading-tight sm:text-5xl">
          {{ valueOwnerHero.title }}
        </h1>
      </div>
    </div>
  </section>
</template>

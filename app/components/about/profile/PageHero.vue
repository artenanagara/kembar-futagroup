<script setup lang="ts">
import { aboutHero } from '~/data/about'
</script>

<template>
  <section class="relative min-h-[460px] overflow-hidden bg-ink text-white sm:min-h-[500px]">
    <img
      :src="aboutHero.image"
      :alt="aboutHero.title"
      class="absolute inset-0 size-full object-cover"
    >
    <div class="absolute inset-0 backdrop-blur-[2px]" />
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.72)_0%,rgba(0,0,0,.32)_48%,rgba(0,0,0,.74)_100%)]" />
    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.72)_0%,rgba(0,0,0,.16)_42%,rgba(0,0,0,.58)_100%)]" />

    <LayoutSiteHeader />

    <div class="relative z-10 mx-auto flex min-h-[460px] max-w-[1440px] items-end px-5 pb-14 pt-28 sm:min-h-[500px] sm:px-8 lg:px-20">
      <div class="max-w-3xl">
        <nav
          class="mb-8 flex flex-wrap items-center gap-2 text-sm leading-tight text-white/70"
          aria-label="Breadcrumb"
        >
          <template
            v-for="(crumb, index) in aboutHero.breadcrumbs"
            :key="crumb"
          >
            <NuxtLink
              v-if="index === 0"
              to="/"
              class="transition hover:text-white"
            >
              {{ crumb }}
            </NuxtLink>
            <span
              v-else
              class="text-white/90"
            >
              {{ crumb }}
            </span>
            <span
              v-if="index < aboutHero.breadcrumbs.length - 1"
              class="text-white/40"
            >/</span>
          </template>
        </nav>

        <h1 class="text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
          {{ aboutHero.title }}
        </h1>
        <p class="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
          {{ aboutHero.description }}
        </p>
      </div>
    </div>
  </section>
</template>

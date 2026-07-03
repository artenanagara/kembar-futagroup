<script setup lang="ts">
import { aboutStructureHero } from '~/data/about'
</script>

<template>
  <section class="relative min-h-[500px] overflow-hidden bg-ink text-white">
    <img
      :src="aboutStructureHero.image"
      :alt="aboutStructureHero.title"
      class="absolute inset-0 size-full object-cover"
    >
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.74)_0%,rgba(0,0,0,.28)_48%,rgba(0,0,0,.68)_100%)]" />
    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.72)_0%,rgba(0,0,0,.16)_42%,rgba(0,0,0,.56)_100%)]" />

    <LayoutSiteHeader />

    <div class="relative z-10 mx-auto flex min-h-[500px] max-w-[1440px] items-end px-5 pb-14 pt-28 sm:px-8 lg:px-20">
      <div class="max-w-3xl">
        <nav
          class="mb-8 flex flex-wrap items-center gap-2 text-sm leading-tight text-white/70"
          aria-label="Breadcrumb"
        >
          <template
            v-for="(crumb, index) in aboutStructureHero.breadcrumbs"
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
              class="text-white/90"
            >
              {{ crumb.label }}
            </span>
            <span
              v-if="index < aboutStructureHero.breadcrumbs.length - 1"
              class="text-white/40"
            >/</span>
          </template>
        </nav>

        <h1 class="text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
          {{ aboutStructureHero.title }}
        </h1>
        <p class="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
          {{ aboutStructureHero.description }}
        </p>
      </div>
    </div>
  </section>
</template>

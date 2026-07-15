<script setup lang="ts">
type Breadcrumb = {
  label: string
  to?: string
}

type HeroOverlay = 'vignette' | 'vignette-soft' | 'vignette-horizontal' | 'vignette-side'

withDefaults(defineProps<{
  title: string
  description?: string
  image: string
  imageAlt: string
  breadcrumbs?: Breadcrumb[]
  revealTitle?: boolean
  heightClass?: string
  overlay?: HeroOverlay
}>(), {
  description: undefined,
  breadcrumbs: () => [],
  revealTitle: true,
  heightClass: 'min-h-125',
  overlay: 'vignette'
})
</script>

<template>
  <section
    class="relative flex flex-col overflow-hidden bg-ink text-white"
    :class="heightClass"
    data-section-reveal
  >
    <img
      :src="image"
      :alt="imageAlt"
      class="absolute inset-0 size-full object-cover"
    >
    <div
      v-if="overlay === 'vignette'"
      class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.8)_0%,rgba(0,0,0,.35)_20%,rgba(0,0,0,.1)_40%,rgba(0,0,0,.42)_100%)]"
    />
    <div
      v-else-if="overlay === 'vignette-soft'"
      class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.72)_0%,rgba(0,0,0,.16)_42%,rgba(0,0,0,.56)_100%)]"
    />
    <div
      v-else-if="overlay === 'vignette-horizontal'"
      class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.74)_0%,rgba(0,0,0,.28)_48%,rgba(0,0,0,.68)_100%)]"
    />
    <template v-else>
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.74)_0%,rgba(0,0,0,.28)_48%,rgba(0,0,0,.68)_100%)]" />
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.72)_0%,rgba(0,0,0,.16)_42%,rgba(0,0,0,.56)_100%)]" />
    </template>

    <LayoutSiteHeader />

    <div class="relative z-10 mx-auto flex w-full flex-1 flex-col items-start justify-end gap-6 px-5 pb-10 pt-28 sm:gap-8 sm:px-8 sm:pb-12 lg:px-20">
      <nav
        v-if="breadcrumbs.length"
        class="flex flex-wrap items-center gap-2 text-sm leading-tight text-white/70"
        aria-label="Breadcrumb"
        data-reveal-item
      >
        <template
          v-for="(crumb, index) in breadcrumbs"
          :key="`${crumb.label}-${index}`"
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
            v-if="index < breadcrumbs.length - 1"
            class="text-white/45"
          >/</span>
        </template>
      </nav>

      <h1 class="max-w-5xl text-4xl font-normal leading-tight sm:text-5xl lg:text-6xl">
        <UiRevealText
          v-if="revealTitle"
          :text="title"
        />
        <span v-else>{{ title }}</span>
      </h1>

      <p
        v-if="description"
        class="max-w-2xl text-base leading-relaxed text-white/80"
        data-reveal-item
      >
        {{ description }}
      </p>
    </div>
  </section>
</template>

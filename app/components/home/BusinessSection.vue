<script setup lang="ts">
import { businessUnits } from '~/data/business-units'

const filters = ['Manufaktur & Logam', 'Mesin & Teknik', 'Material & Lansekap']
</script>

<template>
  <section
    class="bg-white"
    data-section-reveal
  >
    <div class="mx-auto max-w-360 px-5 py-24 sm:px-8 lg:px-20 lg:py-25">
      <div
        class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        data-reveal-item
      >
        <div class="max-w-2xl">
          <p class="text-sm font-medium leading-tight text-brand-green">
            Unit Bisnis
          </p>
          <h2 class="mt-1 text-4xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl">
            Satu Ekosistem Industri
          </h2>
          <p class="mt-2 text-base leading-relaxed text-black/70">
            Beberapa perusahaan yang bergerak dalam satu ekosistem industri yang terpadu
          </p>
        </div>

        <div class="flex flex-wrap gap-3 lg:justify-end">
          <UiButton
            v-for="(filter, index) in filters"
            :key="filter"
            type="button"
            :variant="index === 0 ? 'primary' : 'secondary'"
          >
            {{ filter }}
          </UiButton>
        </div>
      </div>

      <div
        class="my-8 h-px bg-black/30"
        data-reveal-item
      />

      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="unit in businessUnits"
          :key="unit.name"
          class="group relative flex min-h-105 overflow-hidden bg-black p-8 text-white lg:min-h-125"
          data-reveal-item
        >
          <img
            :src="unit.image"
            :alt="unit.name"
            class="absolute inset-0 size-full object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:grayscale"
          >
          <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.05)_0%,rgba(0,0,0,.72)_100%)]" />
          <div class="absolute inset-0 bg-black opacity-0 transition duration-500 ease-out group-hover:opacity-85" />
          <div class="relative z-10 flex w-full flex-col justify-between">
            <div class="flex items-center justify-between gap-4">
              <UiBadge
                variant="orange"
                size="lg"
              >
                {{ unit.category }}
              </UiBadge>
              <UIcon
                name="i-lucide-arrow-up-right"
                class="size-6"
              />
            </div>
            <div class="translate-y-18 space-y-3 transition duration-500 ease-out group-hover:translate-y-0">
              <h3 class="text-3xl font-medium leading-tight transition duration-500 ease-out lg:text-4xl">
                {{ unit.name }}
              </h3>
              <p
                v-if="unit.description"
                class="max-w-sm translate-y-6 text-base font-medium leading-relaxed text-white/70 opacity-0 transition duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
              >
                {{ unit.description }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

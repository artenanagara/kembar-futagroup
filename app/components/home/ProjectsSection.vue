<script setup lang="ts">
import { projects } from '~/data/home'
</script>

<template>
  <section
    class="bg-white"
    data-section-reveal
  >
    <div class="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-20 lg:py-25">
      <div
        class="space-y-8"
        data-reveal-item
      >
        <p class="text-sm font-medium leading-tight text-brand-green">
          Portfolio
        </p>
        <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 class="text-4xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl">
            Karya Kami <br>di Berbagai Sektor
          </h2>
          <UiButton
            to="#"
            variant="secondary"
            trailing-icon="i-lucide-arrow-up-right"
          >
            Lihat Karya Kami
          </UiButton>
        </div>
        <div class="h-px bg-black/20" />
      </div>

      <div class="mt-8 grid gap-8 lg:grid-cols-2">
        <article
          v-for="project in projects"
          :key="project.title"
          class="group space-y-8"
          data-reveal-item
        >
          <div class="space-y-4 transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-translate-y-1">
            <h3 class="text-2xl font-normal leading-snug text-ink transition-colors duration-500 group-hover:text-brand-green lg:text-3xl">
              {{ project.title }}
            </h3>
            <div class="relative h-80 overflow-hidden bg-neutral-200 sm:h-[468px]">
              <img
                :src="project.image"
                :alt="project.title"
                class="size-full object-cover transition duration-900 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105 group-hover:grayscale group-hover:brightness-75"
              >
              <div class="absolute inset-0 bg-black/0 transition duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:bg-black/20" />
              <div class="absolute right-5 top-5 flex size-12 translate-y-2 items-center justify-center border border-white/70 text-white opacity-0 transition duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="size-5"
                />
              </div>
            </div>
          </div>
          <dl class="transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-1">
            <div
              v-for="[label, value] in project.meta"
              :key="label"
              class="grid grid-cols-[1fr_1.3fr] gap-4 border-b border-black/20 px-5 py-4 text-sm transition-colors duration-500 group-hover:border-black/30"
            >
              <dt class="text-black/70">
                {{ label }}
              </dt>
              <dd class="text-right font-medium leading-relaxed text-ink">
                {{ value }}
              </dd>
            </div>
          </dl>
        </article>
      </div>
    </div>
  </section>
</template>

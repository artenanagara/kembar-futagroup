<script setup lang="ts">
import { visionMission } from '~/data/about'
</script>

<template>
  <section
    class="bg-black text-white"
    data-section-reveal
  >
    <div class="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
      <div
        class="grid gap-8 lg:grid-cols-[110px_1fr]"
        data-reveal-item
      >
        <p class="text-sm leading-tight text-white/45">
          {{ visionMission.vision.label }}
        </p>
        <div class="max-w-2xl">
          <h2 class="text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
            {{ visionMission.vision.title }}
          </h2>
          <p class="mt-5 text-base leading-relaxed text-white/65">
            {{ visionMission.vision.description }}
          </p>
        </div>
      </div>

      <div
        class="my-12 h-px bg-white/18"
        data-reveal-item
      />

      <div
        class="grid gap-8 lg:grid-cols-[110px_1fr]"
        data-reveal-item
      >
        <p class="text-sm leading-tight text-white/45">
          {{ visionMission.mission.label }}
        </p>
        <div>
          <div class="max-w-2xl">
            <h2 class="text-3xl font-normal leading-tight sm:text-4xl lg:text-5xl">
              {{ visionMission.mission.title }}
            </h2>
            <p class="mt-5 text-base leading-relaxed text-white/65">
              {{ visionMission.mission.description }}
            </p>
          </div>

          <div class="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <article
              v-for="principle in visionMission.principles"
              :key="principle.title"
              class="border border-white/24 p-6 transition duration-500 ease-out hover:border-brand-green hover:bg-white/[0.04]"
            >
              <h3 class="text-base font-medium leading-tight text-white">
                {{ principle.title }}
              </h3>
              <p class="mt-6 text-sm leading-relaxed text-white/62">
                {{ principle.description }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

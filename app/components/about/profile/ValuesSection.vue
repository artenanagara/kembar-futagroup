<script setup lang="ts">
import { companyValues } from '~/data/about'
</script>

<template>
  <section
    class="bg-white"
    data-section-reveal
  >
    <div class="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-20 lg:py-25">
      <p
        class="text-sm font-medium leading-tight text-brand-green"
        data-reveal-item
      >
        Nilai & Budaya
      </p>
      <h2
        class="mt-2 text-4xl font-normal leading-tight text-ink sm:text-5xl lg:text-6xl"
        data-reveal-item
      >
        Cara kami bersikap setiap hari
      </h2>
      <div
        class="mt-8 h-px bg-black/20"
        data-reveal-item
      />

      <div class="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="value in companyValues"
          :key="value.title"
          class="group border border-black/16 p-7 transition duration-500 ease-out hover:-translate-y-1 hover:border-brand-green"
          data-reveal-item
        >
          <div class="flex size-8 items-center justify-center bg-neutral-200 text-black/55 transition duration-500 ease-out group-hover:bg-brand-green group-hover:text-white">
            <UIcon
              :name="value.icon"
              class="size-5"
            />
          </div>
          <h3 class="mt-10 text-base font-medium leading-tight text-ink">
            {{ value.title }}
          </h3>
          <p class="mt-5 text-sm leading-relaxed text-black/65">
            {{ value.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

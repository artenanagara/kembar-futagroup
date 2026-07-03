<script setup lang="ts">
import type { NavItem } from '~/data/navigation'

const props = defineProps<{
  item: NavItem
}>()

const visibleChildren = computed(() => {
  const limit = props.item.dropdownLimit ?? props.item.children?.length ?? 0

  return props.item.children?.slice(0, limit) ?? []
})
</script>

<template>
  <div class="absolute inset-x-0 top-20 hidden xl:block">
    <div class="mx-auto max-w-[1440px] px-8 lg:px-20">
      <div class="grid min-h-[320px] grid-cols-[minmax(240px,.8fr)_minmax(320px,1fr)_minmax(420px,1.2fr)] gap-8 border border-black/10 bg-white/96 p-6 text-ink shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div class="flex flex-col justify-between border-r border-black/12 pr-8">
          <div>
            <p class="text-sm font-medium leading-tight text-brand-green">
              {{ item.eyebrow ?? item.label }}
            </p>
            <h2 class="mt-4 text-3xl font-medium leading-tight">
              {{ item.label }}
            </h2>
            <p class="mt-5 text-base leading-relaxed text-black/65">
              {{ item.description }}
            </p>
          </div>

          <NuxtLink
            :to="item.to"
            class="mt-8 inline-flex items-center gap-2 text-sm font-medium leading-tight text-brand-green transition hover:text-ink"
          >
            Lihat Semua
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-4"
            />
          </NuxtLink>
        </div>

        <div class="border-r border-black/12 pr-8">
          <NuxtLink
            v-for="child in visibleChildren"
            :key="child.label"
            :to="child.to"
            class="group grid grid-cols-[18px_1fr] gap-3 border-b border-black/10 py-3.5 text-left last:border-b-0"
          >
            <span class="pt-0.5 text-base leading-none text-brand-green">+</span>
            <span>
              <span class="block text-lg font-medium leading-tight text-black/68 transition-colors duration-200 group-hover:text-brand-green">
                {{ child.label }}
              </span>
              <span
                v-if="child.description"
                class="mt-1.5 block text-sm leading-relaxed text-black/50"
              >
                {{ child.description }}
              </span>
            </span>
          </NuxtLink>
        </div>

        <div class="relative overflow-hidden bg-neutral-200">
          <img
            v-if="item.image?.src"
            :src="item.image.src"
            :alt="item.image.alt"
            class="size-full object-cover grayscale transition duration-700 ease-out hover:scale-105 hover:grayscale-0"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavItem } from '~/data/navigation'

const props = defineProps<{
  item: NavItem
}>()

const visibleChildren = computed(() => {
  const limit = props.item.dropdownLimit ?? props.item.children?.length ?? 0

  return props.item.children?.slice(0, limit) ?? []
})

const rowCount = computed(() => Math.ceil(visibleChildren.value.length / 2))

const imageAspectClass = computed(() => {
  if (rowCount.value <= 2) {
    return 'aspect-video'
  }

  if (rowCount.value === 3) {
    return 'aspect-square'
  }

  return 'aspect-[3/4]'
})
</script>

<template>
  <div class="absolute inset-x-0 top-20 hidden xl:block">
    <div class="mx-auto max-w-360 px-8 lg:px-20">
      <div class="grid items-start grid-cols-[minmax(240px,.7fr)_minmax(520px,1.4fr)_minmax(380px,1fr)] gap-8 border border-black/10 bg-white/96 p-6 text-ink shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div class="flex flex-col justify-between border-r border-black/12 pr-8">
          <div>
            <p class="text-sm font-medium uppercase leading-tight tracking-wide text-brand-green">
              {{ item.eyebrow ?? item.label }}
            </p>
            <h2 class="mt-4 text-2xl font-medium leading-tight">
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

        <div class="grid grid-cols-2 content-start items-start gap-x-8 border-r border-black/12 pr-8 [&>*:nth-last-child(-n+2)]:border-b-0">
          <NuxtLink
            v-for="child in visibleChildren"
            :key="child.label"
            :to="child.to"
            class="group grid grid-cols-[18px_1fr] gap-3 border-b border-black/10 py-3.5 text-left"
          >
            <span class="pt-0.5 text-base leading-none text-brand-green">+</span>
            <span>
              <span class="block truncate text-base font-medium leading-tight text-black/68 transition-colors duration-200 group-hover:text-brand-green">
                {{ child.label }}
              </span>
              <span class="mt-1.5 line-clamp-3 min-h-17.5 text-sm leading-relaxed text-black/50">
                {{ child.description }}
              </span>
            </span>
          </NuxtLink>
        </div>

        <div
          class="relative overflow-hidden bg-neutral-200"
          :class="imageAspectClass"
        >
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

<script setup lang="ts">
import { formatNewsDate } from '~/utils/date'

withDefaults(defineProps<{
  post: {
    slug: string
    title: string
    image: string
    category: string
    date: string
    readTime: string
  }
  headingTag?: 'h2' | 'h3'
}>(), {
  headingTag: 'h2'
})
</script>

<template>
  <NuxtLink
    :to="`/berita/${post.slug}`"
    class="group space-y-4"
    data-reveal-item
  >
    <div class="overflow-hidden">
      <img
        :src="post.image"
        :alt="post.title"
        class="h-64 w-full object-cover transition duration-700 ease-out group-hover:scale-105 lg:h-76"
      >
    </div>
    <div class="space-y-2">
      <UiBadge
        variant="outline-dark"
        size="sm"
      >
        {{ post.category }}
      </UiBadge>
      <component
        :is="headingTag"
        class="min-h-11 text-base font-medium leading-tight text-ink transition-colors duration-200 group-hover:text-brand-green"
      >
        {{ post.title }}
      </component>
    </div>
    <div class="flex items-center gap-4 text-sm leading-relaxed text-black/45">
      <time :datetime="post.date">{{ formatNewsDate(post.date) }}</time>
      <span class="size-1.5 rounded-full bg-neutral-300" />
      <span>{{ post.readTime }}</span>
    </div>
  </NuxtLink>
</template>

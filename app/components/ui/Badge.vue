<script setup lang="ts">
type BadgeVariant = 'orange' | 'outline-dark' | 'outline-light' | 'dark'
type BadgeSize = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  variant?: BadgeVariant
  size?: BadgeSize
}>(), {
  variant: 'outline-dark',
  size: 'md'
})

const baseClass = 'inline-flex items-center justify-center rounded-full leading-tight transition duration-300 ease-out'

const variantClass: Record<BadgeVariant, string> = {
  'orange': 'bg-brand-orange/80 text-white',
  'outline-dark': 'border border-black/20 text-ink',
  'outline-light': 'border border-white/80 text-white/80',
  'dark': 'bg-charcoal text-white hover:bg-white hover:text-ink'
}

const sizeClass: Record<BadgeSize, string> = {
  sm: 'px-4 py-1 text-xs',
  md: 'px-4 py-1.5 text-sm',
  lg: 'px-5 py-3 text-base'
}

const classes = computed(() => [
  baseClass,
  variantClass[props.variant],
  sizeClass[props.size]
])
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary' | 'white' | 'orange-outline'
type ButtonSize = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  to?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: ButtonVariant
  size?: ButtonSize
  trailingIcon?: string
}>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  trailingIcon: undefined,
  to: undefined
})

const baseClass = 'inline-flex items-center justify-center gap-2 rounded-full font-medium leading-tight transition duration-300 ease-out active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green disabled:pointer-events-none disabled:opacity-50'

const variantClass: Record<ButtonVariant, string> = {
  'primary': 'bg-brand-green text-white hover:bg-black',
  'secondary': 'border border-brand-green text-brand-green hover:border-black hover:bg-black hover:text-white',
  'white': 'border border-white/80 text-white hover:bg-white hover:text-ink',
  'orange-outline': 'border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-ink focus-visible:outline-brand-orange'
}

const sizeClass: Record<ButtonSize, string> = {
  sm: 'px-8 py-4 text-sm',
  md: 'px-8 py-6 text-base',
  lg: 'px-12 py-8 text-base'
}

const classes = computed(() => [
  baseClass,
  variantClass[props.variant],
  sizeClass[props.size]
])
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="classes"
  >
    <slot />
    <UIcon
      v-if="trailingIcon"
      :name="trailingIcon"
      class="size-4"
    />
  </NuxtLink>

  <button
    v-else
    :type="type"
    :class="classes"
  >
    <slot />
    <UIcon
      v-if="trailingIcon"
      :name="trailingIcon"
      class="size-4"
    />
  </button>
</template>

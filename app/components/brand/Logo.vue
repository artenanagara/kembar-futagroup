<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'default' | 'white'
}>(), {
  variant: 'default'
})

const logoSrc = computed(() => props.variant === 'white' ? '/images/brand/logo-white.png' : '/images/brand/logo-transparent.png')
</script>

<template>
  <img
    :src="logoSrc"
    alt="Kembar Futagroup"
  >
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'default' | 'white'
}>(), {
  variant: 'default'
})

const logoSrc = computed(() => props.variant === 'white' ? '/logo-white.png' : '/logo-transparent.png')
</script>

<template>
  <img
    :src="logoSrc"
    alt="Kembar Futagroup"
  >
</template>

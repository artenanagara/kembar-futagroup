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
    width="1192"
    height="626"
    alt="Kembar Futagroup Companies"
    class="block object-contain"
    decoding="async"
    draggable="false"
  >
</template>

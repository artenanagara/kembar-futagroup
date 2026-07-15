<script setup lang="ts">
const props = defineProps<{
  text: string
}>()

const words = computed(() => props.text.split(' '))
</script>

<template>
  <span>
    <span
      v-for="(word, index) in words"
      :key="`${word}-${index}`"
      class="inline-block overflow-hidden pb-[0.1em]"
    >
      <span
        class="inline-block"
        data-reveal-item
        data-reveal-from="mask"
      >{{ word }}<template v-if="index < words.length - 1">&nbsp;</template></span>
    </span>
  </span>
</template>

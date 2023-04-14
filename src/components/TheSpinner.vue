<template>
  <div v-show="showSpinner" class="spinner--background">
    <p class="loading-title mobile-only">{{ title }}</p>
    <div class="spinner--modal">
      <div class="spinner"></div>
      <p class="loading-title desktop-only">{{ title }}</p>
      <p class="loading-description">{{ paragraph }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const showSpinner = ref(true);

const props = defineProps({
  title: {
    type: String,
  },
  paragraph: {
    type: String,
  },
});
</script>
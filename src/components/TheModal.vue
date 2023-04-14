<template>
  <div v-show="showModal" class="modal--background">
    
    <div class="modal">
      <p class="modal--title mobile-only">{{ title }}</p>
      <div class="modal--spinner"></div>
      <p class="modal--title desktop-only">{{ title }}</p>
      <p class="modal--description">{{ description }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const showModal = ref(true);

const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});
</script>
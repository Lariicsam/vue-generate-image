<template>
  <div v-show="showSidebar" class="sidebar--background"></div>
</template>
<script setup>
import { ref } from "vue";
const showSidebar = ref(false);
</script>
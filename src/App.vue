<template>
  <the-header />
  <main class="container--main">
    <RouterView />
  </main>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
</script>

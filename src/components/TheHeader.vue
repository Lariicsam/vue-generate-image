<template>
  <header class="header--wrapper">
    <div class="header">
      <div class="header--logo"></div>
      <div class="header--navigation">
        <the-nav :items="navigationData" />
      </div>
      <div class="header--auth"></div>
    </div>
  </header>
</template>
<script setup>
import TheNav from "./TheNav.vue";

const navigationData = [
  {
    text: "Generate",
    link: "#",
    id: "nav1",
  },
  {
    text: "My Images",
    link: "#",
    id: "nav2",
  },
  {
    text: "Favorites",
    link: "#",
    id: "nav3",
  },
];
</script>
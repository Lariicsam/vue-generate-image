<template>
  <ul class="thenav">
    <li class="thenav--item">
      <a class="thenav--link selected" href="">Generate</a>
      <a class="thenav--link" href="">My Images</a>
      <a class="thenav--link" href="">Favorites</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "TheNav",
  inheritAttrs: false,
};
</script>
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
});
</script>
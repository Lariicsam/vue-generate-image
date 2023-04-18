<template>
  <ul class="thenav">
    <li class="thenav--item" v-for="item in items" :key="item.id">
      <a class="thenav--link" :href="item.link">
        {{ item.text }}
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "TheNav",
  inheritAttrs: false
};
</script>
<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  text: {
    type: String,
    default: ""
  },
  link: {
    type: String,
    default: ""
  }
});
</script>
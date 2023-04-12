<template>
  <div :class="`thebutton ${variant}`" @click="onClick()">
    {{ text }}
  </div>
</template>
<script>
export default {
  name: "TheButton",
  inheritAttrs: false,
};
</script>
<script setup>
const props = defineProps({
  text: {
    type: String,
  },
  variant: {
    type: String,
    default: "primary",
  },
});

const onClick = () => {
  console.log("clic");
};
</script>
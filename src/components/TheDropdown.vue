<template>
  <div class="dropdown__container">
    <select
      class="dropdown"
      :name="name"
      v-model="selected"
      @change="onChange($event.target.value)"
    >
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "TheDropdown",
  inheritAttrs: true,
};
</script>
<script setup>
import { computed } from "vue";
const props = defineProps({
  options: {
    type: Array,
    default: null,
  },
  text: {
    type: String,
    default: "Select an Option",
  },
  id: {
    type: String,
    default: "dropId",
  },
  name: {
    type: String,
    default: "dropdown Name",
  },
});

const selected = computed({
  get: () => {
    if (this.value !== undefined) {
      return this.value;
    } else {
      return "select an option";
    }
  },

  set: () => {
    return;
  },
});
</script>
<template>
  <div class="dropdown--wrapper">
    <span class="dropdown--label">{{ dropdownName }}</span>
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
  </div>
</template>
<script>
export default {
  name: "TheDropdown",
  inheritAttrs: false,
};
</script>
<script setup>
const selected = "";
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
  dropdownName: {
    type: String,
    default: "Drop Name",
  },
});


const onChange = (value) => {
  console.log("selected", value);
};
</script>
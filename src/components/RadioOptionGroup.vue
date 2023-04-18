<template>
  <div class="irow">
    <radio-option
      v-for="option in options"
      :key="option.value"
      :textLabel="option.label"
      :value="option.value"
      :name="name"
      @update:modelValue="updateInput" />
  </div>
</template>

<script>
export default {
  name: "RadioOptionGroup",
  inheritAttrs: false
};
</script>

<script setup>
import RadioOption from "./RadioOption.vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number],
    required: true
  }
});

const updateInput = ($event) => {
  emit("update:modelValue", $event);
};
</script>
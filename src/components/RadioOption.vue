<template>
  <div class="generatecheck">
    <input
      :id="state.uniqueId"
      v-bind="$attrs"
      :checked="modelValue === value"
      type="radio"
      :value="value"
      class="generatecheck-input"
      @change="updateInput" />
    <label :for="state.uniqueId" class="generatecheck-label">{{ textLabel }}</label>
  </div>
</template>
<script>
export default {
  name: "RadioOption",
  inheritAttrs: false
};
</script>
<script setup>
import { onMounted, reactive } from "vue";
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  textLabel: {
    type: String,
    default: ""
  },
  modelValue: {
    type: [String, Number],
    default: ""
  },
  value: {
    type: [String, Number],
    required: true
  }
});

const state = reactive({
  uniqueId: ""
});
const updateInput = ($event) => {
  emit("update:modelValue", $event.target.value);
};
onMounted(() => {
  state.uniqueId = props.id || Math.random().toString(16).slice(2);
});
</script>
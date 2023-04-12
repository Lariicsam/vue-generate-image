<template>
  <div class="gnrtimg">
    <label :for="state.uniqueId" class="gnrtimg-labelimg">
      <img
        src="https://access.staging3.fyf.com/images/fyf/personas/female-1b.jpg"
        class="gnrtimg-img"
        alt="fyf"
      />
    </label>
    <input
      :id="state.uniqueId"
      v-bind="$attrs"
      :checked="modelValue === value"
      type="radio"
      :value="value"
      class="gnrtimg-input"
      @change="updateInput"
    />
    <label :for="state.uniqueId" class="gnrtimg-label">
      <span class="gnrtimg-text">{{ textLabel }}</span>
    </label>
    <a href="#" class="gnrtimg-link">View Images</a>
  </div>
</template>
<script>
export default {
  name: "RadioImage",
  inheritAttrs: false,
};
</script>
<script setup>
import { onMounted, reactive } from "vue";
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  textLabel: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  value: {
    type: [String, Number],
    required: true,
  },
});

const state = reactive({
  uniqueId: "",
});
const updateInput = ($event) => {
  emit("update:modelValue", $event.target.value);
};
onMounted(() => {
  state.uniqueId = props.id || Math.random().toString(16).slice(2);
});
</script>
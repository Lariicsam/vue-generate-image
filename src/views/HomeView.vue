
<template>
  <div class="irow">
    <h1>Generate an Image</h1>
  </div>
  <div class="irow">
    <radio-option-group
      :options="[
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ]"
      name="option"
      v-model="form.sampleRadio"
    />
  </div>
  <ExistingPersonView />
</template>
<script setup>
import { reactive } from "vue";
import ExistingPersonView from "./ExistingPersonView.vue";
import RadioOptionGroup from "../components/RadioOptionGroup.vue";

const form = reactive({
  sampleRadio: "",
  samplePreSelectedRadio: "option2",
});
</script>
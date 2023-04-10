
<template>
  <div class="irow main-head">
    <h1>Generate an Image</h1>
  </div>
  <div class="irow">
    <radio-option-group
      :options="[
        { label: 'Select an Existing Model', value: 'option1' },
        { label: 'Create Your Own', value: 'option2' },
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

<style lang="scss" scoped>
  .main-head {
    margin: 34px 0;
  }
</style>
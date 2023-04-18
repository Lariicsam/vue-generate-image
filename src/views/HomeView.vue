<template>
  <div class="irow main-head">
    <h1>Generate an Image</h1>
  </div>
  <teleport to="body">
    <the-sidebar></the-sidebar>
  </teleport>
  <div class="irow">
    <radio-option-group
      :options="[
        { label: 'Select an Existing Model', value: 'option1' },
        { label: 'Create Your Own', value: 'option2' }
      ]"
      name="option"
      v-model="form.sampleRadio" />
  </div>
  <ExistingPersonView />
  <teleport to="body">
    <the-modal
      :showModal="isShow"
      title="Generating Your Image"
      description="This may take up to a minute."></the-modal>
  </teleport>
  <div class="irow margin--step">
    <the-button text="Generate" @onClick="showModal" />
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import ExistingPersonView from "./ExistingPersonView.vue";
import RadioOptionGroup from "../components/RadioOptionGroup.vue";
import TheButton from "../components/TheButton.vue";
import TheSidebar from "../components/TheSidebar.vue";
import TheModal from "../components/TheModal.vue";

const form = reactive({
  sampleRadio: "",
  samplePreSelectedRadio: "option2"
});

let isShow = ref(false);

const showModal = () => {
  isShow = true;
  setTimeout(() => {
    isShow = false;
  }, 3000);
  console.log("modla");
};
</script>

<style lang="scss" scoped>
  .main-head {
    margin: 34px 0;
  }
  .margin--step {
    margin: 25px 0 7px;
  }
</style>
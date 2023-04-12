<template>
  <div class="icol margin--step">
    <div class="irow">
      <h2>STEP 1: <span>Choose your model</span></h2>
    </div>
    <div class="irow md between">
      <the-dropdown :options="shotData" />
      <the-dropdown :options="orientationData" />
    </div>
  </div>

  <div class="irow margin--step">
    <h2>STEP 2: <span>Set image dimensions</span></h2>
  </div>

  <div class="irow margin--step">
    <h2>STEP 3: <span>Choose your styles</span></h2>
  </div>

</template>
<script setup>
import TheDropdown from '../components/TheDropdown.vue';
const shotData = [
  {
    text: "Close-up",
    value: "close-up",
  },
  {
    text: "Eye-level",
    value: "eye-level",
  },
  {
    text: "Low-angle",
    value: "low-angle",
  },
];

const orientationData = [
  {
    text: "Close-up",
    value: "close-up",
  },
  {
    text: "Eye-level",
    value: "eye-level",
  },
  {
    text: "Low-angle",
    value: "low-angle",
  },
];
</script>
<style lang="scss" scoped>
  h2 {
    & > span {
      font-size: 2.4rem;
      font-weight: normal;
    }
  }
  .margin--step {
    margin: 25px 0 7px;
  }
</style>


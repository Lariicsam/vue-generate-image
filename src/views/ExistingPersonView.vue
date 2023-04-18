<template>
  <div class="icol margin--step">
    <div class="irow">
      <h2>STEP 1: <span>Choose your model</span></h2>
    </div>
    <div class="irow">
      <horizontal-scroll>
        <radio-image textLabel="Person1" :value="`p-${ele}`" v-for="ele in 10" :key="ele" />
      </horizontal-scroll>
    </div>
  </div>

  <div class="icol margin--step">
    <h2>STEP 2: <span>Set image dimensions</span></h2>
    <div class="irow"></div>
  </div>

  <div class="icol margin--step">
    <h2>STEP 3: <span>Choose your styles</span></h2>
    <div class="irow">
      <the-grid
        columns="1fr 1fr 1fr 1fr"
        columnGap="1%"
        columnRow="1.6rem"
        :breakPointTablet="1025"
        colsForTablet="1fr 1fr 1fr"
        :breakPointMobile="560"
        colsForMobile="1fr">
        <the-dropdown :options="shotData" dropdownName="Shot" />
        <the-dropdown :options="orientationData" dropdownName="Orientation" />
      </the-grid>
    </div>
  </div>
</template>
<script setup>
import HorizontalScroll from "../components/HorizontalScroll.vue";
import RadioImage from "../components/RadioImage.vue";
import TheDropdown from "../components/TheDropdown.vue";
import TheGrid from "../components/TheGrid.vue";

const shotData = [
  {
    text: "Close-up",
    value: "close-up"
  },
  {
    text: "Eye-level",
    value: "eye-level"
  },
  {
    text: "Low-angle",
    value: "low-angle"
  }
];

const orientationData = [
  {
    text: "Close-up",
    value: "close-up"
  },
  {
    text: "Eye-level",
    value: "eye-level"
  },
  {
    text: "Low-angle",
    value: "low-angle"
  }
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


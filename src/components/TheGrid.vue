<template>
  <div
    class="thegrid"
    ref="theGrid"
    :style="`grid-template-columns:${columnsSize};grid-column-gap:${columnGap};grid-row-gap:${columnRow};margin:${margin}`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "theGrid",

  props: {
    columns: {
      type: String,
      default: "repeat(3,1fr)"
    },
    columnGap: {
      type: String,
      default: "0.8rem"
    },
    columnRow: {
      type: String,
      default: "0.8rem"
    },
    isResponsive: {
      type: Boolean,
      default: true
    },
    breakPointMobile: {
      type: Number,
      default: 648
    },
    colsForMobile: {
      type: String,
      default: "1fr"
    },
    breakPointTablet: {
      type: Number,
      default: 1024
    },
    colsForTablet: {
      type: String,
      default: "repeat(3,1fr)"
    },
    margin: {
      type: String,
      default: "3.2rem 0"
    }
  },

  data() {
    return {
      windowSize: document.documentElement.clientWidth,
      columnsSize: this.columns
    };
  },

  mounted() {
    window.addEventListener("resize", this.getDimensions);
    this.getDimensions();
  },

  unmounted() {
    window.removeEventListener("resize", this.getDimensions);
  },

  methods: {
    getDimensions() {
      const BREAKPOINT_MOBILE = this.breakPointMobile;
      const BREAKPOINT_TABLET = this.breakPointTablet;
      const COLS_FOR_MOBILE = this.colsForMobile;
      const COLS_FOR_TABLET = this.colsForTablet;
      this.windowSize = document.documentElement.clientWidth;
      if (this.isResponsive) {
        if (this.windowSize < BREAKPOINT_TABLET && this.windowSize > BREAKPOINT_MOBILE) {
          this.columnsSize = COLS_FOR_TABLET;
        } else if (this.windowSize < BREAKPOINT_MOBILE) {
          this.columnsSize = COLS_FOR_MOBILE;
        } else {
          this.columnsSize = this.columns;
        }
      }
    }
  }
};
</script>
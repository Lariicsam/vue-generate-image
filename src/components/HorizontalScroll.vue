<template>
  <div class="hscroller-wrapper">
    <div class="hscroller-container">
      <div class="hscroller" ref="menu">
        <slot></slot>
      </div>
    </div>
    <div class="paddles">
      <div class="hscroller-paddles-left hscroller-paddle" @click="scrollRight">«</div>
      <div class="hscroller-paddles-right hscroller-paddle" @click="scrollLeft">»</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollAmount: 0,
    };
  },
  methods: {
    scrollLeft: function () {
      const menu = this.$refs.menu;
      menu.scrollTo({
        left: (this.scrollAmount += 300),
        behavior: "smooth",
      });
    },

    scrollRight: function () {
      const menu = this.$refs.menu;
      menu.scrollTo({
        left: (this.scrollAmount -= 300),
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
  .menu-wrapper {
    position: relative;
    max-width: 310px;
    height: 100px;
    margin: 1em auto;
    border: 1px solid black;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .menu {
    height: 120px;
    background: #f3f3f3;
    box-sizing: border-box;

    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .item {
    display: inline-block;
    width: 100px;
    height: 100%;
    outline: 1px dotted gray;
    padding: 1em;
    box-sizing: border-box;
  }

  .paddle {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3em;
  }
  .left-paddle {
    left: 0;
  }
  .right-paddle {
    right: 0;
  }
  .hidden {
    display: none;
  }

  .print {
    margin: auto;
    max-width: 500px;
  }
</style>
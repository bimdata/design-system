<template>
  <div class="bimdata-spinner">
    <div class="bimdata-spinner--square" :style="getStyle()"></div>
  </div>
</template>

<script>
export default {
  props: ["size", "border"],
  methods: {
    getStyle() {
      if (this.size) {
        return {
          width: this.size,
          height: this.size,
          "border-width": this.border ? this.border : null,
        };
      }
    },
  },
};
</script>

<style lang="scss" src="./_BIMDataSpinner.scss"></style>

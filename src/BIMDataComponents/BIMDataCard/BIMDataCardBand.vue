<template>
  <div class="bimdata-card__brand">
    <div class="bimdata-card__brand--left">
      <slot name="left"></slot>
      <span v-if="text">{{ text }}</span>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped src="../../assets/css/variables.css"></style>

<style lang="scss" src="./_BIMDataCardBrand.scss"></style>

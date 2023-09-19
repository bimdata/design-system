<template>
  <div
    class="bimdata-card"
    :class="classes"
    :style="{ 'min-width': width, 'border-radius': borderRadius }"
  >
    <BIMDataCardBand
      :text="titleHeader"
      class="bimdata-card__header"
      v-if="titleHeader || $slots.headerIcons"
    >
      <template #right>
        <slot name="headerIcons"></slot>
      </template>
    </BIMDataCardBand>
    <BIMDataCardBand
      class="bimdata-card__submenu"
      :text="submenuText"
      v-if="$slots.left || submenuText || $slots.right"
    >
      <template #left>
        <slot name="left"></slot>
      </template>
      <template #right>
        <slot name="right"></slot>
      </template>
    </BIMDataCardBand>
    <div class="bimdata-card__content" v-if="$slots.content">
      <slot name="content"></slot>
    </div>
    <footer class="bimdata-card__footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
import colors from "../../assets/colors.js";
import BIMDataCardBand from "./BIMDataCardBand.vue";

export default {
  components: {
    BIMDataCardBand,
  },
  props: {
    titleHeader: {
      type: String,
    },
    submenuText: {
      type: String,
    },
    width: {
      type: [Number, String],
      default: "215px",
    },
    borderRadius: {
      type: String,
      default: "0px",
    },
    bgColor: {
      type: String,
      default: "default",
      validator: color => colors.includes(color),
    },
  },
  computed: {
    classes() {
      return {
        [`bimdata-card__${this.bgColor}`]: this.bgColor,
      };
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataCard.scss"></style>

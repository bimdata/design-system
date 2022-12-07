<template>
  <div class="bimdata-menu-inline">
    <BIMDataButton
      color="primary"
      ghost
      rounded
      icon
      @click="active = !active"
      :width="width"
    >
      <slot name="button" :active="active">
        <BIMDataIcon
          v-if="!active"
          name="ellipsis"
          fill
          color="granite-light"
        />
        <BIMDataIcon
          v-else
          name="close"
          fill
          color="granite-light"
          size="xxs"
        />
      </slot>
    </BIMDataButton>
    <div
      v-if="active"
      class="bimdata-menu-inline__submenu"
      :class="[
        isSubmenuRight
          ? 'bimdata-menu-inline__submenu__right'
          : 'bimdata-menu-inline__submenu__left',
        isSubmenuRight ? 'm-l-6' : 'm-r-6',
      ]"
      :style="submenuPosition"
    >
      <slot name="submenu"> </slot>
    </div>
  </div>
</template>

<script>
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";
import BIMDataIcon from "../BIMDataIcon/BIMDataIcon.vue";
export default {
  components: {
    BIMDataButton,
    BIMDataIcon,
  },
  props: {
    isSubmenuRight: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: "32px",
    },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    submenuPosition() {
      if (this.isSubmenuRight) {
        return `left: ${this.width}`;
      }
      return `right: ${this.width}`;
    },
  },
};
</script>

<style lang="scss" src="./_BIMDataMenuInline.scss"></style>

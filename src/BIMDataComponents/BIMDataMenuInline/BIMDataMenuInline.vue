<template>
  <div class="bimdata-menu-inline">
    <BIMDataButton color="primary" ghost rounded icon @click="active = !active">
      <slot name="button">
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
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style lang="scss">
.bimdata-menu-inline {
  position: relative;
  &__submenu {
    padding: 0 calc(var(--spacing-unit) / 2);
    position: absolute;
    top: 0;
    background-color: var(--color-white);
    border-radius: 5px;
    gap: calc(var(--spacing-unit) / 2);
    &__right {
      left: 32px;
    }
    &__left {
      right: 32px;
    }
  }
}
</style>

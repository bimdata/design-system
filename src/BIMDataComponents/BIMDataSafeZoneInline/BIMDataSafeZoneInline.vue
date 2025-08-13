<template>
  <div class="safe-zone-inline" :class="{ dark: isDark }">
    <BIMDataButton
      class="safe-zone-inline__btn-delete"
      color="high"
      fill
      radius
      @click="$emit('confirm-delete')"
    >
      <slot name="content">Delete</slot>
    </BIMDataButton>
    <BIMDataButton
      class="safe-zone-inline__btn-close"
      :style="{ width: '15px', order: reverse ? -1 : 0 }"
      width="0px"
      radius
      :color="isDark ? 'quaternary' : 'granite'"
      @click="$emit('cancel-delete')"
    >
      <BIMDataIconClose size="xxs" :color="isDark ? 'quaternary-lighter' : 'granite'" />
    </BIMDataButton>
  </div>
</template>

<script>
import BIMDataIconClose from "../BIMDataIcon/BIMDataIconStandalone/BIMDataIconClose.vue";
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";

export default {
  components: {
    BIMDataIconClose,
    BIMDataButton,
  },
  inject: {
    darkThemeRef: {
      from: "BIMDATA_DESIGN_SYSTEM_DARK_THEME",
      default: () => ({ value: false }),
    },
  },
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["confirm-delete", "cancel-delete"],
  computed: {
    isDark() {
      return this.darkThemeRef;
    },
  }
};
</script>

<style scoped src="./BIMDataSafeZoneInline.css"></style>

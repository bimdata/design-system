<template>
  <div class="safe-zone-inline">
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
      @click="$emit('cancel-delete')"
    >
      <BIMDataIconClose size="xxs" color="granite" />
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
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["confirm-delete", "cancel-delete"],
};
</script>

<style scoped src="./BIMDataSafeZoneInline.css"></style>

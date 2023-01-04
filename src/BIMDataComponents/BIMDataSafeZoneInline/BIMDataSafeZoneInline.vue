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
      <BIMDataIcon name="close" size="xxs" color="granite" />
    </BIMDataButton>
  </div>
</template>

<script>
import BIMDataIcon from "../BIMDataIcon/BIMDataIcon.vue";
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";

export default {
  components: {
    BIMDataIcon,
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

<style scoped lang="scss" src="./_BIMDataSafeZoneInline.scss"></style>

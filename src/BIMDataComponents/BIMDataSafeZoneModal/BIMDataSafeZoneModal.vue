<template>
  <div class="overlay flex items-center justify-center">
    <div class="safe-zone" :style="{ width }">
      <div
        class="safe-zone__content flex flex-col items-center justify-center p-18"
      >
        <BIMDataIcon :name="iconName" size="l" fill color="high" />
        <p><slot name="text"></slot></p>
      </div>
      <div class="safe-zone__actions flex items-center p-x-18">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import BIMDataIcon from "../BIMDataIcon/BIMDataIcon.vue";

export default {
  components: {
    BIMDataIcon,
  },
  props: {
    iconName: {
      type: String,
      default: "warning",
    },
    width: {
      type: String,
      default: "350px",
    },
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataSafeZoneModal.scss"></style>

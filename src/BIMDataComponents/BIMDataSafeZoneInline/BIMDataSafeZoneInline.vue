<template>
  <div class="safe-zone-inline">
    <BIMDataButton
      class="safe-zone-inline__btn-delete"
      :style="{ order: reverse ? 2 : 0 }"
      color="high"
      fill
      radius
      @click="$emit('confirm-delete')"
    >
      {{ deleteTrad[locale] }}
    </BIMDataButton>
    <BIMDataButton
      class="safe-zone-inline__btn-close"
      :style="{ minWidth: 0, width: '15px', order: reverse ? 1 : 0 }"
      radius
      @click="$emit('cancel-delete')"
    >
      <BIMDataIcon name="close" size="xxs" color="granite" />
    </BIMDataButton>
  </div>
</template>

<script>
import deleteTrad from "./i18n.js";

import BIMDataIcon from "../BIMDataIcon/BIMDataIcon.vue";
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";

export default {
  components: {
    BIMDataIcon,
    BIMDataButton,
  },
  props: {
    locale: {
      type: String,
      default: "en",
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["confirm-delete", "cancel-delete"],
  setup() {
    return {
      deleteTrad,
    };
  },
};
</script>

<style scoped lang="scss" src="./_BIMDataSafeZoneInline.scss"></style>

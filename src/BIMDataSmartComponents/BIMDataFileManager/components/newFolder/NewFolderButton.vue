<template>
  <div class="folder-creation-button" v-clickaway="close">
    <BIMDataButton
      width="100%"
      :height="height"
      color="primary"
      fill
      radius
      :disabled="disabled"
      @click="toggle"
    >
      <BIMDataIcon name="addFolder" size="xs" margin="0 6px 0 0" />
      <span>{{ $translate("buttonText") }}</span>
    </BIMDataButton>
    <transition name="fade">
      <NewFolderForm
        v-if="showCreationForm"
        class="folder-creation-button__form"
        :projectId="projectId"
        :spaceId="spaceId"
        :apiClient="apiClient"
        :folder="folder"
        @click.native.stop
        @close="close"
        @success="
          close();
          $emit(`success`, $event);
        "
        @error="$emit('error', $event)"
      />
    </transition>
  </div>
</template>

<script>
import BIMDataIcon from "../../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataButton from "../../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";

import NewFolderForm from "./NewFolderForm.vue";

import clickaway from "../../../../BIMDataDirectives/click-away.js";

export default {
  components: {
    BIMDataIcon,
    BIMDataButton,
    NewFolderForm,
  },
  directives: { clickaway },
  inject: ["$translate"],
  props: {
    projectId: {
      type: Number,
      required: true,
    },
    spaceId: {
      type: Number,
      required: true,
    },
    apiClient: {
      type: Object,
      required: true,
    },
    height: {
      type: String,
      default: "32px",
    },
    folder: {
      type: Object,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showCreationForm: false,
    };
  },
  created() {
    document.addEventListener("keydown", this.onKeyDown);
  },
  destroyed() {
    document.removeEventListener("keydown", this.onKeyDown);
  },
  methods: {
    onKeyDown(e) {
      if (e.key === "Escape") {
        this.close();
      }
    },
    toggle() {
      this.showCreationForm = !this.showCreationForm;
    },
    close() {
      this.showCreationForm = false;
    },
  },
};
</script>

<style scoped lang="scss">
// import BIMDATA VARIABLES
@import "../../../../assets/scss/_BIMDataVariables.scss";

.folder-creation-button {
  position: relative;
  min-width: 25%;

  &__form {
    position: absolute;
    top: calc(100% + var(--spacing-unit));
    left: 0px;
    width: 260px;
    box-shadow: var(--box-shadow);
    z-index: 1;
  }
}
</style>

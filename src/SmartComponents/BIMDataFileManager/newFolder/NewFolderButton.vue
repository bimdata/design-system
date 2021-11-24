<template>
  <div class="folder-creation-button">
    <BIMDataButton
      class="folder-creation-button__btn"
      :width="width"
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
        @close="close"
        @success="
          close();
          $emit(`success`);
        "
      />
    </transition>
  </div>
</template>

<script>
import BIMDataIcon from "../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataButton from "../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";

import NewFolderForm from "./NewFolderForm.vue";

export default {
  components: {
    BIMDataIcon,
    BIMDataButton,
    NewFolderForm,
  },
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
    width: {
      type: String,
      default: "32px",
    },
    height: {
      type: String,
      default: "32px",
    },
    folder: {
      type: Object,
      required: true,
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
  methods: {
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
@import "../../../assets/scss/_BIMDataVariables.scss";

.folder-creation-button {
  position: relative;

  &__form {
    position: absolute;
    top: calc(100% + $spacing-unit);
    width: 260px;
    box-shadow: $box-shadow;
    z-index: 1;
  }
}
</style>

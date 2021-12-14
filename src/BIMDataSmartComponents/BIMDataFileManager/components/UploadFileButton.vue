<template>
  <BIMDataButton
    class="file-upload-button"
    :width="width"
    :height="height"
    color="primary"
    fill
    radius
    :disabled="disabled"
    @click="selectFile"
  >
    <slot>
      <BIMDataIcon name="addFile" size="xs" margin="0 6px 0 0" />
      <span>{{ $translate("addFileButtonText") }}</span>
    </slot>
    <input
      hidden
      ref="fileInput"
      type="file"
      :multiple="multiple"
      :accept="accept.join(',')"
      @change="uploadFile"
    />
  </BIMDataButton>
</template>

<script>
import BIMDataButton from "../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataIcon from "../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataIcon,
  },
  inject: ["$translate"],
  props: {
    width: {
      type: String,
      default: "32px",
    },
    height: {
      type: String,
      default: "32px",
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    accept: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    selectFile() {
      this.$refs.fileInput.click();
    },
    uploadFile(event) {
      const files = Array.from(event.target.files);
      if (files.length > 0) {
        this.$refs.fileInput.value = "";
        this.$emit("upload", files);
      }
    },
  },
};
</script>

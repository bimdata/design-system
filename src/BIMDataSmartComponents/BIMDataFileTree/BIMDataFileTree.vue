<template>
  <div class="bimdata-file-tree">
    <FileTreeNode v-if="fileStructure" :file="fileStructure" />
    <BIMDataSpinner v-else />
  </div>
</template>

<script>
import { getDescendants } from "./file-tree-utils.js";
// Components
import BIMDataSpinner from "../../BIMDataComponents/BIMDataBigSpinner/BIMDataBigSpinner.vue";
import FileTreeNode from "./file-tree-node/FileTreeNode.vue";

export default {
  components: {
    BIMDataSpinner,
    FileTreeNode,
  },
  provide() {
    return {
      selectedFileID: this.selectedFileID,
      selectFile: this.selectFile,
    };
  },
  props: {
    fileStructure: {
      type: Object,
    },
    selectedFile: {
      type: Object,
    },
  },
  emits: ["file-selected"],
  data() {
    return {
      selectedFileID: {
        value: null,
      },
    };
  },
  watch: {
    fileStructure: {
      handler: function (struct) {
        if (struct) {
          const files = getDescendants(struct);
          if (files.every(file => file.id !== this.selectedFileID.value)) {
            this.selectedFileID.value = struct.id;
          }
        }
      },
      immediate: true,
    },
    selectedFile: function (file) {
      if (file) {
        this.selectedFileID.value = file.id;
      }
    },
  },
  methods: {
    selectFile(file) {
      this.selectedFileID.value = file.id;
      this.$emit("file-selected", file);
    },
  },
};
</script>

<style scoped lang="scss" src="./BIMDataFileTree.scss"></style>

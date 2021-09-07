<template>
  <div class="bimdata-file-tree">
    <FileTreeNode :file="fileStructure" />
  </div>
</template>

<script>
import { getDescendants } from "./file-tree-utils.js";
// Components
import FileTreeNode from "./file-tree-node/FileTreeNode.vue";

export default {
  components: {
    FileTreeNode,
  },
  provide() {
    return {
      selectedFileID: this.selectedFileID,
      selectFile: this.selectFile,
    };
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
    fileStructure: {
      type: Object,
      required: true,
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
        const files = getDescendants(struct);
        if (files.every(file => file.id !== this.selectedFileID.value)) {
          this.selectedFileID.value = struct.id;
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

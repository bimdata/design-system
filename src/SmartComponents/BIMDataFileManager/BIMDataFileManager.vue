<template>
  <div class="bimdata-file-manager">
    <template v-if="fileStructure">
      <BIMDataSearch
        class="bimdata-file-manager__search"
        width="100%"
        placeholder="Search"
        v-model="searchText"
        clear
      />
      <BIMDataBreadcrumb
        :steps="steps"
        @click="onBreadcrumClick"
        label="name"
        @back="onBreadcrumBack"
      />
      <BIMDataResponsiveGrid
        class="bimdata-file-manager__container"
        itemWidth="140px"
      >
        <FileCard
          v-for="file of files"
          :key="file.id"
          :file="file"
          @open-folder="openFolder(file)"
          :select="select"
          :multi="multi"
          :selected="isFileSelected(file)"
          @toggle-select="onToggleFileSelect(file)"
        />
      </BIMDataResponsiveGrid>
    </template>
    <BIMDataSpinner v-else />
  </div>
</template>

<script>
import BIMDataResponsiveGrid from "../../BIMDataComponents/BIMDataResponsiveGrid/BIMDataResponsiveGrid.vue";
import BIMDataSearch from "../../BIMDataComponents/BIMDataSearch/BIMDataSearch.vue";
import BIMDataSpinner from "../../BIMDataComponents/BIMDataBigSpinner/BIMDataBigSpinner.vue";
import BIMDataBreadcrumb from "../../BIMDataComponents/BIMDataBreadcrumb/BIMDataBreadcrumb.vue";

import FileCard from "./file-card/FileCard.vue";

export default {
  components: {
    BIMDataResponsiveGrid,
    BIMDataSearch,
    BIMDataBreadcrumb,
    BIMDataSpinner,
    FileCard,
  },
  props: {
    selectedFiles: {
      type: Array,
      default: () => [],
    },
    fileStructure: {
      type: Object,
    },
    select: {
      type: Boolean,
      default: false,
    },
    multi: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentFileStructure: null,
      searchText: "",
    };
  },
  computed: {
    multiSelect() {
      return this.select && this.multi;
    },
    files() {
      if (this.searchText) {
        return (
          (this.currentFileStructure && this.currentFileStructure.children) ||
          []
        ).filter(file => file.name.toLowerCase().includes(this.searchText));
      } else {
        return (
          (this.currentFileStructure && this.currentFileStructure.children) ||
          []
        );
      }
    },
    steps() {
      const steps = [];
      if (this.currentFileStructure) {
        steps.push(this.currentFileStructure);
        let parent = this.getParent(
          this.fileStructure,
          this.currentFileStructure
        );
        while (parent) {
          steps.unshift(parent);

          parent = this.getParent(this.fileStructure, parent);
        }
      }

      return steps;
    },
  },
  watch: {
    multi() {
      this.selectedFiles.forEach(selectedFile =>
        this.$emit("file-deselected", selectedFile)
      );
    },
    fileStructure(value) {
      if (value) {
        this.currentFileStructure = this.fileStructure;
      }
    },
  },
  methods: {
    onToggleFileSelect(file) {
      if (this.isFileSelected(file)) {
        this.$emit("file-deselected", file);
      } else {
        if (!this.multi) {
          this.selectedFiles.forEach(selectedFile =>
            this.$emit("file-deselected", selectedFile)
          );
        }
        this.$emit("file-selected", file);
      }
    },
    isFileSelected(file) {
      return this.selectedFiles.includes(file);
    },
    onBreadcrumClick(step) {
      this.currentFileStructure = step;
    },
    onBreadcrumBack() {
      const to = this.steps[this.steps.length - 2];
      if (to) {
        this.currentFileStructure = to;
      }
    },
    openFolder(file) {
      this.currentFileStructure = file;
    },
    back() {
      const parent = this.getParent(
        this.fileStructure,
        this.currentFileStructure
      );

      if (parent) {
        this.currentFileStructure = parent;
      } else {
        this.currentFileStructure = this.fileStructure;
      }
    },
    getParent(parent, fileStructure) {
      if (!Array.isArray(parent.children)) return;
      if (parent.children.includes(fileStructure)) {
        return parent;
      } else {
        for (let child of parent.children) {
          const newParent = this.getParent(child, fileStructure);
          if (newParent) {
            return newParent;
          }
        }
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./BIMDataFileManager.scss"></style>

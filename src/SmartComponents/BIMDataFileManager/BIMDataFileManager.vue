<template>
  <div class="bimdata-file-manager">
    <template v-if="fileStructure">
      <div
        class="bimdata-file-manager__header"
        :class="{
          'bimdata-file-manager__header--small': small,
          'bimdata-file-manager__header--medium': medium,
          'bimdata-file-manager__header--big': big,
        }"
      >
        <NewFolderButton
          width="130px"
          :projectId="projectId"
          :spaceId="spaceId"
          :apiClient="apiClient"
          :folder="currentFolder"
          @success="onNewFolder"
        />
        <UploadFileButton
          class="bimdata-file-manager__header__upload"
          width="130px"
          :disabled="currentFolder.userPermission < 100"
          multiple
          @upload="uploadFiles"
        />
        <BIMDataSearch
          class="bimdata-file-manager__search"
          width="100%"
          placeholder="Search"
          v-model="searchText"
          clear
        />
      </div>
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
import { makeBIMDataApiClient } from "@bimdata/typescript-fetch-api-client";

import BIMDataResponsiveGrid from "../../BIMDataComponents/BIMDataResponsiveGrid/BIMDataResponsiveGrid.vue";
import BIMDataSearch from "../../BIMDataComponents/BIMDataSearch/BIMDataSearch.vue";
import BIMDataSpinner from "../../BIMDataComponents/BIMDataBigSpinner/BIMDataBigSpinner.vue";
import BIMDataBreadcrumb from "../../BIMDataComponents/BIMDataBreadcrumb/BIMDataBreadcrumb.vue";

import FileCard from "./file-card/FileCard.vue";
import NewFolderButton from "./newFolder/NewFolderButton.vue";
import UploadFileButton from "./uploadFile/UploadFileButton.vue";
import trads from "./i18n.js";

const MIN = 350;
const MAX = 550;

export default {
  components: {
    BIMDataResponsiveGrid,
    BIMDataSearch,
    BIMDataBreadcrumb,
    BIMDataSpinner,
    FileCard,
    NewFolderButton,
    UploadFileButton,
  },
  provide() {
    return {
      $translate: key => (trads[this.locale] || trads["en"])[key],
    };
  },
  props: {
    locale: {
      type: String,
      default: "en",
    },
    apiUrl: {
      type: String,
      default: "https://api.bimdata.io",
    },
    spaceId: {
      type: Number,
      required: true,
    },
    projectId: {
      type: Number,
      required: true,
    },
    accessToken: {
      type: String,
      required: true,
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
      currentFolder: null, //TODO spinner while waiting
      searchText: "",
      selectedFiles: [],
      apiClient: null,
      fileStructure: null,
      width: 0,
    };
  },
  computed: {
    small() {
      return this.width < MIN;
    },
    medium() {
      return this.width >= MIN && this.width <= MAX;
    },
    big() {
      return this.width > MAX;
    },
    multiSelect() {
      return this.select && this.multi;
    },
    files() {
      if (this.searchText) {
        return (
          (this.currentFolder && this.currentFolder.children) ||
          []
        ).filter(file => file.name.toLowerCase().includes(this.searchText));
      } else {
        return (this.currentFolder && this.currentFolder.children) || [];
      }
    },
    steps() {
      const steps = [];
      if (this.currentFolder) {
        steps.push(this.currentFolder);
        let parent = this.getParent(this.fileStructure, this.currentFolder);
        while (parent) {
          steps.unshift(parent);

          parent = this.getParent(this.fileStructure, parent);
        }
      }

      return steps;
    },
  },
  watch: {
    accessToken(token) {
      this.apiClient.accessToken = token;
    },
    multi() {
      this.selectedFiles = [];
      this.$emit("selection-change", this.selectedFiles);
    },
    select() {
      this.selectedFiles = [];
      this.$emit("selection-change", this.selectedFiles);
    },
  },
  mounted() {
    this.resizeObserver = new ResizeObserver(this.onResize);
    this.resizeObserver.observe(this.$el);
  },
  beforeDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  },
  async created() {
    this.apiClient = makeBIMDataApiClient({
      apiUrl: this.apiUrl,
      accessToken: this.accessToken,
    });

    this.fileStructure = await this.apiClient.collaborationApi.getProjectDMSTree(
      {
        cloudPk: this.spaceId,
        id: this.projectId,
      }
    );

    this.currentFolder = this.fileStructure;
  },
  methods: {
    onResize(entries) {
      entries.forEach(entry => {
        this.width = entry.target.clientWidth;
      });
    },
    uploadFiles() {
      this.refresh();
    },
    onNewFolder() {
      this.refresh();
    },
    async refresh() {
      const currentFolderId = this.currentFolder.id;

      this.fileStructure = await this.apiClient.collaborationApi.getProjectDMSTree(
        {
          cloudPk: this.spaceId,
          id: this.projectId,
        }
      );

      const currentFolder = this.getFolder(currentFolderId);
      if (currentFolder) {
        this.currentFolder = currentFolder;
      }
    },
    onToggleFileSelect(file) {
      if (this.isFileSelected(file)) {
        this.selectedFiles = this.selectedFiles.filter(
          selectedFile => selectedFile !== file
        );
      } else {
        if (!this.multi) {
          this.selectedFiles = [];
        }
        this.selectedFiles.push(file);
      }
      this.$emit("selection-change", this.selectedFiles);
    },
    isFileSelected(file) {
      return this.selectedFiles.includes(file);
    },
    onBreadcrumClick(step) {
      this.currentFolder = step;
    },
    onBreadcrumBack() {
      const to = this.steps[this.steps.length - 2];
      if (to) {
        this.currentFolder = to;
      }
    },
    openFolder(file) {
      this.currentFolder = file;
    },
    back() {
      const parent = this.getParent(this.fileStructure, this.currentFolder);

      if (parent) {
        this.currentFolder = parent;
      } else {
        this.currentFolder = this.fileStructure;
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
    getFolder(id, parent = this.fileStructure) {
      if (parent.id === id) {
        return parent;
      } else {
        for (let child of parent.children || []) {
          const folder = this.getFolder(id, child);
          if (folder) {
            return folder;
          }
        }
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./BIMDataFileManager.scss"></style>

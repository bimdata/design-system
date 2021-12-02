<template>
  <div class="bimdata-file-manager">
    <template>
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
          :disabled="!currentFolder || currentFolder.userPermission < 100"
          :projectId="projectId"
          :spaceId="spaceId"
          :apiClient="apiClient"
          :folder="currentFolder"
          @success="onNewFolder"
        />
        <UploadFileButton
          class="bimdata-file-manager__header__upload"
          width="130px"
          :disabled="!currentFolder || currentFolder.userPermission < 100"
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
      <div class="bimdata-file-manager__navigation">
        <div
          v-if="navigationShown"
          class="bimdata-file-manager__navigation__content"
        >
          <BIMDataButton
            color="default"
            icon
            radius
            ghost
            width="21px"
            height="21px"
            @click="back"
          >
            <BIMDataIcon name="arrow" />
          </BIMDataButton>
          <span>
            {{ currentFolder.name }}
          </span>
        </div>
      </div>
      <BIMDataResponsiveGrid
        v-if="fileStructure"
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
          @rename="onRename(file)"
          @delete="onDelete(file)"
          @dowload="onDowload(file)"
        />
      </BIMDataResponsiveGrid>
      <BIMDataLoading v-else />
    </template>
    <div class="bimdata-file-manager__modal" v-if="modalDisplayed">
      <RenameModal
        :projectId="projectId"
        :spaceId="spaceId"
        :apiClient="apiClient"
        :entity="entityRenown"
        v-if="entityRenown"
        @close="entityRenown = null"
        @success="onRenameSuccess"
      />
      <DeleteModal
        :projectId="projectId"
        :spaceId="spaceId"
        :apiClient="apiClient"
        :entity="entityDeletable"
        v-else-if="entityDeletable"
        @close="entityDeletable = null"
        @success="onDeleteSuccess"
      />
    </div>
  </div>
</template>

<script>
import { makeBIMDataApiClient } from "@bimdata/typescript-fetch-api-client";

import BIMDataResponsiveGrid from "../../BIMDataComponents/BIMDataResponsiveGrid/BIMDataResponsiveGrid.vue";
import BIMDataSearch from "../../BIMDataComponents/BIMDataSearch/BIMDataSearch.vue";
import BIMDataLoading from "../../BIMDataComponents/BIMDataLoading/BIMDataLoading.vue";
import BIMDataIcon from "../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataButton from "../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";

import FileCard from "./components/FileCard.vue";
import NewFolderButton from "./components/NewFolderButton.vue";
import UploadFileButton from "./components/UploadFileButton.vue";
import RenameModal from "./components/RenameModal.vue";
import DeleteModal from "./components/DeleteModal.vue";

import getFlattenTree from "./utils/flattenTree.js";
import dowloadFiles from "./utils/dowloadFiles.js";

import trads from "./i18n.js";

const MIN = 350;
const MAX = 550;

export default {
  components: {
    BIMDataResponsiveGrid,
    BIMDataSearch,
    BIMDataLoading,
    FileCard,
    NewFolderButton,
    UploadFileButton,
    BIMDataIcon,
    BIMDataButton,
    RenameModal,
    DeleteModal,
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
    archiveUrl: {
      type: String,
      default: "https://archive.bimdata.io",
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
      entityRenown: false,
      entityDeletable: false,
    };
  },
  computed: {
    modalDisplayed() {
      return this.entityRenown || this.entityDeletable;
    },
    navigationShown() {
      return this.currentFolder !== this.fileStructure;
    },
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
    onDowload(entity) {
      dowloadFiles(getFlattenTree(entity), {
        projectId: this.projectId,
        spaceId: this.spaceId,
        accessToken: this.accessToken,
        baseURL: this.archiveUrl,
      });
    },
    onDelete(entity) {
      this.entityDeletable = entity;
    },
    onDeleteSuccess() {
      this.entityDeletable = null;
      this.refresh();
    },
    onRename(entity) {
      this.entityRenown = entity;
    },
    onRenameSuccess() {
      this.entityRenown = null;
      this.refresh();
    },
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

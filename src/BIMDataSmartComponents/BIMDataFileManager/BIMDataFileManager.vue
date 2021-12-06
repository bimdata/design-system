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
          @error="$emit('error', $event)"
        />
        <UploadFileButton
          class="bimdata-file-manager__header__upload"
          width="130px"
          :disabled="!currentFolder || currentFolder.userPermission < 100"
          multiple
          @upload="uploadFiles"
        />
        <BIMDataSearch
          :color="searchColor"
          class="bimdata-file-manager__search"
          width="100%"
          placeholder="Search"
          v-model="searchText"
          ref="search"
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
      <template v-if="fileStructure">
        <BIMDataResponsiveGrid
          v-if="files.length > 0"
          class="bimdata-file-manager__container"
          itemWidth="140px"
        >
          <FileCard
            v-for="file of files"
            :key="file.id"
            :file="file"
            :projectId="projectId"
            :spaceId="spaceId"
            :apiUrl="apiUrl"
            :accessToken="accessToken"
            @open-folder="openFolder(file)"
            :select="select"
            :multi="multi"
            :selected="isFileSelected(file)"
            :success="isFileSucess(file.id)"
            @toggle-select="onToggleFileSelect(file)"
            @rename="onRename(file)"
            @delete="onDelete(file)"
            @dowload="onDowload(file)"
            @loaded="onFileLoaded(file, $event)"
          />
        </BIMDataResponsiveGrid>
        <div v-else class="bimdata-file-manager__container--empty">
          <div>
            <BIMDataIcon name="folderOpen" size="xxxl" fill color="silver" />
            <span>{{ translate("emptyFolder") }}</span>
          </div>
        </div>
      </template>
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
        @error="$emit('error', $event)"
      />
      <DeleteModal
        :projectId="projectId"
        :spaceId="spaceId"
        :apiClient="apiClient"
        :entity="entityDeletable"
        v-else-if="entityDeletable"
        @close="entityDeletable = null"
        @success="onDeleteSuccess"
        @error="$emit('error', $event)"
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

import FileCard from "./components/FileCard/FileCard.vue";
import NewFolderButton from "./components/newFolder/NewFolderButton.vue";
import UploadFileButton from "./components/UploadFileButton.vue";
import RenameModal from "./components/modals/RenameModal.vue";
import DeleteModal from "./components/modals/DeleteModal.vue";

import getFlattenTree from "./utils/flattenTree.js";
import { downloadFiles } from "./utils/files.js";

import trads from "./i18n.js";

const MIN = 350;
const MAX = 550;

const SUCCESS_TIME = 3000;

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
      $translate: this.translate,
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
    searchColor: {
      type: String,
      default: "secondary",
    },
  },
  data() {
    return {
      currentFolder: null,
      loadingFiles: [],
      searchText: "",
      selectedFiles: [],
      apiClient: null,
      fileStructure: null,
      width: 0,
      entityRenown: false,
      entityDeletable: false,
      successFileIds: [],
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
      let files = null;
      if (this.searchText) {
        files = (
          (this.currentFolder && this.currentFolder.children) ||
          []
        ).filter(file => file.name.toLowerCase().includes(this.searchText));
      } else {
        files = (this.currentFolder && this.currentFolder.children) || [];
      }

      files.push(
        ...this.loadingFiles.filter(
          loadingFile =>
            loadingFile.folder.id === this.currentFolder.id &&
            !files.find(file => file.id === loadingFile.id) // for multi file loading
        )
      );

      files.sort((a, b) => (a.name || "").localeCompare(b.name));
      files.sort((a, b) => {
        const aType = a.type === "Folder" ? 1 : -1;
        const bType = b.type === "Folder" ? 1 : -1;

        return bType - aType;
      });
      return files;
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
    clearTimeout(this.timeoutId);

    document.removeEventListener("keydown", this.onKeyDown);
  },
  async created() {
    document.addEventListener("keydown", this.onKeyDown);

    this.loadingFileId = 0;

    try {
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
    } catch (error) {
      this.$emit("error", error);
    }

    this.currentFolder = this.fileStructure;
  },
  methods: {
    onKeyDown(e) {
      if (e.key === "Escape") {
        this.entityRenown = null;
        this.entityDeletable = null;
        if (
          this.$refs.search &&
          this.$refs.search.$refs.input === document.activeElement
        ) {
          this.searchText = "";
          this.$refs.search.blur();
        }
      }
    },
    translate(key) {
      return (trads[this.locale] || trads["en"])[key];
    },
    isFileSucess(id) {
      return this.successFileIds.includes(id);
    },
    onFileLoaded(loadingFile, loadedFile) {
      if (!loadingFile.folder.children) {
        this.$set(loadingFile.folder, "children", []);
      }
      loadingFile.folder.children = loadingFile.folder.children.filter(
        child => child.id !== loadingFile.id
      );
      loadingFile.folder.children.push(loadedFile);
      this.loadingFiles = this.loadingFiles.filter(
        child => child.id !== loadingFile.id
      );

      this.$emit("success", {
        type: "fileCreated",
        message: this.translate("newFileSuccess"),
        content: loadedFile,
      });

      this.successFileIds.push(loadedFile.id);
      this.timeoutId = setTimeout(() => {
        if (this.successFileIds) {
          this.successFileIds = this.successFileIds.filter(
            fileId => fileId !== loadedFile.id
          );
        }
      }, SUCCESS_TIME);
    },
    onDowload(entity) {
      downloadFiles(getFlattenTree(entity), {
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
      const parent = this.getParent(this.fileStructure, this.entityDeletable);
      if (parent) {
        parent.children = parent.children.filter(
          child => child.id !== this.entityDeletable.id
        );
      }

      const isFolder = this.entityDeletable.type === "Folder";

      this.$emit("success", {
        type: isFolder ? "folderDeleted" : "fileDeleted",
        message: isFolder
          ? this.translate("deleteFolderSuccess")
          : this.translate("deleteFileSuccess"),
        content: this.entityDeletable,
      });

      this.entityDeletable = null;
    },
    onRename(entity) {
      this.entityRenown = entity;
    },
    onRenameSuccess() {
      const isFolder = this.entityRenown.type === "Folder";

      this.$emit("success", {
        type: isFolder ? "folderRenamed" : "fileRenamed",
        message: isFolder
          ? this.translate("renameFolderSuccess")
          : this.translate("renameFileSuccess"),
        content: this.entityRenown,
      });
      this.entityRenown = null;
    },
    onResize(entries) {
      entries.forEach(entry => {
        this.width = entry.target.clientWidth;
      });
    },
    /**
     * @param { File[] } files
     */
    uploadFiles(files = []) {
      this.loadingFiles.push(...this.formatFiles(files));
    },
    /**
     * @param { File[] } files
     */
    formatFiles(files) {
      return files.map(file => ({
        name: file.name,
        updatedAt: new Date(file.lastModified),
        type: "File",
        id: `loadingfile-${this.loadingFileId++}`,
        fileToLoad: file,
        folder: this.currentFolder,
      }));
    },
    onNewFolder(newFolder) {
      this.currentFolder.children.push(newFolder);
      this.$emit("success", {
        type: "folderCreated",
        message: this.translate("newFolderSuccess"),
        content: newFolder,
      });
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

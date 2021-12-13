<template>
  <BIMDataCard
    class="file-card"
    :class="{
      'file-card--selected': selected,
      'file-card--hover': select || isFolder,
    }"
    :width="width"
    @click.native="onClick"
  >
    <template #content>
      <div @click="onContentClick" class="file-card__content">
        <div class="file-card__btn-menu">
          <transition name="fade" v-if="success" :duration="1000">
            <BIMDataIcon
              name="success"
              size="s"
              fill
              color="success"
              class="file-card__btn-menu__success"
            />
          </transition>
          <PieProgressSpinner
            v-if="loading && !success"
            :progress="percentCompleted"
            class="file-card__btn-menu__spinner"
          />
          <BIMDataButton
            ghost
            rounded
            icon
            v-else-if="edit && !success"
            @click.stop="toggleMenu"
            class="file-card__btn-menu__edit"
            :disabled="success"
          >
            <BIMDataIcon name="ellipsis" size="l" fill color="granite-light" />
          </BIMDataButton>
          <div
            v-else-if="!isFolder && !success"
            class="file-card__btn-menu--select"
          >
            <BIMDataCheckbox v-if="multiSelect" :modelValue="selected" />
            <BIMDataRadio
              v-else
              big
              :modelValue="selected"
              name="BIMDataFileCardRadio"
            />
          </div>
        </div>
        <template v-if="file.type === 'Folder'">
          <BIMDataIcon name="folder" size="xxl" fill color="primary" />
        </template>
        <template v-else>
          <BIMDataFileIcon :name="getFileExtension(file)" />
        </template>
      </div>
      <div class="file-card__menu" v-if="menuDisplayed" v-clickaway="away">
        <BIMDataButton
          color="default"
          ghost
          radius
          width="100%"
          @click.stop="onRenameClick"
        >
          {{ $translate("rename") }}
        </BIMDataButton>
        <BIMDataButton
          color="default"
          ghost
          radius
          width="100%"
          @click.stop="onDownloadClick"
        >
          {{ $translate("download") }}
        </BIMDataButton>
        <BIMDataButton
          v-if="writeAccess"
          color="high"
          ghost
          radius
          width="100%"
          @click.stop="onDeleteClick"
        >
          {{ $translate("delete") }}
        </BIMDataButton>
      </div>
    </template>
    <template #footer>
      <div class="file-card__name">
        {{ file.name }}
      </div>
      <div class="file-card__date">
        {{ file.updatedAt.toLocaleDateString() }}
      </div>
    </template>
  </BIMDataCard>
</template>

<script>
import BIMDataButton from "../../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataCard from "../../../../BIMDataComponents/BIMDataCard/BIMDataCard.vue";
import BIMDataIcon from "../../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataRadio from "../../../../BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataCheckbox from "../../../../BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataFileIcon from "../../../../BIMDataComponents/BIMDataFileIcon/BIMDataFileIcon.vue";
import clickaway from "../../../../BIMDataDirectives/click-away.js";

import { getFileExtension } from "../../utils/files";

import PieProgressSpinner from "../PieProgressSpinner.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataCard,
    BIMDataIcon,
    BIMDataRadio,
    BIMDataCheckbox,
    BIMDataFileIcon,
    PieProgressSpinner,
  },
  directives: { clickaway },
  inject: ["$translate"],
  props: {
    writeAccess: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "140px",
    },
    file: {
      type: Object,
      required: true,
    },
    projectId: {
      type: Number,
      required: true,
    },
    spaceId: {
      type: Number,
      required: true,
    },
    apiUrl: {
      type: String,
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
    selected: {
      type: Boolean,
      default: false,
    },
    multi: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuDisplayed: false,
      percentCompleted: 0,
    };
  },
  computed: {
    multiSelect() {
      return this.select && this.multi;
    },
    edit() {
      return !this.loading && !this.select;
    },
    isFolder() {
      return this.file.type === "Folder";
    },
    loading() {
      return this.file.fileToLoad;
    },
  },
  async created() {
    document.addEventListener("keydown", this.onKeyDown);

    if (this.file.fileToLoad) {
      const formData = new FormData();
      formData.append("file", this.file.fileToLoad);
      formData.append("name", this.file.fileToLoad.name);
      formData.append("parent_id", this.file.folder.id);

      const request = new XMLHttpRequest();
      request.open(
        "POST",
        `${this.apiUrl}/cloud/${this.spaceId}/project/${this.projectId}/document`
      );
      request.setRequestHeader("authorization", `Bearer ${this.accessToken}`);

      request.upload.addEventListener("progress", e => {
        this.percentCompleted = (e.loaded / e.total) * 100;
      });

      request.addEventListener("load", () => {
        if (request.status === 201) {
          const file = JSON.parse(request.response);
          file.updatedAt = new Date(file.updated_at);
          this.$emit("loaded", file);
        } else {
          this.$emit("load-error", request.statusText);
        }
      });

      request.send(formData);
    }
  },
  destroyed() {
    document.removeEventListener("keydown", this.onKeyDown);
  },
  methods: {
    onKeyDown(e) {
      if (e.key === "Escape") {
        this.menuDisplayed = false;
      }
    },
    getFileExtension(...args) {
      return getFileExtension(...args);
    },
    onRenameClick() {
      this.menuDisplayed = false;
      this.$emit("rename");
    },
    onDownloadClick() {
      this.menuDisplayed = false;
      this.$emit("dowload");
    },
    onDeleteClick() {
      this.menuDisplayed = false;
      this.$emit("delete");
    },
    onClick() {
      if (!this.isFolder && this.select) {
        this.$emit("toggle-select", this.file);
      }
    },
    onContentClick() {
      if (this.isFolder) {
        this.$emit("open-folder");
      }
    },
    toggleMenu() {
      this.menuDisplayed = !this.menuDisplayed;
    },
    away() {
      setTimeout(() => {
        this.menuDisplayed = false;
      });
    },
  },
};
</script>

<style scoped lang="scss" src="./FileCard.scss"></style>

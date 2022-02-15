<template>
  <div class="file-card" @click="onClick">
    <div
      class="file-card__content"
      :class="{
        'file-card__content--selected': selected,
        'file-card__content--disabled': disabled,
        'file-card__content--hover':
          (select && !success && !disabled) || isFolder,
      }"
    >
      <div class="file-card__content__header">
        <div class="file-card__content__header__btn-menu">
          <BIMDataIcon
            v-if="success"
            name="success"
            size="s"
            fill
            color="success"
            class="file-card__content__header__btn-menu__success"
          />
          <PieProgressSpinner
            v-else-if="loading && !success"
            :progress="percentCompleted"
            class="file-card__content__header__btn-menu__spinner"
          />
          <BIMDataButton
            ghost
            rounded
            icon
            v-else-if="edit"
            @click.stop="toggleMenu"
            class="file-card__content__header__btn-menu__edit"
            :disabled="success"
          >
            <BIMDataIcon name="ellipsis" size="l" fill color="granite-light" />
          </BIMDataButton>
          <div v-else-if="!isFolder">
            <BIMDataCheckbox
              :disabled="disabled"
              v-if="multiSelect"
              :modelValue="selected"
              class="file-card__content__header__btn-menu__checkbox"
            />
            <BIMDataRadio
              :disabled="disabled"
              v-else
              big
              :modelValue="selected"
              name="BIMDataFileCardRadio"
            />
          </div>
        </div>
        <template v-if="file.type === 'Folder'">
          <BIMDataIcon name="folder" size="xl" fill color="primary" />
        </template>
        <template v-else>
          <BIMDataFileIcon :fileName="file.name" :size="25" />
        </template>
      </div>
      <div
        class="file-card__content__menu"
        v-if="menuDisplayed"
        v-clickaway="away"
      >
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
      <div class="file-card__content__footer">
        <MultiLineTextBox
          class="file-card__content__footer__name"
          :text="file.name"
        />
        <div class="file-card__content__footer__date">
          {{ file.updatedAt.toLocaleDateString() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BIMDataButton from "../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataIcon from "../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataRadio from "../../../BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataCheckbox from "../../../BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataFileIcon from "../../../BIMDataComponents/BIMDataFileIcon/BIMDataFileIcon.vue";
import clickaway from "../../../BIMDataDirectives/click-away.js";

import PieProgressSpinner from "./PieProgressSpinner.vue";
import MultiLineTextBox from "./MultiLineTextBox/MultiLineTextBox.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataIcon,
    BIMDataRadio,
    BIMDataCheckbox,
    BIMDataFileIcon,
    PieProgressSpinner,
    MultiLineTextBox,
  },
  directives: { clickaway },
  inject: ["$translate"],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
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

      request.addEventListener("progress", e => {
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
      if (this.isFolder) {
        this.$emit("open-folder");
      } else if (!this.success && !this.disabled && this.select) {
        this.$emit("toggle-select", this.file);
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

<style scoped lang="scss">
@import "../../../assets/scss/BIMDataVariables";

.file-card {
  height: 174px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  &__content {
    box-sizing: border-box;
    height: calc(100% - 24px);
    width: calc(100% - 24px);
    background-color: $color-white;
    box-shadow: $box-shadow;
    position: relative;

    &__menu {
      position: absolute;
      background-color: $color-white;
      z-index: 1;
      left: calc($spacing-unit / 3);
      right: calc($spacing-unit / 3);
      bottom: $spacing-unit;
      box-shadow: $box-shadow;
    }

    &--selected {
      border: solid $color-primary 3px;
    }

    &--disabled {
      .file-card__content__header {
        filter: grayscale(100%);
      }
    }

    &:not(.file-card__content--selected) {
      padding: 3px;
    }

    &--hover {
      cursor: pointer;
      &:hover {
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
      }
    }

    &__header {
      box-sizing: border-box;
      height: 65px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      border-bottom: solid 1px $color-silver-light;

      &__btn-menu {
        position: absolute;
        top: 0px;
        right: 0px;

        &__checkbox {
          top: 6px;
          right: 6px;
        }
      }
    }

    &__footer {
      height: 85px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      font-size: 12px;

      padding: $spacing-unit;

      &__name {
        font-weight: bold;
        color: $color-granite;
      }

      &__date {
        color: $color-granite-light;
      }
    }
  }
}
</style>

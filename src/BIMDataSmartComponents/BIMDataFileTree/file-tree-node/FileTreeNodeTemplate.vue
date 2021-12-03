<template>
  <div class="file-tree-node">
    <div
      class="file-tree-node__node"
      :class="{ selected: selectedFileID.value === file.id }"
      :style="{ paddingLeft: `${depth * 18}px` }"
      @click="select"
    >
      <div class="file-tree-node__node__background"></div>
      <BIMDataIcon
        class="file-tree-node__node__icon-arrow"
        name="chevron"
        size="xxs"
        :rotate="showChildren ? 90 : 0"
        :style="{
          visibility: hasChildren ? 'visible' : 'hidden',
        }"
        @click.stop="toggle"
      />
      <BIMDataIcon
        class="file-tree-node__node__icon-folder"
        :name="showChildren ? 'folderOpen' : 'folder'"
        size="s"
      />
      <span class="file-tree-node__node__name">
        {{ file.name }}
      </span>
    </div>
    <transition name="fade">
      <div class="file-tree-node__children" v-show="showChildren">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { getDescendants } from "../file-tree-utils.js";
import BIMDataIcon from "../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";

export default {
  components: {
    BIMDataIcon,
  },
  inject: ["selectedFileID", "selectFile"],
  props: {
    file: {
      type: Object,
      required: true,
    },
    depth: {
      type: Number,
      default: 0,
    },
    hasChildren: {
      type: Boolean,
      default: false,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showChildren: false,
    };
  },
  watch: {
    isOpen: {
      handler: function (value) {
        this.showChildren = value;
      },
      immediate: true,
    },
    "selectedFileID.value": function (fileID) {
      if (
        this.hasChildren &&
        getDescendants(this.file).some(child => child.id === fileID)
      ) {
        this.showChildren = true;
      }
    },
  },
  methods: {
    toggle() {
      if (this.hasChildren) {
        this.showChildren = !this.showChildren;
      }
    },
    select() {
      this.selectFile(this.file);
    },
  },
};
</script>

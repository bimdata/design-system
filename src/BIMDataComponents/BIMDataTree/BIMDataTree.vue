<template>
  <div
    class="bimdata-tree"
    @mousedown="onTreeMouseDown"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mouseup.self="onMouseUp"
  >
    <div class="bimdata-tree__nodes" @mouseleave="onNodesMouseLeave">
      <Node v-for="node of data" :key="node.id" :node="node">
        <slot
          name="node"
          :node="node"
          :depth="0"
          :selected="node.id === state.selectedId"
          :hovered="node.id === state.hoveredNode?.id"
          :ancestor-selected="state.hasAncestorSelected(node)"
        />
      </Node>
    </div>
    <div v-if="dropHelperDisplayed" class="bimdata-tree__drop-helper"></div>
  </div>
</template>

<script>
import { provide, computed, ref } from "vue";

import Node from "./Node.vue";

import useState from "./state.js";

/**
 * @typedef { Object } Node
 * @property { number } id
 * @property { Array } [children=null]
 */

export default {
  components: {
    Node,
  },
  provide() {
    return {
      root: this,
    };
  },
  props: {
    /**
     * @type { NodeData }
     */
    data: {
      type: Array,
      required: true,
      validator: value => {
        if (!Array.isArray(value)) return false;

        const ids = new Set();

        for (const node of value) {
          if (!Number.isFinite(node?.id)) return false;
          if (node.children && !Array.isArray(node.children)) return false;
          ids.add(node.id);
        }

        return ids.size === value.length;
      },
    },
    selectedId: {
      type: Number,
      default: null,
    },
    highlightedId: {
      type: Number,
      default: null,
    },
  },
  emits: ["drop", "click", "hover"],
  setup(props, { emit }) {
    const state = useState(props, emit);

    provide("state", state);

    const onNodesMouseLeave = () => state.onNodesMouseLeave();
    const onTreeMouseDown = () => state.onTreeMouseDown();

    const hover = ref(false);
    const onMouseEnter = () => {
      hover.value = true;
    };
    const onMouseLeave = () => {
      hover.value = false;
    };

    const onMouseUp = () => state.onTreeMouseUp();

    const dropHelperDisplayed = computed(
      () =>
        hover.value && state.dragPosition !== null && state.hoveredNode === null
    );

    return {
      state,
      dropHelperDisplayed,
      onMouseEnter,
      onMouseLeave,
      onNodesMouseLeave,
      onTreeMouseDown,
      onMouseUp,
    };
  },
};
</script>

<style scoped lang="scss">
.bimdata-tree {
  height: 100%;

  &__drop-helper {
    height: 2px;
    background-color: var(--color-primary);
  }
}
</style>

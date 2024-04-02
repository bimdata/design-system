<template>
  <div
    ref="nodeRef"
    class="bimdata-tree__node"
    :class="{
      'bimdata-tree__node--selected': node.id === state.selectedId,
      'bimdata-tree__node--ancestor-selected': hasAncestorSelected(node),
      'bimdata-tree__node--highlighted': node.id === state.highlightedId,
    }"
    @mouseenter="onMouseEnter"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
  >
    <div
      v-if="dropHelperPosition === 'top' || dropHelperPosition === 'bottom'"
      class="bimdata-tree__node__drop-helper"
      :style="`--drop-helper-top: ${
        dropHelperPosition === 'top' ? '0px' : '30px'
      };`"
    ></div>
    <div
      class="bimdata-tree__node__content"
      :style="`padding-left: calc(var(--spacing-unit) * 2 * ${depth});`"
    >
      <div class="bimdata-tree__node__content__arrow" @mousedown.stop>
        <div
          v-if="node.children?.length > 0"
          class="bimdata-tree__node__content__arrow__content"
          @click="expanded = !expanded"
        >
          <BIMDataIcon name="chevron" size="xxxs" :rotate="expanded ? 90 : 0" />
        </div>
      </div>

      <div class="bimdata-tree__node__content__element">
        <slot>
          {{ node.label }}
        </slot>
      </div>
    </div>
  </div>
  <NodeChildren
    v-if="node.children?.length > 0 && expanded"
    :node="node"
    :depth="depth + 1"
  />
</template>

<script>
import { inject, ref, computed, watch, isRef } from "vue";

import NodeChildren from "./NodeChildren.js";

export default {
  name: "Node",
  components: {
    NodeChildren,
  },
  inject: ["root"],
  props: {
    node: {
      type: Object,
      required: true,
    },
    depth: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const state = inject("state");

    let expanded = null;
    if (isRef(props.node.expandedRef)) {
      expanded = props.node.expandedRef;
    } else {
      expanded = ref(false);
    }
    const nodeRef = ref(null);

    let expandTimer = null;

    const handleExpandTimer = () => {
      if (
        !props.node.children?.length ||
        !state.dragPosition ||
        state.hoveredNode?.id !== props.node.id ||
        expanded.value
      ) {
        clearTimeout(expandTimer);
        expandTimer = null;
        return;
      }

      const position = state.getNodeDropPosition(props.node, nodeRef.value);

      if (position !== "center" && position !== "bottom") {
        clearTimeout(expandTimer);
        expandTimer = null;
        return;
      }

      if (expandTimer !== null) return;

      expandTimer = setTimeout(() => {
        expanded.value = true;
        expandTimer = null;
      }, 500);
    };

    watch(() => state.dragPosition && state.hoveredNode, handleExpandTimer);

    const onMouseEnter = () => state.onNodeMouseEnter(props.node);

    const onMouseDown = mouseEvent =>
      state.onNodeMouseDown(props.node, mouseEvent);

    const onMouseMove = mouseEvent => {
      state.onNodeMouseMove(mouseEvent);
      handleExpandTimer();
    };

    const dropHelperPosition = computed(() => {
      if (!state.dragPosition || state.hoveredNode?.id !== props.node.id)
        return null;

      return state.getNodeDropPosition(props.node, nodeRef.value);
    });

    const onMouseUp = () =>
      state.onNodeMouseUp(props.node, nodeRef.value, expanded.value);

    return {
      state,
      nodeRef,
      expanded,
      dropHelperPosition,
      hasAncestorSelected: state.hasAncestorSelected,
      onMouseEnter,
      onMouseDown,
      onMouseMove,
      onMouseUp,
    };
  },
};
</script>

<style scoped lang="scss">
.bimdata-tree__node {
  height: 32px;
  display: flex;
  align-items: center;
  position: relative;

  user-select: none;

  &__drop-helper {
    position: absolute;
    left: 0px;
    right: 0px;
    height: 2px;
    top: var(--drop-helper-top);
    background-color: var(--color-primary);
  }

  &--selected {
    background-color: var(--color-secondary-light);
  }
  &--ancestor-selected {
    background-color: var(--color-secondary-lighter);
  }
  &--highlighted {
    outline-offset: -1px;
    outline: solid var(--color-primary) 1px;
  }

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 6px;
    padding: 0 calc(var(--spacing-unit) / 2);

    &__arrow {
      width: 18px;
      flex-shrink: 0;

      &__content {
        cursor: pointer;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &__element {
      padding-left: calc(var(--spacing-unit) / 2);
      width: calc(100% - 18px);
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
}
</style>

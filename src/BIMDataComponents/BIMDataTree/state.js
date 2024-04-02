import { shallowReactive, watch, shallowRef } from "vue";

export default function useState(props, emit) {
  const state = shallowReactive({
    selectedId: null,
    highlightedId: null,
    hoveredNode: null,
    trees: props.data,
    dragPosition: null,
  });

  watch(
    () => props.selectedId,
    () => {
      state.selectedId = props.selectedId ?? null;
    }
  );

  watch(
    () => props.highlightedId,
    () => {
      state.highlightedId = props.highlightedId ?? null;
    }
  );

  watch(
    () => state.hoveredNode,
    () => emit("hover", state.hoveredNode)
  );

  const pressedNode = shallowRef(null);

  watch(
    () => props.data,
    trees => {
      state.trees = trees;
    }
  );

  const onMouseUp = () => {
    pressedNode.value = null;
    state.dragPosition = null;
  };

  const onNodeMouseEnter = node => {
    state.hoveredNode = node;
  };
  const onNodeMouseDown = (node, event) => {
    event.stopPropagation();

    emit("click", node);

    pressedNode.value = node;

    window.addEventListener("mouseup", onMouseUp, { once: true });
  };
  const onNodeMouseMove = event => {
    if (!pressedNode.value) return;

    const { clientX, clientY } = event;

    state.dragPosition = { x: clientX, y: clientY };
  };
  const onNodeMouseUp = (node, domElement, expanded) => {
    if (!state.dragPosition) return;

    if (state.hoveredNode?.id === pressedNode.value?.id) return;

    if (state.isDescendant(node, pressedNode.value)) return;

    const position = getNodeDropPosition(node, domElement);

    let parent = null;
    let index = null;
    const previousParent = getParent(pressedNode.value);

    switch (position) {
      case "top":
        parent = getParent(node);
        index = (parent?.children ?? state.trees).findIndex(
          child => child.id === node.id
        );
        break;
      case "bottom":
        if (node.children && expanded) {
          parent = node;
          index = 0;
        } else {
          parent = getParent(node);
          index =
            (parent?.children ?? state.trees).findIndex(
              child => child.id === node.id
            ) + 1;
        }
        break;
      case "center":
        parent = node;
        index = 0;
        break;
    }

    const reorder = parent?.id === previousParent?.id;
    const previousIndex = (previousParent?.children ?? state.trees).findIndex(
      child => child.id === pressedNode.value.id
    );

    if (
      reorder &&
      (position === "top" || position === "bottom") &&
      previousIndex < index
    ) {
      index--;
    }

    if (reorder && index === previousIndex) return;

    emit("drop", {
      node: pressedNode.value,
      previousParent,
      parent,
      index,
      position,
    });
  };

  const onNodesMouseLeave = () => {
    state.hoveredNode = null;
  };

  const onTreeMouseDown = () => {
    emit("click", null);
  };
  const onTreeMouseUp = () => {
    if (!state.dragPosition) return;

    if (state.trees.indexOf(pressedNode.value) === state.trees.length - 1) {
      // to drop the last root node at the end of the list does not fire the drop event
      return;
    }

    const nodeIsInRootPosition = state.trees.includes(pressedNode.value);

    emit("drop", {
      node: pressedNode.value,
      parent: null,
      index: nodeIsInRootPosition ? state.trees.length - 1 : state.trees.length,
      previousParent: getParent(pressedNode.value),
    });
  };

  state.onNodeMouseEnter = onNodeMouseEnter;
  state.onNodeMouseDown = onNodeMouseDown;
  state.onNodeMouseMove = onNodeMouseMove;
  state.onNodeMouseUp = onNodeMouseUp;

  state.onNodesMouseLeave = onNodesMouseLeave;

  state.onTreeMouseDown = onTreeMouseDown;
  state.onTreeMouseUp = onTreeMouseUp;

  // UTILS

  const getNodeDropPosition = (node, domElement) => {
    const { y } = state.dragPosition;

    const { top, height } = domElement.getBoundingClientRect();

    if (node.children) {
      if (y < top + height / 3) return "top";
      if (y > top + (height * 2) / 3) return "bottom";

      return "center";
    } else {
      if (y < top + height / 2) return "top";

      return "bottom";
    }
  };

  const getParent = (node, nodes = state.trees) => {
    for (const childNode of nodes) {
      if (childNode.children?.length) {
        if (childNode.children.some(child => child.id === node.id)) {
          return childNode;
        }

        const expectedParent = getParent(node, childNode.children);

        if (expectedParent) return expectedParent;
      }
    }
  };

  const isAncestor = (node, nodes = state.trees) => {
    for (const childNode of nodes) {
      if (childNode.id === node.id) {
        return true;
      }
      if (childNode.children?.length && isAncestor(node, childNode.children)) {
        return true;
      }
    }
    return false;
  };

  const getAncestors = (node, nodes = state.trees) => {
    const ancestors = [];
    for (const childNode of nodes) {
      if (childNode.id === node.id) {
        continue;
      }
      if (childNode.children?.length && isAncestor(node, childNode.children)) {
        ancestors.push(childNode, ...getAncestors(node, childNode.children));
      }
    }
    return ancestors;
  };

  const hasAncestorSelected = node => {
    if (state.selectedId === null) return false;

    return getAncestors(node).some(
      ancestor => ancestor.id === state.selectedId
    );
  };

  const isDescendant = (node, ancestor) =>
    ancestor?.children?.some(
      child => child.id === node.id || isDescendant(node, child)
    ) ?? false;

  state.getNodeDropPosition = getNodeDropPosition;
  state.getParent = getParent;
  state.getAncestors = getAncestors;
  state.hasAncestorSelected = hasAncestorSelected;
  state.isDescendant = isDescendant;

  return state;
}

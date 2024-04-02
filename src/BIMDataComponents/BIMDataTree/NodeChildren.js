import { h } from "vue";

import Node from "./Node.vue";

export default {
  inject: ["root"],
  props: {
    node: {
      type: Object,
      required: true,
      validator: node => Number.isFinite(node?.id),
    },
    depth: {
      type: Number,
      default: 0,
    },
  },
  render() {
    const { node, depth, root } = this;

    const state = root.state;

    return node.children.map(child =>
      h(Node, { node: child, depth, key: child.id }, () =>
        root.$slots.node?.({
          node: child,
          depth,
          selected: child.id === state.selectedId,
          hovered: child.id === state.hoveredNode?.id,
          ancestorSelected: state.hasAncestorSelected(child),
        })
      )
    );
  },
};

<script>
import { FILE_TYPES } from "../file-tree-utils.js";
import FileTreeNodeTemplate from "./FileTreeNodeTemplate.vue";

let FileTreeNode;

FileTreeNode = {
  props: {
    file: {
      type: Object,
      required: true,
    },
    depth: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      children: [],
    };
  },
  watch: {
    file: {
      handler: function () {
        this.children = (this.file.children || [])
          .filter(child => child.type === FILE_TYPES.FOLDER)
          .sort((a, b) => (a.name < b.name ? -1 : 1));
      },
      immediate: true,
    },
  },
  render: function (h) {
    return h(FileTreeNodeTemplate, {
      props: {
        key: this.file.id,
        file: this.file,
        depth: this.depth,
        hasChildren: this.children.length > 0,
        isOpen: this.depth === 0,
      },
      scopedSlots: {
        default: () => {
          return this.children.map(child =>
            h(FileTreeNode, {
              props: {
                file: child,
                depth: this.depth + 1,
              },
            })
          );
        },
      },
    });
  },
};

export default FileTreeNode;
</script>

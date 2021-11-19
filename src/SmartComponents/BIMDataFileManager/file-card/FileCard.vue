<template>
  <BIMDataCard class="file-card" width="140px">
    <template #content>
      <div @dblclick="onDoubleClick" class="file-card__content">
        <BIMDataButton class="file-card__btn-menu" ghost rounded icon>
          <BIMDataIcon name="ellipsis" size="l" fill color="tertiary-dark" />
        </BIMDataButton>
        <template v-if="file.type === 'Folder'">
          <BIMDataIcon name="folder" size="xxl" fill color="primary" />
        </template>
        <template v-else>
          <component :is="getIcon(file.type)" />
        </template>
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
import BIMDataButton from "../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataCard from "../../../BIMDataComponents/BIMDataCard/BIMDataCard.vue";
import BIMDataIcon from "../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";

import PDF_FileIcon from "./fileIcons/PDF_FileIcon.vue";
import PNG_FileIcon from "./fileIcons/PNG_FileIcon.vue";
import IFC_FileIcon from "./fileIcons/IFC_FileIcon.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataCard,
    BIMDataIcon,
    PDF_FileIcon,
    PNG_FileIcon,
    IFC_FileIcon,
  },
  props: {
    file: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getIcon(type) {
      if (type === "Pdf") {
        return PDF_FileIcon;
      } else if (type === "Ifc") {
        return IFC_FileIcon;
      } else if (type === "Png") {
        return PNG_FileIcon;
      }
    },
    onDoubleClick() {
      if (this.file.type === "Folder") {
        this.$emit("open-folder");
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./FileCard.scss"></style>

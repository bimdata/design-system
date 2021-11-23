<template>
  <BIMDataCard
    class="file-card"
    :class="{ 'file-card--selected': selected }"
    width="140px"
  >
    <template #content>
      <div @dblclick="onDoubleClick" class="file-card__content">
        <div class="file-card__btn-menu">
          <BIMDataButton ghost rounded icon v-if="edit">
            <BIMDataIcon name="ellipsis" size="l" fill color="tertiary-dark" />
          </BIMDataButton>
          <div v-else-if="!isFolder" class="file-card__btn-menu--select">
            <BIMDataCheckbox
              v-if="multiSelect"
              @update:modelValue="$emit('toggle-select', file)"
              :modelValue="selected"
            />
            <BIMDataRadio
              v-else
              :big="true"
              @update:modelValue="$emit('toggle-select', file)"
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
import BIMDataRadio from "../../../BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataCheckbox from "../../../BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataFileIcon from "../../../BIMDataComponents/BIMDataFileIcon/BIMDataFileIcon.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataCard,
    BIMDataIcon,
    BIMDataRadio,
    BIMDataCheckbox,
    BIMDataFileIcon,
  },
  props: {
    file: {
      type: Object,
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
  },
  computed: {
    multiSelect() {
      return this.select && this.multi;
    },
    edit() {
      return !this.select;
    },
    isFolder() {
      return this.file.type === "Folder";
    },
  },
  methods: {
    getFileExtension(file) {
      const extension = file.name.match(/\.([0-9a-z]+$)/)[1];
      if (extension && extension.toLowerCase() === "ifczip") {
        return "ifc";
      } else {
        return extension;
      }
    },
    onDoubleClick() {
      if (this.isFolder) {
        this.$emit("open-folder");
      }
    },
  },
};
</script>

<style scoped lang="scss" src="./FileCard.scss"></style>

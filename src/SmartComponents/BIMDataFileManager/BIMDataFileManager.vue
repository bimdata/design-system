<template>
  <div class="bimdata-file-manager">
    <div class="bimdata-file-manager__breadcrumb">
      <!-- TODO -->
    </div>
    <BIMDataSearch
      class="bimdata-file-manager__search"
      width="100%"
      placeholder="Search"
      v-model="searchText"
      clear
    />
    <BIMDataResponsiveGrid
      class="bimdata-file-manager__container"
      itemWidth="140px"
    >
      <FileCard v-for="file of files" :key="file.id" :file="file" />
    </BIMDataResponsiveGrid>
  </div>
</template>

<script>
import BIMDataResponsiveGrid from "../../BIMDataComponents/BIMDataResponsiveGrid/BIMDataResponsiveGrid.vue";
import BIMDataSearch from "../../BIMDataComponents/BIMDataSearch/BIMDataSearch.vue";
import FileCard from "./file-card/FileCard.vue";

export default {
  components: {
    BIMDataResponsiveGrid,
    BIMDataSearch,
    FileCard,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
    fileStructure: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      files: [],
      parent: null,
      searchText: "",
    };
  },
  created() {
    this.parent = this.fileStructure;
    this.files = this.fileStructure.children || [];
  },
};
</script>

<style scoped lang="scss" src="./BIMDataFileManager.scss"></style>

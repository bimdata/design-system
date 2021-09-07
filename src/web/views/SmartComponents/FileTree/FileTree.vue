<template>
  <div class="main-container">
    <BIMDataFileTree :project="project" :fileStructure="fileStructure" />
  </div>
</template>

<script>
import { project, fileStructure } from "./test-data.js";
import BIMDataFileTree from "../../../../SmartComponents/BIMDataFileTree/BIMDataFileTree.vue";

export default {
  components: {
    BIMDataFileTree,
  },
  data() {
    return {
      project,
      fileStructure,
    };
  },
};
</script>

<style scoped lang="scss">
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

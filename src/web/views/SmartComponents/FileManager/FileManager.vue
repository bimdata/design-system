<template>
  <div class="main-container">
    <BIMDataFileManager :project="project" :fileStructure="fileStructure" />
  </div>
</template>

<script>
import { project, fileStructure } from "./test-data.js";
import BIMDataFileManager from "../../../../SmartComponents/BIMDataFileManager/BIMDataFileManager.vue";

export default {
  components: {
    BIMDataFileManager,
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

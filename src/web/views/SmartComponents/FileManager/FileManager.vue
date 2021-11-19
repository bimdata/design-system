<template>
  <div class="main-container">
    <div style="width: 90%; height: 90%;">
      <BIMDataSmartFileManager
        :spaceId="515"
        :projectId="756"
        apiUrl="https://api-staging.bimdata.io"
        accessToken="fc83e49ca9444d3ea41d212599f39040"
      />
    </div>
  </div>
</template>

<script>
import BIMDataSmartFileManager from "../../../../SmartComponents/BIMDataSmartFileManager/BIMDataSmartFileManager.js";

export default {
  components: {
    BIMDataSmartFileManager,
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

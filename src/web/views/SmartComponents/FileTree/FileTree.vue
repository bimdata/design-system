<template>
  <div class="main-container">
    <BIMDataSmartFileTree
      :spaceId="515"
      :projectId="756"
      apiUrl="https://api-staging.bimdata.io"
      accessToken="fc83e49ca9444d3ea41d212599f39040"
    />
  </div>
</template>

<script>
import BIMDataSmartFileTree from "../../../../SmartComponents/BIMDataSmartFileTree/BIMDataSmartFileTree.js";

export default {
  components: {
    BIMDataSmartFileTree,
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

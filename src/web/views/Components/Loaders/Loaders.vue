<template>
  <main class="article article-loader">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataLoading></BIMDataLoading>
        </template>

        <template #import>
          import BIMDataLoading from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataLoading.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataLoading&gt;&lt;/BIMDataLoading&gt;
          </pre>
        </template>
      </ComponentCode>

      <ComponentCode :componentTitle="$route.name" class="m-t-12" language="javascript">
        <template #module>
          <BIMDataBigSpinner></BIMDataBigSpinner>
        </template>

        <template #import>
          import BIMDataBigSpinner from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataBigSpinner.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataBigSpinner&gt;&lt;/BIMDataBigSpinner&gt;
          </pre>
        </template>
      </ComponentCode>
    </div>
  </main>
</template>

<script>
import BIMDataLoading from "../../../../../src/BIMDataComponents/BIMDataLoading/BIMDataLoading.vue";
import BIMDataBigSpinner from "../../../../../src/BIMDataComponents/BIMDataBigSpinner/BIMDataBigSpinner.vue";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataLoading,
    BIMDataBigSpinner,
    ComponentCode,
  },
};
</script>

<style lang="scss" scoped>
// import COMPONENT STYLE
@import "./_Loaders.scss";
</style>

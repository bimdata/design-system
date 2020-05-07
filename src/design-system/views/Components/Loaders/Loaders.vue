<template>
  <main class="article article-loader">
    <div class="article-wrapper">
      <h2 class="bimdata-h2"> {{ $route.name }} </h2>
      <ComponentCode :componentTitle="$route.name">
        <template #module>
          <BIMDataLoading></BIMDataLoading>
        </template>

        <template #code>
          <pre>
            &lt;BIMDataLoading&gt;&lt;/BIMDataLoading&gt;
          </pre>
        </template>
      </ComponentCode>

      <ComponentCode :componentTitle="$route.name" class="m-t-12">
        <template #module>
          <BIMDataBigSpinner></BIMDataBigSpinner>
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
import BIMDataLoading from "@/BIMDataComponents/BIMDataLoading/BIMDataLoading.vue";
import BIMDataBigSpinner from "@/BIMDataComponents/BIMDataBigSpinner/BIMDataBigSpinner.vue";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataLoading,
    BIMDataBigSpinner,
    ComponentCode
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_Loaders.scss";
</style>
<template>
  <main class="article article-loader">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <ComponentCode language="javascript">
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

      <ComponentCode class="m-t-12" language="javascript">
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

      <ComponentCode class="m-t-12" language="javascript">
        <template #module>
          <BIMDataSpinner></BIMDataSpinner>
        </template>

        <template #import>
          import BIMDataSpinner from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataSpinner.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataSpinner&gt;&lt;/BIMDataSpinner&gt;
          </pre>
        </template>
      </ComponentCode>

      <ComponentCode class="m-t-12" language="javascript">
        <template #module>
          <BIMDataPieSpinner :delay="50">
            <BIMDataIcon
              name="close"
              size="xxxs"
              class="fill-primary"
            />
          </BIMDataPieSpinner>
        </template>

        <template #import>
          import BIMDataPieSpinner from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataPieSpinner.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataPieSpinner :delay="50"&gt;
              &lt;BIMDataIcon
                name="close"
                size="xxxs"
                class="fill-primary"
              /&gt;
            &lt;/BIMDataPieSpinner&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5 class="bimdata-h5">BIMDataPieSpinner props:</h5>
        <BIMDataTable :rows="propsBIMDataPieSpinner"></BIMDataTable>
      </div>

    </div>
  </main>
</template>

<script>
import BIMDataLoading from "../../../../../src/BIMDataComponents/BIMDataLoading/BIMDataLoading.vue";
import BIMDataBigSpinner from "../../../../../src/BIMDataComponents/BIMDataBigSpinner/BIMDataBigSpinner.vue";
import BIMDataSpinner from "../../../../../src/BIMDataComponents/BIMDataSpinner/BIMDataSpinner.vue";
import BIMDataPieSpinner from "../../../../../src/BIMDataComponents/BIMDataPieSpinner/BIMDataPieSpinner.vue";
import BIMDataIcon from "../../../../../src/BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataLoading,
    BIMDataBigSpinner,
    BIMDataSpinner,
    BIMDataPieSpinner,
    BIMDataIcon,
    BIMDataTable,
    ComponentCode,
  },
  data() {
    return {
      propsBIMDataPieSpinner: [
        ["Props", "Type", "Default value", "Description"],
        ["width", "Number", "22", "width"],
        ["strokeWidth", "Number", "2", "Description"],
        ["stroke", "String", "currentColor", "couleur"],
        ["delay", "Number", "1", "temps de l'animation"],
        ["laps", "[Number, String]", "1", "nombre de tours"],
        ["dashOffsetFrom", "Number", "0", "Description"],
        ["dashOffsetTo", "Number", "63", "Description"],
        ["dashArray", "Number", "63", "Description"],
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
// import COMPONENT STYLE
@import "./_Loaders.scss";
</style>

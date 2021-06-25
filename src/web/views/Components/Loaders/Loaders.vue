<template>
  <main class="article article-loader">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
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
      <div class="article-loader__doc">
        <h6>Basic usage :</h6>
        <p>
          Should be used to indicate that data is being loaded. (For example:
          form validation)
        </p>
      </div>

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
      <div class="article-loader__doc">
        <h6>Basic usage :</h6>
        <p>Must be used for page changes and loads.</p>
      </div>

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
      <div class="article-loader__doc">
        <h6>Basic usage :</h6>
        <p>
          Should be used to indicate a 'pending' status. (For example: treatment
          of ifc)
        </p>
      </div>

      <ComponentCode class="m-t-12" language="javascript">
        <template #module>
          <BIMDataPieSpinner :delay="50">
            <BIMDataIcon name="close" size="xxxs" class="fill-primary" />
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
      <div class="article-loader__doc">
        <h6>Basic usage :</h6>
        <p>
          Must be used during a timed automatic closing (For example: closing of
          a modal after X minutes)
        </p>
      </div>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0"
          >BIMDataPieSpinner props:</BIMDataText
        >
        <BIMDataTable
          :columns="propsBIMDataPieSpinner[0]"
          :rows="propsBIMDataPieSpinner.slice(1)"
        ></BIMDataTable>
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
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataLoading,
    BIMDataBigSpinner,
    BIMDataSpinner,
    BIMDataPieSpinner,
    BIMDataIcon,
    BIMDataTable,
    BIMDataText,
    ComponentCode,
  },
  data() {
    return {
      propsBIMDataPieSpinner: [
        ["Props", "Type", "Default value", "Description"],
        ["width", "Number", "22", "Spinner width"],
        ["strokeWidth", "Number", "2", "Stroke size in px"],
        ["stroke", "String", "currentColor", "Stroke color"],
        ["delay", "Number", "1", "Animation duration in seconds"],
        ["laps", "[Number, String]", "1", "Number of spins"],
        ["dashOffsetFrom", "Number", "0", ""],
        ["dashOffsetTo", "Number", "63", ""],
        ["dashArray", "Number", "63", ""],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// import COMPONENT STYLE
@import "./_Loaders.scss";
</style>

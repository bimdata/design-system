<template>
  <main class="article article-textbox">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataModelPreview
            :type="type"
            :previewUrl="imgUrl"
            :width="width"
            :height="height"
            :backgroundColor="bgColor"
            :zoomFactor="zoomFactor"
          />
        </template>

        <template #parameters>
          <div class="m-t-24">
            <BIMDataSelect
              label="Type"
              :options="['2d', '3d']"
              v-model="type"
            />
          </div>
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Preview width (in px)"
            v-model="width"
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Preview height (in px)"
            v-model="height"
          />
          <BIMDataInput
            margin="24px 0"
            type="text"
            placeholder="Background color"
            v-model="bgColor"
          />
          <BIMDataInput
            v-show="type === '2d'"
            margin="24px 0"
            type="number"
            placeholder="Zoom factor"
            v-model="zoomFactor"
          />
        </template>

        <template #import>
          import BIMDataModelPreview from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataModelPreview.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataModelPreview
              type="{{ type }}"
              previewUrl="{{ imgUrl }}"
              :width="{{ width }}"
              :height="{{ height }}"
              backgroundColor="{{ bgColor }}"
              :zoomFactor="{{ zoomFactor }}"
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import propsData from "./props-data.js";
// Components
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataModelPreview from "../../../../BIMDataComponents/BIMDataModelPreview/BIMDataModelPreview.vue";
import BIMDataSelect from "../../../../../src/BIMDataComponents/BIMDataSelect/BIMDataSelect.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

const exampleImg = {
  "2d": require("./preview-2d-example.png"),
  "3d": require("./preview-3d-example.png"),
};

export default {
  components: {
    BIMDataInput,
    BIMDataModelPreview,
    BIMDataSelect,
    BIMDataTable,
    BIMDataText,
    ComponentCode,
  },
  data() {
    return {
      // Parameters
      type: "3d",
      width: 300,
      height: 300,
      bgColor: "var(--color-silver-light)",
      zoomFactor: 3,
      // Data
      propsData,
    };
  },
  computed: {
    imgUrl() {
      return exampleImg[this.type];
    },
  },
};
</script>

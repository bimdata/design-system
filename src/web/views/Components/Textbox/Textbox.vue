<template>
  <main class="article article-textbox">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <div>Hover over the text box to show full text.</div>
          <div class="m-24" :style="{ width: `${boxWidth}px` }">
            <BIMDataTextbox
              :text="text"
              :cutPosition="cutPosition"
              :tooltipPosition="tooltipPosition"
              :tooltipColor="tooltipColor"
            />
          </div>
        </template>

        <template #parameters>
          <div class="m-t-24">
            <BIMDataTextarea
              style="width: 100%; resize: vertical"
              label="Text"
              placeholder="Text"
              v-model="text"
            />
          </div>
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Box width (in px)"
            v-model="boxWidth"
          />
          <div class="m-t-24">
            <BIMDataSelect
              label="Cut position"
              :options="['start', 'middle', 'end']"
              v-model="cutPosition"
            />
          </div>
          <div class="m-t-24">
            <BIMDataSelect
              label="Tooltip position"
              :options="['top', 'right', 'bottom', 'left']"
              v-model="tooltipPosition"
            />
          </div>
          <div class="m-t-24">
            <BIMDataSelect
              margin="24px 0"
              label="Tooltip color"
              :options="[
                'white',
                'primary',
                'secondary',
                'granite-light',
                'silver-light',
              ]"
              v-model="tooltipColor"
            />
          </div>
        </template>

        <template #import>
          import BIMDataTextbox from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataTextbox.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataTextbox
              :text="text"
              {{ `cutPosition="${cutPosition}"` }}
              {{ `tooltipPosition="${tooltipPosition}"` }}
              {{ `tooltipColor="${tooltipColor}"` }}
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
import BIMDataSelect from "../../../../../src/BIMDataComponents/BIMDataSelect/BIMDataSelect.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataTextarea from "../../../../../src/BIMDataComponents/BIMDataTextarea/BIMDataTextarea.vue";
import BIMDataTextbox from "../../../../../src/BIMDataComponents/BIMDataTextbox/BIMDataTextbox.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataInput,
    BIMDataSelect,
    BIMDataTable,
    BIMDataText,
    BIMDataTextarea,
    BIMDataTextbox,
    ComponentCode,
  },
  data() {
    return {
      // Parameters
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      boxWidth: 200,
      cutPosition: "middle",
      tooltipPosition: "bottom",
      tooltipColor: "primary",
      // Data
      propsData,
    };
  },
};
</script>

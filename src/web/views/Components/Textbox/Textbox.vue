<template>
  <main class="article article-textbox">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <div>
            Hover over the text box to show full text.
          </div>
          <div class="m-24">
            <BIMDataTextbox
              :text="text"
              :maxLength="maxLength"
              :cutPosition="cutPosition"
              :cutSymbol="cutSymbol"
              :tooltipPosition="tooltipPosition"
              :tooltipColor="tooltipColor"
            />
          </div>
        </template>

        <template #parameters>
          <BIMDataTextarea
            style="width: 100%; resize: vertical;"
            placeholder="Text"
            v-model="text"
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Max length"
            v-model="maxLength"
          />
          <BIMDataInput
            margin="24px 0"
            type="text"
            placeholder="Cut symbol"
            v-model="cutSymbol"
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
                'primary',
                'secondary',
                'tertiary',
                'tertiary-lightest',
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
              {{ `:maxLength="${maxLength}"` }}
              {{ `:cutSymbol="${cutSymbol}"` }}`
              {{ `:cutOn="${cutOn}"` }}
              {{ `:tooltipPosition="${tooltipPosition}"` }}`
              {{ `:tooltipColor="${tooltipColor}"` }}`
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
import propsData from "./props-data";
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
    ComponentCode,
    BIMDataInput,
    BIMDataSelect,
    BIMDataTable,
    BIMDataText,
    BIMDataTextarea,
    BIMDataTextbox,
  },
  data() {
    return {
      // Parameters
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      maxLength: 16,
      cutSymbol: "...",
      cutPosition: "middle",
      tooltipPosition: "bottom",
      tooltipColor: "primary",
      // Data
      propsData,
    };
  },
};
</script>

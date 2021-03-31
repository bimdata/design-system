<template>
  <main class="article article-select">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>

      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataSelect
            v-if="getOptionKey"
            :options="optionsGroup"
            label="label"
            :nullValue="getNullValue"
            :multi="getMulti"
            optionKey="label"
            v-model="type"
            width="150px"
          />
          <BIMDataSelect
            v-else
            :options="options"
            label="label"
            :nullValue="getNullValue"
            :multi="getMulti"
            v-model="type"
            width="150px"
          />
        </template>

        <template #parameters>
          <BIMDataCheckbox
            text="multi selection"
            v-model="multi"
            :disabled="checkboxMultiDisabled"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox
            text="none option"
            v-model="nullValue"
            :disabled="checkboxNullValueDisabled"
          >
          </BIMDataCheckbox>
          <BIMDataCheckbox
            text="group option"
            v-model="groupOption"
            :disabled="checkboxGroupOptionDisabled"
          >
          </BIMDataCheckbox>
        </template>

        <template #import>
          import BIMDataSelect from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataSelect.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataSelect
              :options="options"
              label="label"
              :nullValue="{{ getNullValue }}"
              :multi="{{ getMulti }}"
              {{ getOptionKeyLabel }}
              v-model="type"
              width="150px"
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Props:</h5>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>

      <div class="m-t-12">
        <h5 class="bimdata-h5">How to add option group to BIMDataSelect:</h5>
        <p>
          To add optgroup to BIMDataSelect add optionGroup: true property to the
          option object. Remember to provide an optionKey to display your object
          correctly.
        </p>
        <p>Example :</p>
        <Code language="javascript">
          { label: "Title 2", optionGroup: true },
        </Code>
      </div>

      <div class="m-t-12">
        <h5 class="bimdata-h5">
          How to add 'disabled' class to an element list to BIMDataSelect:
        </h5>
        <p>
          To disabled an option, add disabled: true property to the option
          object. Remember to provide an optionKey to display your object
          correctly.
        </p>
        <p>Example:</p>
        <Code language="javascript">
          { label: "Option 2", disabled: true },
        </Code>
      </div>
    </div>
  </main>
</template>

<script>
import Code from "../../Elements/Code/Code.vue";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";

import BIMDataSelect from "../../../../../src/BIMDataComponents/BIMDataSelect/BIMDataSelect.vue";

export default {
  components: {
    Code,
    ComponentCode,
    BIMDataTable,
    BIMDataCheckbox,
    BIMDataSelect,
  },
  data() {
    return {
      type: null,
      multi: false,
      nullValue: false,
      groupOption: false,
      checkboxMultiDisabled: false,
      checkboxNullValueDisabled: false,
      checkboxGroupOptionDisabled: false,
      options: [
        "option 1",
        "option 2",
        "option 3",
        "option 4",
        "option 5",
        "option 6",
        "option 7",
        "option 8",
      ],
      optionsGroup: [
        { label: "Title", optionGroup: true },
        { label: "option 1" },
        { label: "option 2" },
        { label: "Title 2", optionGroup: true },
        { label: "option 3" },
        { label: "option 4", disabled: true },
        { label: "option 5" },
        { label: "option 6" },
        { label: "option 7" },
      ],
      propsData: [
        ["Props", "Type", "Default value", "Description"],
        [
          "options",
          "Array",
          "() => []",
          "This props allows you to display a list of options",
        ],
        [
          "multi",
          "Boolean",
          "false",
          "Use this boolean to select multiple options from a list of options.",
        ],
        [
          "value",
          "[String, Array, Object]",
          "/",
          "Use this props to select by default a value from the list of options.",
        ],
        [
          "label",
          "String",
          "null",
          "Use this props to set a value of the label.",
        ],
        [
          "width",
          "[Number, String]",
          "/",
          "Use this props to change the width of the select.",
        ],
        [
          "nullValue",
          "Boolean",
          "false",
          "Use this boolean if you want a 'none' value.",
        ],
        [
          "optionKey",
          "String",
          "null",
          "Use this prop if your options are in an object array and you don't want to just display the object but a specific key on the object",
        ],
      ],
    };
  },
  computed: {
    getNullValue() {
      if (this.nullValue) {
        this.checkboxMultiDisabled = true;
        return true;
      } else {
        this.checkboxMultiDisabled = false;
      }
    },
    getMulti() {
      if (this.multi) {
        this.type = [];
        this.checkboxNullValueDisabled = true;
        return true;
      } else {
        this.type = null;
        this.checkboxNullValueDisabled = false;
      }
    },
    getOptionKey() {
      if (this.groupOption) {
        return true;
      } else {
        return false;
      }
    },
    getOptionKeyLabel() {
      if (this.getOptionKey) {
        return 'optionKey="label"';
      }
      return "";
    },
  },
};
</script>

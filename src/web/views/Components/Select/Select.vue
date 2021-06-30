<template>
  <main class="article article-select">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataSelect
            width="150px"
            label="label"
            :multi="isMulti"
            :options="options"
            :nullValue="hasNullValue"
            v-model="selection"
          />
          <BIMDataText margin="18px 0">
            Selection:
            {{ selection && isMulti ? selection.join(", ") : selection }}
          </BIMDataText>
        </template>

        <template #parameters>
          <BIMDataCheckbox
            text="Multi selection"
            v-model="isMulti"
            :disabled="hasNullValue"
          />
          <BIMDataCheckbox
            text="None option"
            v-model="hasNullValue"
            :disabled="isMulti"
          />
          <BIMDataCheckbox text="Group option" v-model="hasOptionGroups" />
        </template>

        <template #import>
          import BIMDataSelect from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataSelect.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataSelect
              width="150px"
              label="label"
              {{ isMulti ? ':multi="true"' : "" }}
              :options="options"
              {{ hasNullValue ? ':nullValue="true"' : "" }}
              v-model="selection"
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

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          How to add option group to BIMDataSelect:
        </BIMDataText>
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
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          How to add 'disabled' class to an element list to BIMDataSelect:
        </BIMDataText>
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
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataSelect from "../../../../../src/BIMDataComponents/BIMDataSelect/BIMDataSelect.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";
import Code from "../../Elements/Code/Code.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataCheckbox,
    BIMDataSelect,
    BIMDataTable,
    BIMDataText,
    Code,
    ComponentCode,
  },
  data() {
    return {
      isMulti: false,
      hasNullValue: false,
      hasOptionGroups: false,
      selection: null,
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
        { label: "Group 1", optionGroup: true },
        { label: "option 1" },
        { label: "option 2" },
        { label: "Group 2", optionGroup: true },
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
    // getNullValue() {
    //   if (this.nullValue) {
    //     this.checkboxMultiDisabled = true;
    //   } else {
    //     this.checkboxMultiDisabled = false;
    //   }
    //   return this.nullValue;
    // },
    // getMulti() {
    //   if (this.multi) {
    //     this.type = [];
    //     this.checkboxNullValueDisabled = true;
    //   } else {
    //     this.type = null;
    //     this.checkboxNullValueDisabled = false;
    //   }
    //   return this.multi;
    // },
    // getOptionKey() {
    //   if (this.groupOption) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
    // getOptionKeyLabel() {
    //   if (this.getOptionKey) {
    //     return 'optionKey="label"';
    //   }
    //   return "";
    // },
  },
};
</script>

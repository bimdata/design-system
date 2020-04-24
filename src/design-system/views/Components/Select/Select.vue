<template>
  <main class="article article-select">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>

      <ComponentCode :componentTitle='$route.name'>
        <template #module >
          <BIMDataSelect
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
        </template>

        <template #code>
          <pre>
            &lt;BIMDataSelect
              :options="options"
              label="label"
              :nullValue="{{getNullValue}}"
              :multi="{{getMulti}}"
              v-model="type"
              width="150px"
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5>Props:</h5>
        <BIMDataTable :rows="propsData"></BIMDataTable>
      </div>


    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataTable from "@/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataCheckbox from "@/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";

import BIMDataSelect from "@/BIMDataComponents/BIMDataSelect/BIMDataSelect.vue"

export default {
  components: {
    ComponentCode,
    BIMDataTable,
    BIMDataCheckbox,
    BIMDataSelect
  },
  data() {
    return {
      type: null,
      multi: false,
      nullValue: false,
      checkboxMultiDisabled: false,
      checkboxNullValueDisabled: false,
      options: [
        "option 1", "option 2", "option 3", "option 4", "option 5", "option 6", "option 7", "option 8"
      ],
      propsData: [
        [
          "Props", "Type", "Default value", "Description"
        ],
        [
          "options", "Array", "() => []", "This props allows you to display a list of options"
        ],
        [
          "multi", "Boolean", "false", "Use this boolean to select multiple options from a list of options."
        ],
        [
          "value", "[String, Array]", "/", "Use this props to select by default a value from the list of options."
        ],
        [
          "label", "String", "null", "Use this props to set a value of the label."
        ],
        [
          "width", "[Number, String]", "/", "Use this props to change the width of the select."
        ],
        [
          "nullValue", "Boolean", "false", "Use this boolean if you want a 'none' value."
        ]
      ],
    }
  },
  computed: {
    getNullValue() {
      if(this.nullValue){
        this.checkboxMultiDisabled = true;
        return true;
      } else {
        this.checkboxMultiDisabled = false;
      }
    },
    getMulti(){
      if(this.multi){
        this.type = [];
        this.checkboxNullValueDisabled = true;
        return true;
      } else{
        this.type = null;
        this.checkboxNullValueDisabled = false;
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";

</style>
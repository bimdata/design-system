<template>
  <main class="article checkbox">
    <div class="article-wrapper">
      <h2>{{$route.name}}</h2>
      <Code componentTitle='Checkbox'>
          <template #module>
            <BIMDataCheckbox
            text="Your label here"
            v-model="checked"
            ></BIMDataCheckbox>
          </template>

          <template #parameters>
          </template>

          <template #code>
            <pre>
              &lt;BIMDataCheckbox
              text="Your label here"
              v-model="checked"&gt;
              &lt;/BIMDataCheckbox&gt;
            </pre>
          </template>
        </Code>

        <div class="m-t-12">
          <h5>Props:</h5>
          <BIMDataTable :rows="propsData"></BIMDataTable>
        </div>
    </div>
  </main>
</template>

<script>
import Code from "../../Components/Code.vue";

import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataCheckbox from "../../../../BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue"

export default {
  components: {
    Code,
    BIMDataTable,
    BIMDataCheckbox
  },
  data(){
    return {
      checked: false,
      propsData: [
        [
          "Property", "Type", "Default value", "Description"
        ],
        [
          "text", "String", "null", "Use this props to add text next to the checkbox"
        ],
        [
          "state", "Boolean", "false", ""
        ],
        [
          "disabled", "Boolean", "false", "Use this props to disabled the checkbox"
        ],
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "../../../../assets/scss/_BIMDataVariables.scss";

  @import "./Checkbox.scss";
</style>
<template>
  <main class="article checkbox">
    <div class="article-wrapper">
      <h2>{{$route.name}}</h2>
      <Code :componentTitle='$route.name'>
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
import Code from "../../Elements/Code/Code.vue";

import BIMDataTable from "@/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataCheckbox from "@/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue"

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
          "Props", "Type", "Default value", "Description"
        ],
        [
          "text", "String", "null", "Use this props to add text next to the checkbox"
        ],
        [
          "state", "Boolean", "false", "Use this boolean to know if the checkbox is checked or not. If the state === 'null' then the state is 'indeterminate'"
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
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./Checkbox.scss";
</style>
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
            &lt;BIMDataCheckbox
            text="Your label here"
            v-model="checked"&gt;
            &lt;/BIMDataCheckbox&gt;
          </template>
        </Code>

        <TableProperties :properties="properties"></TableProperties>
    </div>
  </main>
</template>

<script>
import Code from "../../Components/Code.vue";
import TableProperties from "../../TableProperties/TableProperties.vue";

import BIMDataCheckbox from "../../../../BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue"

export default {
  components: {
    Code,
    TableProperties,
    BIMDataCheckbox
  },
  data(){
    return {
      checked: false,
      properties: [
      {
        property:"text",
        type: "String",
        defaultValue: "null",
        description: ""
      },
      {
        property: "state",
        type: "Boolean",
        defaultValue: "false",
        description: ""
      },
      {
        property: "disabled",
        type: "Boolean",
        defaultValue: "false",
        description: ""
      }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "../../../../assets/scss/_BIMDataVariables.scss";

  @import "./Checkbox.scss";
</style>
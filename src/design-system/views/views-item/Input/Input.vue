<template>
  <main class="article article-input">
    <div class="article-wrapper">
      <h2>{{ $route.name }}</h2>

       <Code componentTitle='Input'>
        <template #module >
          <BIMDataInput
            v-model="testInput"
            placeholder="Your placeholder here"
            :error="!testInput"
            errorMessage="your error message here"
            :loading="loading"
          />
        </template>

        <template #parameters>

        </template>

        <template #code>
          &lt;BIMDataInput
            v-model="testInput"
            placeholder="Your placeholder here"
            :error="!testInput"
            errorMessage="your error message here"
            :loading="loading"
          /&gt;
        </template>
      </Code>

      <TableProperties :properties="properties"></TableProperties>
    </div>
  </main>
</template>

<script>
import Code from "../../Components/Code.vue";
import TableProperties from "../../TableProperties/TableProperties.vue";

import BIMDataInput from "../../../../BIMDataComponents/BIMDataInput/BIMDataInput.vue";

export default {
  components: {
    Code,
    TableProperties,
    BIMDataInput
  },
  data() {
    return {
      testInput: "",
      loading: false,
      properties: [
      {
        property:"placeholder",
        type: "String",
        defaultValue: '" "',
        description: ""
      },
      {
        property: "error",
        type: "Boolean",
        defaultValue: "false",
        description: ""
      },
      {
        property: "success",
        type: "Boolean",
        defaultValue: "false",
        description: ""
      },
      {
        property: "errorMessage",
        type: "String",
        defaultValue: '" "',
        description: ""
      },
      {
        property: "successMessage",
        type: "String",
        defaultValue: '" "',
        description: ""
      },
      {
        property: "loading",
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

  @import "./_Input.scss";
</style>
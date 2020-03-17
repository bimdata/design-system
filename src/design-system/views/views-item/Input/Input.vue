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
          <pre>
            &lt;BIMDataInput
            v-model="testInput"
            placeholder="Your placeholder here"
            :error="!testInput"
            errorMessage="your error message here"
            :loading="loading"
          /&gt;
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
import BIMDataInput from "../../../../BIMDataComponents/BIMDataInput/BIMDataInput.vue";

export default {
  components: {
    Code,
    BIMDataTable,
    BIMDataInput
  },
  data() {
    return {
      testInput: "",
      loading: false,
      propsData: [
        [
          "Props", "Type", "Default value", "Description"
        ],
        [
          "placeholder", "String", "''", ""
        ],
        [
          "error", "Boolean", "false", ""
        ],
        [
          "success", "Boolean", "false", ""
        ],
        [
          "errorMessage", "String", "''", ""
        ],
        [
          "successMessage", "String", "''", ""
        ],
        [
          "loading", "Boolean", "false", ""
        ],
        [
          "disabled", "Boolean", "false", ""
        ]
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "../../../../assets/scss/_BIMDataVariables.scss";

  @import "./_Input.scss";
</style>
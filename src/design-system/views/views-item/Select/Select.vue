<template>
  <main class="article article-select">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>

      <Code componentTitle='Select'>
        <template #module >
          <BIMDataSelect
          class="bcf__content__form__line"
            :options="options"
            label="label"
            v-model="type"
            :multi="true"
            width="150px"
          />
        </template>

        <template #parameters>

        </template>

        <template #code>
          <pre>
            &lt;BIMDataSelect
              class="bcf__content__form__line"
              :valAhue="type"
              :nullValue="true"
              :options="options"
              label="label"
              @option-click="type = $event"
              width="150px"
            /&gt;
          </pre>
        </template>
      </Code>
    </div>
  </main>
</template>

<script>
import Code from "../../Components/Code.vue";

import BIMDataSelect from "../../../../BIMDataComponents/BIMDataSelect/BIMDataSelect.vue"

export default {
  components: {
    Code,
    BIMDataSelect
  },
  data() {
    return {
      type: [],
      options: [
        "option 1", "option 2", "option 3", "option 4", "option 5", "option 6", "option 7", "option 8"
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "../../../../assets/scss/_BIMDataVariables.scss";

</style>
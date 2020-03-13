<template>
  <main class="article article-select">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>

      <Code componentTitle='Select'>
        <template #module >
          <BIMDataSelect
          class="bcf__content__form__line"
            :value="type"
            :options="options"
            label="label"
            @option-click="type = $event"
            width="150px"
          />
        </template>

        <template #parameters>

        </template>

        <template #code>
          <pre>
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
      type: null,
      options: [
        "option1", "option2", "option3", "option4"
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "../../../../assets/scss/_BIMDataVariables.scss";

</style>
<template>
  <main class="article article-textarea">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>

      <Code :componentTitle='$route.name'>
        <template #module>
          <BIMDataTextarea
            label="textarea label"
            name="example"
            :placeholder="placeholder"
            v-model="textarea"
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

import BIMDataTextarea from "@/BIMDataComponents/BIMDataTextarea/BIMDataTextarea.vue"

export default {
  components: {
    Code,
    BIMDataTextarea
  },
  data() {
    return {
      textarea: null,
      placeholder: "placeholder"
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";
</style>
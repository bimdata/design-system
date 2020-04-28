<template>
  <main class="article article-loader">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>
      <ComponentCode :componentTitle="$route.name">
        <template #module>
          <BIMDataLoading></BIMDataLoading>
        </template>

        <template #code>
          <pre>
            &lt;BIMDataLoading&gt;&lt;/BIMDataLoading&gt;
          </pre>
        </template>
      </ComponentCode>
    </div>
  </main>
</template>

<script>
import BIMDataLoading from "@/BIMDataComponents/BIMDataLoading/BIMDataLoading.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataLoading,
    ComponentCode
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_Loader.scss";
</style>
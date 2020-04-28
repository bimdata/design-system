<template>
  <main class="article article-tooltip">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>
      <ComponentCode :componentTitle="$route.name">
        <template #module>
          <BIMDataTooltip message="tooltip here" className="bimdata-tooltip--left">
            <template #content>Hover me</template>
          </BIMDataTooltip>
        </template>

        <template #code>
          <pre>
            &lt;BIMDataTooltip&gt;&lt;/BIMDataTooltip&gt;
          </pre>
        </template>
      </ComponentCode>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataTooltip from "@/BIMDataComponents/BIMDataTooltip/BIMDataTooltip.vue";


export default {
  components: {
    ComponentCode,
    BIMDataTooltip
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_Tooltip.scss";
</style>
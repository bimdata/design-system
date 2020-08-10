<template>
  <main class="article article-illustrations">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>

      <ComponentCode language="javascript">
        <template #module>
          <div class="illustrations">
            <div class="illustration">
              <BIMDataIllustration name="click" x="23" y="30" />
              <p>clickIllustration</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="emptyBcf"/>
              <p>emptyBcf</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="emptyBucket"/>
              <p>emptyBucket</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="emptyProperties"/>
              <p>emptyProperties</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="emptyTree"/>
              <p>emptyTree</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="shortcutOpen" x="200" y="200" />
              <p>shortcutOpen</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="shortcutRotate" x="200" y="200" />
              <p>shortcutRotate</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="shortcutZoom" x="200" y="200" />
              <p>shortcutZoom</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="successSplit" x="200" y="200" />
              <p>successSplit</p>
            </div>
          </div>
        </template>

        <template #import>
          <pre>
            import BIMDataIllustration from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataIllustrations.js";
          </pre>
        </template>

        <template #code>
          <!-- <pre>
            &lt;BIMDataIcon name="{{ activeIcon }}" {{ getIconOptionsSize() }} class="{{ selectedIconOptionsclass }}" {{ getRotateDegree() }}/&gt;
          </pre> -->
        </template>
      </ComponentCode>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataIllustration from "../../../../../src/BIMDataComponents/BIMDataIllustrations/BIMDataIllustration.vue";
import illustrations from "../../../../../src/BIMDataComponents/BIMDataIllustrations/BIMDataLibraryIllustrations/index.js";

export default {
  components: {
    ComponentCode,
    BIMDataRadio,
    BIMDataIllustration,
  },
  data() {
    return {
      illustrations
    }
  },
}
</script>

<style lang="scss">
  // import COMPONENT STYLE
@import "./_Illustrations.scss";
</style>
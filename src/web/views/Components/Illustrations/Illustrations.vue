<template>
  <main class="article article-illustrations">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <ComponentCode language="javascript">
        <template #module>
          <div class="illustrations">
            <div class="illustration">
              <BIMDataIllustration name="click" x="23" y="30" />
              <p>click</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="emptyBcf" />
              <p>emptyBcf</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="emptyBucket" />
              <p>emptyBucket</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="emptyProperties" />
              <p>emptyProperties</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="emptySectionPlanes" />
              <p>emptySectionPlanes</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="emptyTree" />
              <p>emptyTree</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="logo" />
              <p>logo</p>
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
            import BIMDataIllustration from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataIllustration.js";
          </pre>
        </template>
      </ComponentCode>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataIllustration from "../../../../../src/BIMDataComponents/BIMDataIllustration/BIMDataIllustration.vue";
import illustrations from "../../../../../src/BIMDataComponents/BIMDataIllustration/BIMDataLibraryIllustrations/index.js";

import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    ComponentCode,
    BIMDataIllustration,
    BIMDataText,
  },
  data() {
    return {
      illustrations,
    };
  },
};
</script>

<style lang="scss">
// import COMPONENT STYLE
@import "./_Illustrations.scss";
</style>

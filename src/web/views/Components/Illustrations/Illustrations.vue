<template>
  <main class="article article-illustrations">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>

      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <!-- <BIMDataSearchInput
            :clear="true"
            class="bimdata-search-bar__primary"
            placeholder="Search an icon"
            v-model="filter"
            width="95%"
          /> -->
          <!-- <span class="icons-numbers">icons: {{ Object.keys(icons).length }}</span> -->
          <div class="illustrations">
            <div class="illustration">
              <BIMDataIllustration name="click" x="23" y="30" />
              <p>clickIllustration</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="emptyBcf" x="66" y="60" />
              <p>emptyBcf</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="emptyBucket" x="58" y="76" />
              <p>emptyBucket</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="emptyProperties" x="66" y="70" />
              <p>emptyProperties</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="emptyTree" x="160" y="160" />
              <p>emptyTree</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="shortcutOpen" x="147" y="101" />
              <p>shortcutOpen</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="shortcutRotate" x="175" y="130" />
              <p>shortcutRotate</p>
            </div>
            <div class="illustration">
              <BIMDataIllustration name="shortcutZoom" x="124" y="153" />
              <p>shortcutZoom</p>
            </div>
          </div>
        </template>

        <template #parameters>
          <!-- <div
            v-for="[key, values] in Object.entries(iconOptions)"
            :key="key"
          >
            <h5 class="bimdata-h5">{{ key }}</h5>
            <BIMDataRadio
              v-for="value in values"
              :key="value"
              :text="value"
              :id="value"
              :value="value"
              :name="key"
              v-model="$data[`selectedIconOptions${key}`]"
            >
            </BIMDataRadio>
          </div> -->
        </template>

        <template #import>
          <pre>
            import BIMDataIcon from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataIcons.js";
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
import BIMDataIllustration from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataIllustration.vue";
import illustrations from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIllustrations/index.js";

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
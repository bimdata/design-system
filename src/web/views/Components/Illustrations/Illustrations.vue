<template>
  <main class="article article-illustrations">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <ComponentCode language="javascript">
        <template #module>
          <div class="illustrations">
            <div
              class="illustration"
              v-for="Illustration of Illustrations"
              :key="Illustration.name"
              :class="{ active: Illustration.name === activeIllustration.name }"
              @click="onActiveIllustration(Illustration)"
            >
              <BIMDataIllustration
                :name="Illustration.name"
                :x="Illustration.x"
                :y="Illustration.y"
              />
              <p>{{ Illustration.name }}</p>
            </div>
          </div>
        </template>

        <template #import>
          <pre>
            import BIMDataIllustration from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataIllustration.js";
          </pre>
        </template>

        <template #code>
          <pre>
            &lt;BIMDataIllustration name="{{ activeIllustration.name }}" x="{{
              activeIllustration.x
            }}" y="{{ activeIllustration.y }}" /&gt;
          </pre>
        </template>
      </ComponentCode>
    </div>
  </main>
</template>

<script>
import Illustrations from "./Illustrations.js";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataIllustration from "../../../../../src/BIMDataComponents/BIMDataIllustration/BIMDataIllustration.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    ComponentCode,
    BIMDataIllustration,
    BIMDataText,
  },
  data() {
    return {
      // illustrations,
      Illustrations,
      activeIllustration: {
        name: "click",
        x: "23",
        y: "30",
      },
    };
  },
  methods: {
    onActiveIllustration(illustration) {
      this.activeIllustration = illustration;
    },
  },
};
</script>

<style lang="scss">
// import COMPONENT STYLE
@import "./_Illustrations.scss";
</style>

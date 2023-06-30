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

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Props:</BIMDataText
        >
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import Illustrations from "./Illustrations.js";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

import BIMDataIllustration from "../../../../../src/BIMDataComponents/BIMDataIllustration/BIMDataIllustration.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    ComponentCode,
    BIMDataIllustration,
    BIMDataTable,
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
      propsData: [
        ["Props", "Type", "Required", "Default value", "Description"],
        ["x", "[Number, String]", "", "90", "Specify the width"],
        ["y", "[Number, String]", "", "90", "Specify the height"],
        [
          "customWidth",
          "[Number, String]",
          "",
          "90",
          "Specify the width, won't affect the viewBox",
        ],
        [
          "customHeight",
          "[Number, String]",
          "",
          "90",
          "Specify the height, won't affect the viewBox",
        ],
      ],
    };
  },
  methods: {
    onActiveIllustration(illustration) {
      this.activeIllustration = illustration;
    },
  },
};
</script>

<style scoped lang="scss" src="./_Illustrations.scss"></style>

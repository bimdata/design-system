<template>
  <main class="article article-illustrations">
    <div class="article-wrapper">
      <BIMDataText component="h1" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'">{{
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
            import BIMDataIllustration from "@bimdata/design-system/src/BIMDataComponents/BIMDataIllustration/BIMDataIllustration.vue";
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

export default {
  components: {
    ComponentCode,
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
  inject: ["BIMDATA_DESIGN_SYSTEM_DARK_THEME"],
  computed: {
    currentTheme() {
      return this.BIMDATA_DESIGN_SYSTEM_DARK_THEME
        ? "theme-dark"
        : "theme-light";
    },
  },
  methods: {
    onActiveIllustration(illustration) {
      this.activeIllustration = illustration;
    },
  },
};
</script>

<style scoped lang="scss" src="./_Illustrations.scss"></style>

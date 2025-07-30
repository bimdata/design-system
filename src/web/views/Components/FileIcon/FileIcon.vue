<template>
  <main class="article article-input">
    <div class="article-wrapper">
      <BIMDataText
        component="h1"
        :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'"
      >
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataFileIcon :fileName="fileName" :size="+size" />
        </template>

        <template #parameters>
          <div>
            <BIMDataText
              component="h5"
              :color="
                currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'
              "
              margin="12px 0 0"
            >
              File name
            </BIMDataText>
            <BIMDataInput
              v-model="fileName"
              placeholder="Change fileName"
              backgroundColor="white"
            />
          </div>
          <div>
            <BIMDataText
              component="h5"
              :color="
                currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'
              "
              margin="12px 0 0"
            >
              Size
            </BIMDataText>
            <BIMDataInput
              v-model="size"
              placeholder="Change size"
              backgroundColor="white"
            />
          </div>
        </template>

        <template #import>
          import BIMDataFileIcon from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataFileIcon/BIMDataFileIcon.vue";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataFileIcon
              :fileName="{{ fileName }}"
              :size="{{ size }}"
            /&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText
          component="h5"
          :color="
            currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'
          "
          margin="15px 0 0"
        >
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import propsData from "./props-data.js";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    ComponentCode,
  },
  data() {
    return {
      fileName: "test.jpg",
      size: 35,
      propsData,
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
};
</script>

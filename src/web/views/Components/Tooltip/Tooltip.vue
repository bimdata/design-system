<template>
  <main class="article article-tooltip">
    <div class="article-wrapper">
      <BIMDataText component="h1" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataTooltip
            :text="tooltipText"
            :maxWidth="tooltipMaxWidth"
            :position="tooltipPosition"
            :color="tooltipColor"
            :disabled="tooltipDisabled"
          >
            <span>Hover me !</span>
          </BIMDataTooltip>
        </template>

        <template #parameters>
          <BIMDataText
            component="h5"
            margin="15px 0 10px"
            color="color-primary"
          >
            Text
          </BIMDataText>
          <BIMDataTextarea
            v-model="tooltipText"
            width="100%"
            height="64px"
            :resizable="false"
          />
          <div class="m-t-24">
            <BIMDataInput
              placeholder="Maximum tooltip width"
              v-model="tooltipMaxWidth"
            />
          </div>

          <!-- Position Selector -->
          <BIMDataText
            component="h5"
            margin="15px 0 10px"
            color="color-primary"
          >
            Position
          </BIMDataText>
          <BIMDataRadio
            v-for="value in postionOptions"
            :key="value"
            name="position"
            :text="value"
            :value="value"
            v-model="tooltipPosition"
          >
          </BIMDataRadio>

          <!-- Color Selector -->
          <BIMDataText
            component="h5"
            margin="15px 0 10px"
            color="color-primary"
          >
            Color
          </BIMDataText>
          <BIMDataRadio
            v-for="value in colorOptions"
            :key="value"
            name="color"
            :text="value"
            :value="value"
            v-model="tooltipColor"
          >
          </BIMDataRadio>

          <BIMDataText
            component="h5"
            margin="15px 0 10px"
            color="color-primary"
          >
            Control
          </BIMDataText>
          <div class="p-l-6">
            <BIMDataCheckbox v-model="tooltipDisabled" text="disabled" />
          </div>
        </template>

        <template #import>
          import BIMDataTooltip from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataTooltip/BIMDataTooltip.vue";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataTooltip
              text="{{ tooltipText }}"
              maxWidth="{{ tooltipMaxWidth }}"
              position="{{ tooltipPosition }}"
              color="{{ tooltipColor }}"
              :disabled="{{ tooltipDisabled }}"
            &gt;
              &lt;span&gt;Hover me&lt;/span&gt;
            &lt;/BIMDataTooltip&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px">
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
      tooltipText: "Hello World !",
      tooltipMaxWidth: "240px",
      tooltipPosition: "bottom",
      tooltipColor: "primary",
      tooltipDisabled: false,

      postionOptions: ["top", "right", "bottom", "left"],
      colorOptions: [
        "white",
        "primary",
        "secondary",
        "granite-light",
        "silver-light",
        "success",
        "warning",
        "high",
      ],

      propsData,
    };
  },
  inject: ["theme"],
  computed: {
    currentTheme() {
      return this.theme.value;
    },
  },
};
</script>

<template>
  <main class="article article-dropdown">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataDropdownList
            :list="list"
            :perPage="Number(numberInput)"
            elementKey="dropdown"
            :disabled="checkboxDisabledChecked"
            :transitionName="selectedDropdownOptionstransition"
            :directionClass="selectedDropdownOptionsdirection,"
          >
            <template #header>
              dropdown list example
            </template>
          </BIMDataDropdownList>
        </template>
        <template #parameters>
          <h5 class="bimdata-h5">modifiers</h5>
          <BIMDataCheckbox
            text="disabled"
            v-model="checkboxDisabledChecked"
          >
          </BIMDataCheckbox>
          <BIMDataInput
            v-model="numberInput"
            placeholder="Number of items per page"
            type="number"
          ></BIMDataInput>
          <div
            v-for="[key, values] in Object.entries(dropdownOptions)"
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
              v-model="$data[`selectedDropdownOptions${key}`]"
            >
            </BIMDataRadio>
          </div>
        </template>
        <template #import>
          import BIMDataDropdownList from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataDropdownList.js";
        </template>
        <template #code>
          <pre>
            &lt;BIMDataDropdownList
            :list="list"
            :perPage="{{ numberInput }}"
            elementKey="dropdown"
            :disabled="{{checkboxDisabledChecked}}"
          &gt;
            &lt;template #header&gt;
              dropdown list example
            &lt;/template&gt;
          &lt;/BIMDataDropdownList&gt;
          </pre>
        </template>
      </ComponentCode>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";

import BIMDataDropdownList from "../../../../../src/BIMDataComponents/BIMDataDropdownList/BIMDataDropdownList.vue";
export default {
  components: {
    ComponentCode,
    BIMDataInput,
    BIMDataCheckbox,
    BIMDataRadio,
    BIMDataDropdownList,
  },
  data() {
    return {
      numberInput: 6,
      checkboxDisabledChecked: false,
      dropdownOptions: {
        transition: ["up", "down"],
        direction: ["up", "down", "right", "left"],
      },
      selectedDropdownOptionstransition: "up",
      selectedDropdownOptionsdirection: "down",
      list: [
        "item 01",
        "item 02",
        "item 03",
        "item 04",
        "item 05",
        "item 06",
        "item 07",
        "item 08",
        "item 09",
        "item 10",
        "item 11",
        "item 12",
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./_DropdownList.scss";
</style>

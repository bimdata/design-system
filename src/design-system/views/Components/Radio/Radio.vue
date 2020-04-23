<template>
  <main class="article article-radio">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>

      <Code :componentTitle='$route.name'>
        <template #module >
          <BIMDataRadio
            text="click on me !"
            id="radiotest"
            value="radiotest"
            v-model="selectedMode"
          ></BIMDataRadio>
        </template>

        <template #parameters>
          <BIMDataButton class="bimdata-btn bimdata-btn__fill bimdata-btn__fill--primary bimdata-btn__radius" @click="resetRadio()">Reset radio button</BIMDataButton>
        </template>

        <template #code>
          <pre>
            &lt;BIMDataRadio
            text="click on me !"
            id="radiotest"
            value="radiotest"
            v-model="selectedMode"&gt;
          &lt;/BIMDataRadio&gt;
          </pre>
        </template>
      </Code>

      <div class="m-t-12">
        <h5>Props:</h5>
        <BIMDataTable :rows="propsData"></BIMDataTable>
      </div>

    </div>
  </main>
</template>

<script>
import Code from "../../Elements/Code/Code.vue";

import BIMDataTable from "@/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataRadio from "@/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataButton from "@/BIMDataComponents/BIMDataButton/BIMDataButton.vue";


export default {
  components: {
    Code,
    BIMDataTable,
    BIMDataRadio,
    BIMDataButton
  },
  data(){
    return {
      selectedMode: null,
      propsData: [
        [
          "Props", "Type", "Default value", "Description"
        ],
        [
          "text", "String", "null", "Use this props to add a label text"
        ],
        [
          "name", "String", "'option'", ""
        ],
        [
          "id", "String", "/", ""
        ],
        [
          "value", "String", "/", ""
        ],
        [
          "selectedValue", "String", "/", ""
        ]
      ]
    }
  },
  methods: {
    resetRadio(){
      return this.selectedMode = null;
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_Radio.scss";
</style>
<template>
  <main class="article article-radio">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>

      <Code componentTitle='Radio'>
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
          &lt;BIMDataRadio
            text="click on me !"
            id="radiotest"
            value="radiotest"
            v-model="selectedMode"&gt;
          &lt;/BIMDataRadio&gt;
        </template>
      </Code>

      <TableProperties :properties="properties"></TableProperties>

    </div>
  </main>
</template>

<script>
import Code from "../../Components/Code.vue";
import TableProperties from "../../TableProperties/TableProperties.vue";
import BIMDataRadio from "@/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataButton from "@/BIMDataComponents/BIMDataButton/BIMDataButton.vue";


export default {
  components: {
    Code,
    TableProperties,
    BIMDataRadio,
    BIMDataButton
  },
  data(){
    return {
      selectedMode: null,
      properties: [
      {
        property:"text",
        type: "String",
        defaultValue: "null",
        description: "Use this property to add a label text"
      },
      {
        property: "name",
        type: "String",
        defaultValue: '"option"',
        description: ""
      },
      {
        property: "id",
        type: "String",
        defaultValue: "/",
        description: ""
      },
      {
        property: "value",
        type: "String",
        defaultValue: "/",
        description: ""
      },
      {
        property: "selectedValue",
        type: "String",
        defaultValue: "/",
        description: ""
      }
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
  @import "../../../../assets/scss/_BIMDataVariables.scss";

  @import "./_Radio.scss";
</style>
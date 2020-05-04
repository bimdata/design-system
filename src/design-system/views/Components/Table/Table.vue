<template>
  <main class="article article-table">
    <div class="article-wrapper">
      <h2 class="bimdata-h2"> {{ $route.name }} </h2>
      <ComponentCode :componentTitle='$route.name'>
        <template #module>
          <BIMDataTable :rows="rowData">
          </BIMDataTable>
        </template>

        <template #parameters>

        </template>

        <template #code>
          <pre>
            &lt;BIMDataTable :rows="rowData"&gt;
            &lt;/BIMDataTable&gt;
          </pre>
        </template>
      </ComponentCode>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataTable from "@/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

export default {
  components: {
    ComponentCode,
    BIMDataTable
  },
  data() {
    return {
      rowData: [
        ['name', 'entreprise'],
        ['Jabriel', 'BIMData'],
        ['Jabriel', 'BIMData']
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";


</style>
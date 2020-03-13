<template>
  <main class="article article-table">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>
      <Code componentTitle='Table'>
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
      </Code>
    </div>
  </main>
</template>

<script>
import Code from "../../Components/Code.vue";
import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";

export default {
  components: {
    Code,
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
  @import "../../../../assets/scss/_BIMDataVariables.scss";


</style>
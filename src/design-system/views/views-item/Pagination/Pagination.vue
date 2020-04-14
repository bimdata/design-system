<template>
  <main class="article article-pagination">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>
      <Code :componentTitle='$route.name'>
        <template #module >
          <BIMDataPaginatedList :list="paginatedListExample" :perPage="Number(textInput)">

          </BIMDataPaginatedList>
        </template>

        <template #parameters>
          <BIMDataInput v-model="textInput" placeholder="Number of items per page" type="number">

          </BIMDataInput>
        </template>

        <template #code>
          <pre>

          </pre>
        </template>
      </Code>
    </div>
  </main>
</template>

<script>
import Code from "../../Components/Code.vue";
import BIMDataPaginatedList from "@/BIMDataComponents/BIMDataPaginatedList/BIMDataPaginatedList.vue"
import BIMDataInput from "@/BIMDataComponents/BIMDataInput/BIMDataInput.vue";

export default {
  components: {
    Code,
    BIMDataPaginatedList,
    BIMDataInput
  },
  data(){
    return{
      textInput: 4,
      paginatedListExample: [
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
        "item 12"
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";
</style>
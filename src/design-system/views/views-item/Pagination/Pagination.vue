<template>
  <main class="article article-pagination">
    <div class="article-wrapper">
      <h2> {{ $route.name }} </h2>
      <Code :componentTitle='$route.name'>
        <template #module >
          <BIMDataPagination :length="10" :currentPage="1" :totalPages="4" :perPage="20">

          </BIMDataPagination>
        </template>

        <template #parameters>

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
import BIMDataPagination from "@/BIMDataComponents/BIMDataPagination/BIMDataPagination.vue"
export default {
  components: {
    Code,
    BIMDataPagination
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/_BIMDataVariables.scss";
</style>
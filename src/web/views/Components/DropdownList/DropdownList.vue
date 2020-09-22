<template>
  <main class="article article-dropdown">
    <div class="article-wrapper">
      <h2 class="bimdata-h2"> {{ $route.name }} </h2>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataDropdownList></BIMDataDropdownList>
        </template>
        <template #parameters>
        </template>
        <template #import>
        </template>
        <template #code>
        </template>
      </ComponentCode>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataDropdownList from "../../../../../src/BIMDataComponents/BIMDataDropdownList/BIMDataDropdownList.vue";
export default {
  components: {
    ComponentCode,
    BIMDataDropdownList
  }
}
</script>

<style lang="scss" scoped>
  @import "./_DropdownList.scss";
</style>
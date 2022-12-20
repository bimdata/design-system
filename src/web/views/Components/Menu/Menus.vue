<template>
  <main class="article menu">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>

      <MenuInline />
      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Props:
        </BIMDataText>
        <BIMDataTable
          :columns="propsMenuInline[0]"
          :rows="propsMenuInline.slice(1)"
        />
      </div>
      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Slots:
        </BIMDataText>
        <BIMDataTable
          :columns="slotsMenuInline[0]"
          :rows="slotsMenuInline.slice(1)"
        />
      </div>

      <BasicMenu />
      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Props:
        </BIMDataText>
        <BIMDataTable
          :columns="propsBasicMenu[0]"
          :rows="propsBasicMenu.slice(1)"
        />
      </div>
      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Slots:
        </BIMDataText>
        <BIMDataTable
          :columns="slotsBasicMenu[0]"
          :rows="slotsBasicMenu.slice(1)"
        />
      </div>
    </div>
  </main>
</template>

<script>
import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

import MenuInline from "./MenuInline.vue";
import BasicMenu from "./BasicMenu.vue";

import propsMenuInline from "./props-menu-inline.js";
import slotsMenuInline from "./slots-menu-inline.js";
import propsBasicMenu from "./props-basic-menu.js";
import slotsBasicMenu from "./slots-basic-menu.js";

export default {
  components: {
    BIMDataTable,
    BIMDataText,
    MenuInline,
    BasicMenu,
  },
  data() {
    return {
      propsMenuInline,
      slotsMenuInline,
      propsBasicMenu,
      slotsBasicMenu,
    };
  },
};
</script>

<style lang="scss" scoped></style>

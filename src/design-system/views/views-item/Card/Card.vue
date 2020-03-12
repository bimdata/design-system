<template>
  <main class="article article-card">
    <div class="article-wrapper">
      <h2>{{ $route.name }}</h2>
      <Code componentTitle='Cards'>
          <template #module>
            <BIMDataCard :titleText="getHeaderTitle()" :submenuText="getSubmenuText()">
              <template #headerIcons v-if="headerIcons">
                headerIcons
              </template>
              <template #left v-if="submenuBurger">
                <BIMDataBurgerMenu></BIMDataBurgerMenu>
              </template>
              <template #right v-if="submenuIcons">
                submenuIcons
              </template>
              <template #content v-if="content">
                {{ getContent() }}
              </template>
              <template #footer v-if="footer">
                {{ getFooter() }}
              </template>
            </BIMDataCard>
          </template>

          <template #parameters>
            <div class="bimdata-ds__demo__parameters__options">
              <h5>Header</h5>
              <BIMDataCheckbox
                text="title"
                v-model="headerTitle"
              >
              </BIMDataCheckbox>
              <BIMDataCheckbox
                text="icons"
                v-model="headerIcons"
              >
              </BIMDataCheckbox>

              <h5>Submenu</h5>
              <BIMDataCheckbox
                text="left"
                v-model="submenuBurger"
              >
              </BIMDataCheckbox>
              <BIMDataCheckbox
                text="text"
                v-model="submenuText"
              >
              </BIMDataCheckbox>
              <BIMDataCheckbox
                text="right"
                v-model="submenuIcons"
              >
              </BIMDataCheckbox>

              <h5>Content</h5>
              <BIMDataCheckbox
                text="content"
                v-model="content"
              >
              </BIMDataCheckbox>

              <h5>Footer</h5>
              <BIMDataCheckbox
                text="footer"
                v-model="footer"
              >
              </BIMDataCheckbox>
            </div>
          </template>

          <template #code>

          </template>
        </Code>

        <!-- <TableProperties></TableProperties> -->
    </div>
  </main>
</template>

<script>
import Code from "../../Components/Code.vue";
import TableProperties from "../../TableProperties/TableProperties.vue";

import BIMDataBurgerMenu from "../../../../BIMDataComponents/BIMDataBurgerMenu/BIMDataBurgerMenu.vue";
import BIMDataCard from "../../../../BIMDataComponents/BIMDataCard/BIMDataCard.vue";
import BIMDataCheckbox from "@/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";


export default {
  components: {
    Code,
    TableProperties,
    BIMDataBurgerMenu,
    BIMDataCard,
    BIMDataCheckbox
  },
  data(){
    return {
      headerTitle: false,
      headerIcons: false,
      submenuBurger: false,
      submenuText: false,
      submenuIcons: false,
      content: false,
      footer: false,
    }
  },
  methods: {
    getHeaderTitle(){
      if(this.headerTitle){
        return "header title"
      }
    },
    getSubmenuText(){
      if(this.submenuText){
        return "submenu text"
      }
    },
    getContent(){
      if(this.content){
        return "text content or any component"
      }
    },
    getFooter(){
      if(this.footer){
        return "text footer or any component"
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../../../../assets/scss/_BIMDataVariables.scss";

  @import "./_Card.scss";
</style>
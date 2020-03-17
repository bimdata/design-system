<template>
  <main class="article article-card">
    <div class="article-wrapper">
      <h2>{{ $route.name }}</h2>
      <Code :componentTitle='$route.name'>
        <template #module>
          <BIMDataCard :titleHeader="getHeaderTitle()" :submenuText="getSubmenuText()">
            <template #headerIcons v-if="headerIcons">
              {{ getHeaderIcons() }}
            </template>
            <template #left v-if="submenuLeft">
              <BIMDataBurgerMenu></BIMDataBurgerMenu>
            </template>
            <template #right v-if="submenuIcons">
              {{ getSubmenuIcons() }}
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
              v-model="submenuLeft"
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
          <pre>
            &lt;BIMDataCard :titleHeader="{{getHeaderTitle()}}" :submenuText="{{getSubmenuText()}}"&gt;
            &lt;template #headerIcons v-if="headerIcons"&gt;
              {{ getHeaderIcons() }}
            &lt;/template&gt;
            &lt;template #left v-if="submenuLeft"&gt;
              {{ getSubmenuLeft() }}
            &lt;/template&gt;
            &lt;template #right v-if="submenuIcons"&gt;
              {{ getSubmenuIcons() }}
            &lt;/template&gt;
            &lt;template #content v-if="content"&gt;
              {{ getContent() }}
            &lt;/template&gt;
            &lt;template #footer v-if="footer"&gt;
              {{ getFooter() }}
            &lt;/template&gt;
          &lt;/BIMDataCard&gt;
          </pre>
        </template>
      </Code>

      <div class="m-t-12">
        <h5>Props:</h5>
        <BIMDataTable :rows="propsData"></BIMDataTable>
      </div>

      <div class="m-t-12">
        <h5>Slots:</h5>
        <BIMDataTable :rows="slotsData"></BIMDataTable>
      </div>
    </div>
  </main>
</template>

<script>
import Code from "../../Components/Code.vue";

import BIMDataBurgerMenu from "@/BIMDataComponents/BIMDataBurgerMenu/BIMDataBurgerMenu.vue";
import BIMDataCard from "@/BIMDataComponents/BIMDataCard/BIMDataCard.vue";
import BIMDataCheckbox from "@/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataTable from "@/BIMDataComponents/BIMDataTable/BIMDataTable.vue";


export default {
  components: {
    Code,
    BIMDataBurgerMenu,
    BIMDataCard,
    BIMDataCheckbox,
    BIMDataTable
  },
  data(){
    return {
      headerTitle: true,
      headerIcons: true,
      submenuLeft: true,
      submenuText: true,
      submenuIcons: true,
      content: true,
      footer: true,
      propsData: [
        [
          "Props", "Type", "Default value", "Description"
        ],
        [
          "titleHeader", "String", "/", "Use this props to add a title in the card header"
        ],
        [
          "submenuText", "String", "/", "Use this props to add a text in the card submenu"
        ],
        [
          "width", "[Number, String]", "215px", "Use this props to change the width of the card."
        ]
      ],
      slotsData: [
        [
          "slot name", "Description"
        ],
        [
          "#headerIcons", "Use this slot to add icons to header. "
        ],
        [
          "#left", "Use this slot to add text, icons, or component to the card submenu on the left"
        ],
        [
          "#right", "Use this slot to add text, icons, or component to the card submenu on the right"
        ],
        [
          "#content", "Use this slot to add text, icons, or component into card content"
        ],
        [
          "#footer", "Use this slot to add text, icons, or component into card footer"
        ]
      ]
    }
  },
  methods: {
    getHeaderTitle(){
      if(this.headerTitle){
        return "header title"
      }
    },
    getHeaderIcons() {
      if(this.headerIcons){
        return "header icons"
      }
    },
    getSubmenuLeft(){
      if(this.submenuLeft){
        return `<BIMDataBurgerMenu></BIMDataBurgerMenu>`
      }
    },
    getSubmenuText(){
      if(this.submenuText){
        return "submenu text"
      }
    },
    getSubmenuIcons(){
      if(this.submenuIcons){
        return "submenu icons"
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
  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_Card.scss";
</style>
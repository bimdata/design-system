<template>
  <main class="article article-card">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">{{
        $route.name
      }}</BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataCard
            :titleHeader="getHeaderTitle()"
            :submenuText="getSubmenuText()"
            :width="widthCard"
            :borderRadius="borderRadiusCard"
            :bgColor="selectedBgColorCard"
          >
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
          <div>
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
              >Header</BIMDataText
            >
            <BIMDataCheckbox text="title" v-model="headerTitle">
            </BIMDataCheckbox>
            <BIMDataCheckbox text="icons" v-model="headerIcons">
            </BIMDataCheckbox>

            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
              >Submenu</BIMDataText
            >
            <BIMDataCheckbox text="left" v-model="submenuLeft">
            </BIMDataCheckbox>
            <BIMDataCheckbox text="text" v-model="submenuText">
            </BIMDataCheckbox>
            <BIMDataCheckbox text="right" v-model="submenuIcons">
            </BIMDataCheckbox>

            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
              >Content</BIMDataText
            >
            <BIMDataCheckbox text="content" v-model="content">
            </BIMDataCheckbox>

            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
              >Footer</BIMDataText
            >
            <BIMDataCheckbox text="footer" v-model="footer"> </BIMDataCheckbox>

            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
              >Parameters</BIMDataText
            >
            <BIMDataInput
              v-model="widthCard"
              margin="20px 0"
              placeholder="card's min-width in px or %"
            ></BIMDataInput>
            <BIMDataInput
              v-model="borderRadiusCard"
              placeholder="card's border-radius in px or %"
            ></BIMDataInput>
            <BIMDataText
              component="h5"
              color="color-primary"
              margin="15px 0 10px"
              >Background-colors</BIMDataText
            >
            <BIMDataRadio
              v-for="colorCard in colorsCard"
              :key="colorCard"
              :text="colorCard"
              :id="colorCard"
              :value="colorCard"
              :name="colorCard"
              v-model="selectedBgColorCard"
            >
            </BIMDataRadio>
          </div>
        </template>

        <template #import>
          import BIMDataCard from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataCard.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataCard :titleHeader="{{
              getHeaderTitle()
            }}" :submenuText="{{ getSubmenuText() }}" {{ getCardColor() }}&gt;
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
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Props:</BIMDataText
        >
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 10px"
          >Slots:</BIMDataText
        >
        <BIMDataTable :columns="slotsData[0]" :rows="slotsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataBurgerMenu from "../../../../../src/BIMDataComponents/BIMDataBurgerMenu/BIMDataBurgerMenu.vue";
import BIMDataCard from "../../../../../src/BIMDataComponents/BIMDataCard/BIMDataCard.vue";
import BIMDataCheckbox from "../../../../../src/BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataInput from "../../../../../src/BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";
import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../../src/BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    ComponentCode,
    BIMDataBurgerMenu,
    BIMDataCard,
    BIMDataCheckbox,
    BIMDataInput,
    BIMDataRadio,
    BIMDataTable,
    BIMDataText,
  },
  data() {
    return {
      headerTitle: true,
      headerIcons: true,
      submenuLeft: true,
      submenuText: true,
      submenuIcons: true,
      content: true,
      footer: true,
      widthCard: "215px",
      borderRadiusCard: "0px",
      colorsCard: ["default", "primary", "secondary"],
      selectedBgColorCard: "default",
      propsData: [
        ["Props", "Type", "Default value", "Description"],
        [
          "titleHeader",
          "String",
          "/",
          "Use this props to add a title in the card header",
        ],
        [
          "submenuText",
          "String",
          "/",
          "Use this props to add a text in the card submenu",
        ],
        [
          "width",
          "[Number, String]",
          "215px",
          "Use this props to change the width of the card.",
        ],
      ],
      slotsData: [
        ["Slot name", "Description"],
        ["headerIcons", "Use this slot to add icons to header. "],
        [
          "left",
          "Use this slot to add text, icons, or component to the card submenu on the left",
        ],
        [
          "right",
          "Use this slot to add text, icons, or component to the card submenu on the right",
        ],
        [
          "content",
          "Use this slot to add text, icons, or component into card content",
        ],
        [
          "footer",
          "Use this slot to add text, icons, or component into card footer",
        ],
      ],
    };
  },
  methods: {
    getHeaderTitle() {
      if (this.headerTitle) {
        return "header title";
      }
    },
    getHeaderIcons() {
      if (this.headerIcons) {
        return "header icons";
      }
    },
    getSubmenuLeft() {
      if (this.submenuLeft) {
        return "<BIMDataBurgerMenu></BIMDataBurgerMenu>";
      }
    },
    getSubmenuText() {
      if (this.submenuText) {
        return "submenu text";
      }
    },
    getSubmenuIcons() {
      if (this.submenuIcons) {
        return "submenu icons";
      }
    },
    getContent() {
      if (this.content) {
        return "text content or any component";
      }
    },
    getFooter() {
      if (this.footer) {
        return "text footer or any component";
      }
    },
    getCardColor() {
      if (this.selectedBgColorCard !== "default") {
        return `bgColor="${this.selectedBgColorCard}"`;
      }
    },
  },
};
</script>

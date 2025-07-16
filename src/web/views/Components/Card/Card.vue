<template>
  <main class="article article-card">
    <div class="article-wrapper">
      <BIMDataText
        component="h1"
        :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'"
      >
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataCard
            :titleHeader="getHeaderTitle()"
            :submenuText="getSubmenuText()"
            :width="widthCard"
            :borderRadius="borderRadiusCard"
            :bgColor="selectedBgColorCard"
            :boxShadow="boxShadow"
            :border="border"
          >
            <template #headerIcons v-if="headerIcons">
              {{ getHeaderIcons() }}
            </template>
            <template #left v-if="submenuLeft">
              <BIMDataIconBurgerMenu size="xs" />
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
              margin="15px 0 10px"
              :color="
                currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'
              "
            >
              Header
            </BIMDataText>
            <BIMDataCheckbox
              text="title"
              v-model="headerTitle"
              :dark="currentTheme === 'theme-dark' ? true : false"
            />
            <BIMDataCheckbox
              text="icons"
              v-model="headerIcons"
              :dark="currentTheme === 'theme-dark' ? true : false"
            />

            <BIMDataText
              component="h5"
              margin="15px 0 10px"
              :color="
                currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'
              "
            >
              Submenu
            </BIMDataText>
            <BIMDataCheckbox text="left" v-model="submenuLeft" :dark="currentTheme === 'theme-dark' ? true : false" />
            <BIMDataCheckbox text="text" v-model="submenuText" :dark="currentTheme === 'theme-dark' ? true : false" />
            <BIMDataCheckbox text="right" v-model="submenuIcons" :dark="currentTheme === 'theme-dark' ? true : false" />

            <BIMDataText
              component="h5"
              margin="15px 0 10px"
              :color="
                currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'
              "
            >
              Content
            </BIMDataText>
            <BIMDataCheckbox text="content" v-model="content" :dark="currentTheme === 'theme-dark' ? true : false" />

            <BIMDataText
              component="h5"
              margin="15px 0 10px"
              :color="
                currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'
              "
            >
              Footer
            </BIMDataText>
            <BIMDataCheckbox text="footer" v-model="footer" :dark="currentTheme === 'theme-dark' ? true : false" />

            <BIMDataText
              component="h5"
              margin="15px 0 10px"
              :color="
                currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'
              "
            >
              Parameters
            </BIMDataText>
            <BIMDataCheckbox text="Border" v-model="border" :dark="currentTheme === 'theme-dark' ? true : false" />
            <BIMDataCheckbox text="Box shadow" v-model="boxShadow" :dark="currentTheme === 'theme-dark' ? true : false" />
            <BIMDataInput
              v-model="widthCard"
              margin="20px 0"
              placeholder="card's min-width in px or %"
              backgroundColor="white"
              :dark="currentTheme === 'theme-dark' ? true : false"
            />
            <BIMDataInput
              v-model="borderRadiusCard"
              placeholder="card's border-radius in px or %"
              backgroundColor="white"
              :dark="currentTheme === 'theme-dark' ? true : false"
            />

            <BIMDataText
              component="h5"
              margin="15px 0 10px"
              :color="
                currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'
              "
            >
              Background-colors
            </BIMDataText>
            <BIMDataRadio
              v-for="colorCard in colorsCard"
              :key="colorCard"
              :text="colorCard"
              :id="colorCard"
              :value="colorCard"
              :name="colorCard"
              :dark="currentTheme === 'theme-dark' ? true : false"
              v-model="selectedBgColorCard"
            />
          </div>
        </template>

        <template #import>
          {{ getImportContent() }}
        </template>

        <template #code>
          <pre>
            &lt;BIMDataCard :titleHeader="{{
              getHeaderTitle()
            }}" :submenuText="{{ getSubmenuText() }}" {{ getBoxShadow() }} {{
              getCardColor()
            }}&gt;
            &lt;template #headerIcons&gt;
              {{ getHeaderIcons() }}
            &lt;/template&gt;
            &lt;template #left&gt;
              {{ getSubmenuLeft() }}
            &lt;/template&gt;
            &lt;template #right&gt;
              {{ getSubmenuIcons() }}
            &lt;/template&gt;
            &lt;template #content&gt;
              {{ getContent() }}
            &lt;/template&gt;
            &lt;template #footer&gt;
              {{ getFooter() }}
            &lt;/template&gt;
          &lt;/BIMDataCard&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" margin="15px 0 10px" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'">
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>

      <div class="m-t-12">
        <BIMDataText component="h5" margin="15px 0 10px" :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'">
          Slots:
        </BIMDataText>
        <BIMDataTable :columns="slotsData[0]" :rows="slotsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import propsData from "./props-data.js";
import slotsData from "./slots-data.js";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    ComponentCode,
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
      boxShadow: true,
      border: false,
      widthCard: "215px",
      borderRadiusCard: "0px",
      colorsCard: ["default", "primary", "secondary", "tertiary", "quaternary"],
      selectedBgColorCard: "default",
      // Data
      propsData,
      slotsData,
    };
  },
  inject: ["theme"],
  methods: {
    getImportContent() {
      return `
        import BIMDataCard from "@bimdata/design-system/src/BIMDataComponents/BIMDataCard/BIMDataCard.vue";
        ${
          this.submenuLeft
            ? 'import BIMDataIconBurgerMenu from "@bimdata/design-system/src/BIMDataComponents/BIMDataIcon/BIMDataIconStandalone/BIMDataIconBurgerMenu.vue";'
            : ""
        }`;
    },
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
        return "<BIMDataIconBurgerMenu size='xxs' />";
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
    getBoxShadow() {
      if (this.boxShadow !== true) {
        return `:boxShadow="${this.boxShadow}"`;
      }
    },
    getCardColor() {
      if (this.selectedBgColorCard !== "default") {
        return `bgColor="${this.selectedBgColorCard}"`;
      }
    },
  },
  computed: {
    currentTheme() {
      return this.theme.value;
    },
  },
};
</script>

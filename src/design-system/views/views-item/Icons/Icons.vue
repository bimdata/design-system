<template>
  <main class="article article-icons">
    <div class="article-wrapper">
      <h2>{{ $route.name }}</h2>
      <h3>Size usage for designers</h3>
      <p>Use a 23px box for icons of 23px.</p>
      <div>
        <img src="@/design-system/assets/img/design-system__icon-plus.jpg" alt="">
        <img src="@/design-system/assets/img/design-system__icon-warning.jpg" alt="">
      </div>

      <Code :componentTitle='$route.name'>
        <template #module>
          <BIMDataSearchBar class="bimdata-search-bar__primary" placeholder="Search an icon" v-model="filter" width="100%"/>
          <span class="icons-numbers">icons: {{iconNames.length}}</span>
          <div class="icons">
            <div v-for="iconName of filteredList" :key="iconName" :class="{active : iconName === activeIcon}" @click="onActiveIcons(iconName)">
              <BIMDataIcon
                class="icon-chevron"
                :icon-name="iconName"
                width="23"
                height="23"
                x="23"
                y="23"
                :class="selectedIconOptionsclass"
              >
                <component :is="iconName" />
              </BIMDataIcon>
              <p>{{iconName}}</p>
            </div>
          </div>
        </template>

        <template #parameters>
          <div class="bimdata-ds__demo__parameters__options" v-for="[key, values] in Object.entries(iconOptions)" :key="key">
            <h5>{{ key }}</h5>
              <BIMDataRadio
              v-for="value in values"
              :key="value"
              :text="value"
              :id="value"
              :value="value"
              :name="key"
              v-model="$data[`selectedIconOptions${key}`]"
            >
            </BIMDataRadio>
          </div>
        </template>

        <template #code>
          <pre>
            &lt;BIMDataIcon
              class="icon {{selectedIconOptionsclass}}"
              icon-name="{{activeIcon}}"
              width="23"
              height="23"
              x="23"
              y="23"
            &gt;
              &lt;{{activeIcon}} /&gt;
            &lt;/BIMDataIcon&gt;
          </pre>
        </template>
      </Code>

      <div class="m-t-12">
        <h5>Props:</h5>
        <BIMDataTable :rows="propsData"></BIMDataTable>
      </div>

    </div>
  </main>
</template>

<script>
import Code from "../../Components/Code.vue";

import BIMDataSearchBar from "@/BIMDataComponents/BIMDataSearch/BIMDataSearchBar.vue";
import BIMDataRadio from "@/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";

import BIMDataIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataIcon.vue";
import BIMData3dModelIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMData3dModelIcon.vue";
import BIMDataAddFileIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataAddFileIcon.vue";
import BIMDataAddUserIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataAddUserIcon.vue";
import BIMDataArrowIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataArrowIcon.vue";
import BIMDataAttachIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataAttachIcon.vue";
import BIMDataBcfIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataBcfIcon.vue";
import BIMDataBuildingIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataBuildingIcon.vue";
import BIMDataBurgerMenuIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataBurgerMenuIcon.vue";
import BIMDataCameraIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataCameraIcon.vue";
import BIMDataChevronIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataChevronIcon.vue";
import BIMDataClickIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataClickIcon.vue";
import BIMDataCloseIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataCloseIcon.vue";
import BIMDataCloudIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataCloudIcon.vue";
import BIMDataColorIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataColorIcon.vue";
import BIMDataCursorIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataCursorIcon.vue";
import BIMDataDeleteIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataDeleteIcon.vue";
import BIMDataDeployDownIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataDeployDownIcon.vue";
import BIMDataDeployUpIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataDeployUpIcon.vue";
import BIMDataDetachIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataDetachIcon.vue";
import BIMDataDoubleChevronIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataDoubleChevronIcon.vue";
import BIMDataEditIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataEditIcon.vue";
import BIMDataFailedIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataFailedIcon.vue";
import BIMDataFilterIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataFilterIcon.vue";
import BIMDataFolderIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataFolderIcon.vue";
import BIMDataFolderOpenIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataFolderOpenIcon.vue";
import BIMDataFullscreenIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataFullscreenIcon.vue";
import BIMDataHideIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataHideIcon.vue";
import BIMDataIfcIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataIfcIcon.vue";
import BIMDataInformationIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataInformationIcon.vue";
import BIMDataIsolateIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataIsolateIcon.vue";
import BIMDataLocationIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataLocationIcon.vue";
import BIMDataMeasureIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataMeasureIcon.vue";
import BIMDataMoreIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataMoreIcon.vue";
import BIMDataProjectIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataProjectIcon.vue";
import BIMDataReduceIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataReduceIcon.vue";
import BIMDataRefreshIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataRefreshIcon.vue";
import BIMDataRulesIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataRulesIcon.vue";
import BIMDataSandglassIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataSandglassIcon.vue";
import BIMDataSearchIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataSearchIcon.vue";
import BIMDataSectionIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataSectionIcon.vue";
import BIMDataSettingsIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataSettingsIcon.vue";
import BIMDataShowIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataShowIcon.vue";
import BIMDataSocotecIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataSocotecIcon.vue";
import BIMDataStoreyIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataStoreyIcon.vue";
import BIMDataSuccessIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataSuccessIcon.vue";
import BIMDataTreeIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataTreeIcon.vue";
import BIMDataUserIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataUserIcon.vue";
import BIMDataValidateIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataValidateIcon.vue";
import BIMDataWarningIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataWarningIcon.vue";
import BIMDataWindowedIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataWindowedIcon.vue";

import BIMDataTable from "@/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

import highlight from "@/directives/highlight.js";
import copy from "@/directives/copy.js";
import Prism from "prismjs";

export default {
  components: {
    Code,
    BIMDataSearchBar,
    BIMDataRadio,
    BIMDataIcon,
    BIMData3dModelIcon,
    BIMDataAddFileIcon,
    BIMDataAddUserIcon,
    BIMDataArrowIcon,
    BIMDataAttachIcon,
    BIMDataBcfIcon,
    BIMDataBuildingIcon,
    BIMDataBurgerMenuIcon,
    BIMDataCameraIcon,
    BIMDataChevronIcon,
    BIMDataClickIcon,
    BIMDataCloseIcon,
    BIMDataCloudIcon,
    BIMDataColorIcon,
    BIMDataCursorIcon,
    BIMDataDeleteIcon,
    BIMDataDeployDownIcon,
    BIMDataDeployUpIcon,
    BIMDataDetachIcon,
    BIMDataDoubleChevronIcon,
    BIMDataEditIcon,
    BIMDataFailedIcon,
    BIMDataFilterIcon,
    BIMDataFolderIcon,
    BIMDataFolderOpenIcon,
    BIMDataFullscreenIcon,
    BIMDataHideIcon,
    BIMDataIfcIcon,
    BIMDataInformationIcon,
    BIMDataIsolateIcon,
    BIMDataLocationIcon,
    BIMDataMeasureIcon,
    BIMDataMoreIcon,
    BIMDataProjectIcon,
    BIMDataReduceIcon,
    BIMDataRefreshIcon,
    BIMDataRulesIcon,
    BIMDataSandglassIcon,
    BIMDataSearchIcon,
    BIMDataSectionIcon,
    BIMDataSettingsIcon,
    BIMDataShowIcon,
    BIMDataSocotecIcon,
    BIMDataStoreyIcon,
    BIMDataSuccessIcon,
    BIMDataTreeIcon,
    BIMDataUserIcon,
    BIMDataValidateIcon,
    BIMDataWarningIcon,
    BIMDataWindowedIcon,
    BIMDataTable
  },
  data(){
    return{
      filter: "",
      selectedIconOptionsclass: "bimdata-fill-primary",
      activeIcon: "BIMData3dModelIcon",
      iconOptions: {
        class:[
          "bimdata-fill-default", "bimdata-fill-primary", "bimdata-fill-secondary", "bimdata-fill-tertiary", "bimdata-fill-white", "bimdata-fill-tertiary-darkest", "bimdata-fill-red", "bimdata-stroke-default", "bimdata-stroke-primary", "bimdata-stroke-secondary", "bimdata-stroke-tertiary", "bimdata-stroke-white", "bimdata-stroke-tertiary-darkest", "bimdata-stroke-red"
        ]
      },
      propsData: [
        [
          "Props", "Type", "Default value", "Description", "Examples"
        ],
        [
          "iconName", "String", "'box'", "Use this props to name your icon", ""
        ],
        [
          "width", "Number, String", "23", "Use this props to change the width of the icon", ""
        ],
        [
          "height", "Number, String", "23", "Use this props to change the height of the icon", ""
        ],
        [
          "iconColor", "String", "'currentColor'", "Use this props to change the height of the button", "'red', 'blue', 'green' etc.."
        ],
        [
          "x", "Number, String", "23", "Use this props to place on the x axis (viewbox) your icon", ""
        ],
        [
          "y", "Number, String", "23", "Use this props to place on the y axis (viewbox) your icon", ""
        ],
        [
          "class", "String", "23", "Use this props to place on the y axis (viewbox) your icon. Warning: This props outclass 'iconColor' porperty.", "'bimdata-fill-grey', 'bimdata-stroke-grey'"
        ]
      ]
    }
  },
  methods: {
    onActiveIcons(iconName){
      this.activeIcon = iconName;
    },
    onCopy(e) {
      this.alerts = true;
      this.message = "copied successfully !";
      this.alertType = "success";
      setTimeout(() => {
        this.alerts = false;
      }, 3000);
    }
  },
  computed: {
    iconNames(){
      return Object.keys(this.$options.components).filter( iconName => iconName.match(/^BIMData.+Icon$/));
    },
    filteredList() {
      const test = Object.keys(this.$options.components).filter( iconName => iconName.match(/^BIMData.+Icon$/));
      return test.filter(iconName => {
        return iconName.toLowerCase().includes(this.filter.toLowerCase())
      })
    }
  },
  directives: { highlight, copy }
}
</script>

<style lang="scss">
  @import "@/assets/scss/mixins/_font-size.scss";

  @import "@/assets/scss/_BIMDataVariables.scss";

  @import "./_Icons.scss";
</style>
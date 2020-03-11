<template>
  <main class="article article-icons">
    <div class="article-wrapper">
      <h2>{{ $route.name }}</h2>
      <h3>Size usage for designers</h3>
      <p>Use a 23px box for icons of 23px.</p>
      <div>
        <img src="../../../assets/img/design-system__icon-plus.jpg" alt="">
        <img src="../../../assets/img/design-system__icon-warning.jpg" alt="">
      </div>

      <h3>Examples</h3>
      <BIMDataSearchBar class="bimdata-search-bar__primary" placeholder="Search an icon" v-model="filter" width="100%"/>
      <div class="bimdata-ds__demo">
        <div class="bimdata-ds__demo__module">
          <span>icons: {{iconNames.length}}</span>
          <div>
            <div v-for="iconName of filteredList" :key="iconName">
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
        </div>

        <div class="bimdata-ds__demo__parameters">
            <h4>Icons options</h4>
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
          </div>

        <div class="bimdata-ds__demo__code">
          <pre class="language-xml" v-copy="onCopy">
            <code class="language-xml" v-highlight:xml >
              &lt;BIMDataIcon
                class="icon"
                icon-name="your-icon-name"
                width="23"
                height="23"
                x="23"
                y="23"
                :class="{{selectedIconOptionsclass}}"
              &gt;
                &lt;BIMData[YourIconName]Icon /&gt;
              &lt;/BIMDataIcon&gt;
            </code>
          </pre>
        </div>
      </div>

      <TableProperties :properties="properties" :examples="true"></TableProperties>

    </div>
  </main>
</template>

<script>
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
import BIMDataChevronRightIcon from "@/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataChevronRightIcon.vue";
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

import TableProperties from "../../TableProperties/TableProperties.vue";

import highlight from "../../../../directives/highlight.js";
import copy from "../../../../directives/copy.js";
import Prism from "prismjs";

export default {
  components: {
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
    BIMDataChevronRightIcon,
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
    TableProperties
  },
  data(){
    return{
      filter: "",
      selectedIconOptionsclass: "bimdata-fill-primary",
      iconOptions: {
        class:[
          "bimdata-fill-default", "bimdata-fill-primary", "bimdata-fill-secondary", "bimdata-fill-tertiary", "bimdata-fill-white", "bimdata-fill-tertiary-darkest", "bimdata-fill-red", "bimdata-stroke-default", "bimdata-stroke-primary", "bimdata-stroke-secondary", "bimdata-stroke-tertiary", "bimdata-stroke-white", "bimdata-stroke-tertiary-darkest", "bimdata-stroke-red"
        ]
      },
      properties: [
      {
        property:"iconName",
        type: "String",
        defaultValue: "'box'",
        description: "Use this property to name your icon",
        examples: ""
      },
      {
        property: "width",
        type: "Number, String",
        defaultValue: "23",
        description: "Use this property to change the width of the icon",
        examples: ""
      },
      {
        property: "height",
        type: "Number, String",
        defaultValue: "23",
        description: "Use this property to change the height of the icon",
        examples: ""
      },
      {
        property: "iconColor",
        type: "String",
        defaultValue: "'currentColor'",
        description: "Use this property to change the height of the button",
        examples: "'red', 'blue', 'green' etc.."
      },
      {
        property: "x",
        type: "Number, String",
        defaultValue: "23",
        description: "Use this property to place on the x axis (viewbox) your icon",
        examples: ""
      },
      {
        property: "y",
        type: "Number, String",
        defaultValue: "23",
        description: "Use this property to place on the y axis (viewbox) your icon",
        examples: ""
      }
      ,
      {
        property: "class",
        type: "String",
        defaultValue: "23",
        description: "Use this property to place on the y axis (viewbox) your icon. Warning: This property outclass 'iconColor' porperty.",
        examples: "'bimdata-fill-grey', 'bimdata-stroke-grey'"
      }
      ]
    }
  },
  methods: {
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
  @import "../../../../assets/scss/mixins/_font-size.scss";

  @import "../../../../assets/scss/_BIMDataVariables.scss";

  @import "./_Icons.scss";
</style>
<template>
  <main class="article article-icons">
    <div class="article-wrapper">
      <h2 class="bimdata-h2">{{ $route.name }}</h2>
      <h3 class="bimdata-h3">Size usage for designers</h3>
      <p class="bimdata-text">Use a 23px box for icons of 23px.</p>
      <div>
        <img src="../../../assets/img/design-system__icon-plus.jpg" alt="" />
        <img src="../../../assets/img/design-system__icon-warning.jpg" alt="" />
      </div>

      <ComponentCode :componentTitle="$route.name">
        <template #module>
          <BIMDataSearchInput
            :clear="true"
            class="bimdata-search-bar__primary"
            placeholder="Search an icon"
            v-model="filter"
            width="95%"
          />
          <span class="icons-numbers">icons: {{ iconNames.length }}</span>
          <div class="icons">
            <div
              v-for="iconName of filteredList"
              :key="iconName"
              :class="{ active: iconName === activeIcon }"
              @click="onActiveIcons(iconName)"
            >
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
              <p>{{ iconName }}</p>
            </div>
          </div>
        </template>

        <template #parameters>
          <div
            class="bimdata-ds__demo__parameters__options"
            v-for="[key, values] in Object.entries(iconOptions)"
            :key="key"
          >
            <h5 class="bimdata-h5">{{ key }}</h5>
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

        <template #import>
          <pre>
            import { BIMDataIcon } from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataIcons.js";
            import { {{
              activeIcon
            }} } from "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataIcons.js"
          </pre>
        </template>

        <template #code>
          <pre>
            &lt;BIMDataIcon
              class="icon {{ selectedIconOptionsclass }}"
              icon-name="{{ activeIcon }}"
              width="23"
              height="23"
              x="23"
              y="23"
            &gt;
              &lt;{{ activeIcon }} /&gt;
            &lt;/BIMDataIcon&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <h5 class="bimdata-h5">Props:</h5>
        <BIMDataTable :rows="propsData"></BIMDataTable>
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

import BIMDataSearchInput from "../../../../../src/BIMDataComponents/BIMDataSearch/BIMDataSearchInput.vue";
import BIMDataRadio from "../../../../../src/BIMDataComponents/BIMDataRadio/BIMDataRadio.vue";

import BIMDataIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataIcon.vue";
import BIMData3dModelIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMData3dModelIcon.vue";
import BIMDataAddFileIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataAddFileIcon.vue";
import BIMDataAddFolderIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataAddFolderIcon.vue";
import BIMDataAddUserIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataAddUserIcon.vue";
import BIMDataApiIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataApiIcon.vue";
import BIMDataArrowIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataArrowIcon.vue";
import BIMDataAttachIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataAttachIcon.vue";
import BIMDataBcfIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataBcfIcon.vue";
import BIMDataBuildingIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataBuildingIcon.vue";
import BIMDataBurgerMenuIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataBurgerMenuIcon.vue";
import BIMDataCameraIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataCameraIcon.vue";
import BIMDataCheckIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataCheckIcon.vue";
import BIMDataChevronIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataChevronIcon.vue";
import BIMDataClickIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataClickIcon.vue";
import BIMDataCloseIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataCloseIcon.vue";
import BIMDataCloudIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataCloudIcon.vue";
import BIMDataColorIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataColorIcon.vue";
import BIMDataCursorIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataCursorIcon.vue";
import BIMDataDefaultIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataDefaultIcon.vue";
import BIMDataDeleteIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataDeleteIcon.vue";
import BIMDataDeployDownIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataDeployDownIcon.vue";
import BIMDataDeployUpIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataDeployUpIcon.vue";
import BIMDataDetachIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataDetachIcon.vue";
import BIMDataDoubleChevronIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataDoubleChevronIcon.vue";
import BIMDataEditIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataEditIcon.vue";
import BIMDataExportIfcIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataExportIfcIcon.vue";
import BIMDataFailedIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataFailedIcon.vue";
import BIMDataFilterIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataFilterIcon.vue";
import BIMDataFolderIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataFolderIcon.vue";
import BIMDataFolderOpenIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataFolderOpenIcon.vue";
import BIMDataFullscreenIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataFullscreenIcon.vue";
import BIMDataHideIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataHideIcon.vue";
import BIMDataIfcIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataIfcIcon.vue";
import BIMDataIfcFileIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataIfcFileIcon.vue";
import BIMDataImportIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataImportIcon.vue";
import BIMDataInformationIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataInformationIcon.vue";
import BIMDataIsolateIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataIsolateIcon.vue";
import BIMDataListManageIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataListManageIcon.vue";
import BIMDataLocationIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataLocationIcon.vue";
import BIMDataMeasureIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataMeasureIcon.vue";
import BIMDataPlusIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataPlusIcon.vue";
import BIMDataProjectIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataProjectIcon.vue";
import BIMDataMinusIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataMinusIcon.vue";
import BIMDataRefreshIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataRefreshIcon.vue";
import BIMDataReprocessIfcIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataReprocessIfcIcon.vue";
import BIMDataRulesIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataRulesIcon.vue";
import BIMDataSandglassIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataSandglassIcon.vue";
import BIMDataSearchIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataSearchIcon.vue";
import BIMDataSectionIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataSectionIcon.vue";
import BIMDataSettingsIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataSettingsIcon.vue";
import BIMDataShowIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataShowIcon.vue";
import BIMDataShowSelectedIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataShowSelectedIcon.vue";
import BIMDataSocotecIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataSocotecIcon.vue";
import BIMDataStoreyIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataStoreyIcon.vue";
import BIMDataSuccessIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataSuccessIcon.vue";
import BIMDataTreeIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataTreeIcon.vue";
import BIMDataUnionIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataUnionIcon.vue";
import BIMDataUserIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataUserIcon.vue";
import BIMDataValidateIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataValidateIcon.vue";
import BIMDataWarningIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataWarningIcon.vue";
import BIMDataWindowedIcon from "../../../../../src/BIMDataComponents/BIMDataIcons/BIMDataLibraryIcons/BIMDataWindowedIcon.vue";

import BIMDataTable from "../../../../../src/BIMDataComponents/BIMDataTable/BIMDataTable.vue";

import highlight from "../../../../directives/highlight.js";
import copy from "../../../../directives/copy.js";

export default {
  components: {
    ComponentCode,
    BIMDataSearchInput,
    BIMDataRadio,
    BIMDataIcon,
    BIMData3dModelIcon,
    BIMDataAddFileIcon,
    BIMDataAddFolderIcon,
    BIMDataAddUserIcon,
    BIMDataApiIcon,
    BIMDataArrowIcon,
    BIMDataAttachIcon,
    BIMDataBcfIcon,
    BIMDataBuildingIcon,
    BIMDataBurgerMenuIcon,
    BIMDataCameraIcon,
    BIMDataCheckIcon,
    BIMDataChevronIcon,
    BIMDataClickIcon,
    BIMDataCloseIcon,
    BIMDataCloudIcon,
    BIMDataColorIcon,
    BIMDataCursorIcon,
    BIMDataDefaultIcon,
    BIMDataDeleteIcon,
    BIMDataDeployDownIcon,
    BIMDataDeployUpIcon,
    BIMDataDetachIcon,
    BIMDataDoubleChevronIcon,
    BIMDataEditIcon,
    BIMDataExportIfcIcon,
    BIMDataFailedIcon,
    BIMDataFilterIcon,
    BIMDataFolderIcon,
    BIMDataFolderOpenIcon,
    BIMDataFullscreenIcon,
    BIMDataHideIcon,
    BIMDataIfcIcon,
    BIMDataIfcFileIcon,
    BIMDataImportIcon,
    BIMDataInformationIcon,
    BIMDataIsolateIcon,
    BIMDataListManageIcon,
    BIMDataLocationIcon,
    BIMDataMeasureIcon,
    BIMDataMinusIcon,
    BIMDataPlusIcon,
    BIMDataProjectIcon,
    BIMDataRefreshIcon,
    BIMDataReprocessIfcIcon,
    BIMDataRulesIcon,
    BIMDataSandglassIcon,
    BIMDataSearchIcon,
    BIMDataSectionIcon,
    BIMDataSettingsIcon,
    BIMDataShowIcon,
    BIMDataShowSelectedIcon,
    BIMDataSocotecIcon,
    BIMDataStoreyIcon,
    BIMDataSuccessIcon,
    BIMDataTreeIcon,
    BIMDataUnionIcon,
    BIMDataUserIcon,
    BIMDataValidateIcon,
    BIMDataWarningIcon,
    BIMDataWindowedIcon,
    BIMDataTable,
  },
  directives: { highlight, copy },
  data() {
    return {
      filter: "",
      selectedIconOptionsclass: "bimdata-fill-primary",
      activeIcon: "BIMData3dModelIcon",
      iconOptions: {
        class: [
          "bimdata-fill-default",
          "bimdata-fill-primary",
          "bimdata-fill-secondary",
          "bimdata-fill-tertiary",
          "bimdata-fill-white",
          "bimdata-fill-tertiary-darkest",
          "bimdata-fill-red",
          "bimdata-stroke-default",
          "bimdata-stroke-primary",
          "bimdata-stroke-secondary",
          "bimdata-stroke-tertiary",
          "bimdata-stroke-white",
          "bimdata-stroke-tertiary-darkest",
          "bimdata-stroke-red",
        ],
      },
      propsData: [
        ["Props", "Type", "Default value", "Description", "Examples"],
        ["iconName", "String", "'box'", "Use this props to name your icon", ""],
        [
          "width",
          "Number, String",
          "23",
          "Use this props to change the width of the icon",
          "",
        ],
        [
          "height",
          "Number, String",
          "23",
          "Use this props to change the height of the icon",
          "",
        ],
        [
          "iconColor",
          "String",
          "'currentColor'",
          "Use this props to change the height of the button",
          "'red', 'blue', 'green' etc..",
        ],
        [
          "x",
          "Number, String",
          "23",
          "Use this props to place on the x axis (viewbox) your icon",
          "",
        ],
        [
          "y",
          "Number, String",
          "23",
          "Use this props to place on the y axis (viewbox) your icon",
          "",
        ],
        [
          "class",
          "String",
          "23",
          "Use this props to place on the y axis (viewbox) your icon. Warning: This props outclass 'iconColor' porperty.",
          "'bimdata-fill-grey', 'bimdata-stroke-grey'",
        ],
      ],
    };
  },
  computed: {
    iconNames() {
      return Object.keys(this.$options.components).filter(iconName =>
        iconName.match(/^BIMData.+Icon$/)
      );
    },
    filteredList() {
      const test = Object.keys(this.$options.components).filter(iconName =>
        iconName.match(/^BIMData.+Icon$/)
      );
      return test.filter(iconName => {
        return iconName.toLowerCase().includes(this.filter.toLowerCase());
      });
    },
  },
  methods: {
    onActiveIcons(iconName) {
      this.activeIcon = iconName;
    },
    onCopy() {
      this.alerts = true;
      this.message = "copied successfully !";
      this.alertType = "success";
      setTimeout(() => {
        this.alerts = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
// import BIMDATA COMPONENT VARIABLES
@import "../../../../assets/scss/_BIMDataVariables.scss";

// import BIMDATA COMPONENT MIXINS
@import "../../../../assets/scss/mixins/_font-size.scss";

// import COMPONENT STYLE
@import "./_Icons.scss";
</style>

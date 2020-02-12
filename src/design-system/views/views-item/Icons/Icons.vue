<template>
  <div class="article icons">
    <main>
      <div class="article-wrapper">
        <h2>{{ $route.name }}</h2>
        <h3>Size usage for designers</h3>
        <p>Use a 23px box for icons of 23px.</p>
        <div>
          <img src="../../../assets/img/design-system__icon-plus.jpg" alt="">
          <img src="../../../assets/img/design-system__icon-warning.jpg" alt="">
        </div>

        <h3>Examples</h3>
        <div class="bimdata-ds__demo">
          <div class="bimdata-ds__demo__module">
            <span>icons: {{iconNames.length}}</span>
            <div>
              <div v-for="iconName of iconNames" :key="iconName">
                <BIMDataIcon
                  class="icon-chevron"
                  :icon-name="iconName"
                  width="23"
                  height="23"
                  x="23"
                  y="23"
                >
                  <component :is="iconName" />
                </BIMDataIcon>
                <p>{{iconName}}</p>
              </div>
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
  </div>
</template>

<script>
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
    }
  },
  directives: { highlight, copy }
}
</script>

<style lang="scss">
  @import "../../../../assets/scss/_BIMDataVariables.scss";

  @import "./_Icons.scss";
</style>
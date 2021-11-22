import makeSmartComponent from "../makeSmartComponent.js";
import BIMDataFileManager from "../BIMDataFileManager/BIMDataFileManager.vue";

export default makeSmartComponent(
  BIMDataFileManager,
  {
    fileStructure: (apiClient, props) => {
      return apiClient.collaborationApi.getProjectDMSTree({
        cloudPk: props.spaceId,
        id: props.projectId,
      });
    },
  },
  {
    select: {
      type: Boolean,
      default: false,
    },
    multi: {
      type: Boolean,
      default: false,
    },
    selectedFiles: {
      type: Array,
      default: () => [],
    },
  }
);

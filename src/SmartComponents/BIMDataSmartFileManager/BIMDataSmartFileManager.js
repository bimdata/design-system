import makeSmartComponent from "../makeSmartComponent.js";
import BIMDataFileManager from "../BIMDataFileManager/BIMDataFileManager.vue";

export default makeSmartComponent(BIMDataFileManager, {
  fileStructure: (apiClient, props) => {
    return apiClient.collaborationApi.getProjectDMSTree({
      cloudPk: props.spaceId,
      id: props.projectId,
    });
  },
});

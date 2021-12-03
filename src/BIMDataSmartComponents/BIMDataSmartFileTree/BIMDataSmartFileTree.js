import makeSmartComponent from "../makeSmartComponent.js";
import BIMDataFileTree from "../BIMDataFileTree/BIMDataFileTree.vue";

export default makeSmartComponent(BIMDataFileTree, {
  fileStructure: (apiClient, props) => {
    return apiClient.collaborationApi.getProjectDMSTree({
      cloudPk: props.spaceId,
      id: props.projectId,
    });
  },
});

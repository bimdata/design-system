<template>
  <main class="article safe-zone-modal">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataButton
            color="high"
            outline
            radius
            @click="deleteTopicModal = true"
          >
            Click here to see the safe zone modal
          </BIMDataButton>
          <BIMDataSafeZoneModal v-if="deleteTopicModal">
            <template #text> Your text here </template>
            <template #actions>
              <BIMDataButton color="high" fill radius class="m-r-12">
                Valider la confirmation
              </BIMDataButton>
              <BIMDataButton
                color="primary"
                outline
                radius
                @click="deleteTopicModal = false"
              >
                Fermer la modal
              </BIMDataButton>
            </template>
          </BIMDataSafeZoneModal>
        </template>

        <template #parameters> </template>

        <template #import>
          import BIMDataSafeZoneModal from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataSafeZoneModal.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataButton
              color="high"
              outline
              radius
              @click="deleteTopicModal = true"
            &gt;
              Click here to see the safe zone modal
            &lt;/BIMDataButton&gt;
            &lt;BIMDataSafeZoneModal v-if="deleteTopicModal"&gt;
              &lt;template #text&gt; Your text here &lt;/template&gt;
              &lt;template #actions&gt;
                &lt;BIMDataButton
                  color="high"
                  fill
                  radius
                  class="m-r-12"
                  @click="yourActionHere"
                &gt;
                  Valider la confirmation
                &lt;/BIMDataButton&gt;
                &lt;BIMDataButton
                  color="primary"
                  outline
                  radius
                  @click="deleteTopicModal = false"
                &gt;
                  Fermer la modal
                &lt;/BIMDataButton&gt;
              &lt;/template&gt;
            &lt;/BIMDataSafeZoneModal&gt;
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import propsData from "./props-data.js";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataButton from "@/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataTable from "@/BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "@/BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataSafeZoneModal from "@/BIMDataComponents/BIMDataSafeZoneModal/BIMDataSafeZoneModal.vue";
export default {
  components: {
    ComponentCode,
    BIMDataButton,
    BIMDataTable,
    BIMDataText,
    BIMDataSafeZoneModal,
  },
  data() {
    return {
      deleteTopicModal: false,
      propsData,
    };
  },
};
</script>

<style lang="scss" scoped src="./_SafeZoneModal.scss"></style>

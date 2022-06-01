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
            @click="isModalOpen = true"
          >
            Click here to see the safe zone modal
          </BIMDataButton>
          <BIMDataSafeZoneModal
            v-if="isModalOpen"
            :width="modalWidth"
            :iconName="iconName"
          >
            <template #text> Your text here </template>
            <template #actions>
              <BIMDataButton color="high" fill radius class="m-r-12">
                Confirm
              </BIMDataButton>
              <BIMDataButton
                color="primary"
                outline
                radius
                @click="isModalOpen = false"
              >
                Close
              </BIMDataButton>
            </template>
          </BIMDataSafeZoneModal>
        </template>

        <template #parameters>
          <BIMDataInput v-model="modalWidth" placeholder="modal width" />

          <p>Change icon inside the modal</p>
          <BIMDataDropdownList
            width="100%"
            :list="iconsName"
            :perPage="8"
            elementKey="dropdown"
            :disabled="false"
            :closeOnElementClick="false"
            @element-click="iconName = $event"
          >
            <template #header> {{ iconName }} </template>
            <template #element="{ element }">
              {{ element }}
            </template>
          </BIMDataDropdownList>
        </template>

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
              @click="isModalOpen = true"
            &gt;
              Click here to see the safe zone modal
            &lt;/BIMDataButton&gt;
            &lt;BIMDataSafeZoneModal
              v-if="isModalOpen"
              {{ getModalWidth() }}
              {{ getIconName() }}
            &gt;
              &lt;template #text&gt; Your text here &lt;/template&gt;
              &lt;template #actions&gt;
                &lt;BIMDataButton
                  color="high"
                  fill
                  radius
                  class="m-r-12"
                  @click="yourActionHere"
                &gt;
                  Confirm
                &lt;/BIMDataButton&gt;
                &lt;BIMDataButton
                  color="primary"
                  outline
                  radius
                  @click="isModalOpen = false"
                &gt;
                  Close
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
import iconsName from "./icons-name.js";

import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataButton from "../../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataInput from "../../../../BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataDropdownList from "../../../../BIMDataComponents/BIMDataDropdownList/BIMDataDropdownList.vue";
import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataSafeZoneModal from "../../../../BIMDataComponents/BIMDataSafeZoneModal/BIMDataSafeZoneModal.vue";

export default {
  components: {
    ComponentCode,
    BIMDataButton,
    BIMDataInput,
    BIMDataDropdownList,
    BIMDataTable,
    BIMDataText,
    BIMDataSafeZoneModal,
  },
  data() {
    return {
      isModalOpen: false,
      propsData,
      modalWidth: "350px",
      iconName: "warning",
      iconsName,
    };
  },
  methods: {
    getModalWidth() {
      if (this.modalWidth != "350px") {
        return `width="${this.modalWidth}"`;
      }
    },
    getIconName() {
      if (this.iconName != "warning") {
        return `iconName="${this.iconName}"`;
      }
    },
  },
};
</script>

<style lang="scss" scoped src="./_SafeZoneModal.scss"></style>

<template>
  <main class="article safe-zone-inline">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <div class="safe-zone-inline__playground">
            <BIMDataButton
              class="safe-zone-inline__playground__btn-delete"
              fill
              radius
              icon
              @click="isModalOpen = true"
            >
              <BIMDataIcon name="delete" size="xs" color="high" />
            </BIMDataButton>
            <BIMDataSafeZoneInline
              class="safe-zone-inline__playground__component"
              v-if="isModalOpen"
              :reverse="reverse"
              @cancel-delete="isModalOpen = false"
              @confirm-delete="isModalOpen = false"
            />
          </div>
        </template>

        <template #parameters>
          <p>Change content order</p>
          <BIMDataCheckbox text="reverse" v-model="reverse" />
        </template>

        <template #import>
          import BIMDataSafeZoneInline from
          "@bimdata/design-system/dist/js/BIMDataComponents/BIMDataSafeZoneInline.js";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataSafeZoneInline :reverse="{{ reverse }}"/>
          </pre>
        </template>
      </ComponentCode>

      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Props:
        </BIMDataText>
        <BIMDataTable :columns="propsData[0]" :rows="propsData.slice(1)" />
      </div>
      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Events:
        </BIMDataText>
        <BIMDataTable :columns="eventData[0]" :rows="eventData.slice(1)" />
      </div>
      <div class="m-t-12">
        <BIMDataText component="h5" color="color-primary" margin="15px 0 0">
          Slots:
        </BIMDataText>
        <BIMDataTable :columns="slotData[0]" :rows="slotData.slice(1)" />
      </div>
    </div>
  </main>
</template>

<script>
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataIcon from "../../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataTable from "../../../../BIMDataComponents/BIMDataTable/BIMDataTable.vue";
import BIMDataButton from "../../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataCheckbox from "../../../../BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataSafeZoneInline from "../../../../BIMDataComponents/BIMDataSafeZoneInline/BIMDataSafeZoneInline.vue";

export default {
  components: {
    ComponentCode,
    BIMDataText,
    BIMDataIcon,
    BIMDataTable,
    BIMDataButton,
    BIMDataCheckbox,
    BIMDataSafeZoneInline,
  },
  data() {
    return {
      isModalOpen: false,
      reverse: false,
      propsData: [
        ["Props", "Type", "Default value", "Description"],
        ["locale", "String", "en", "Use this props to select a language."],
        [
          "reverse",
          "Boolean",
          "false",
          "Use this props to reverse content order.",
        ],
      ],
      eventData: [
        ["Event name", "Description"],
        ["confirm-delete", "Use this event to confirm delete."],
        ["cancel-delete", "Use this event to cancel delete."],
      ],
      slotData: [
        ["Slot name", "Description"],
        ["content", "Use this slot to add a custom text."],
      ],
    };
  },
};
</script>

<style lang="scss" scoped src="./_SafeZoneInline.scss"></style>

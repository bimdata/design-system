<template>
  <div>
    <BIMDataText component="h3" color="color-primary" margin="18px 0 6px">
      Menu inline
    </BIMDataText>

    <ComponentCode
      :componentTitle="$route.name"
      language="javascript"
      class="bimdata-ds__demo__silver-light"
    >
      <template #module>
        <BIMDataMenuInline
          :isSubmenuRight="isSubmenuRight"
          :width="isCustomButton ? '55px' : undefined"
        >
          <template #button="{ active }" v-if="isCustomButton">
            <span v-if="active">active</span>
            <span v-else>non active</span>
          </template>
          <template #submenu>
            <div class="flex items-center justify-center">
              <BIMDataButton
                color="primary"
                ghost
                rounded
                icon
                @click="active = !active"
                class="m-r-6"
              >
                <BIMDataIcon name="delete" fill color="primary" size="xxs" />
              </BIMDataButton>
              <BIMDataButton
                color="primary"
                ghost
                rounded
                icon
                @click="active = !active"
              >
                <BIMDataIcon name="edit" fill color="primary" size="xxs" />
              </BIMDataButton>
            </div>
          </template>
        </BIMDataMenuInline>
      </template>
      <template #parameters>
        <BIMDataCheckbox text="Submenu right" v-model="isSubmenuRight" />
        <BIMDataCheckbox text="Custom button" v-model="isCustomButton" />
      </template>
      <template #code>
        <pre>
            &lt;BIMDataMenuInline :isSubmenuRight="{{ isSubmenuRight }}" {{
            getWidth()
          }} &gt;
              {{ getButtonSlot() }}
              &lt;template #submenu&gt;
                &lt;div class="flex items-center justify-center"&gt;
                  &lt;BIMDataButton
                    color="primary"
                    ghost
                    rounded
                    icon
                    @click="yourClickEventHere()"
                    class="m-r-6"
                  &gt;
                    &lt;BIMDataIcon name="delete" fill color="primary" size="xxs" /&gt;
                  &lt;/BIMDataButton&gt;
                  &lt;BIMDataButton
                    color="primary"
                    ghost
                    rounded
                    icon
                    @click="yourClickEventHere()"
                  &gt;
                    &lt;BIMDataIcon name="edit" fill color="primary" size="xxs" /&gt;
                  &lt;/BIMDataButton&gt;
                &lt;/div&gt;
              &lt;/template&gt;
            &lt;/BIMDataMenuInline&gt;
          </pre
        >
      </template>
    </ComponentCode>
  </div>
</template>

<script>
import BIMDataButton from "../../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataCheckbox from "../../../../BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataIcon from "../../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

import BIMDataMenuInline from "../../../../BIMDataComponents/BIMDataMenuInline/BIMDataMenuInline.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataCheckbox,
    BIMDataIcon,
    BIMDataText,
    BIMDataMenuInline,
    ComponentCode,
  },
  data() {
    return {
      isSubmenuRight: true,
      isCustomButton: false,
      isIcons: false,
    };
  },
  methods: {
    getWidth() {
      if (this.isCustomButton) {
        return ":width=\"'55px'\"";
      }
    },
    getButtonSlot() {
      if (this.isCustomButton) {
        return `<template #button="{ active }">
              <span v-if="active">active</span>
              <span v-else>non active</span>
            </template>`;
      }
    },
  },
};
</script>

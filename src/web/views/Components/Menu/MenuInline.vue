<template>
  <div>
    <BIMDataText
      component="h3"
      :color="currentTheme === 'theme-dark' ? 'color-white' : 'color-primary'"
      margin="18px 0 6px"
    >
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
          :isClickAway="isClickAway"
          iconEllipsisSize="l"
        >
          <template #button="{ active }" v-if="isCustomButton">
            <span v-if="active">active</span>
            <span v-else>non active</span>
          </template>
          <template #submenu>
            <div class="flex items-center justify-center">
              <BIMDataButton
                :color="currentTheme === 'theme-dark' ? 'white' : 'primary'"
                ghost
                rounded
                icon
                @click="deleteClick($event)"
                class="m-r-6"
              >
                <BIMDataIconDelete
                  fill
                  :color="currentTheme === 'theme-dark' ? 'white' : 'primary'"
                  size="xxs"
                />
              </BIMDataButton>
              <BIMDataButton
                :color="currentTheme === 'theme-dark' ? 'white' : 'primary'"
                ghost
                rounded
                icon
                @click="editClick($event)"
              >
                <BIMDataIconEdit
                  fill
                  :color="currentTheme === 'theme-dark' ? 'white' : 'primary'"
                  size="xxs"
                />
              </BIMDataButton>
            </div>
          </template>
        </BIMDataMenuInline>
      </template>
      <template #parameters>
        <BIMDataCheckbox
          text="Submenu right"
          v-model="isSubmenuRight"
        />
        <BIMDataCheckbox
          text="Custom button"
          v-model="isCustomButton"
        />
        <BIMDataCheckbox
          text="Click away"
          v-model="isClickAway"
        />
      </template>
      <template #import>
        {{ getImportContent() }}
      </template>
      <template #code>
        <pre>
            &lt;BIMDataMenuInline :isSubmenuRight="{{ isSubmenuRight }}" {{
            getWidth()
          }} :isClickAway="{{ isClickAway }}" iconEllipsisSize="l" &gt;
              {{ getButtonSlot() }}
              &lt;template #submenu&gt;
                &lt;div class="flex items-center justify-center"&gt;
                  &lt;BIMDataButton
                  color="{{currentTheme === 'theme-dark' ? 'white' : 'primary'}}"
                    ghost
                    rounded
                    icon
                    @click="yourClickEventHere()"
                    class="m-r-6"
                  &gt;
                    &lt;BIMDataIconDelete fill color="{{currentTheme === 'theme-dark' ? 'white' : 'primary'}}" size="xxs" /&gt;
                  &lt;/BIMDataButton&gt;
                  &lt;BIMDataButton
                  color="{{currentTheme === 'theme-dark' ? 'white' : 'primary'}}"
                    ghost
                    rounded
                    icon
                    @click="yourClickEventHere()"
                  &gt;
                    &lt;BIMDataIconEdit fill color="{{currentTheme === 'theme-dark' ? 'white' : 'primary'}}" size="xxs" /&gt;
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
import {
  BIMDataIconDelete,
  BIMDataIconEdit,
} from "../../../../BIMDataComponents/BIMDataIcon/BIMDataIconStandalone/index.js";
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

import BIMDataMenuInline from "../../../../BIMDataComponents/BIMDataMenuInline/BIMDataMenuInline.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataCheckbox,
    BIMDataIconDelete,
    BIMDataIconEdit,
    BIMDataText,
    BIMDataMenuInline,
    ComponentCode,
  },
  inject: ["BIMDATA_DESIGN_SYSTEM_DARK_THEME"],
  data() {
    return {
      isSubmenuRight: true,
      isCustomButton: false,
      isIcons: false,
      isClickAway: false,
    };
  },
  methods: {
    getImportContent() {
      return `
        import BIMDataMenuInline from "@bimdata/design-system/src/BIMDataComponents/BIMDataMenuInline/BIMDataMenuInline.vue";`;
    },
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
    deleteClick(event) {
      console.log("delete click", event);
    },
    editClick(event) {
      console.log("edit click", event);
    },
  },
  computed: {
    currentTheme() {
      return this.BIMDATA_DESIGN_SYSTEM_DARK_THEME
        ? "theme-dark"
        : "theme-light";
    },
  },
};
</script>

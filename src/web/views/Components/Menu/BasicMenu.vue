<template>
  <div>
    <BIMDataText component="h3" color="color-primary" margin="18px 0 6px">
      Basic menu
    </BIMDataText>
    <ComponentCode
      :componentTitle="$route.name"
      language="javascript"
      class="bimdata-ds__demo__silver-light"
    >
      <template #module>
        <BIMDataMenu :menuItems="getMenuItems()" @item-click="itemClick">
          <template #item="{ item }">
            <BIMDataIcon
              v-if="isIcons"
              :name="item.icon"
              size="xs"
              margin="0 6px 0 0"
            />
            <span>{{ item.text }}</span>
          </template>
        </BIMDataMenu>
      </template>
      <template #parameters>
        <BIMDataCheckbox text="Add divider" v-model="isDivider" />
        <BIMDataCheckbox text="Add group title" v-model="isGroupTitle" />
        <BIMDataCheckbox text="Add icons" v-model="isIcons" />
      </template>
      <template #code>
        <pre>
            &lt;BIMDataMenu
            :menuItems="[<template v-for="item of getMenuItems()">
                {{ JSON.stringify(item).replace(/"/g, "'") }},</template>
            ]"
            @item-click="itemClick"
          &gt;
            &lt;template #item="{ item }"&gt;
              {{ getIcons() }}
              &lt;span&gt;{{ "{{ item.text }" + "}" }}&lt;/span&gt;
            &lt;/template&gt;
          &lt;/BIMDataMenu&gt;
        </pre>
      </template>
    </ComponentCode>
  </div>
</template>

<script>
import {
  basicOptions,
  allOptions,
  dividerOptions,
  iconsOptions,
  groupTitleOptions,
  dividerIconsOptions,
  dividerGroupsOptions,
} from "./option-sets";

import BIMDataCheckbox from "../../../../BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataMenu from "../../../../BIMDataComponents/BIMDataMenu/BIMDataMenu.vue";
import BIMDataIcon from "../../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";

import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";
import ComponentCode from "../../Elements/ComponentCode/ComponentCode.vue";
export default {
  components: {
    BIMDataCheckbox,
    BIMDataIcon,
    BIMDataText,
    BIMDataMenu,
    ComponentCode,
  },
  data() {
    return {
      isDivider: false,
      isGroupTitle: false,
      isIcons: false,
    };
  },
  methods: {
    getIcons() {
      if (this.isIcons) {
        return `<BIMDataIcon
                v-if="isIcons"
                :name="item.icon"
                size="xs"
                margin="0 6px 0 0"
              />`;
      }
    },
    itemClick($event) {
      console.log($event);
    },

    getMenuItems() {
      if (this.isDivider && this.isIcons && this.isGroupTitle) {
        return allOptions;
      }
      if (this.isDivider && this.isIcons) {
        return dividerIconsOptions;
      }
      if (this.isDivider && this.isGroupTitle) {
        return dividerGroupsOptions;
      }
      if (this.isDivider) {
        return dividerOptions;
      }
      if (this.isIcons) {
        return iconsOptions;
      }
      if (this.isGroupTitle) {
        return groupTitleOptions;
      }
      return basicOptions;
    },
  },
};
</script>

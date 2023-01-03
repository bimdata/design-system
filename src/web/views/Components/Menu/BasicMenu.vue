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
        <BIMDataMenu :menuItems="options" @item-click="itemClick">
          <!-- <template #header>
            <BIMDataCheckbox
              style="width: 14px; margin: 0 6px 0 0"
              :modelValue="options.length === checkedItems.length"
              @update:modelValue="checkAllItems"
            />
            <span>Tout sélectionner</span>
          </template> -->
          <template #item="{ item }">
            <!-- <BIMDataCheckbox
              style="width: 14px; margin: 0 6px 0 0"
              :modelValue="checkedItems.includes(item.text)"
              @update:modelValue="checkItem(item)"
            /> -->
            <BIMDataIcon
              v-if="isIcons"
              :name="item.icon"
              size="xs"
              margin="0 6px 0 0"
            />
            <!-- <span>{{ item.text }}</span> -->
          </template>
          <template #child-header>HEADER</template>
          <template #child-item="{ item }">yooo</template>
          <template #child-footer>FOOTER</template>
        </BIMDataMenu>
      </template>
      <template #parameters>
        <BIMDataCheckbox text="Add divider" v-model="isDivider" />
        <BIMDataCheckbox text="Add group title" v-model="isGroupTitle" />
        <BIMDataCheckbox text="Add icons" v-model="isIcons" />
        <BIMDataCheckbox text="Add children" v-model="isChildren" />
      </template>
      <template #code>
        <pre>
            &lt;BIMDataMenu
              :menuItems="[<template v-for="item of options">
                  {{ formatMenuItem(item) }},</template>
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
import { basicOptions } from "./option-sets.js";

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
      isChildren: false,
      checkedItems: [],
      console,
    };
  },
  computed: {
    options() {
      let opts = basicOptions.slice();

      if (this.isIcons) {
        const icons = ["tag", "visa", "edit", "download", "versioning", "key"];
        opts = opts.map((opt, i) => ({ ...opt, icon: icons[i] }));
      }

      if (this.isDivider) {
        opts[1] = { ...opts[1], divider: true };
        opts[2] = { ...opts[2], divider: true };
        opts.splice(4, 0, { divider: true });
      }

      if (this.isGroupTitle) {
        opts = [{ groupTitle: "Groupe 01" }, ...opts];
        opts[3] = { ...opts[3], groupTitle: "Groupe 02" };
        opts[5] = { ...opts[5], groupTitle: "Groupe 03" };
      }

      if (this.isChildren) {
        opts[1] = {
          ...opts[1],
          children: {
            list: [
              {
                text: "Child item 1",
                action: () => console.log("child clicked"),
              },
              { text: "Child item 2" },
            ],
          },
        };
      }
      return opts;
    },
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
    formatMenuItem(item) {
      const regex = /["']\w+["']/g;

      const itemValue = JSON.stringify(item, (_, value) =>
        typeof value === "function" ? `[fn]${value.toString()}[fn]` : value
      )
        .replace(/"/g, "'")
        .replace(/(\[fn\]'|'\[fn\]|\\)/g, "");

      const result = itemValue => {
        const removeSimpleQuote = itemValue.replace(regex, match =>
          match.replace(/'/g, "")
        );
        return removeSimpleQuote;
      };

      return result(itemValue);
    },
    checkItem({ text }) {
      const isChecked = this.checkedItems.includes(text);

      if (isChecked) {
        const itemIndex = this.checkedItems.indexOf(text);
        this.checkedItems.splice(itemIndex, 1);
      } else {
        this.checkedItems.push(text);
      }
      return !isChecked;
    },
    checkAllItems() {
      this.checkedItems =
        this.checkedItems.length === this.options.length
          ? []
          : this.options.map(item => item.text);
    },
  },
};
</script>

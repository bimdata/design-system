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
        <BIMDataMenu
          :menuItems="options"
          :childrenLeft="isChildrenLeft"
          @item-click="itemClick"
        >
          <template #item="{ item }">
            <template v-if="isIcons">
              <BIMDataIcon :name="item.icon" size="xs" margin="0 6px 0 0" />
            </template>
            <span>{{ item.text }}</span>
            <BIMDataIcon
              v-if="item.children"
              name="chevron"
              size="xxs"
              margin="0 0 0 auto"
            />
          </template>
          <template #child-item="{ item }">
            <div v-if="item.children[0].data">
              <span
                v-for="child in item.children"
                :key="child.id"
                class="color-high"
              >
                <BIMDataIcon
                  name="warning"
                  size="xxs"
                  margin="0 6px 0 0"
                  fill
                  color="high"
                />
                {{ child.data }}
              </span>
            </div>
          </template>
        </BIMDataMenu>
      </template>
      <template #parameters>
        <BIMDataCheckbox text="Add divider" v-model="isDivider" />
        <BIMDataCheckbox text="Add group title" v-model="isGroupTitle" />
        <BIMDataCheckbox text="Add icons" v-model="isIcons" />
        <BIMDataCheckbox text="Add children" v-model="isChildren" />
        <BIMDataCheckbox
          text="Position children on the left"
          v-model="isChildrenLeft"
        />
      </template>
      <template #code>
        <pre>
            &lt;BIMDataMenu
              :menuItems="[<template v-for="item of options">
                  {{ formatMenuItem(item) }},</template>
              ]"
              @item-click="itemClick"
              :childrenLeft="{{isChildrenLeft}}"
            &gt;
            &lt;template #item="{ item }"&gt;
              {{ getIcons() }}
              &lt;span&gt;{{ "{{ item.text }" + "}" }}&lt;/span&gt;
            &lt;/template&gt;
            {{getChildren()}}
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
      isChildrenLeft: false,
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
          children: [
            {
              text: "Child item 1",
              action: () => console.log("child clicked"),
            },
            { text: "Child item 2" },
          ],
        };
        opts[2] = {
          ...opts[2],
          children: [{ data: "Item 03 children" }],
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
    getChildren() {
      if (this.isChildren) {
        return `
        <template #child-item="{ item }">
          <div v-if="item.children[0].data">
            <span
              v-for="child in item.children"
              :key="child.id"
              class="color-high"
            >
              <BIMDataIcon
                name="warning"
                size="xxs"
                margin="0 6px 0 0"
                fill
                color="high"
              />
              {{ child.data }}
            </span>
          </div>
        </template>
      `;
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
  },
};
</script>

<template>
  <main class="article article-avatar">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>
      <ComponentCode :componentTitle="$route.name" language="javascript">
        <template #module>
          <BIMDataAvatar
            :user="user"
            :size="size"
            :initialsSize="initialsSize"
            :color="color"
          />
        </template>

        <template #parameters>
          <BIMDataInput
            margin="24px 0"
            type="text"
            placeholder="First name"
            v-model="firstname"
            backgroundColor="var(--color-white)"
          />
          <BIMDataInput
            margin="24px 0"
            type="text"
            placeholder="Last name"
            v-model="lastname"
            backgroundColor="var(--color-white)"
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Size"
            v-model="size"
            backgroundColor="var(--color-white)"
          />
          <BIMDataInput
            margin="24px 0"
            type="number"
            placeholder="Initials size"
            v-model="initialsSize"
            backgroundColor="var(--color-white)"
          />
          <div class="m-t-24">
            <BIMDataSelect
              margin="24px 0"
              label="Color"
              :color="
                currentTheme === 'theme-dark' ? 'quaternary' : 'white'
              "
              :options="['primary', 'secondary', 'silver-light']"
              v-model="color"
            />
          </div>
        </template>

        <template #import>
          import BIMDataAvatar from
          "@bimdata/design-system/src/BIMDataComponents/BIMDataAvatar/BIMDataAvatar.vue";
        </template>

        <template #code>
          <pre>
            &lt;BIMDataAvatar
              :user="user"
              {{ `:size="${size}"` }}
              {{ initialsSize ? `:initialsSize="${initialsSize}"` : "" }}
              {{ `color="${color}"` }}
            /&gt;
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

export default {
  components: {
    ComponentCode,
  },
  inject: ["BIMDATA_DESIGN_SYSTEM_DARK_THEME"],
  data() {
    return {
      // Parameters
      firstname: "Jane",
      lastname: "Doe",
      size: 32,
      initialsSize: undefined,
      color: "primary",
      // Data
      propsData,
    };
  },
  computed: {
    user() {
      return {
        firstname: this.firstname,
        lastname: this.lastname,
      };
    },
    currentTheme() {
      return this.BIMDATA_DESIGN_SYSTEM_DARK_THEME
        ? "theme-dark"
        : "theme-light";
    },
  },
};
</script>

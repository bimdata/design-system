<template>
  <main class="article menu">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>

      <BIMDataText component="h3" color="color-primary">
        Menu inline
      </BIMDataText>

      <ComponentCode
        :componentTitle="$route.name"
        language="javascript"
        class="bimdata-ds__demo__silver-light"
      >
        <template #module>
          <BIMDataMenuInline :isSubmenuRight="isSubmenuRight">
            <template #submenu>
              <div class="flex items-center justify-center">
                <BIMDataButton
                  color="primary"
                  ghost
                  rounded
                  icon
                  @click="active = !active"
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
        </template>
        <template #code>
          <pre>
            &lt;BIMDataMenuInline :isSubmenuRight="isSubmenuRight"&gt;
              &lt;template #submenu&gt;
                &lt;div class="flex items-center justify-center"&gt;
                  &lt;BIMDataButton
                    color="primary"
                    ghost
                    rounded
                    icon
                    @click="yourClickEventHere()"
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
          </pre>
        </template>
      </ComponentCode>
    </div>
  </main>
</template>

<script>
import BIMDataButton from "../../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataCheckbox from "../../../../BIMDataComponents/BIMDataCheckbox/BIMDataCheckbox.vue";
import BIMDataIcon from "../../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataMenuInline from "../../../../BIMDataComponents/BIMDataMenuInline/BIMDataMenuInline.vue";
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

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
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./_MenuInline.scss";
</style>

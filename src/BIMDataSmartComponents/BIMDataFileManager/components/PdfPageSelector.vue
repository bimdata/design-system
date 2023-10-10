<template>
  <div class="pdf-page-selector">
    <div class="head">
      <BIMDataButton ghost radius @click="$emit('close')">
        <BIMDataIcon name="arrow" size="xxs" />
        <span style="margin-left: 6px">
          {{ $translate("back") }}
        </span>
      </BIMDataButton>
      <span class="title">
        <BIMDataIcon name="filePdfPolychrome" size="m" margin="0 6px 0 0" />
        <BIMDataTextbox :text="model.name" />
      </span>
      <BIMDataButton ghost rounded icon @click="$emit('close')">
        <BIMDataIcon name="close" size="xxs" />
      </BIMDataButton>
    </div>
    <div class="body">
      <BIMDataResponsiveGrid
        style="width: 100%"
        itemWidth="157px"
        rowGap="6px"
        columnGap="6px"
      >
        <div
          v-for="page of pages"
          :key="page.id"
          class="pdf-page"
          :class="{ selected: selectedPage && selectedPage.id === page.id }"
          @click="
            selectedPage =
              selectedPage && selectedPage.id === page.id ? null : page
          "
        >
          <div class="pdf-page__img">
            <template v-if="page.map_file">
              <img :src="page.map_file" :alt="`page ${page.page_number}`" />
            </template>
            <template v-else>
              <BIMDataIcon name="filePdfPolychrome" size="l" />
            </template>
          </div>
          <div class="pdf-page__num">
            {{ page.page_number }}
          </div>
        </div>
      </BIMDataResponsiveGrid>
    </div>
    <div class="foot">
      <BIMDataButton
        width="100%"
        color="primary"
        fill
        radius
        @click="$emit('select', selectedPage)"
      >
        {{ $translate("validate") }}
      </BIMDataButton>
    </div>
  </div>
</template>

<script>
// Components
import BIMDataButton from "../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataIcon from "../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataResponsiveGrid from "../../../BIMDataComponents/BIMDataResponsiveGrid/BIMDataResponsiveGrid.vue";
import BIMDataTextbox from "../../../BIMDataComponents/BIMDataTextbox/BIMDataTextbox.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataIcon,
    BIMDataResponsiveGrid,
    BIMDataTextbox,
  },
  inject: ["$translate"],
  props: {
    model: {
      type: Object,
      required: true,
    },
  },
  emits: ["select", "close"],
  data() {
    return {
      selectedPage: null,
    };
  },
  computed: {
    pages() {
      return [this.model].concat(this.model.children ?? []);
    },
  },
};
</script>

<style scoped lang="scss">
.pdf-page-selector {
  width: 100%;
  height: 100%;
  padding: var(--spacing-unit);
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-unit);

    .title {
      max-width: calc(100% - 180px);
      display: flex;
      align-items: center;
    }
  }

  .body {
    flex-grow: 1;
    padding: var(--spacing-unit) calc(var(--spacing-unit) / 2);
    max-height: calc(100% - 2 * var(--spacing-unit) - 32px);
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-unit);

    .pdf-page {
      cursor: pointer;

      &__img {
        width: 157px;
        height: 218px;
        background-color: var(--color-white);
        box-shadow: var(--box-shadow);

        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
        }
      }

      &__num {
        padding-top: calc(var(--spacing-unit) / 2);
        text-align: center;
        font-weight: bold;
      }

      &.selected .pdf-page__img {
        border: 4px solid var(--color-primary);
      }
    }
  }
}
</style>

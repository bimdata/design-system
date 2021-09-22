<template>
  <BIMDataCard class="file-card" width="140px">
    <template #content>
      <BIMDataButton class="file-card__btn-menu" ghost rounded icon>
        <BIMDataIcon name="ellipsis" size="l" fill color="tertiary-dark" />
      </BIMDataButton>
      <template v-if="file.type === 'Folder'">
        <BIMDataIcon name="folder" size="xxl" fill color="primary" />
      </template>
      <template v-else>
        <!-- TODO: file icon -->
      </template>
    </template>
    <template #footer>
      <div class="file-card__name">
        {{ file.name }}
      </div>
      <div class="file-card__date">
        {{ file.updatedAt.slice(0, 10) }}
      </div>
    </template>
  </BIMDataCard>
</template>

<script>
import BIMDataButton from "../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataCard from "../../../BIMDataComponents/BIMDataCard/BIMDataCard.vue";
import BIMDataIcon from "../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";

export default {
  components: {
    BIMDataButton,
    BIMDataCard,
    BIMDataIcon,
  },
  props: {
    file: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss" src="./FileCard.scss"></style>

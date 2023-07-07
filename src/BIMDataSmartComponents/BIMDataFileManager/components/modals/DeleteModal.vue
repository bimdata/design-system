<template>
  <div class="delete-modal" v-clickaway="close">
    <BIMDataButton
      class="delete-modal__close"
      color="default"
      icon
      radius
      ghost
      width="21px"
      height="21px"
      @click="close"
      :disabled="loading"
    >
      <BIMDataIcon name="close" />
    </BIMDataButton>
    <div class="delete-modal__content">
      <div class="delete-modal__content__title">
        {{ $translate("deleteTitle") }}
      </div>
      <div class="delete-modal__content__detail">
        {{ $translate("deleteDetail") }} :
      </div>
      <ul>
        <li v-for="element of flattenTree" :key="element.id">
          - "{{ element.name }}"
        </li>
      </ul>
      <div class="delete-modal__content__btn">
        <BIMDataButton
          class="delete-modal__content__btn-cancel"
          width="80px"
          ghost
          radius
          @click.stop="close"
          :disabled="loading"
        >
          {{ $translate("cancel") }}
        </BIMDataButton>
        <BIMDataButton
          class="delete-modal__content__btn-submit"
          width="80px"
          color="high"
          fill
          radius
          @click.stop="submit"
          :disabled="loading"
        >
          <BIMDataSpinner v-if="loading" />
          <span v-else>{{ $translate("delete") }}</span>
        </BIMDataButton>
      </div>
    </div>
  </div>
</template>

<script>
import BIMDataIcon from "../../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataButton from "../../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
import BIMDataSpinner from "../../../../BIMDataComponents/BIMDataSpinner/BIMDataSpinner.vue";

import clickaway from "../../../../BIMDataDirectives/click-away.js";

import getFlattenTree from "../../utils/flattenTree.js";

export default {
  components: {
    BIMDataIcon,
    BIMDataButton,
    BIMDataSpinner,
  },
  directives: { clickaway },
  inject: ["$translate"],
  props: {
    projectId: {
      type: Number,
      required: true,
    },
    spaceId: {
      type: Number,
      required: true,
    },
    apiClient: {
      type: Object,
      required: true,
    },
    entity: {
      type: Object,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    flattenTree() {
      return getFlattenTree(this.entity);
    },
  },
  methods: {
    close() {
      if (this.loading) return;
      this.$emit("close");
    },
    async submit() {
      this.loading = true;
      try {
        await this.deleteEntity();
        this.$emit("success");
      } catch (error) {
        this.$emit("error", error);
      } finally {
        this.loading = false;
      }
    },
    deleteEntity() {
      const params = [this.spaceId, this.entity.id, this.projectId];
      if (this.entity.nature === "Folder") {
        return this.apiClient.collaborationApi.deleteFolder(...params);
      } else {
        return this.apiClient.collaborationApi.deleteDocument(...params);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.delete-modal {
  background-color: var(--color-white);

  display: flex;
  position: relative;

  width: 70%;

  &__close {
    position: absolute;
    right: var(--spacing-unit);
    top: var(--spacing-unit);
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 30px auto;

    width: 80%;
    max-width: 350px;

    &__title {
      font-weight: 700;
      font-size: 120%;
    }

    &__detail {
      font-size: small;
      margin-top: calc(var(--spacing-unit) * 2);
    }

    ul {
      width: 100%;
      margin: calc(var(--spacing-unit) * 2) 0;
    }

    li {
      list-style: none;
      font-size: small;
      word-break: break-all;
    }

    &__btn {
      display: flex;
      width: 100%;
      justify-content: space-between;
      &-submit {
        margin-left: var(--spacing-unit);
      }
    }
  }
}
</style>

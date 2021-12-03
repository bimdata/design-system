<template>
  <div class="rename-modal" v-clickaway="close">
    <BIMDataButton
      class="rename-modal__close"
      color="default"
      icon
      radius
      ghost
      width="21px"
      height="21px"
      @click="close"
    >
      <BIMDataIcon name="close" />
    </BIMDataButton>
    <div class="rename-modal__content">
      <div class="rename-modal__content__title">
        {{ $translate("rename") }}
      </div>
      <BIMDataInput
        ref="nameInput"
        class="rename-modal__content__input"
        :placeholder="$translate('renameFormPlaceholder')"
        v-model="name"
        :error="hasError"
        :errorMessage="$translate('nameInputErrorMessage')"
        @keyup.esc.stop="close"
        @keyup.enter.stop="submit"
        margin="30px 0px"
        :loading="loading"
      />
      <div class="rename-modal__content__btn">
        <BIMDataButton
          class="rename-modal__content__btn-cancel"
          width="80px"
          ghost
          radius
          @click.stop="close"
        >
          {{ $translate("cancel") }}
        </BIMDataButton>
        <BIMDataButton
          class="rename-modal__content__btn-submit"
          width="80px"
          color="primary"
          fill
          radius
          @click.stop="submit"
        >
          {{ $translate("submit") }}
        </BIMDataButton>
      </div>
    </div>
  </div>
</template>

<script>
import BIMDataIcon from "../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataInput from "../../../BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataButton from "../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";

import clickaway from "../../../BIMDataDirectives/click-away.js";

export default {
  components: {
    BIMDataIcon,
    BIMDataInput,
    BIMDataButton,
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
      name: "",
      hasError: false,
      loading: false,
    };
  },
  mounted() {
    this.name = this.entity.name;
    setTimeout(() => this.$refs.nameInput.focus(), 200);
  },
  methods: {
    reset() {
      this.name = "";
      this.hasError = false;
    },
    close() {
      this.reset();
      this.$emit("close");
    },
    async submit() {
      if (this.name) {
        this.loading = true;
        try {
          await this.renameDocument();
          this.entity.name = this.name;
          this.$emit("success");
        } catch (error) {
          this.$emit("error", error);
        } finally {
          this.reset();
          this.loading = false;
        }
      } else {
        this.$refs.nameInput.focus();
        this.hasError = true;
      }
    },
    renameDocument() {
      const payload = {
        cloudPk: this.spaceId,
        projectPk: this.projectId,
        id: this.entity.id,
        data: {
          ...document,
          name: this.name,
        },
      };
      if (this.entity.type === "Folder") {
        return this.apiClient.collaborationApi.updateFolder(payload);
      } else {
        return this.apiClient.collaborationApi.updateDocument(payload);
      }
    },
  },
};
</script>

<style scoped lang="scss">
// import BIMDATA VARIABLES
@import "../../../assets/scss/_BIMDataVariables.scss";

.rename-modal {
  background-color: $color-white;

  display: flex;
  position: relative;

  width: 70%;

  &__close {
    position: absolute;
    right: $spacing-unit;
    top: $spacing-unit;
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
      font-weight: bold;
      font-size: 120%;
    }

    &__input {
      width: 100%;
    }
    &__btn {
      display: flex;
      width: 100%;
      justify-content: space-between;
      &-submit {
        margin-left: $spacing-unit;
      }
    }
  }
}
</style>
